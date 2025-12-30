"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const formatMs = (ms) => {
  if (!ms && ms !== 0) return "--:--";
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function PlaybackBars({ isPlaying }) {
  const bars = [0.4, 0.8, 0.6];

  return (
    <div className="flex items-end gap-[3px] h-4 w-5" aria-hidden>
      {bars.map((base, index) => (
        <motion.span
          key={index}
          className="w-[3px] rounded-full bg-accent"
          style={{ height: "100%", originY: 1 }}
          animate={
            isPlaying
              ? {
                  scaleY: [base, 1, 0.35, base],
                  transition: {
                    duration: 1.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.12
                  }
                }
              : { scaleY: base }
          }
        />
      ))}
    </div>
  );
}

export default function NowPlaying() {
  const [data, setData] = useState(null);
  const [fetchTimestamp, setFetchTimestamp] = useState(Date.now());
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [nowTs, setNowTs] = useState(Date.now());

  const fetchNowPlaying = async () => {
    try {
      if (!data) {
        setStatus("loading");
      }
      setError(null);
      const response = await fetch("/api/spotify", { cache: "no-store" });

      if (!response.ok) {
        const details = await response.json().catch(() => ({}));
        throw new Error(details?.error || "Request failed");
      }

      const json = await response.json();
      const hasChanged =
        !data ||
        json?.track?.name !== data?.track?.name ||
        json?.track?.artists !== data?.track?.artists ||
        json?.isPlaying !== data?.isPlaying ||
        json?.durationMs !== data?.durationMs ||
        json?.progressMs !== data?.progressMs ||
        json?.albumImage !== data?.albumImage;

      if (hasChanged) {
        setData(json);
      }

      setFetchTimestamp(Date.now());
      setStatus("ready");
    } catch (err) {
      setError(err.message);
      if (!data) {
        setStatus("error");
      } else {
        setStatus("ready");
      }
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 1_000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tick = setInterval(() => setNowTs(Date.now()), 250);
    return () => clearInterval(tick);
  }, []);

  const progressMs = useMemo(() => {
    if (!data?.durationMs) return 0;
    const base = data?.progressMs ?? 0;
    if (data?.isPlaying) {
      const delta = nowTs - fetchTimestamp;
      return Math.min(base + Math.max(0, delta), data.durationMs);
    }
    return base;
  }, [data?.durationMs, data?.isPlaying, data?.progressMs, fetchTimestamp, nowTs]);

  const progressPercent = useMemo(() => {
    if (!data?.durationMs) return 0;
    return Math.min(100, (progressMs / data.durationMs) * 100);
  }, [data?.durationMs, progressMs]);

  const isPlaying = data?.isPlaying;
  const track = data?.track;
  const heading = isPlaying === false ? "Last listened to..." : "Listening to...";

  return (
    <div className="w-full max-w-xl">
      <p className="text-text/70 text-xs font-mono uppercase tracking-[0.16em] mb-2">
        {heading}
      </p>

      <div className="bg-white border border-black/5 shadow-lg shadow-black/5 rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-xl overflow-hidden bg-[#f3f3f3] shrink-0">
            {track?.name && data?.albumImage ? (
              <img
                src={data.albumImage}
                alt={`${track.name} album art`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-[11px] text-text/60 font-mono">
                No cover
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            {status === "loading" && !track?.name && (
              <div className="space-y-2 animate-pulse">
                <div className="h-3 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
            )}

            {(status === "ready" || track?.name) && track?.name && (
              <>
                <p className="text-text font-semibold truncate">
                  {track.url ? (
                    <a
                      href={track.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {track.name}
                    </a>
                  ) : (
                    track.name
                  )}
                </p>
                <p className="text-text/70 text-sm truncate">{track.artists}</p>
                <p className="text-text/60 text-xs truncate">{data?.albumName}</p>
              </>
            )}

            {status === "ready" && !track?.name && (
              <p className="text-text/70 text-sm">Not playing anything right now.</p>
            )}

            {status === "error" && (
              <p className="text-accent text-sm">Could not reach Spotify: {error}</p>
            )}
          </div>

          <div className="flex items-center justify-center h-full px-1">
            <PlaybackBars isPlaying={Boolean(isPlaying)} />
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
