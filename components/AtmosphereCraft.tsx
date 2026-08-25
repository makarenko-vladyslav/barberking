"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

export default function AtmosphereCraft() {
  const { t } = useLocale();

  const kicker = String(t("craft.kicker"));
  const title = String(t("craft.title"));
  const subtitle = String(t("craft.subtitle"));
  const quote = String(t("craft.quote"));
  const masterName = String(t("craft.masterName"));
  const masterRole = String(t("craft.masterRole"));
  const perks = content.locales.uk.craft.perks;

  return (
    <section id="craft" className="py-20 sm:py-28 bg-[hsl(24_14%_11%)] relative overflow-hidden">
      {/* Decorative Watermark Word */}
      <div 
        className="absolute -bottom-10 right-0 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span className="text-[18vw] font-display font-bold uppercase tracking-tighter text-[hsl(32_95%_50%/0.02)] leading-none whitespace-nowrap">
          CRAFT CLUB
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Pull-Quote */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold block">
              {kicker}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] leading-[0.95]">
              {title}
            </h2>
            <p className="text-[hsl(36_8%_75%)] text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>

            {/* Pull-Quote Layer */}
            <div className="p-6 bg-[hsl(24_16%_8%)] border-l-4 border-[hsl(32_95%_50%)] rounded-r-md my-4">
              <p className="text-base sm:text-lg font-display italic text-[hsl(36_10%_92%)] mb-3">
                «{quote}»
              </p>
              <div className="text-xs font-mono text-[hsl(32_95%_50%)] font-bold">
                — {masterName}, <span className="text-[hsl(36_8%_60%)] font-normal">{masterRole}</span>
              </div>
            </div>

            {/* Perks Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((perk, idx) => (
                <div
                  key={idx}
                  className="bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] p-4 rounded hover:border-[hsl(32_95%_50%/0.4)] transition-all"
                >
                  <div className="text-[hsl(32_95%_50%)] font-mono font-bold text-xs mb-1">
                    0{idx + 1}.
                  </div>
                  <h3 className="font-display font-bold text-base text-[hsl(36_10%_92%)] uppercase mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-[hsl(36_8%_65%)] leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Secondary Text Link */}
            <div className="pt-2">
              <a
                href="#faq"
                className="text-xs font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] hover:underline inline-flex items-center gap-2 py-3 inline-block"
              >
                {String(t("craft.faqLinkText"))}
              </a>
            </div>
          </div>

          {/* Right Column: 2-Photo Overlapped Cluster & Stat Row */}
          <div className="lg:col-span-6 space-y-8">
            {/* 2-Photo Cluster */}
            <div className="relative pt-6 pb-12 pr-6">
              {/* Primary Image */}
              <div className="relative z-10 rounded overflow-hidden border-2 border-[hsl(36_10%_22%)] shadow-2xl">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6059-300x200.jpg"
                  alt="Atmosphere main view"
                  className="w-full h-[360px] sm:h-[420px] object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24_16%_8%)] via-transparent to-transparent opacity-80" />
              </div>

              {/* Overlapped Secondary Image */}
              <div className="absolute bottom-0 left-4 sm:-left-6 z-20 w-48 sm:w-60 h-36 sm:h-44 rounded overflow-hidden border-4 border-[hsl(24_14%_11%)] shadow-2xl transform -rotate-3">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5183-300x200.jpg"
                  alt="Barbershop Details"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption with Rule */}
              <div className="mt-4 text-right">
                <span className="text-[11px] font-mono text-[hsl(36_8%_55%)] uppercase">
                  — Робочий простір філії на Павлівській, 18
                </span>
              </div>
            </div>

            {/* Stat Row Layer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[hsl(36_10%_22%)]">
              <div>
                <p className="text-3xl font-display font-bold text-[hsl(32_95%_50%)]">265K+</p>
                <p className="text-[10px] font-mono text-[hsl(36_8%_60%)] uppercase">{String(t("craft.statHaircuts"))}</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-[hsl(32_95%_50%)]">4</p>
                <p className="text-[10px] font-mono text-[hsl(36_8%_60%)] uppercase">{String(t("craft.statLocations"))}</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-[hsl(32_95%_50%)]">8+ років</p>
                <p className="text-[10px] font-mono text-[hsl(36_8%_60%)] uppercase">{String(t("craft.statTraditions"))}</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-[hsl(32_95%_50%)]">100%</p>
                <p className="text-[10px] font-mono text-[hsl(36_8%_60%)] uppercase">{String(t("craft.statSterile"))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}