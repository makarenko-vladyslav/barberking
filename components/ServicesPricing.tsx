
"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function ServicesPricing() {
  const { t } = useLocale();
  const [selectedTier, setSelectedTier] = useState<"barber" | "top" | "grand" | "junior">("barber");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const kicker = t("servicesSection.kicker") as string;
  const title = t("servicesSection.title") as string;
  const subtitle = t("servicesSection.subtitle") as string;
  const clientServices = (t("servicesSection.items") as Array<{
    id: string;
    name: string;
    category: string;
    desc: string;
    basePrice: number;
    duration: string;
    tag: string | null;
    signature: boolean;
  }>) || [];

  const multiplier = pricingData.tiers[selectedTier]?.multiplier || 1;

  const filteredServices = activeCategory === "all"
    ? clientServices
    : clientServices.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[hsl(0_0%_7%)] text-white relative border-b border-[hsl(0_0%_14%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] text-[hsl(38_88%_52%)] uppercase block mb-3">
              {kicker}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
              {title}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[hsl(0_0%_75%)] text-base sm:text-lg font-light">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Master Tier Selector Buttons */}
        <Reveal className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-[hsl(0_0%_12%)] rounded-lg border border-[hsl(0_0%_20%)] max-w-full">
            {(["junior", "barber", "top", "grand"] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setSelectedTier(tierKey)}
                className={`px-4 py-2.5 min-h-[44px] rounded font-display text-base sm:text-lg uppercase tracking-wider transition-all font-bold ${
                  selectedTier === tierKey
                    ? "bg-[hsl(38_88%_52%)] text-[hsl(0_0%_5%)] shadow-md"
                    : "text-[hsl(0_0%_70%)] hover:text-white hover:bg-[hsl(0_0%_18%)]"
                }`}
              >
                {pricingData.tiers[tierKey].name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Category Filters (Named Category Tabs) */}
        <Reveal className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 text-xs uppercase font-mono tracking-wider">
            {[
              { id: "all", label: "Усі послуги" },
              { id: "hair", label: "Стрижки" },
              { id: "beard", label: "Борода" },
              { id: "combo", label: "Комплекси" },
              { id: "shave", label: "Гоління" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 min-h-[40px] rounded border transition-colors ${
                  activeCategory === cat.id
                    ? "border-[hsl(38_88%_52%)] text-[hsl(38_88%_52%)] bg-[hsl(38_88%_52%/0.1)] font-bold"
                    : "border-[hsl(0_0%_20%)] text-[hsl(0_0%_60%)] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Services Price Table Rows (Leader-line layout) */}
        <Stagger className="space-y-4">
          {filteredServices.map((service) => {
            const calculatedPrice = Math.round(service.basePrice * multiplier);

            return (
              <StaggerItem
                key={service.id}
                className={`p-5 sm:p-6 rounded-xl border transition-all ${
                  service.signature
                    ? "bg-[hsl(0_0%_10%)] border-[hsl(38_88%_52%/0.6)] shadow-xl shadow-[hsl(38_88%_52%/0.08)] ring-1 ring-[hsl(38_88%_52%/0.3)]"
                    : "bg-[hsl(0_0%_9%)] border-[hsl(0_0%_16%)] hover:border-[hsl(0_0%_25%)]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                      {service.name}
                    </h3>
                    {service.tag && (
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[hsl(38_88%_52%)] text-black rounded">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Dotted Leader Line */}
                  <div className="hidden md:block flex-1 mx-4 border-b border-dotted border-[hsl(0_0%_25%)]" />

                  {/* Tabular Price & Duration */}
                  <div className="flex items-baseline gap-3 shrink-0">
                    <span className="text-xs text-[hsl(0_0%_60%)] font-mono">{service.duration}</span>
                    <span className="font-display text-3xl font-extrabold text-[hsl(38_88%_52%)] tabular-nums">
                      від {calculatedPrice} грн
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[hsl(0_0%_72%)] font-light max-w-3xl leading-relaxed mb-4">
                  {service.desc}
                </p>

                <div className="pt-3 border-t border-[hsl(0_0%_14%)] flex justify-between items-center text-xs">
                  <span className="text-[hsl(0_0%_50%)] font-mono">
                    Рівень: <strong className="text-white font-sans">{pricingData.tiers[selectedTier].name}</strong>
                  </span>
                  <a
                    href={`#booking?service=${service.id}`}
                    className="uppercase font-bold tracking-wider text-[hsl(38_88%_52%)] hover:text-white transition-colors flex items-center gap-1 min-h-[44px] py-2"
                  >
                    Записатися →
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Footnote Line & Secondary CTA */}
        <div className="mt-12 pt-6 border-t border-[hsl(0_0%_15%)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[hsl(0_0%_55%)] font-mono">
          <div>
            * Ціни вказано в гривнях. Використовуються американські стайлінги Suavecito та Reuzel. Миття голови включено.
          </div>
          <a
            href="tel:0951079215"
            className="text-[hsl(38_88%_52%)] hover:underline font-bold uppercase tracking-wider shrink-0 font-sans min-h-[44px] flex items-center"
          >
            Консультація барбера по телефону →
          </a>
        </div>

      </div>
    </section>
  );
}
