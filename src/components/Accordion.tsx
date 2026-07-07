"use client";

import { useState } from "react";

export default function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-black/[.08]">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <span className="font-display text-lg font-medium">
                {item.question}
              </span>
              <span className="text-xl text-ink/40">{open ? "−" : "+"}</span>
            </button>
            {open && <p className="mt-3 text-ink/70">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
