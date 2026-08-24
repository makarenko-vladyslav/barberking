"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTier, setActiveTier] = useState<"barber" | "topBarber" | "grandBarber" | "juniorBarber">("barber");

  const serviceItems = (t("services.items") as Array<{
    id: string;
    title: string;
    desc: string;
    price: string;
    category: string;
    tag?: string;
    signature?: boolean;
    photo: string;
  }>) || [];

  const filteredItems = activeCategory === "all"
    ? serviceItems
    : serviceItems.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_95%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("services.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4 text-[hsl(0_0%_95%)]">
            {String(t("services.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)] leading-relaxed">
            {String(t("services.subtitle"))}
          </p>
        </div>

        {/* Barber Tier Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_18%)] rounded-xs gap-1 overflow-x-auto max-w-full">
            {[
              { id: "juniorBarber", label: String(t("services.tiers.juniorBarber")) },
              { id: "barber", label: String(t("services.tiers.barber")) },
              { id: "topBarber", label: String(t("services.tiers.topBarber")) },
              { id: "grandBarber", label: String(t("services.tiers.grandBarber")) }
            ].map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-all whitespace-nowrap ${
                  activeTier === tier.id
                    ? "bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)]"
                    : "text-[hsl(0_0%_70%)] hover:text-[hsl(0_0%_95%)]"
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: "all", label: String(t("services.categories.all")) },
            { id: "haircut", label: String(t("services.categories.haircut")) },
            { id: "combo", label: String(t("services.categories.combo")) },
            { id: "beard", label: String(t("services.categories.beard")) },
            { id: "care", label: String(t("services.categories.care")) }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border rounded-xs transition-colors ${
                activeCategory === cat.id
                  ? "border-[hsl(38_90%_50%)] text-[hsl(38_90%_50%)] bg-[hsl(38_90%_50%/0.1)]"
                  : "border-[hsl(0_0%_20%)] text-[hsl(0_0%_65%)] hover:border-[hsl(0_0%_40%)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price / Offer List Rows */}
        <div className="flex flex-col gap-4 mb-12">
          {filteredItems.map((item) => {
            const isSignature = item.signature;
            return (
              <div
                key={item.id}
                className={`rounded-xs border transition-all duration-300 overflow-hidden flex flex-col md:flex-row md:items-center justify-between ${
                  isSignature
                    ? "bg-[hsl(0_0%_9%)] border-[hsl(38_90%_50%)] shadow-lg shadow-[hsl(38_90%_50%/0.1)]"
                    : "bg-[hsl(0_0%_7%)] border-[hsl(0_0%_15%)] hover:border-[hsl(0_0%_25%)]"
                }`}
              >
                {/* Full-width media band on mobile, thumbnail on desktop */}
                <div className="w-full md:w-48 aspect-[4/3] md:aspect-square shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-[hsl(0_0%_20%)]">
                  <img
                    src={item.photo}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-90"
                  />
                </div>

                {/* Left: Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(0_0%_95%)]">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)] rounded-xs">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[hsl(0_0%_65%)] leading-relaxed max-w-2xl font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Right: Price & Quick CTA */}
                <div className="p-5 sm:p-6 pt-0 md:pt-5 flex items-center justify-between md:justify-end gap-6 shrink-0 border-t md:border-t-0 border-[hsl(0_0%_15%)]">
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[hsl(0_0%_50%)] block">
                      {String(t("services.priceLabel"))}
                    </span>
                    <span className="font-['Alumni_Sans'] text-3xl font-extrabold text-[hsl(38_90%_50%)] tabular-nums">
                      {item.price}
                    </span>
                  </div>
                  <a
                    href="#booking"
                    className="px-4 py-2.5 bg-[hsl(0_0%_14%)] hover:bg-[hsl(38_90%_50%)] text-[hsl(0_0%_90%)] hover:text-[hsl(0_0%_5%)] text-xs uppercase tracking-wider font-bold rounded-xs transition-colors"
                  >
                    {String(t("services.bookBtn"))}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote & Secondary CTA */}
        <div className="pt-6 border-t border-[hsl(0_0%_15%)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[hsl(0_0%_60%)]">
          <p>{String(t("services.footnote"))}</p>
          <a
            href="#calculator"
            className="text-[hsl(38_90%_50%)] font-bold uppercase tracking-wider hover:underline"
          >
            {String(t("services.secondaryCta"))} →
          </a>
        </div>
      </div>
    </section>
  );
}
