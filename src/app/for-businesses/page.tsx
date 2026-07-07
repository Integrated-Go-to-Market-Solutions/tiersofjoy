import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Businesses | Tiers of Joy",
  description:
    "Tiers of Joy partners with local NJ businesses to bring handmade diaper cakes to their customers.",
};

const PARTNER_TYPES = [
  "Boutiques & gift shops",
  "Daycares & birthing centers",
  "Pet groomers & pet stores",
  "Event & party planners",
];

export default function ForBusinesses() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Own a Local Business?
      </h1>
      <p className="mt-4 text-lg text-ink/70">
        Tiers of Joy partners with local New Jersey businesses to bring
        handmade, inedible cakes to their customers — no pricing pressure,
        just a simple conversation about what could work for you.
      </p>

      <h2 className="font-display mt-10 text-2xl font-semibold">
        Who We Partner With
      </h2>
      <ul className="mt-4 flex flex-col gap-2 text-ink/70">
        {PARTNER_TYPES.map((type) => (
          <li key={type} className="flex items-center gap-2">
            <span className="text-blush-dark">•</span> {type}
          </li>
        ))}
      </ul>

      <h2 className="font-display mt-10 text-2xl font-semibold">
        What Partnership Can Look Like
      </h2>
      <p className="mt-4 text-ink/70">
        Every partnership is shaped around what actually works for your
        business — whether that&apos;s stocking a few ready-made cakes,
        offering them as an add-on for your customers, or a simple referral
        arrangement. Reach out and we&apos;ll figure out the details
        together.
      </p>

      <Link
        href="/contact?type=business"
        className="mt-10 flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
      >
        Start the Conversation
      </Link>
    </div>
  );
}
