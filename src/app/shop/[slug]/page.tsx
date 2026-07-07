import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TieredCakeIcon from "@/components/TieredCakeIcon";
import ProductCard from "@/components/ProductCard";
import {
  PRODUCTS,
  getCategory,
  getProduct,
  getProductsByCategory,
  type Theme,
} from "@/lib/products";

const THEME_BG: Record<Theme, string> = {
  blush: "bg-blush/25",
  sage: "bg-sage/25",
  sand: "bg-sand/25",
  sky: "bg-sky/25",
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Tiers of Joy`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <nav className="text-sm text-ink/50">
        <Link href="/shop" className="hover:underline">
          Shop
        </Link>
        {category && (
          <>
            {" / "}
            <Link href={`/shop?category=${category.slug}`} className="hover:underline">
              {category.shortName}
            </Link>
          </>
        )}
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div
          className={`flex items-center justify-center rounded-3xl p-12 ${THEME_BG[product.theme]}`}
        >
          <TieredCakeIcon
            theme={product.theme}
            topper={product.topper}
            tiers={product.tiers}
            className="h-full w-full max-w-[220px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
            {product.occasion}
          </span>
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="text-lg text-ink/70">{product.description}</p>
          <dl className="grid grid-cols-1 gap-2 text-sm text-ink/70">
            <div className="flex gap-2">
              <dt className="font-medium text-ink">Size:</dt>
              <dd>{product.size}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink">Price:</dt>
              <dd>{product.priceRange}</dd>
            </div>
          </dl>
          <Link
            href={`/contact?design=${product.slug}`}
            className="mt-2 flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
          >
            Request This Cake
          </Link>
          <p className="text-sm text-ink/50">
            Every cake is made to order — reach out and we&apos;ll confirm
            details, timing, and delivery before anything is finalized.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            You Might Also Like
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
