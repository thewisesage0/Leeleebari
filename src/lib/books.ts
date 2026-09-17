import billionaireBoss from "@/assets/billionaire-boss.jpg";
import hiddenBaby from "@/assets/hidden-baby.jpg";
import hockeyAlpha from "@/assets/hockey-alpha.jpg";
import loveRuins from "@/assets/love-ruins.jpg";
import roseThorns from "@/assets/rose-thorns.jpg";

export type Book = {
  slug: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number;
  reviewCount: number;
  blurb: string;
  description: string;
  platform: string;
  platformUrl: string;
  publicationDate: string;
  status: "Ongoing" | "Completed";
  featured: boolean;
  tags: string[];
};

export const books: Book[] = [
  {
    slug: "knocked-up-by-the-billionaire-boss",
    title: "Knocked Up By The Billionaire Boss",
    author: "Leeleebari",
    cover: billionaireBoss,
    genre: "Billionaire Romance",
    rating: 4.9,
    reviewCount: 184,
    blurb: "One reckless dare. One unforgettable night. One secret that changes everything.",
    description:
      "Leah Cruz is smart, ambitious, and desperate to build a life beyond survival. A drunken dare introduces her to a stranger who is anything but ordinary. Three weeks later, two pink lines appear—and months after that, she discovers the mysterious man is Adrian Voss, billionaire CEO, her company’s newest partner, and very publicly engaged. When their secret reaches the world stage, Leah must protect her baby and her dignity while Adrian decides what he is willing to lose to claim the family he never knew he had.",
    platform: "Novel Lairs",
    platformUrl:
      "https://fqnewapi.novellairs.com/share?share_token=UknU/urhjMriF5volxGrE46kLfBV4rhHUF/kSnA5gWQ=",
    publicationDate: "March 2026",
    status: "Ongoing",
    featured: true,
    tags: ["Secret baby", "Office romance", "Billionaire"],
  },
  {
    slug: "the-billionaires-ex-mistress-and-his-hidden-baby",
    title: "The Billionaire's Ex-Mistress And His Hidden Baby",
    author: "Leeleebari",
    cover: hiddenBaby,
    genre: "Billionaire Romance",
    rating: 4.8,
    reviewCount: 143,
    blurb: "Five years, one hidden child, and a second chance that may have arrived too late.",
    description:
      "Lena Hart risked her reputation to save her mother’s business. Pretending to be Damien Vale’s mistress was meant to be temporary; falling for him was not. When Damien chooses another woman, Lena disappears carrying a secret. Five years later he discovers the truth, but Lena has built a career and a family with someone who stayed. Now the man who broke her heart wants another chance—and Lena must decide whether the past deserves a place in her future.",
    platform: "Novel Lairs",
    platformUrl:
      "https://fqnewapi.novellairs.com/share?share_token=4S9OwU5VYMuz9H4ZpRNxs9CX3Fl339VMR9kDaNMvYSw=",
    publicationDate: "January 2026",
    status: "Ongoing",
    featured: true,
    tags: ["Second chance", "Hidden baby", "Billionaire"],
  },
  {
    slug: "mated-to-the-hockey-alpha-triplets",
    title: "Mated To The Hockey Alpha Triplets",
    author: "Leeleebari",
    cover: hockeyAlpha,
    genre: "Werewolf Hockey",
    rating: 4.8,
    reviewCount: 217,
    blurb: "Three famous brothers. One missing Luna. A past powerful enough to break their pack.",
    description:
      "Isla Cole never believed in werewolves or fated mates, so she refuses to accept that three celebrated hockey players are claiming her as their missing Luna. Forced to live beside Killian, Asher, and Zane while investigating their team, Isla’s lost memories begin to return. She was not abandoned as a child—she was deliberately erased from the supernatural world, and the truth could tear the Northern Wolves apart.",
    platform: "Novel Lairs",
    platformUrl:
      "https://fqnewapi.novellairs.com/share?share_token=lw045PZUBS9HrVpl6XVbR54v5jXlwscpUvXkV8Q7PYU=",
    publicationDate: "February 2026",
    status: "Ongoing",
    featured: true,
    tags: ["Werewolves", "Fated mates", "Hockey"],
  },
  {
    slug: "seducing-the-nerdy-billionaire",
    title: "Seducing The Nerdy Billionaire",
    author: "Leeleebari",
    cover: hockeyAlpha,
    genre: "Billionaire Romance",
    rating: 4.8,
    reviewCount: 217,
    blurb: "She was hired to seduce a billionaire, but falling for him was never part of the plan.",
    description:
      "I never imagined the man I was hired to seduce would be a billionaire. Elliot Sterling is everything I never expected: brilliant, reserved, painfully private, and far more attractive than the quiet man behind the glasses lets anyone see. I only needed his money to save my sister. I never expected to see him again, let alone become part of his world.Now Elliot wants answers, I have secrets I'm desperate to hide, and the attraction between us is becoming impossible to ignore.",
    platform: "Novel Lairs",
    platformUrl:
      "https://www.novelol.com/goodnovel/share?bid=31001774740&uid=234895969&l=bookDetail&sc=fxrw_0_bookDetail&rd=0&type=3",
    publicationDate: "February 2026",
    status: "Ongoing",
    featured: true,
    tags: ["Billionaire", "Forbidden Love", "Office romance"],
  },
  {
    slug: "a-love-forged-in-ruins",
    title: "A Love Forged In Ruins",
    author: "Leeleebari",
    cover: loveRuins,
    genre: "Billionaire Romance",
    rating: 4.7,
    reviewCount: 126,
    blurb: "A loveless marriage. A hidden empire. A woman ready to choose herself.",
    description:
      "Overlooked and betrayed, Layla Monroe has learned to survive without the family who should love her most. When their business faces ruin, they demand she marry Damian Blackwood—a man with secrets as deep as his grudges. Layla believes him penniless, but her husband is hiding an empire and a vendetta. As old enemies return, she must choose between the family that betrayed her and the man who could become either her undoing or her redemption.",
    platform: "Novel Lairs",
    platformUrl:
      "https://fqnewapi.novellairs.com/share?share_token=FrEkMdNm+JrY8WW/A9KUZV40G+cjunMYpZAZUnarUyU=",
    publicationDate: "November 2025",
    status: "Completed",
    featured: true,
    tags: ["Marriage of convenience", "Revenge", "Billionaire"],
  },
  {
    slug: "rose-and-thorns",
    title: "Rose And Thorns",
    author: "Leeleebari",
    cover: roseThorns,
    genre: "Billionaire & Mafia",
    rating: 4.6,
    reviewCount: 98,
    blurb: "A gilded cage, a forbidden love, and a debt that was never hers to pay.",
    description:
      "Luna Benson has her future planned until she learns her parents promised her to Kenzo Wade, a powerful billionaire twice her age and her father’s closest friend. Their marriage is payment for a debt she never knew existed. Torn between a luxurious prison and the college sweetheart she loves, Luna must navigate deceit, forbidden desire, and the dark truth behind the bargain made in her name.",
    platform: "Novel Lairs",
    platformUrl:
      "https://fqnewapi.novellairs.com/share?share_token=nh6V0SkE7eTDFg+Q6QTasH58/11eI+VZE8y/hwIrL28=",
    publicationDate: "September 2025",
    status: "Completed",
    featured: true,
    tags: ["Mafia", "Forbidden love", "Arranged marriage"],
  },
];

