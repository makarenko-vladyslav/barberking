"use client";
import { useLocale } from "@/lib/i18n";

export default function Ticker() {
  const { t } = useLocale();
  const items = (t("ticker") as string[]) || [];

  return (
    <div className="relative py-4 bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] overflow-hidden font-display font-extrabold text-2xl sm:text-3xl tracking-widest uppercase select-none shadow-lg z-20">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-sm font-sans opacity-70">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}
