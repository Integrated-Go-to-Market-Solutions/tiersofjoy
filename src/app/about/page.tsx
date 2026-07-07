import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Tiers of Joy",
  description: "The story behind Tiers of Joy, Inedible Cakes by Renee.",
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <Reveal>
        <span className="font-display inline-block rounded-full bg-marigold/40 px-4 py-1 text-sm font-bold uppercase tracking-wide text-terracotta-dark">
          Est. {SITE.sinceYear}
        </span>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight">
          About Tiers of Joy
        </h1>
      </Reveal>
      <div className="mt-6 flex flex-col gap-5 text-lg text-ink/70">
        <Reveal delay={80}>
          <p>
            Renee has been making cakes since {SITE.sinceYear}. Decades of
            hands-on cake artistry, tier by tier. Tiers of Joy grew out of
            that same craft, pointed at gifts that last longer than a slice:
            diaper cakes built from things a new baby (or a new puppy) will
            actually use.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p>
            Every cake is handmade to order, right here in New Jersey.
            Nothing is mass-produced or machine-wrapped. Each tier is packed
            by hand with real diapers, real essentials, and a few sweet
            extras, then finished with ribbon and decor to match your theme.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p>
            Baby shower centerpiece, swim-themed cake for a summer shower, or
            a wee-wee pad cake to welcome a new puppy home: every one is a
            genuinely useful gift dressed up to be the star of the gift
            table.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p>
            Based in New Jersey, with local delivery available and
            nationwide shipping for gifting from anywhere (coming soon).
          </p>
        </Reveal>
      </div>
    </div>
  );
}
