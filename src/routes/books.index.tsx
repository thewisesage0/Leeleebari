import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookCard } from "@/components/BookCard";
import { books, getGenres, parsePublicationDate } from "@/lib/books";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { title: "Explore the Library — Leeleebari" },
      { name: "description", content: "Browse every romance and paranormal novel by Leeleebari." },
      { property: "og:title", content: "Explore the Library — Leeleebari" },
      {
        property: "og:description",
        content: "Discover every story, world, and unforgettable character.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BooksPage,
});

function BooksPage() {
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("Featured");
  const genres = useMemo(() => getGenres(), []);
  const shown = useMemo(() => {
    const list = genre === "All" ? [...books] : books.filter((book) => book.genre === genre);
    if (sort === "Newest")
      return list.sort(
        (a, b) => parsePublicationDate(b.publicationDate) - parsePublicationDate(a.publicationDate),
      );
    if (sort === "Highest Rated") return list.sort((a, b) => b.rating - a.rating);
    if (sort === "A–Z") return list.sort((a, b) => a.title.localeCompare(b.title));
    return list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [genre, sort]);
  return (
    <div className="page-shell">
      <section className="page-intro section-shell">
        <p className="eyebrow">The complete collection</p>
        <h1>Explore the Library</h1>
        <p>Discover every story, world, and unforgettable character.</p>
      </section>
      <section className="section-shell library-section">
        <div className="library-tools">
          <div className="filters" aria-label="Filter by genre">
            {genres.map((item) => (
              <button
                key={item}
                className={genre === item ? "active" : ""}
                onClick={() => setGenre(item)}
              >
                {item.replace("Billionaire ", "")}
              </button>
            ))}
          </div>
          <label>
            Sort{" "}
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Featured</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>A–Z</option>
            </select>
          </label>
        </div>
        <div className="library-grid">
          {shown.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
