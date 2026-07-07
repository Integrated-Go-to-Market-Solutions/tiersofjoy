import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

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
      <Reveal>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Own a Local Business?
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Tiers of Joy partners with local New Jersey businesses to bring
          handmade cakes to their customers. No pricing pressure, just a
          simple conversation about what could work for you.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="font-display mt-10 text-2xl font-semibold">
          Who We Partner With
        </h2>
        <ul className="mt-4 flex flex-col gap-2 text-ink/70">
          {PARTNER_TYPES.map((type) => (
            <li key={type} className="flex items-center gap-2">
              <span className="text-olive-dark">•</span> {type}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={200}>
        <h2 className="font-display mt-10 text-2xl font-semibold">
          What Partnership Can Look Like
        </h2>
        <p className="mt-4 text-ink/70">
          Every partnership is shaped around what actually works for your
          business. That could mean stocking a few ready-made cakes, offering
          them as an add-on for your customers, or a simple referral
          arrangement. Reach out and we&apos;ll figure out the details
          together.
        </p>
      </Reveal>

      <Link
        href="/contact?type=business"
        className="mt-10 flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-olive-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-coral-dark hover:shadow-lg"
      >
        Start the Conversation
      </Link>
    </div>
  );
}
