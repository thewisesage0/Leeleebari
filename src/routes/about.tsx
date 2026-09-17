import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Feather, Heart } from "lucide-react";
import { Button } from "@/components/Button";
import { books } from "@/lib/books";
import authorPortrait from "@/assets/author-leeleebari.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Leeleebari — Romance Author" },
      {
        name: "description",
        content: "Meet Leeleebari, author of emotionally charged romance and paranormal stories.",
      },
      { property: "og:title", content: "About Leeleebari" },
      {
        property: "og:description",
        content: "The writer behind stories of love, ambition, obsession, and the impossible.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const bookCount = books.length;
  return (
    <div className="page-shell">
      <section className="section-shell about-hero">
        <div>
          <p className="eyebrow">About the author</p>
          <h1>Writing love at its most impossible.</h1>
          <p className="lead">
            Leeleebari creates emotionally rich worlds where desire has consequences and every
            heroine discovers her own power.
          </p>
        </div>
        <img
          src={authorPortrait}
          alt="Portrait of author Leeleebari in a library"
          width={960}
          height={1200}
        />
      </section>
      <section className="section-shell biography">
        <p className="chapter-number">01</p>
        <div>
          <p className="eyebrow">The author</p>
          <h2>A storyteller drawn to the turning point.</h2>
        </div>
        <div className="prose">
          <p>
            Leeleebari writes romance and paranormal fiction about people standing at the edge of a
            life-changing choice. Her stories move from polished boardrooms to moonlit ice, but
            always return to the same question: what are we willing to risk for the life we truly
            want?
          </p>
          <p>
            Her heroines are ambitious, complicated, and unwilling to disappear inside somebody
            else’s story. Her heroes arrive with power, secrets, and a great deal to learn.
          </p>
        </div>
      </section>
      <section className="author-band">
        <div className="section-shell writing-grid">
          <article>
            <Heart />
            <p className="eyebrow">What I write</p>
            <h3>High-stakes romance</h3>
            <p>
              Billionaires, hidden histories, complicated families, and love that demands courage.
            </p>
          </article>
          <article>
            <Feather />
            <p className="eyebrow">Why I write</p>
            <h3>Emotional escape</h3>
            <p>
              Stories that let readers disappear for an evening and return feeling a little braver.
            </p>
          </article>
          <article>
            <BookOpen />
            <p className="eyebrow">For my readers</p>
            <h3>A world to keep</h3>
            <p>Characters worth rooting for and endings that continue long after the final page.</p>
          </article>
        </div>
      </section>
      <section className="section-shell journey">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The writing journey</p>
            <h2>From first spark to growing shelf.</h2>
          </div>
        </div>
        <ol>
          <li>
            <span>2024</span>
            <div>
              <h3>The first manuscript</h3>
              <p>A private idea becomes a complete romantic world.</p>
            </div>
          </li>
          <li>
            <span>2025</span>
            <div>
              <h3>Stories find their readers</h3>
              <p>Rose And Thorns and A Love Forged In Ruins join the collection.</p>
            </div>
          </li>
          <li>
            <span>2026</span>
            <div>
              <h3>A library in motion</h3>
              <p>{bookCount} published titles—and more worlds still being written.</p>
            </div>
          </li>
        </ol>
        <Button asChild>
          <Link to="/books">
            Explore the Collection <ArrowRight size={16} />
          </Link>
        </Button>
      </section>
    </div>
  );
}
