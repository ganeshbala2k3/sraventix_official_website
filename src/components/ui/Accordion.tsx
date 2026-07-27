"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: ReactNode;
  content: ReactNode;
};

export default function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-border rounded-card border border-border bg-white">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-text-heading">
                {item.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 flex-none text-text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-text-body">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
