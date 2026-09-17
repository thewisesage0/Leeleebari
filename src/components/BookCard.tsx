import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import type { Book } from "@/lib/books";
import { Button } from "./Button";

export function BookCard({ book, priority = false }: { book: Book; priority?: boolean }) {
  return (
    <article className="book-card group">
      <Link
        to="/books/$slug"
        params={{ slug: book.slug }}
        className="book-cover-wrap"
        aria-label={`View ${book.title}`}
      >
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          width={768}
          height={1152}
          loading={priority ? "eager" : "lazy"}
          className="book-cover"
        />
        <span className="book-status">{book.status}</span>
      </Link>
      <div className="book-copy">
        <div className="book-meta">
          <span>{book.genre}</span>
          <span>
            <Star size={12} fill="currentColor" /> {book.rating}
          </span>
        </div>
        <h3>
          <Link to="/books/$slug" params={{ slug: book.slug }}>
            {book.title}
          </Link>
        </h3>
        <p>{book.blurb}</p>
        <div className="book-actions">
          <Link to="/books/$slug" params={{ slug: book.slug }}>
            View more
          </Link>
          <a href={book.platformUrl} target="_blank" rel="noreferrer">
            Read now <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
