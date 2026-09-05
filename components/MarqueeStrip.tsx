"use client";
import { useLocale } from "@/lib/i18n";

export default function MarqueeStrip() {
  const { t } = useLocale();
  const rawItems = t("ticker.items");
  const items: string[] = Array.isArray(rawItems) ? (rawItems as string[]) : [];

  return (
    <div className="relative py-4 bg-primary border-y border-border-dark overflow-hidden select-none">
      <div className="flex w-max animate-[marquee_28s_linear_infinite]">
        <div className="flex items-center gap-10 whitespace-nowrap pr-10">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-display text-lg font-bold tracking-widest uppercase text-text-light">
                {item}
              </span>
              <span className="text-accent font-black">/</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-10 whitespace-nowrap pr-10" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-6">
              <span className="font-display text-lg font-bold tracking-widest uppercase text-text-light">
                {item}
              </span>
              <span className="text-accent font-black">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
