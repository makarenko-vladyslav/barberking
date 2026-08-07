"use client";

import { useLocale } from "@/lib/i18n";

export default function Advantages() {
  const { t } = useLocale();
  const items = t("advantages.items") as any[];

  return (
    <section id="advantages" className="py-24 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            СТАНДАРТИ ЯКОСТІ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            СТАНДАРТИ BARBERKING: ЯКІСТЬ БЕЗ КОМПРОМІСІВ
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Ми усунули всі типові недоліки звичайних перукарень. Безпека, час та атмосфера — понад усе.
          </p>
        </div>

        {/* Oversized Statement Banner */}
        <div className="mb-12 p-8 bg-secondary/80 border-l-4 border-accent text-text-light">
          <p className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide leading-tight">
            "ПРАЦЮЄМО БЕЗ СТАЖЕРІВ. КОЖЕН МАЙСТЕР МАЄ ДОСВІД ВІД 5 РОКІВ ТА МІЖНАРОДНУ СЕРТИФІКАЦІЮ."
          </p>
          <span className="text-xs font-mono text-accent uppercase tracking-widest mt-2 block">
            — Стандарт мережи Barberking Kyiv
          </span>
        </div>

        {/* 6 Grid Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border-dark p-8 flex flex-col justify-between hover:border-accent/60 transition-colors relative"
            >
              <div className="font-display font-black text-5xl text-accent/30 mb-6 select-none tabular-nums">
                0{idx + 1}
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-text-light mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-dark/60 flex items-center justify-between text-[11px] text-accent uppercase tracking-widest font-mono">
                <span>СТАНДАРТ BARBERKING</span>
                <span>СЕРТИФІКОВАНО</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
