"use client";
import { useLocale } from "@/lib/i18n";

export default function MarqueeTicker() {
  const { t } = useLocale();
  const items = (t("marquee") as string[]) || [];

  return (
    <div className="bg-amber-500 text-black py-3 overflow-hidden border-y border-amber-600 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="inline-flex items-center mx-6">
            <span className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider">
              {item}
            </span>
            <span className="ml-12 text-black/40 font-bold text-lg">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
