"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

interface ServicesShowcaseProps {
  onOpenBooking: () => void;
}

export default function ServicesShowcase({ onOpenBooking }: ServicesShowcaseProps) {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeTier, setActiveTier] = useState<"junior" | "barber" | "top" | "grand">("barber");

  const kicker = String(t("services.kicker"));
  const title = String(t("services.title"));
  const subtitle = String(t("services.subtitle"));

  const tabs = content.locales.uk.services.tabs;
  const items = content.locales.uk.services.items;

  const filteredItems = items.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const getTierPrice = (item: (typeof items)[0]) => {
    switch (activeTier) {
      case "junior":
        return item.priceJunior;
      case "barber":
        return item.priceBarber;
      case "top":
        return item.priceTop;
      case "grand":
        return item.priceGrand;
      default:
        return item.priceBarber;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[hsl(24_16%_8%)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold mb-2 block">
            {kicker}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-4">
            {title}
          </h2>
          <p className="text-[hsl(36_8%_70%)] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Layer 2: Master Tier Selector */}
        <div className="bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] p-4 sm:p-5 rounded mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[hsl(36_10%_22%/0.6)] pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] font-bold">
              {String(t("services.selectTierTitle"))}
            </span>
            <span className="text-[11px] font-mono text-[hsl(36_8%_55%)]">
              {String(t("services.includeNote"))}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "junior", label: String(t("services.juniorLabel")), desc: String(t("services.juniorDesc")) },
              { id: "barber", label: String(t("services.barberLabel")), desc: String(t("services.barberDesc")) },
              { id: "top", label: String(t("services.topLabel")), desc: String(t("services.topDesc")) },
              { id: "grand", label: String(t("services.grandLabel")), desc: String(t("services.grandDesc")) },
            ].map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id as any)}
                className={`p-3 text-left rounded transition-all border min-h-[44px] ${
                  activeTier === tier.id
                    ? "bg-[hsl(32_95%_50%)] border-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] shadow"
                    : "bg-[hsl(24_16%_8%)] border-[hsl(36_10%_22%)] text-[hsl(36_10%_80%)] hover:border-[hsl(32_95%_50%/0.4)]"
                }`}
              >
                <div className="font-display font-bold text-base uppercase leading-none mb-1">
                  {tier.label}
                </div>
                <div className="text-[11px] opacity-80 font-mono">
                  {tier.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Layer 3: Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {Object.entries(tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-3 text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all border min-h-[44px] ${
                activeTab === key
                  ? "bg-[hsl(36_10%_92%)] text-[hsl(24_15%_9%)] border-white"
                  : "bg-[hsl(24_14%_13%)] text-[hsl(36_8%_70%)] border-[hsl(36_10%_22%)] hover:text-white"
              }`}
            >
              {String(label)}
            </button>
          ))}
        </div>

        {/* Layer 4 & 5: Rich Price List Rows with Dotted Leader & Tabular Prices */}
        <div className="space-y-6">
          {filteredItems.map((item) => {
            const isSignature = item.id === "combo";
            return (
              <div
                key={item.id}
                className={`p-5 rounded transition-all border ${
                  isSignature
                    ? "bg-[hsl(24_14%_14%)] border-2 border-[hsl(32_95%_50%)] shadow-xl relative"
                    : "bg-[hsl(24_14%_13%)] border-[hsl(36_10%_22%)] hover:border-[hsl(32_95%_50%/0.4)]"
                }`}
              >
                {/* Signature Highlight Badge if applicable */}
                {isSignature && (
                  <span className="absolute -top-3 right-6 bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] text-[10px] font-mono font-bold uppercase px-3 py-0.5 rounded">
                    {String(t("services.signatureBadge"))}
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[hsl(36_10%_92%)] uppercase">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[hsl(32_95%_50%/0.2)] text-[hsl(32_95%_50%)] px-2 py-0.5 rounded border border-[hsl(32_95%_50%/0.3)]">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Dotted Leader Line (Desktop) */}
                  <div className="hidden md:block flex-grow mx-4 border-b border-dotted border-[hsl(36_10%_30%)] h-0 self-center" />

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-[hsl(32_95%_50%)] tabular-nums">
                      {getTierPrice(item)}
                    </span>
                    <span className="text-[10px] font-mono text-[hsl(36_8%_55%)] uppercase">
                      / {item.time}
                    </span>
                  </div>
                </div>

                {/* Description & Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[hsl(36_10%_22%/0.4)] mt-2">
                  <p className="text-xs sm:text-sm text-[hsl(36_8%_70%)] leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="shrink-0 bg-[hsl(32_95%_50%/0.12)] hover:bg-[hsl(32_95%_50%)] text-[hsl(32_95%_50%)] hover:text-[hsl(24_15%_9%)] border border-[hsl(32_95%_50%/0.4)] px-4 py-2.5 rounded text-xs font-display font-bold uppercase tracking-wider transition-all text-center min-h-[44px]"
                  >
                    {String(t("services.bookButton"))}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Layer 6: Footnote & Secondary CTA */}
        <div className="mt-10 pt-6 border-t border-[hsl(36_10%_22%)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[hsl(36_8%_60%)]">
          <p>{String(t("services.footnote"))}</p>
          <button
            onClick={onOpenBooking}
            className="text-[hsl(32_95%_50%)] hover:underline uppercase font-bold py-2 min-h-[44px] flex items-center"
          >
            {String(t("services.consultationCta"))}
          </button>
        </div>
      </div>
    </section>
  );
}