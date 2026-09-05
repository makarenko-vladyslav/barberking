"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface PriceRow {
  name: string;
  junior: string;
  barber: string;
  top: string;
  grand: string;
  desc: string;
  tag?: string;
}

export default function PriceListRows() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<"hair" | "beard" | "care">("hair");

  const rawHair = t("priceList.hair");
  const hairPrices: PriceRow[] = Array.isArray(rawHair) ? (rawHair as PriceRow[]) : [];

  const rawBeard = t("priceList.beard");
  const beardPrices: PriceRow[] = Array.isArray(rawBeard) ? (rawBeard as PriceRow[]) : [];

  const rawCare = t("priceList.care");
  const carePrices: PriceRow[] = Array.isArray(rawCare) ? (rawCare as PriceRow[]) : [];

  const currentList =
    activeTab === "hair" ? hairPrices : activeTab === "beard" ? beardPrices : carePrices;

  return (
    <section id="prices" className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header with Kicker, Heading and Lede */}
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("pricingSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("pricingSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base">
            {String(t("pricingSection.subtitle"))}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-border-dark pb-4">
          <button
            onClick={() => setActiveTab("hair")}
            className={`min-h-[44px] px-6 py-2.5 rounded font-display text-lg uppercase tracking-wider transition-colors duration-200 ease-out ${
              activeTab === "hair"
                ? "bg-accent text-bg-dark font-bold"
                : "bg-bg-dark text-text-muted hover:text-text-light"
            }`}
          >
            {String(t("pricingSection.tabHair"))}
          </button>
          <button
            onClick={() => setActiveTab("beard")}
            className={`min-h-[44px] px-6 py-2.5 rounded font-display text-lg uppercase tracking-wider transition-colors duration-200 ease-out ${
              activeTab === "beard"
                ? "bg-accent text-bg-dark font-bold"
                : "bg-bg-dark text-text-muted hover:text-text-light"
            }`}
          >
            {String(t("pricingSection.tabBeard"))}
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`min-h-[44px] px-6 py-2.5 rounded font-display text-lg uppercase tracking-wider transition-colors duration-200 ease-out ${
              activeTab === "care"
                ? "bg-accent text-bg-dark font-bold"
                : "bg-bg-dark text-text-muted hover:text-text-light"
            }`}
          >
            {String(t("pricingSection.tabCare"))}
          </button>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-4 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border-dark">
          <div className="col-span-6">{String(t("pricingSection.colService"))}</div>
          <div className="col-span-6 grid grid-cols-4 text-right font-mono">
            <span>{String(t("pricingSection.colJunior"))}</span>
            <span className="text-text-light">{String(t("pricingSection.colBarber"))}</span>
            <span>{String(t("pricingSection.colTop"))}</span>
            <span className="text-accent">{String(t("pricingSection.colGrand"))}</span>
          </div>
        </div>

        {/* Item Rows with Clear Visual Hierarchy */}
        <div className="divide-y divide-border-dark">
          {currentList.map((row, idx) => (
            <div
              key={idx}
              className={`py-4 flex flex-col lg:grid lg:grid-cols-12 gap-3 lg:gap-4 items-start lg:items-center px-3 rounded transition-colors duration-200 ease-out ${
                row.tag
                  ? "bg-bg-dark/80 border-l-2 border-accent"
                  : "hover:bg-bg-dark/40"
              }`}
            >
              <div className="lg:col-span-6 w-full">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-2xl font-bold uppercase text-text-light">
                    {row.name}
                  </span>
                  {row.tag && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-display uppercase tracking-wider bg-accent/20 text-accent border border-accent/40">
                      {row.tag}
                    </span>
                  )}
                </div>
                <div className="text-xs text-text-muted mt-1 max-w-md">
                  {row.desc}
                </div>
              </div>

              {/* Price Columns with Tabular Numbers */}
              <div className="lg:col-span-6 w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-right pt-2 lg:pt-0 font-mono">
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-text-muted lg:hidden">{String(t("pricingSection.colJunior"))}</div>
                  <div className="font-display text-xl text-text-muted tabular-nums">{row.junior}</div>
                </div>
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-accent lg:hidden">{String(t("pricingSection.colBarber"))}</div>
                  <div className="font-display text-xl font-bold text-text-light tabular-nums">{row.barber}</div>
                </div>
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-text-muted lg:hidden">{String(t("pricingSection.colTop"))}</div>
                  <div className="font-display text-xl text-text-muted tabular-nums">{row.top}</div>
                </div>
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-accent lg:hidden">{String(t("pricingSection.colGrand"))}</div>
                  <div className="font-display text-xl font-extrabold text-accent tabular-nums">{row.grand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote & Subscriptions Card */}
        <div className="mt-8 p-5 rounded bg-bg-dark border border-border-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            <span className="text-accent font-display text-sm font-bold uppercase tracking-wider mr-2">
              {String(t("pricingSection.subNoteTitle"))}
            </span>
            <span>{String(t("pricingSection.subNoteText"))}</span>
            <div className="mt-1 text-[11px] text-text-muted/80">
              {String(t("pricingSection.footnote"))}
            </div>
          </div>
          <a
            href="#booking"
            className="min-h-[44px] px-5 py-2.5 bg-accent text-bg-dark font-display text-lg uppercase tracking-wider font-bold rounded hover:bg-accent-deep transition-colors duration-200 ease-out whitespace-nowrap inline-flex items-center justify-center"
          >
            {String(t("pricingSection.ctaText"))} →
          </a>
        </div>
      </div>
    </section>
  );
}