"use client";
import { useLocale } from "@/lib/i18n";

export default function BottomNav() {
  const { t } = useLocale();
  const phone = (t("brand.phone") as string) || "0951079215";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[hsl(0_0%_7%/0.96)] backdrop-blur-lg border-t border-white/10 p-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 py-3 rounded bg-white/10 text-white font-display font-bold text-xl tracking-wider hover:bg-white/20 transition-colors"
        >
          <span>☎</span> ВІДДЗВОНИТИ
        </a>
        <a
          href="#booking"
          className="flex items-center justify-center py-3 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-xl tracking-wider hover:bg-[hsl(28_95%_45%)] transition-colors shadow-lg shadow-[hsl(32_90%_50%/0.3)]"
        >
          {t("nav.bookCta") as string}
        </a>
      </div>
    </div>
  );
}