"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function ServicesPrices() {
  const { t } = useLocale();
  const [activeTier, setActiveTier] = useState("barber");

  const services = (t("services.items") as Array<{ id: string; name: string; desc: string; tag?: string }>) || [];
  const currentTierObj = pricingData.tiers.find((tier) => tier.id === activeTier) || pricingData.tiers[1];

  const money = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

  const getPriceForService = (serviceId: string): number => {
    switch (serviceId) {
      case "haircut":
        return currentTierObj.haircut;
      case "combo":
        return currentTierObj.combo;
      case "beard":
        return currentTierObj.beard;
      case "clipper":
        return currentTierObj.machine;
      case "shave":
        return currentTierObj.haircut - 150;
      case "father_son":
        return currentTierObj.combo + 300;
      case "camouflage":
        return 550;
      case "waxing":
        return 100;
      default:
        return currentTierObj.haircut;
    }
  };

  return (
    <section id="services" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (Layers: Kicker, Heading, Lede) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded">
            {t("services.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4 mb-3">
            {t("services.title") as string}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t("services.subtitle") as string}
          </p>
        </div>

        {/* Master Tier Selector Tabs (Category Tiers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {pricingData.tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`px-5 py-3 rounded-lg font-display text-lg uppercase font-bold transition-all border ${
                activeTier === tier.id
                  ? "bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <span>{tier.name}</span>
            </button>
          ))}
        </div>

        {/* Subtitle description of chosen master tier */}
        <div className="bg-zinc-950 border border-amber-500/30 rounded-xl p-3.5 text-center max-w-xl mx-auto mb-12 text-amber-300 text-xs sm:text-sm font-mono">
          КВАЛІФІКАЦІЯ: {currentTierObj.subtitle}
        </div>

        {/* Price List Rows with Dotted Leaders */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {services.map((service) => {
            const price = getPriceForService(service.id);
            const isSignature = service.id === "combo";

            return (
              <div
                key={service.id}
                className={`p-5 rounded-xl transition-all ${
                  isSignature
                    ? "bg-amber-500/10 border-2 border-amber-500 shadow-xl"
                    : "bg-zinc-950/60 border border-zinc-800/80 hover:border-amber-500/30"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="flex items-center gap-3 shrink-0">
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white">
                      {service.name}
                    </h3>
                    {service.tag && (
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500 text-zinc-950">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Dotted Leader Line for Desktop */}
                  <div className="hidden sm:block flex-1 mx-4 border-b border-dotted border-zinc-800" />

                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="text-xs text-zinc-500 font-mono uppercase">{t("services.fromText") as string}</span>
                    <span className="text-2xl font-display font-extrabold text-amber-400 tabular-nums">
                      {money(price)} грн
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 max-w-3xl">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footnote Line */}
        <div className="mt-8 text-center text-xs text-zinc-500 font-mono">
          {t("services.footnote") as string}
        </div>

        {/* Secondary Action */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-xl rounded shadow-xl transition-transform active:scale-95"
          >
            Записатися до {currentTierObj.name}
          </a>
          <a
            href="#calculator"
            className="text-xs font-mono uppercase text-amber-400 hover:text-amber-300 underline underline-offset-4"
          >
            Розрахувати точну вартість візиту →
          </a>
        </div>
      </div>
    </section>
  );
}