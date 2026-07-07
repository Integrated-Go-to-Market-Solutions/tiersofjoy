import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Tiers of Joy",
  description: "Request a custom diaper cake or ask a question.",
};

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ design?: string; type?: string }>;
}) {
  const { design, type } = await searchParams;

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Contact
      </h1>
      <p className="mt-4 text-lg text-ink/70">
        Tell us about your event and we&apos;ll follow up to confirm details,
        timing, and pricing before anything is finalized.
      </p>

      <div className="mt-10">
        <InquiryForm
          initialDesign={design}
          initialType={type === "business" ? "business" : "order"}
        />
      </div>

      <dl className="mt-12 space-y-2 border-t border-black/[.08] pt-8 text-base">
        <div className="flex gap-2">
          <dt className="font-medium">Email:</dt>
          <dd>
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">Phone:</dt>
          <dd>
            <a href={`tel:${SITE.phoneHref}`} className="underline">
              {SITE.phoneDisplay}
            </a>
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">Instagram:</dt>
          <dd>
            <a
              href={SITE.instagramUrl}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.instagramHandle}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
