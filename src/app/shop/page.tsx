import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | Tiers of Joy",
  description:
    "Browse handmade diaper cakes for baby showers, swim showers, and new puppies.",
};

function isCategorySlug(value: string): value is CategorySlug {
  return CATEGORIES.some((c) => c.slug === value);
}

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category && isCategorySlug(category) ? category : undefined;
  const products = activeCategory
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Shop
        </h1>
        <p className="mt-3 text-lg text-ink/70">
          Handmade to order. Every cake ships with a free personalized
          message card.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/shop"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
            !activeCategory
              ? "bg-olive-dark text-cream shadow-md"
              : "border-2 border-ink/15 hover:bg-ink/5"
          }`}
        >
          All Cakes
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              activeCategory === cat.slug
                ? "bg-olive-dark text-cream shadow-md"
                : "border-2 border-ink/15 hover:bg-ink/5"
            }`}
          >
            {cat.emoji} {cat.shortName}
          </Link>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
