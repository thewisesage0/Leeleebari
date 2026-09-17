import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { getCollectionStats } from "@/lib/books";
import { reviews } from "@/lib/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reader Reviews — Leeleebari" },
      {
        name: "description",
        content: "Read what readers are saying about Leeleebari’s romance and paranormal novels.",
      },
      { property: "og:title", content: "Reader Reviews — Leeleebari" },
      {
        property: "og:description",
        content: "Reader notes on Leeleebari’s unforgettable romantic worlds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const stats = getCollectionStats();
  return (
    <div className="page-shell">
      <section className="page-intro section-shell">
        <p className="eyebrow">Reader voices</p>
        <h1>What readers are saying</h1>
        <p>
          Notes from readers who stayed up late, turned one more page, and carried the story with
          them.
        </p>
      </section>
      <section className="section-shell review-summary">
        <div>
          <strong>{stats.averageRating.toFixed(1)}</strong>
          <span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={21} fill="currentColor" />
            ))}
          </span>
          <p>Across {stats.totalReviews}+ reader ratings</p>
        </div>
        <blockquote>
          “Romance built with tenderness, tension, and the confidence to let every feeling land.”
        </blockquote>
      </section>
      <section className="section-shell review-masonry">
        {reviews.map((review) => (
          <figure key={review.quote} className={review.size}>
            <div className="stars">★★★★★</div>
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>
              <strong>{review.name}</strong>
              <span>{review.bookTitle}</span>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="section-shell review-cta">
        <p className="eyebrow">Choose your next story</p>
        <h2>Find the book readers cannot stop talking about.</h2>
        <Button asChild>
          <Link to="/books">
            Explore My Books <ArrowRight size={16} />
          </Link>
        </Button>
      </section>
    </div>
  );
}
