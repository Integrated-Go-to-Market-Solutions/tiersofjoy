import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Tiers of Joy",
  description: "Frequently asked questions about Tiers of Joy diaper cakes.",
};

const FAQS = [
  {
    question: "What is a diaper cake?",
    answer:
      "A diaper cake is a decorative, tiered arrangement made of rolled diapers instead of cake layers — a genuinely useful gift that doubles as a centerpiece for a baby shower.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "Please reach out at least 2 weeks before your event when possible. Rush orders may be accommodated depending on availability — just ask.",
  },
  {
    question: "Can I customize colors or themes?",
    answer:
      "Yes — every cake can be customized in your own colors, theme, and size. Share your vision through the contact form and we'll work out the details.",
  },
  {
    question: "Do you ship, or is delivery local only?",
    answer:
      "Both. Local delivery is available in New Jersey, and we ship nationwide for gifting from anywhere.",
  },
  {
    question: "What diaper brand and sizes do you use?",
    answer:
      "We can work with your preferred brand and size on request — just let us know in your inquiry, otherwise we'll use our standard newborn/size 1 diapers.",
  },
  {
    question: "What's a wee-wee pad cake?",
    answer:
      "The pet version of a diaper cake — built from wee-wee pads and topped with chew toys, a fun and genuinely useful gift for new puppy parents.",
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Frequently Asked Questions
      </h1>
      <div className="mt-8">
        <Accordion items={FAQS} />
      </div>
      <p className="mt-10 text-ink/70">
        Still have a question? Reach out at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>{" "}
        or {SITE.phoneDisplay}.
      </p>
    </div>
  );
}
