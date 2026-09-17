import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { BookCard } from "@/components/BookCard";
import { books, getBook } from "@/lib/books";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return book;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Leeleebari` : "Book not found — Leeleebari" },
      { name: "description", content: loaderData?.blurb ?? "Explore novels by Leeleebari." },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.title} — Leeleebari` : "Book unavailable",
      },
      { property: "og:description", content: loaderData?.blurb ?? "Explore novels by Leeleebari." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookDetail,
});

function BookDetail() {
  const book = Route.useLoaderData();
  const related = books.filter((item) => item.slug !== book.slug).slice(0, 3);
  return (
    <div className="page-shell">
      <section className="section-shell book-detail">
        <div className="detail-cover">
          <img src={book.cover} alt={`${book.title} cover`} width={768} height={1152} />
        </div>
        <div className="detail-copy">
          <Link to="/books" className="back-link">
            <ArrowLeft size={15} /> Back to Books
          </Link>
          <p className="eyebrow">{book.genre}</p>
          <h1>{book.title}</h1>
          <p className="byline">A novel by {book.author}</p>
          <div className="detail-rating">
            <span>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </span>
            <strong>{book.rating}/5</strong>
            <em>{book.reviewCount} reader reviews</em>
          </div>
          <p className="detail-blurb">{book.blurb}</p>
          <p className="detail-description">{book.description}</p>
          <dl>
            <div>
              <dt>Published on</dt>
              <dd>{book.platform}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{book.status}</dd>
            </div>
            <div>
              <dt>Publication</dt>
              <dd>{book.publicationDate}</dd>
            </div>
          </dl>
          <div className="tag-row">
            {book.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Button asChild>
            <a href={book.platformUrl} target="_blank" rel="noreferrer">
              Read Now on {book.platform} <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </section>
      <section className="chapter section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Continue reading</p>
            <h2>You may also like</h2>
          </div>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <BookCard key={item.slug} book={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
