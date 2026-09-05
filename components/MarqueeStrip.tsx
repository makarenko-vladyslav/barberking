"use client";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function MarqueeStrip() {
  const { t } = useLocale();
  const rawItems = t("ticker.items");
  const items: string[] = Array.isArray(rawItems) ? (rawItems as string[]) : [];

  return (
    <div className="relative py-4 bg-primary border-y border-border-dark overflow-hidden select-none">
      <Marquee>
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
      </Marquee>
    </div>
  );
}