export const getBook = (slug: string) => books.find((book) => book.slug === slug);

// Genre filter options on /books — derived from the books above instead of a
// separate hardcoded list, so a new genre on a new book shows up in the
// filters automatically instead of silently being unfilterable.
export const getGenres = (): string[] => [
  "All",
  ...Array.from(new Set(books.map((book) => book.genre))),
];

const MONTH_NAMES = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

// publicationDate is stored as a human-friendly "Month YYYY" string (e.g.
// "March 2026"). Date.parse() handles that inconsistently across engines, so
// sorting by "Newest" needs its own reliable parser instead.
export const parsePublicationDate = (value: string): number => {
  const [monthRaw, yearRaw] = value.trim().toLowerCase().split(/\s+/);
  const monthIndex = monthRaw ? MONTH_NAMES.indexOf(monthRaw) : -1;
  const year = Number(yearRaw);
  if (monthIndex === -1 || Number.isNaN(year)) return 0;
  return new Date(year, monthIndex, 1).getTime();
};

// Site-wide rating and review-count numbers (shown on the homepage and the
// reviews page) computed from the book list itself, so they stay accurate
// automatically when a book is added, removed, or re-rated instead of
// needing to be updated by hand in multiple places.
export const getCollectionStats = () => {
  const totalReviews = books.reduce((sum, book) => sum + book.reviewCount, 0);
  const weightedRating = books.reduce((sum, book) => sum + book.rating * book.reviewCount, 0);
  const averageRating = totalReviews > 0 ? weightedRating / totalReviews : 0;
  return {
    averageRating: Math.round(averageRating * 10) / 10,
    totalReviews,
  };
};
