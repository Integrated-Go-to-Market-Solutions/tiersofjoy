import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Tiers of Joy",
  description: "The story behind Tiers of Joy, Inedible Cakes by Renee.",
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        About Tiers of Joy
      </h1>
      <div className="mt-6 flex flex-col gap-5 text-lg text-ink/70">
        <p>
          Renee has been making cakes since {SITE.sinceYear} — decades of
          hands-on cake artistry, tier by tier. Tiers of Joy grew out of that
          same craft, turning it toward gifts that last far longer than a
          slice: diaper cakes built from things a new baby (or a new puppy)
          will actually use.
        </p>
        <p>
          Every cake is handmade to order, right here in New Jersey. Nothing
          is mass-produced or machine-wrapped — each tier is packed by hand
          with real diapers, real essentials, and a few sweet extras, then
          finished with ribbon and decor to match your theme.
        </p>
        <p>
          Whether it&apos;s a classic baby shower centerpiece, a swim-themed
          cake for a summer shower, or a wee-wee pad cake to welcome a new
          puppy home, the goal is the same: a genuinely useful gift that also
          happens to look like a showstopper on the gift table.
        </p>
        <p>
          Based in New Jersey, with local delivery available and nationwide
          shipping for gifting from anywhere.
        </p>
      </div>
    </div>
  );
}
