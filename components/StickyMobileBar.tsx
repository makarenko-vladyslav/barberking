"use client";

import { useLocale } from "@/lib/i18n";

export default function StickyMobileBar() {
  const { t } = useLocale();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950/95 border-t border-zinc-800 p-3 backdrop-blur-md shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-3">
        <a
          href="tel:0951079215"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-amber-400 font-display font-bold uppercase text-lg rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{t("mobile.call") as string}</span>
        </a>

        <a
          href="#booking"
          className="flex-[2] min-h-[44px] flex items-center justify-center bg-amber-500 text-zinc-950 font-display font-bold uppercase tracking-wider text-lg rounded shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
        >
          {t("nav.bookCta") as string}
        </a>
      </div>
    </div>
  );
}