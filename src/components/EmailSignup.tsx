"use client";

import { useState, type FormEvent } from "react";

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-lg font-medium">
        Thanks for joining the list — keep an eye on your inbox!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        className="h-12 flex-1 rounded-full border border-black/[.1] bg-white px-5 text-base outline-none focus:border-blush-dark"
      />
      <button
        type="submit"
        className="h-12 rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838]"
      >
        Subscribe
      </button>
    </form>
  );
}
