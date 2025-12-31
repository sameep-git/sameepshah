import { NextResponse } from "next/server";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

const NOW_PLAYING_TTL_MS = 2_000;

let accessTokenCache = {
  token: null,
  expiresAt: 0
};

let nowPlayingCache = {
  data: null,
  fetchedAt: 0
};

let lastKnownTrack = null;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

async function getAccessToken() {
  const clientId = requireEnv("SPOTIFY_CLIENT_ID");
  const clientSecret = requireEnv("SPOTIFY_CLIENT_SECRET");
  const refreshToken = requireEnv("SPOTIFY_REFRESH_TOKEN");

  if (accessTokenCache.token && Date.now() < accessTokenCache.expiresAt - 30_000) {
    return accessTokenCache.token;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Spotify token request failed: ${response.status} ${details}`);
  }

  const json = await response.json();
  accessTokenCache = {
    token: json.access_token,
    // expires_in is seconds; subtract a small buffer
    expiresAt: Date.now() + (json.expires_in ? json.expires_in * 1000 : 3_500_000)
  };

  return json.access_token;
}

export async function GET() {
  try {
    const now = Date.now();
    const cacheAge = now - nowPlayingCache.fetchedAt;

    if (nowPlayingCache.data && cacheAge < NOW_PLAYING_TTL_MS) {
      return NextResponse.json(nowPlayingCache.data, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    const accessToken = await getAccessToken();

    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      cache: "no-store"
    });

    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status === 202) {
      const body = lastKnownTrack
        ? {
            isPlaying: false,
            progressMs: 0,
            durationMs: lastKnownTrack.durationMs ?? 0,
            albumImage: lastKnownTrack.albumImage ?? null,
            albumName: lastKnownTrack.albumName ?? null,
            track: lastKnownTrack.track ?? null
          }
        : { isPlaying: false };

      nowPlayingCache = { data: body, fetchedAt: Date.now() };
      return NextResponse.json(body, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    if (!nowPlayingResponse.ok) {
      const details = await nowPlayingResponse.text();
      const body = lastKnownTrack
        ? {
            isPlaying: false,
            progressMs: 0,
            durationMs: lastKnownTrack.durationMs ?? 0,
            albumImage: lastKnownTrack.albumImage ?? null,
            albumName: lastKnownTrack.albumName ?? null,
            track: lastKnownTrack.track ?? null,
            error: "Unable to fetch currently playing track",
            details
          }
        : { error: "Unable to fetch currently playing track", details };

      nowPlayingCache = { data: body, fetchedAt: Date.now() };

      return NextResponse.json(body, {
        status: nowPlayingResponse.status,
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    const payload = await nowPlayingResponse.json();
    const item = payload?.item;
    const albumImages = item?.album?.images ?? [];
    const albumImage = albumImages[1]?.url ?? albumImages[0]?.url ?? null;

    const body = {
      isPlaying: payload?.is_playing ?? false,
      progressMs: payload?.progress_ms ?? 0,
      durationMs: item?.duration_ms ?? 0,
      albumImage,
      albumName: item?.album?.name ?? null,
      track: item
        ? {
            name: item.name,
            artists: (item.artists || []).map((artist) => artist.name).join(", "),
            url: item.external_urls?.spotify ?? null
          }
        : null
    };

    if (body.track) {
      lastKnownTrack = {
        track: body.track,
        albumImage: body.albumImage,
        albumName: body.albumName,
        durationMs: body.durationMs
      };
    }

    nowPlayingCache = { data: body, fetchedAt: Date.now() };

    return NextResponse.json(body, {
      headers: {
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    console.error("Spotify API route error", error);
    return NextResponse.json(
      { error: "Spotify request failed" },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  }
}
