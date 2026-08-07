"use client";

import { useLocale } from "@/lib/i18n";

export default function Locations() {
  const { t } = useLocale();
  const branches = t("locations.branches") as any[];

  return (
    <section id="locations" className="py-24 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            МЕРЕЖА У КИЄВІ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            4 ФІЛІЇ НА ПРАВОМУ ТА ЛІВОМУ БЕРЕЗІ
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Зручно розташовані біля ключових станцій метро та сучасних ЖК із власним безкоштовним паркінгом.
          </p>
        </div>

        {/* 4 Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-bg-card border border-border-dark p-6 sm:p-8 flex flex-col justify-between hover:border-accent/70 transition-colors relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-dark/60">
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider px-2.5 py-1 bg-secondary border border-border-dark">
                    {branch.metro}
                  </span>
                  <span className="text-xs text-text-muted font-mono">095 107 92 15</span>
                </div>

                <h3 className="font-display font-bold text-3xl text-text-light group-hover:text-accent transition-colors mb-3">
                  {branch.name}
                </h3>

                <div className="space-y-2 text-xs text-text-muted mb-6 font-mono">
                  <p><strong className="text-text-light uppercase">АДРЕСА:</strong> {branch.address}</p>
                  <p><strong className="text-text-light uppercase">ГОДИНИ:</strong> {branch.hours}</p>
                  <p><strong className="text-accent uppercase">ПАРКІНГ:</strong> {branch.parking}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border-dark/60 flex items-center justify-between text-xs font-mono">
                <span className="text-text-muted">{branch.features}</span>
                <a
                  href="#contact"
                  className="font-display font-bold text-accent hover:text-accent-hover text-base uppercase tracking-wider"
                >
                  Записатися сюди →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Location Banner */}
        <div className="relative border border-border-dark bg-secondary/60 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest mb-1 block">
              ЄДИНИЙ СТАНДАРТ СЕРВІСУ
            </span>
            <h4 className="font-display font-bold text-2xl text-text-light mb-2 uppercase">
              ЗРУЧНИЙ ДОЇЗД ТА ВІЛЬНІ МІСЦЯ ДЛЯ ПАРКУВАННЯ
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Усі 4 заклади працюють щодня з 10:00 до 21:00. Приходьте раніше за свіжою кавою чи віскі у комфортній барній зоні.
            </p>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary border border-border-dark text-text-light hover:text-accent hover:border-accent font-display font-bold px-6 py-3.5 text-lg uppercase tracking-wider transition-colors whitespace-nowrap"
          >
            Відкрити у Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
