# Leeleebari — Author Website

The official site for romance and paranormal author **Leeleebari**: a book
library, book detail pages, reviews, an about page, and a contact form.

Built with [TanStack Start](https://tanstack.com/start) (React 19 + Vite,
server-rendered), [Tailwind CSS](https://tailwindcss.com), and
[shadcn/ui](https://ui.shadcn.com) components. Deploys to
[Vercel](https://vercel.com) as a real SSR app — every route is rendered on
the server, not just exported as static HTML.

## Getting started

You need [Node.js](https://nodejs.org) 20 or later.

```sh
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

Other useful commands:

```sh
npm run build     # production build (writes to .output/)
npm run start     # run the production build locally (after npm run build)
npm run lint      # ESLint
npm run format    # Prettier, writes changes
```

## Deploying to Vercel

1. Push this repository to GitHub (see below if you haven't already).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel reads `vercel.json` in this repo and detects **TanStack Start**
   automatically — you don't need to set a build command or output
   directory.
4. If you want the contact form to actually deliver messages, add the
   `VITE_WEB3FORMS_ACCESS_KEY` environment variable under **Settings →
   Environment Variables** (see [Contact form](#contact-form) below), then
   redeploy.
5. Click **Deploy**.

Every push to your main branch redeploys automatically.

### Pushing this project to GitHub for the first time

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## Editing the content

Everything a non-developer would want to change lives in two small,
plain-TypeScript data files. You never need to touch a page's layout to
add or change a book, a review, or a stat.

### Add a new book

Open `src/lib/books.ts` and add a new object to the `books` array — copy an
existing entry as a starting point and change the values. Every field is
required:

```ts
{
  slug: "your-book-url-slug",           // used in the URL: /books/your-book-url-slug
  title: "Your Book Title",
  author: "Leeleebari",
  cover: yourCoverImport,               // see "Change a book cover" below
  genre: "Billionaire Romance",         // new genres show up in the /books filters automatically
  rating: 4.8,                          // out of 5
  reviewCount: 120,
  blurb: "One short, punchy sentence shown on book cards.",
  description: "The longer paragraph shown on the book's own page.",
  platform: "Novel Lairs",
  platformUrl: "https://...",           // where "Read Now" links to
  publicationDate: "March 2026",        // "Month YYYY" — used for the Newest sort
  status: "Ongoing",                    // "Ongoing" or "Completed"
  featured: true,
  tags: ["Secret baby", "Office romance"],
}
```

That's it — the new book automatically appears in the library, in genre
filters, in sort order, and its rating/review count automatically factor
into the site-wide stats described below.

### Edit an existing book

Find its entry in the `books` array in `src/lib/books.ts` and change any
field directly.

### Change a book cover

1. Drop the new image file into `src/assets/` (e.g. `src/assets/my-cover.jpg`).
2. Add an import for it at the top of `src/lib/books.ts`:
   ```ts
   import myCover from "@/assets/my-cover.jpg";
   ```
3. Set that book's `cover` field to `myCover`.

Images are automatically optimized and bundled by Vite — no size or format
requirements, but a portrait cover around 768×1152px matches the existing
covers best.

### Site-wide stats (the "4.8 rating" numbers, book counts, etc.)

These are **not** hardcoded — they're computed automatically from the
`books` array in `src/lib/books.ts`:

- The average rating shown on the homepage and reviews page is a
  review-count-weighted average of every book's `rating`.
- The "N+ reader ratings" figure is the sum of every book's `reviewCount`.
- The "novels" count in the hero and the "N published titles" line on the
  About page are just `books.length`.

Add, remove, or re-rate a book and these numbers update on their own —
there's nothing else to edit.

### Add or edit a reader review

Open `src/lib/reviews.ts` and add or edit an entry in the `reviews` array:

```ts
{
  quote: "What the reader said.",
  name: "Their first name",
  bookTitle: "Which book they're reviewing",
  size: "",   // "tall", "short", or "" — controls the card size in the masonry layout
}
```

### Contact form

The contact form on `/contact` sends messages through
[Web3Forms](https://web3forms.com), a free service that emails submissions
straight to an inbox — no backend to build or host.

To turn it on:

1. Go to [web3forms.com](https://web3forms.com) and enter the email address
   that should receive messages. It emails you a free access key — no
   account or credit card needed.
2. Add it as an environment variable named `VITE_WEB3FORMS_ACCESS_KEY`:
   - **Locally**: copy `.env.example` to `.env.local` and paste the key in.
   - **On Vercel**: add it under **Settings → Environment Variables**, then
     redeploy.

Until a key is configured, the form tells visitors plainly that it isn't
active yet rather than pretending to send a message nowhere.

## Project structure

```
src/
  routes/           File-based routes (TanStack Router) — one file per page
  components/       BookCard, Button, SiteShell (header/footer), plus components/ui (shadcn/ui)
  lib/
    books.ts         Book data + derived helpers (genres, stats, date parsing)
    reviews.ts        Reader review data
    error-*.ts         Friendly SSR error page + error capture for logging
  assets/            Book covers and author photo
  styles.css         Tailwind v4 theme and global styles
vite.config.ts       Vite + TanStack Start + Nitro + Tailwind config
vercel.json          Explicit framework hint for Vercel
```

Routes use TanStack Start's file-based routing — see
`src/routes/README.md` for the naming conventions. `src/routeTree.gen.ts`
is auto-generated on every dev/build run; don't edit it by hand.

## Tech stack

- [TanStack Start](https://tanstack.com/start) — React 19, SSR, file-based
  routing, built on [Nitro](https://nitro.build)
- [TanStack Router](https://tanstack.com/router) / [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) primitives
- [Lucide](https://lucide.dev) icons
- TypeScript throughout, strict mode
