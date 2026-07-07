import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping Policy | Tiers of Joy",
  description: "Shipping and delivery policy for Tiers of Joy diaper cakes.",
};

export default function ShippingPolicy() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <Reveal>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Shipping Policy
        </h1>
      </Reveal>
      <Reveal delay={100} className="mt-6 flex flex-col gap-5 text-ink/70">
        <p>
          <em>
            Draft policy. Replace the specifics below (processing time,
            delivery area, shipping cost) with your actual terms.
          </em>
        </p>
        <p>
          <strong className="text-ink">Processing time.</strong> Every cake
          is handmade to order. Please allow at least 2 weeks between
          confirming your order and your event date whenever possible.
        </p>
        <p>
          <strong className="text-ink">Local delivery.</strong> Local
          delivery is available in New Jersey. Delivery fees and available
          dates will be confirmed at the time of your inquiry.
        </p>
        <p>
          <strong className="text-ink">Nationwide shipping.</strong> Coming
          soon. Once available, shipping cost and estimated transit time
          will be provided before your order is finalized.
        </p>
        <p>
          <strong className="text-ink">Pickup.</strong> Local pickup can be
          arranged by request. Just mention it in your inquiry.
        </p>
        <p>
          Questions about a specific order? Reach out at{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      </Reveal>
    </div>
  );
}
