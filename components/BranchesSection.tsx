"use client";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function BranchesSection() {
  const { t } = useLocale();

  return (
    <section id="branches" className="py-20 sm:py-28 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("branchesSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("branchesSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("branchesSection.subtitle"))}
          </p>
        </div>

        {/* Branches Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.branches.map((branch) => (
            <div
              key={branch.id}
              className="p-6 rounded bg-bg-surface border border-border-dark flex flex-col justify-between hover:border-accent transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-accent font-display">
                  {branch.metro}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-text-light mt-1">
                  {branch.name}
                </h3>
                <div className="font-mono text-sm text-text-light mt-3">
                  {branch.address}
                </div>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">
                  {branch.features}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-dark flex flex-col gap-2">
                <a
                  href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  className="font-display text-xl text-accent font-bold"
                >
                  {branch.phone}
                </a>
                <a
                  href="#booking"
                  className="text-xs uppercase tracking-wider text-text-light hover:text-accent font-semibold"
                >
                  Записатися сюди →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Map Visual Panel */}
        <div className="mt-10 p-6 rounded bg-primary border border-border-dark flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-display text-3xl font-extrabold text-accent">P</span>
            <div>
              <div className="font-display text-2xl font-bold uppercase text-text-light">
                Паркінг закріплений за кожним клієнтом
              </div>
              <div className="text-sm text-text-muted">
                Попередьте адміністратора перед заїздом, і ми відчинимо шлагбаум або забронюємо місце.
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Barberking+Київ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-dark border border-border-dark rounded text-text-light font-display text-lg uppercase tracking-wider hover:border-accent hover:text-accent whitespace-nowrap"
          >
            Відкрити на Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
