"use client";

import { useEffect, useState } from "react";

function BookRow({ book }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-black/5 bg-white shadow-sm shadow-black/5">
      <div className="h-14 w-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-[10px] text-text/60 font-mono">
            No cover
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-text font-semibold truncate">
          {book.link ? (
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {book.title}
            </a>
          ) : (
            book.title
          )}
        </p>
        {book.author ? <p className="text-text/70 text-sm truncate">{book.author}</p> : null}
      </div>
    </div>
  );
}

export default function CurrentlyReading() {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/api/goodreads", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load");
        const json = await res.json();
        if (!cancelled) {
          setBooks(Array.isArray(json?.books) ? json.books : []);
          setLoaded(true);
        }
      } catch (err) {
        if (!cancelled) {
          setBooks([]);
          setLoaded(true);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!loaded || books.length === 0) return null;

  return (
    <div className="w-full max-w-xl">
      <p className="text-text/70 text-xs font-mono uppercase tracking-[0.16em] mb-2">
        Currently reading
      </p>
      <div className="flex flex-col gap-3">
        {books.map((book, idx) => (
          <BookRow key={`${book.title}-${idx}`} book={book} />
        ))}
      </div>
    </div>
  );
}
