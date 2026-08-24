"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedService, setSelectedService] = useState<keyof typeof pricing.basePrices>("haircut");
  const [selectedTier, setSelectedTier] = useState<"barber" | "top" | "grand" | "junior">("barber");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const basePrice = pricing.basePrices[selectedService][selectedTier];
  
  const addonsTotal = selectedAddons.reduce((acc, addonKey) => {
    const cost = pricing.addons[addonKey as keyof typeof pricing.addons] || 0;
    return acc + cost;
  }, 0);

  const totalCalculated = basePrice + addonsTotal;

  const toggleAddon = (addonKey: string) => {
    if (selectedAddons.includes(addonKey)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addonKey));
    } else {
      setSelectedAddons([...selectedAddons, addonKey]);
    }
  };

  const serviceNames: Record<string, string> = {
    haircut: String(t("calculator.svcHaircut")),
    combo: String(t("calculator.svcCombo")),
    beard: String(t("calculator.svcBeard")),
    razor_shave: String(t("calculator.svcRazor")),
    father_son: String(t("calculator.svcFatherSon")),
    clipper: String(t("calculator.svcClipper"))
  };

  const addonLabels: Record<string, { label: string; price: number }> = {
    black_mask: { label: String(t("calculator.addonMask")), price: 350 },
    head_care: { label: String(t("calculator.addonHead")), price: 300 },
    waxing: { label: String(t("calculator.addonWax")), price: 150 },
    ear_fire: { label: String(t("calculator.addonFire")), price: 50 },
    grey_camouflage: { label: String(t("calculator.addonGrey")), price: 550 }
  };

  return (
    <section id="calculator" className="py-24 bg-[hsl(0_0%_7%)] border-y border-[hsl(0_0%_15%)] text-[hsl(0_0%_95%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-5xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-[hsl(0_0%_65%)]">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        <div className="bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] p-6 sm:p-8 rounded-xs shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Options Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Base Service */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[hsl(38_90%_50%)] font-bold mb-3">
                {String(t("calculator.selectService"))}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(pricing.basePrices).map((svcKey) => (
                  <button
                    key={svcKey}
                    onClick={() => setSelectedService(svcKey as keyof typeof pricing.basePrices)}
                    className={`p-3 text-left text-xs font-semibold rounded-xs border transition-all ${
                      selectedService === svcKey
                        ? "bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)] border-[hsl(38_90%_50%)]"
                        : "bg-[hsl(0_0%_12%)] text-[hsl(0_0%_80%)] border-[hsl(0_0%_20%)] hover:border-[hsl(0_0%_35%)]"
                    }`}
                  >
                    {serviceNames[svcKey] || svcKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Barber Tier */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[hsl(38_90%_50%)] font-bold mb-3">
                {String(t("calculator.selectTier"))}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { key: "junior", label: String(t("calculator.tierJunior")) },
                  { key: "barber", label: String(t("calculator.tierBarber")) },
                  { key: "top", label: String(t("calculator.tierTop")) },
                  { key: "grand", label: String(t("calculator.tierGrand")) }
                ].map((tier) => (
                  <button
                    key={tier.key}
                    onClick={() => setSelectedTier(tier.key as any)}
                    className={`p-2.5 text-center text-xs font-bold uppercase rounded-xs border transition-all ${
                      selectedTier === tier.key
                        ? "bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)] border-[hsl(38_90%_50%)]"
                        : "bg-[hsl(0_0%_12%)] text-[hsl(0_0%_80%)] border-[hsl(0_0%_20%)] hover:border-[hsl(0_0%_35%)]"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[hsl(38_90%_50%)] font-bold mb-3">
                {String(t("calculator.selectAddons"))}
              </label>
              <div className="flex flex-col gap-2">
                {Object.entries(addonLabels).map(([addonKey, addon]) => {
                  const isSelected = selectedAddons.includes(addonKey);
                  return (
                    <button
                      key={addonKey}
                      onClick={() => toggleAddon(addonKey)}
                      className={`p-3 text-left text-xs flex items-center justify-between rounded-xs border transition-all ${
                        isSelected
                          ? "bg-[hsl(38_90%_50%/0.12)] text-[hsl(38_90%_50%)] border-[hsl(38_90%_50%)]"
                          : "bg-[hsl(0_0%_12%)] text-[hsl(0_0%_75%)] border-[hsl(0_0%_20%)] hover:border-[hsl(0_0%_30%)]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center text-[9px] font-bold ${
                          isSelected ? "bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)] border-transparent" : "border-[hsl(0_0%_40%)]"
                        }`}>
                          {isSelected ? String(t("calculator.yes")) : ""}
                        </span>
                        {addon.label}
                      </span>
                      <span className="font-bold text-[hsl(0_0%_90%)] tabular-nums">
                        +{addon.price} грн
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Summary Box */}
          <div className="lg:col-span-5 bg-[hsl(0_0%_11%)] border border-[hsl(0_0%_20%)] p-6 rounded-xs flex flex-col justify-between">
            <div>
              <h3 className="font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(0_0%_95%)] mb-4 border-b border-[hsl(0_0%_20%)] pb-3">
                {String(t("calculator.summaryTitle"))}
              </h3>

              <div className="flex flex-col gap-3 text-xs text-[hsl(0_0%_75%)] mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span>{String(t("calculator.baseServiceLabel"))}</span>
                  <span className="font-bold text-[hsl(0_0%_95%)] tabular-nums">{basePrice} грн</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span>{String(t("calculator.tierLabel"))} ({selectedTier.toUpperCase()}):</span>
                  <span className="text-[hsl(38_90%_50%)] font-semibold">{String(t("calculator.included"))}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-2 border-t border-[hsl(0_0%_18%)]">
                    <span>{String(t("calculator.addonsLabel"))} ({selectedAddons.length}):</span>
                    <span className="font-bold text-[hsl(0_0%_95%)] tabular-nums">+{addonsTotal} грн</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="bg-[hsl(0_0%_7%)] p-4 rounded-xs border border-[hsl(0_0%_18%)] mb-6 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[hsl(0_0%_50%)] block mb-1">
                  {String(t("calculator.totalEstimate"))}
                </span>
                <span className="font-['Alumni_Sans'] text-5xl font-extrabold text-[hsl(38_90%_50%)] tabular-nums">
                  {totalCalculated} грн
                </span>
              </div>

              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center py-4 px-6 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider rounded-xs transition-all text-center shadow-lg"
              >
                {String(t("calculator.bookCalculatedBtn"))}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
