import { NextResponse } from "next/server";

const GOODREADS_URL = "https://www.goodreads.com/review/list/196465196-sameep-shah?shelf=currently-reading";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1h

let cache = {
  data: null,
  fetchedAt: 0
};

function decodeHtml(str = "") {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function stripTags(str = "") {
  return decodeHtml(str.replace(/<[^>]*>/g, " ").replace(/\s+/g, " "));
}

function stripLabelPrefix(str = "", { stripStars = false } = {}) {
  let result = str.replace(/^(title|author)\s*/i, "");
  if (stripStars) {
    result = result.replace(/\*/g, "");
  }
  return result;
}

function extractField(rowHtml, cls, regex) {
  const match = rowHtml.match(regex);
  if (!match) return null;
  const value = match[1] ?? match[2] ?? "";
  return cls === "cover" ? value : stripTags(value);
}

function extractLink(rowHtml, cls) {
  const linkMatch = rowHtml.match(
    new RegExp(`<td[^>]*class=["'][^"']*${cls}[^"']*["'][^>]*>[\\s\\S]*?<a[^>]*href=["']([^"']+)["']`, "i")
  );
  if (!linkMatch) return null;
  const href = linkMatch[1];
  if (href.startsWith("http")) return href;
  return `https://www.goodreads.com${href.startsWith("/") ? href : `/${href}`}`;
}

function parseBooks(html) {
  const tableMatch = html.match(/<table[^>]*id=["']books["'][^>]*>([\s\S]*?)<\/table>/i);
  if (!tableMatch) return [];
  const tableContent = tableMatch[1];
  const rows = [...tableContent.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

  return rows
    .map((row) => row[1])
    .map((rowHtml) => {
      const cover = extractField(
        rowHtml,
        "cover",
        /<td[^>]*class=["'][^"']*cover[^"']*["'][^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["']/i
      );
      const rawTitle = extractField(
        rowHtml,
        "title",
        /<td[^>]*class=["'][^"']*title[^"']*["'][^>]*>([\s\S]*?)<\/td>/i
      );
      const rawAuthor = extractField(
        rowHtml,
        "author",
        /<td[^>]*class=["'][^"']*author[^"']*["'][^>]*>([\s\S]*?)<\/td>/i
      );

      const link = extractLink(rowHtml, "title");

      const title = rawTitle ? stripLabelPrefix(rawTitle) : null;
      const author = rawAuthor ? stripLabelPrefix(rawAuthor, { stripStars: true }) : null;

      if (!title) return null;
      return { cover, title, author, link };
    })
    .filter(Boolean);
}

export async function GET() {
  try {
    const now = Date.now();
    if (cache.data && now - cache.fetchedAt < CACHE_TTL_MS) {
      return NextResponse.json(cache.data, { headers: { "Cache-Control": "public, max-age=3600" } });
    }

    const response = await fetch(GOODREADS_URL, { cache: "no-store" });
    if (!response.ok) {
      return NextResponse.json({ books: [] }, { status: 200, headers: { "Cache-Control": "no-store" } });
    }

    const html = await response.text();
    const books = parseBooks(html);
    const body = { books };

    cache = { data: body, fetchedAt: Date.now() };

    return NextResponse.json(body, { headers: { "Cache-Control": "public, max-age=3600" } });
  } catch (error) {
    console.error("Goodreads API route error", error);
    return NextResponse.json({ books: [] }, { status: 200, headers: { "Cache-Control": "no-store" } });
  }
}
