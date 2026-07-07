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

    const subject = `New Inquiry: ${inquiryType}${design && design !== "Not sure / Custom" ? ` — ${design}` : ""}`;
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

  return (
    <div className="flex flex-col gap-4">
      {sent && (
        <p className="rounded-xl bg-sage/25 p-4 text-sm text-ink/70">
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
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Name
            <input
              name="name"
              type="text"
              required
              className="h-11 rounded-lg border border-black/[.12] bg-white px-4 text-base outline-none focus:border-blush-dark"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Email
            <input
              name="email"
              type="email"
              required
              className="h-11 rounded-lg border border-black/[.12] bg-white px-4 text-base outline-none focus:border-blush-dark"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Phone (optional)
            <input
              name="phone"
              type="tel"
              className="h-11 rounded-lg border border-black/[.12] bg-white px-4 text-base outline-none focus:border-blush-dark"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Event date (optional)
            <input
              name="eventDate"
              type="date"
              className="h-11 rounded-lg border border-black/[.12] bg-white px-4 text-base outline-none focus:border-blush-dark"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Inquiry type
            <select
              name="inquiryType"
              defaultValue={initialType === "business" ? "Business Partnership" : "Order a Cake"}
              className="h-11 rounded-lg border border-black/[.12] bg-white px-4 text-base outline-none focus:border-blush-dark"
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Design of interest
            <select
              name="design"
              defaultValue={defaultDesignLabel || "Not sure / Custom"}
              className="h-11 rounded-lg border border-black/[.12] bg-white px-4 text-base outline-none focus:border-blush-dark"
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
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Message
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your event, theme, colors, and budget."
            className="rounded-lg border border-black/[.12] bg-white px-4 py-3 text-base outline-none focus:border-blush-dark"
          />
        </label>
        <button
          type="submit"
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
