"use client";

import { useLocale } from "@/lib/i18n";

export default function Ticker() {
  const { t } = useLocale();
  const items = t("ticker.items") as string[];

  return (
    <div className="bg-accent text-bg-dark overflow-hidden py-3 border-y border-accent-hover/30 select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase">
              {item}
            </span>
            <span className="ml-12 font-bold text-bg-dark/40 text-lg">
              —
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
