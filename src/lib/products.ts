export type Theme = "blush" | "sage" | "sand" | "sky";
export type Topper = "bow" | "goggles" | "paw";
export type CategorySlug = "baby-shower" | "swim" | "pet";

export type Category = {
  slug: CategorySlug;
  name: string;
  emoji: string;
  shortName: string;
  tagline: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  tiers: number;
  theme: Theme;
  topper: Topper;
  occasion: string;
  size: string;
  priceRange: string;
  description: string;
  bestSeller?: boolean;
};

export const CATEGORIES: Category[] = [
  {
    slug: "baby-shower",
    name: "Baby Shower Diaper Cakes",
    shortName: "Baby Shower",
    emoji: "🎀",
    tagline: "The centerpiece every baby shower needs.",
    description:
      "Classic tiered diaper cakes dressed up with booties, rattles, teethers, and sweet little decor touches.",
  },
  {
    slug: "swim",
    name: "Swim Diaper Cakes",
    shortName: "Swim",
    emoji: "🏖️",
    tagline: "A fun twist for spring and summer showers.",
    description:
      "Built with swim diapers, goggles, and baby-safe sunscreen — perfect for a pool-themed shower or a beach baby.",
  },
  {
    slug: "pet",
    name: "Pet WeeWee Pad Cakes",
    shortName: "Pet",
    emoji: "🐾",
    tagline: 'Because new puppies deserve a "shower" too.',
    description:
      "Built with wee-wee pads and topped with chew toys — a genuinely unique gift for new pet parents.",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "blush-blossom",
    name: "Blush Blossom",
    category: "baby-shower",
    tiers: 3,
    theme: "blush",
    topper: "bow",
    occasion: "Baby Shower",
    size: "3-tier · approx. 30 diapers",
    priceRange: "$75–$95",
    description:
      "Soft blush and cream layers finished with a hand-tied satin bow and silk florals.",
    bestSeller: true,
  },
  {
    slug: "safari-sprout",
    name: "Safari Sprout",
    category: "baby-shower",
    tiers: 3,
    theme: "sand",
    topper: "bow",
    occasion: "Gender-Neutral",
    size: "3-tier · approx. 32 diapers",
    priceRange: "$85–$105",
    description:
      "Warm neutrals with a mini safari topper — perfect for jungle or wild-one themes.",
    bestSeller: true,
  },
  {
    slug: "little-sailor",
    name: "Little Sailor",
    category: "baby-shower",
    tiers: 2,
    theme: "sky",
    topper: "bow",
    occasion: "Nautical / Boy",
    size: "2-tier · approx. 20 diapers",
    priceRange: "$60–$75",
    description:
      "Crisp sky-blue tiers with anchor ribbon trim for a nautical-themed shower.",
  },
  {
    slug: "sweet-pea",
    name: "Sweet Pea",
    category: "baby-shower",
    tiers: 2,
    theme: "blush",
    topper: "bow",
    occasion: "Girl",
    size: "2-tier · approx. 20 diapers",
    priceRange: "$60–$75",
    description:
      "Delicate pink tiers wrapped in pea-pod green trim, topped with a tiny bow.",
  },
  {
    slug: "sage-and-cream-classic",
    name: "Sage & Cream Classic",
    category: "baby-shower",
    tiers: 4,
    theme: "sage",
    topper: "bow",
    occasion: "Baby Shower",
    size: "4-tier · approx. 45 diapers",
    priceRange: "$110–$135",
    description:
      "Our signature tall centerpiece — four generous tiers in sage and cream.",
    bestSeller: true,
  },
  {
    slug: "twin-joy",
    name: "Twin Joy",
    category: "baby-shower",
    tiers: 2,
    theme: "sky",
    topper: "bow",
    occasion: "Twins",
    size: "Two 2-tier cakes · approx. 40 diapers total",
    priceRange: "$130–$160",
    description:
      "A matching pair, one for each little one — customizable in any two colors.",
  },
  {
    slug: "sunny-swim-splash",
    name: "Sunny Swim Splash",
    category: "swim",
    tiers: 3,
    theme: "sky",
    topper: "goggles",
    occasion: "Pool / Beach Shower",
    size: "3-tier · swim diapers, goggles, mini sunscreen",
    priceRange: "$80–$100",
    description:
      "Built with swim diapers and topped with a pair of tiny goggles — ready for a poolside shower.",
    bestSeller: true,
  },
  {
    slug: "poolside-pastel",
    name: "Poolside Pastel",
    category: "swim",
    tiers: 2,
    theme: "sand",
    topper: "goggles",
    occasion: "Summer Shower",
    size: "2-tier · swim diapers, goggles, baby-safe sunscreen",
    priceRange: "$65–$80",
    description:
      "Soft sandy tones with a sunscreen stick tucked in every tier — a sweet beach-baby gift.",
  },
  {
    slug: "little-mermaid-splash",
    name: "Little Mermaid Splash",
    category: "swim",
    tiers: 3,
    theme: "sky",
    topper: "goggles",
    occasion: "Girl / Beach Shower",
    size: "3-tier · swim diapers, goggles, mini sunscreen",
    priceRange: "$80–$100",
    description:
      "Aqua and cream tiers with shimmer ribbon trim, styled for a mermaid or under-the-sea shower.",
  },
  {
    slug: "puppy-welcome-wag",
    name: "Puppy Welcome Wag",
    category: "pet",
    tiers: 2,
    theme: "sand",
    topper: "paw",
    occasion: "New Puppy",
    size: "2-tier · wee-wee pads, chew toy topper",
    priceRange: "$45–$60",
    description:
      "Built with wee-wee pads and topped with a squeaky chew toy — a genuinely unique gift for new pet parents.",
    bestSeller: true,
  },
  {
    slug: "new-pup-celebration",
    name: "New Pup Celebration",
    category: "pet",
    tiers: 3,
    theme: "sage",
    topper: "paw",
    occasion: "New Puppy",
    size: "3-tier · wee-wee pads, treats, chew toys",
    priceRange: "$65–$85",
    description:
      "A taller pup-warming centerpiece with treats and toys tucked between every layer.",
  },
  {
    slug: "gotcha-day-gift",
    name: "Gotcha Day Gift",
    category: "pet",
    tiers: 2,
    theme: "blush",
    topper: "paw",
    occasion: "Rescue / Gotcha Day",
    size: "2-tier · wee-wee pads, chew toy topper",
    priceRange: "$45–$60",
    description:
      "A sweet way to celebrate a rescue pup's first days home, however they arrived.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getBestSellers(limit = 6): Product[] {
  return PRODUCTS.filter((p) => p.bestSeller).slice(0, limit);
}
