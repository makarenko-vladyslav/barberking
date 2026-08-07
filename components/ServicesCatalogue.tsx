"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface Category {
  id: string;
  label: string;
}

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  price: string;
  time: string;
  desc: string;
  popular?: boolean;
  badge?: string;
}

export default function ServicesCatalogue() {
  const { t } = useLocale();

  const kicker = (t("services.kicker") as string) || "ПРАЙС-ЛИСТ ТА ПОСЛУГИ";
  const title = (t("services.title") as string) || "ОБЕРИ СВІЙ КОМПЛЕКС ДОГЛЯДУ";
  const subtitle = (t("services.subtitle") as string) || "";
  const categories = (t("services.categories") as Category[]) || [];
  const items = (t("services.items") as ServiceItem[]) || [];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[hsl(0_0%_11%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[hsl(32_90%_50%)] uppercase mb-2 block">
            — {kicker}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light">
            {subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] shadow-lg shadow-[hsl(32_90%_50%/0.2)]"
                  : "bg-white/5 text-white/70 border border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price List Rows */}
        <div className="flex flex-col gap-3">
          {filteredItems.map((service) => {
            const isSignature = service.id === "s3";

            return (
              <div
                key={service.id}
                className={`p-5 rounded-xl border transition-all ${
                  isSignature
                    ? "bg-[hsl(32_90%_50%/0.12)] border-[hsl(32_90%_50%)] shadow-lg"
                    : "bg-[hsl(0_0%_7%)] border-white/10 hover:border-white/25"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left Title & Description */}
                  <div className="flex-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="px-2.5 py-0.5 rounded text-[0.65rem] font-mono uppercase bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-bold">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Dotted Leader Line */}
                  <div className="hidden lg:block flex-1 border-b border-dotted border-white/20 mx-4 my-auto h-[1px]" />

                  {/* Right Price & Duration */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:min-w-[18rem]">
                    <div className="flex flex-col text-left md:text-right">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(32_90%_50%)] tabular-nums">
                        {service.price}
                      </span>
                      <span className="text-xs font-mono text-white/50">
                        Час: {service.time}
                      </span>
                    </div>

                    <a
                      href="#booking"
                      className="px-4 py-2.5 rounded bg-white/10 text-white font-display font-bold text-base hover:bg-[hsl(32_90%_50%)] hover:text-[hsl(0_0%_7%)] transition-colors whitespace-nowrap"
                    >
                      Записатись ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote & Secondary CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <span>* У вартість усіх послуг включено миття голови, консультацію та напої з бару.</span>
          <a href="#calculator" className="text-[hsl(32_90%_50%)] hover:underline font-bold">
            Скористатися калькулятором візиту ↗
          </a>
        </div>
      </div>
    </section>
  );
}
