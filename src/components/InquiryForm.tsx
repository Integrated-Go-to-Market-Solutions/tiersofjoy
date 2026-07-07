"use client";

import { useState, type FormEvent } from "react";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

const INQUIRY_TYPES = ["Order a Cake", "Business Partnership", "General Question"] as const;

export default function InquiryForm({
  initialDesign,
  initialType,
}: {
  initialDesign?: string;
  initialType?: "order" | "business";
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const inquiryType = String(form.get("inquiryType") ?? "");
    const design = String(form.get("design") ?? "");
    const eventDate = String(form.get("eventDate") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `New Inquiry: ${inquiryType}${design && design !== "Not sure / Custom" ? ` for ${design}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Inquiry type: ${inquiryType}`,
      design && `Design of interest: ${design}`,
      eventDate && `Event date: ${eventDate}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const defaultDesignLabel =
    PRODUCTS.find((p) => p.slug === initialDesign)?.name ?? "";

  const fieldClass =
    "h-11 rounded-lg border-2 border-ink/15 bg-white px-4 text-base outline-none focus:border-slate-dark";

  return (
    <div className="flex flex-col gap-4">
      {sent && (
        <p className="rounded-xl bg-powder/30 p-4 text-sm text-ink/70">
          Your email app should have opened with your inquiry ready to send.
          If it didn&apos;t, email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Name
            <input name="name" type="text" required className={fieldClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Email
            <input name="email" type="email" required className={fieldClass} />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Phone (optional)
            <input name="phone" type="tel" className={fieldClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Event date (optional)
            <input name="eventDate" type="date" className={fieldClass} />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Inquiry type
            <select
              name="inquiryType"
              defaultValue={initialType === "business" ? "Business Partnership" : "Order a Cake"}
              className={fieldClass}
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Design of interest
            <select
              name="design"
              defaultValue={defaultDesignLabel || "Not sure / Custom"}
              className={fieldClass}
            >
              <option value="Not sure / Custom">Not sure / Custom</option>
              {PRODUCTS.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-1.5 text-sm font-semibold">
          Message
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your event, theme, colors, and budget."
            className="rounded-lg border-2 border-ink/15 bg-white px-4 py-3 text-base outline-none focus:border-slate-dark"
          />
        </label>
        <button
          type="submit"
          className="flex h-12 items-center justify-center rounded-full bg-slate-dark px-6 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-darker hover:shadow-lg"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
