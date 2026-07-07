import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Return Policy | Tiers of Joy",
  description: "Return and cancellation policy for Tiers of Joy diaper cakes.",
};

export default function ReturnPolicy() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Return Policy
      </h1>
      <div className="mt-6 flex flex-col gap-5 text-ink/70">
        <p>
          <em>
            Draft policy — replace the specifics below (cancellation window,
            damage claim process) with your actual terms.
          </em>
        </p>
        <p>
          <strong className="text-ink">Made-to-order items.</strong> Because
          every cake is handmade to order for a specific event, orders are
          generally final once confirmed and cannot be returned.
        </p>
        <p>
          <strong className="text-ink">Cancellations.</strong> If you need
          to cancel or reschedule, reach out as soon as possible — the
          closer to your event date, the less flexibility there may be.
        </p>
        <p>
          <strong className="text-ink">Damaged in transit.</strong> If your
          cake arrives damaged, contact us within 48 hours with photos and
          we&apos;ll work with you on a resolution.
        </p>
        <p>
          Questions about a specific order? Reach out at{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
