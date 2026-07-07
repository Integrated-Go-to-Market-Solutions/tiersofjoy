import type { Metadata } from "next";
import Link from "next/link";
import TieredCakeIcon from "@/components/TieredCakeIcon";
import { PRODUCTS, type Theme } from "@/lib/products";

export const metadata: Metadata = {
  title: "Gallery | Tiers of Joy",
  description: "A look at handmade diaper cake designs from Tiers of Joy.",
};

const THEME_BG: Record<Theme, string> = {
  blush: "bg-blush/25",
  sage: "bg-sage/25",
  sand: "bg-sand/25",
  sky: "bg-sky/25",
};

export default function Gallery() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Gallery
        </h1>
        <p className="mt-3 text-lg text-ink/70">
          A look at past creations — real photos coming soon. Every design
          can be customized in your own colors and theme.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {PRODUCTS.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className={`group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-6 transition-transform hover:scale-[1.02] ${THEME_BG[product.theme]}`}
          >
            <TieredCakeIcon
              theme={product.theme}
              topper={product.topper}
              tiers={product.tiers}
              className="h-full w-full max-w-[110px]"
            />
            <span className="text-center text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
              {product.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-sage/25 px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-semibold">
          Don&apos;t See Exactly What You Want?
        </h2>
        <p className="max-w-md text-ink/70">
          Every cake can be fully customized — colors, theme, size, and
          extras tailored to your celebration.
        </p>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
        >
          Request a Custom Design
        </Link>
      </div>
    </div>
  );
}
