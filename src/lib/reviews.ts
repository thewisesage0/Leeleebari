export type Review = {
  quote: string;
  name: string;
  bookTitle: string;
  // Controls the card's size in the masonry layout on /reviews.
  // Use "tall" or "short" sparingly for visual rhythm — most reviews should
  // leave this blank ("").
  size: "tall" | "short" | "";
};

// Add a new review by adding a new object to this array — no other file
// needs to change.
export const reviews: Review[] = [
  {
    quote:
      "I finished it in one sitting and immediately wanted the next chapter. Leah feels fearless and completely real.",
    name: "Amara",
    bookTitle: "Knocked Up By The Billionaire Boss",
    size: "tall",
  },
  {
    quote:
      "The tension on and off the ice is perfect. I came for the alpha triplets and stayed for Isla’s strength.",
    name: "Nia",
    bookTitle: "Mated To The Hockey Alpha Triplets",
    size: "",
  },
  {
    quote: "A slow, aching, beautiful story about choosing yourself before choosing love.",
    name: "Priya",
    bookTitle: "A Love Forged In Ruins",
    size: "short",
  },
  {
    quote: "Lena’s second chance felt earned. Tender without ever becoming easy.",
    name: "Mae",
    bookTitle: "The Billionaire's Ex-Mistress And His Hidden Baby",
    size: "",
  },
  {
    quote: "Darkly romantic and impossible to put down. The atmosphere stayed with me for days.",
    name: "Sophie",
    bookTitle: "Rose And Thorns",
    size: "tall",
  },
  {
    quote:
      "Leeleebari understands exactly how to make a secret feel dangerous and a reunion feel inevitable.",
    name: "Dara",
    bookTitle: "The Billionaire's Ex-Mistress And His Hidden Baby",
    size: "short",
  },
];
