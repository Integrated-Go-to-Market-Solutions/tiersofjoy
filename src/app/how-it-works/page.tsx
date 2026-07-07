import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How It Works | Tiers of Joy",
  description: "How ordering a handmade diaper cake from Tiers of Joy works.",
};

const STEPS = [
  {
    title: "Browse & Choose",
    description:
      "Explore the shop for baby shower, swim, or pet cakes, or tell us you'd like something fully custom.",
    bg: "bg-blush/40",
  },
  {
    title: "Send an Inquiry",
    description:
      "Share your event date, theme, colors, and budget through the contact form. This isn't a final order yet, just the start of the conversation.",
    bg: "bg-powder/40",
  },
  {
    title: "Confirm the Details",
    description:
      "Renee will follow up to confirm availability, finalize the design, and provide a final price before anything is booked.",
    bg: "bg-butter/40",
  },
  {
    title: "Delivery or Pickup",
    description:
      "Local delivery is available in New Jersey, with nationwide shipping for gifting from anywhere (coming soon). Pickup can be arranged too.",
    bg: "bg-seafoam/40",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          How It Works
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Every cake is made to order, so ordering here is a conversation,
          not a checkout. Here&apos;s what to expect.
        </p>
      </Reveal>

      <ol className="mt-10 flex flex-col gap-8">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 100}>
            <li className="flex gap-5">
              <span
                className={`font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold ${step.bg}`}
              >
                {i + 1}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold">
                  {step.title}
                </h2>
                <p className="mt-1 text-ink/70">{step.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={400} className="mt-12 rounded-2xl bg-powder/25 p-6 text-sm text-ink/70">
        <strong className="font-semibold text-ink">Lead time:</strong> please
        reach out at least 2 weeks before your event when possible. Rush
        orders may be accommodated depending on availability.
      </Reveal>

      <Link
        href="/contact"
        className="mt-10 flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-slate-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-darker hover:shadow-lg"
      >
        Start Your Inquiry
      </Link>
    </div>
  );
}
