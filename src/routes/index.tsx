import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/Button";
import { books, getCollectionStats, type Book } from "@/lib/books";
import authorPortrait from "@/assets/author-leeleebari.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leeleebari — Stories That Stay With You" },
      {
        name: "description",
        content:
          "Discover romance and paranormal novels by Leeleebari—stories of ambition, fate, and unforgettable love.",
      },
      { property: "og:title", content: "Leeleebari — Stories That Stay With You" },
      {
        property: "og:description",
        content: "Explore the complete novel collection by romance author Leeleebari.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// Picks the covers shown in the hero composition, in the layout's intended
// order — falling back gracefully if the collection ever has fewer books
// than the layout expects, instead of rendering a broken/undefined card.
function getHeroBooks(): Book[] {
  const preferredOrder = [2, 0, 3];
  const picked = preferredOrder
    .map((index) => books[index])
    .filter((book): book is Book => Boolean(book));
  return picked.length === preferredOrder.length ? picked : books.slice(0, 3);
}

function HomePage() {
  const heroBooks = getHeroBooks();
  const stats = getCollectionStats();

  return (
    <>
      <section className="home-hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Romance · Paranormal · Drama</p>
          <h1>Stories that stay with you.</h1>
          <p className="lead">
            Explore the fierce hearts, impossible choices, and unforgettable worlds created by
            Leeleebari.
          </p>
          <div className="cta-row">
            <Button asChild>
              <Link to="/books">
                Explore Books <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">Meet the Author</Link>
            </Button>
          </div>
          <div className="hero-note">
            <span>{String(books.length).padStart(2, "0")}</span>
            <p>
              Original novels
              <br />
              One growing library
            </p>
          </div>
        </div>
        <div className="cover-composition" aria-label="A curated collection of Leeleebari novels">
          {heroBooks.map((book, index) => (
            <Link
              key={book.slug}
              to="/books/$slug"
              params={{ slug: book.slug }}
              className={`hero-book hero-book-${index + 1}`}
            >
              <img src={book.cover} alt={`${book.title} cover`} width={768} height={1152} />
              <span>{book.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="chapter section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>Stories worth getting lost in.</h2>
          </div>
          <Link to="/books">
            View the full library <ArrowRight size={15} />
          </Link>
        </div>
        <div className="featured-grid">
          {books.slice(0, 5).map((book, index) => (
            <BookCard key={book.slug} book={book} priority={index < 2} />
          ))}
        </div>
      </section>

      <section className="author-band">
        <div className="section-shell author-feature">
          <img
            src={authorPortrait}
            alt="Author Leeleebari seated in a private library"
            width={960}
            height={1200}
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Behind the pages</p>
            <h2>Love stories with something at stake.</h2>
            <p>
              Leeleebari writes emotionally charged romance where ambition collides with desire,
              secrets reshape families, and even the impossible can feel intimate.
            </p>
            <blockquote>
              “I write for the moment a character finally chooses the life—and love—they deserve.”
            </blockquote>
            <Button asChild variant="outline">
              <Link to="/about">
                About the Author <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="chapter section-shell reader-section">
        <div className="rating-mark">
          <strong>{stats.averageRating.toFixed(1)}</strong>
          <span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={17} fill="currentColor" />
            ))}
          </span>
          <p>Across the collection</p>
        </div>
        <blockquote>
          “Every chapter feels cinematic—tender, tense, and impossible to leave unfinished.”
          <cite>— Amara, early reader</cite>
        </blockquote>
        <Button asChild variant="quiet">
          <Link to="/reviews">
            Read reader notes <ArrowRight size={15} />
          </Link>
        </Button>
      </section>
    </>
  );
}
