"use client";

import { useState } from "react";

export default function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y-2 divide-ink/10">
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
              <span className="font-display text-lg font-semibold">
                {item.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-olive/40 text-lg font-bold text-olive-dark transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                {open ? "−" : "+"}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <p className="overflow-hidden text-ink/70">
                <span className="block pt-3">{item.answer}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
