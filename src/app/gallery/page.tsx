import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TieredCakeIcon from "@/components/TieredCakeIcon";
import Reveal from "@/components/Reveal";
import { PRODUCTS, type Theme } from "@/lib/products";
import { GALLERY_PHOTOS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery | Tiers of Joy",
  description: "Real handmade diaper cake creations from Tiers of Joy.",
};

const THEME_BG: Record<Theme, string> = {
  olive: "bg-olive/35",
  turquoise: "bg-turquoise/35",
  marigold: "bg-marigold/35",
  coral: "bg-coral/35",
};

export default function Gallery() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <Reveal className="text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Gallery
        </h1>
        <p className="mt-3 text-lg text-ink/70">
          A look at real creations, made by hand right here in New Jersey.
          Every design can be customized in your own colors and theme.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {GALLERY_PHOTOS.map((photo, i) => (
          <Reveal key={photo.src} delay={(i % 3) * 100}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-xl">
              <Image
                src={photo.src}
                alt={photo.name}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(46,26,18,0.8),transparent)] p-3 pt-8">
                <p className="text-xs font-bold uppercase tracking-wide text-marigold">
                  {photo.tag}
                </p>
                <p className="font-display text-sm font-semibold text-cream">
                  {photo.name}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Shop the Collection
        </h2>
        <p className="mt-3 text-lg text-ink/70">
          Every design below is ready to customize and order.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 4) * 80}>
            <Link
              href={`/shop/${product.slug}`}
              className={`group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-lg ${THEME_BG[product.theme]}`}
            >
              <TieredCakeIcon
                theme={product.theme}
                topper={product.topper}
                tiers={product.tiers}
                className="h-full w-full max-w-[110px] transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-center text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                {product.name}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-turquoise/35 px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-semibold">
          Don&apos;t See Exactly What You Want?
        </h2>
        <p className="max-w-md text-ink/70">
          Every cake can be fully customized: colors, theme, size, and extras
          tailored to your celebration.
        </p>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-full bg-olive-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-coral-dark hover:shadow-lg"
        >
          Request a Custom Design
        </Link>
      </Reveal>
    </div>
  );
}
