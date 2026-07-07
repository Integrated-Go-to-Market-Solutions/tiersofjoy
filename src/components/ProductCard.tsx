import Link from "next/link";
import TieredCakeIcon from "@/components/TieredCakeIcon";
import type { Product, Theme } from "@/lib/products";

const THEME_BG: Record<Theme, string> = {
  seafoam: "bg-seafoam/35",
  powder: "bg-powder/35",
  butter: "bg-butter/35",
  blush: "bg-blush/35",
};

const THEME_TEXT: Record<Theme, string> = {
  seafoam: "text-seafoam-dark",
  powder: "text-powder-dark",
  butter: "text-butter-dark",
  blush: "text-blush-dark",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border-2 border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:border-ink/20 hover:shadow-xl"
    >
      <div
        className={`flex aspect-square items-center justify-center overflow-hidden p-8 ${THEME_BG[product.theme]}`}
      >
        <TieredCakeIcon
          theme={product.theme}
          topper={product.topper}
          tiers={product.tiers}
          className="h-full w-full max-w-[140px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span
          className={`text-xs font-bold uppercase tracking-wide ${THEME_TEXT[product.theme]}`}
        >
          {product.occasion}
        </span>
        <h3 className="font-display text-lg font-semibold leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-ink/60">{product.size}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">{product.priceRange}</span>
          <span className="text-sm font-semibold text-ink/70 underline-offset-4 group-hover:underline">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
