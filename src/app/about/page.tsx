import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tiers of Joy",
  description: "About Tiers of Joy",
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        About Us
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        This is placeholder copy — replace it with the story of Tiers of
        Joy: who you are, what you do, and what makes you different.
      </p>
    </div>
  );
}
