"use client";
import { useLocale } from "@/lib/i18n";

export default function BottomNav() {
  const { t } = useLocale();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[hsl(0_0%_6%/0.95)] backdrop-blur-lg border-t border-[hsl(0_0%_18%)] p-3 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href="tel:0951079215"
        className="flex-1 py-3 px-3 bg-[hsl(0_0%_14%)] hover:bg-[hsl(0_0%_20%)] text-[hsl(0_0%_95%)] font-bold text-xs uppercase tracking-wider text-center rounded-sm transition-colors border border-[hsl(0_0%_25%)]"
      >
        📞 Зателефонувати
      </a>
      <a
        href="#booking"
        className="flex-1 py-3 px-3 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider text-center rounded-sm transition-colors shadow-md"
      >
        {String(t("nav.bookCta"))}
      </a>
    </div>
  );
}