import Link from "next/link";
import TieredCakeIcon from "@/components/TieredCakeIcon";
import type { Product, Theme } from "@/lib/products";

const THEME_BG: Record<Theme, string> = {
  blush: "bg-blush/25",
  sage: "bg-sage/25",
  sand: "bg-sand/25",
  sky: "bg-sky/25",
};

const THEME_TEXT: Record<Theme, string> = {
  blush: "text-blush-dark",
  sage: "text-sage-dark",
  sand: "text-sand-dark",
  sky: "text-sky-dark",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/[.06] bg-white transition-shadow hover:shadow-md"
    >
      <div
        className={`flex aspect-square items-center justify-center p-8 ${THEME_BG[product.theme]}`}
      >
        <TieredCakeIcon
          theme={product.theme}
          topper={product.topper}
          tiers={product.tiers}
          className="h-full w-full max-w-[140px]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span
          className={`text-xs font-semibold uppercase tracking-wide ${THEME_TEXT[product.theme]}`}
        >
          {product.occasion}
        </span>
        <h3 className="font-display text-lg font-semibold leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-ink/60">{product.size}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium">{product.priceRange}</span>
          <span className="text-sm font-medium text-ink/70 underline-offset-4 group-hover:underline">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
