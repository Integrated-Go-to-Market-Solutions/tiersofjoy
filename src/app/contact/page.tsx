import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tiers of Joy",
  description: "Contact Tiers of Joy",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        This is placeholder copy — replace it with how customers can reach
        Tiers of Joy.
      </p>
      <dl className="mt-8 space-y-2 text-lg">
        <div className="flex gap-2">
          <dt className="font-medium">Email:</dt>
          <dd>
            <a
              href="mailto:hello@tiersofjoy.com"
              className="text-zinc-600 underline hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              hello@tiersofjoy.com
            </a>
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium">Phone:</dt>
          <dd className="text-zinc-600 dark:text-zinc-400">
            (000) 000-0000
          </dd>
        </div>
      </dl>
    </div>
  );
}
