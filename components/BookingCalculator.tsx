
"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";
import { Reveal } from "@/components/motion";

export default function BookingCalculator() {
  const { t } = useLocale();

  const [serviceId, setServiceId] = useState("hair_beard");
  const [tierKey, setTierKey] = useState<"barber" | "top" | "grand" | "junior">("barber");
  const [addons, setAddons] = useState<{ blackMask: boolean; waxing: boolean; scalpCare: boolean }>({
    blackMask: false,
    waxing: false,
    scalpCare: false,
  });

  const selectedService = pricingData.services.find((s) => s.id === serviceId) || pricingData.services[0];
  const tierMultiplier = pricingData.tiers[tierKey]?.multiplier || 1.0;

  let basePrice = selectedService.basePrice * tierMultiplier;
  let duration = selectedService.duration;

  if (addons.blackMask) {
    basePrice += 350;
    duration += 15;
  }
  if (addons.waxing) {
    basePrice += 100;
    duration += 10;
  }
  if (addons.scalpCare) {
    basePrice += 300;
    duration += 15;
  }

  const finalPrice = Math.round(basePrice);

  return (
    <section id="calculator" className="py-20 bg-[hsl(40_12%_96%)] text-[hsl(0_0%_10%)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] text-[hsl(38_88%_42%)] uppercase block mb-2">
              {t("calculator.kicker") as string}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[hsl(0_0%_10%)] mb-3">
              {t("calculator.title") as string}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[hsl(0_0%_35%)] text-base sm:text-lg">
              {t("calculator.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Calculator Card Container (Solid White with Crisp Shadow) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-[hsl(0_0%_88%)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls side */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Service */}
            <div>
              <label className="block font-display text-xl font-bold uppercase text-[hsl(0_0%_15%)] mb-3">
                {t("calculator.selectService") as string}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pricingData.services.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setServiceId(item.id)}
                    className={`p-3.5 min-h-[44px] text-left rounded-lg border text-sm transition-all ${
                      serviceId === item.id
                        ? "border-[hsl(38_88%_52%)] bg-[hsl(38_88%_52%/0.08)] font-semibold text-black"
                        : "border-[hsl(0_0%_85%)] hover:border-[hsl(0_0%_60%)] text-[hsl(0_0%_30%)]"
                    }`}
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-[hsl(0_0%_50%)] mt-0.5">{item.duration} хв</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Tier */}
            <div>
              <label className="block font-display text-xl font-bold uppercase text-[hsl(0_0%_15%)] mb-3">
                {t("calculator.selectTier") as string}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(["junior", "barber", "top", "grand"] as const).map((tk) => (
                  <button
                    key={tk}
                    onClick={() => setTierKey(tk)}
                    className={`py-3 px-3 min-h-[44px] text-center rounded-lg border text-xs sm:text-sm font-bold uppercase transition-all ${
                      tierKey === tk
                        ? "bg-[hsl(0_0%_10%)] text-white border-[hsl(0_0%_10%)] shadow"
                        : "border-[hsl(0_0%_85%)] text-[hsl(0_0%_40%)] hover:border-[hsl(0_0%_60%)]"
                    }`}
                  >
                    {pricingData.tiers[tk].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label className="block font-display text-xl font-bold uppercase text-[hsl(0_0%_15%)] mb-3">
                {t("calculator.selectAddons") as string}
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg border border-[hsl(0_0%_88%)] cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="flex items-center gap-2 text-sm text-[hsl(0_0%_25%)] font-medium">
                    <input
                      type="checkbox"
                      checked={addons.blackMask}
                      onChange={(e) => setAddons({ ...addons, blackMask: e.target.checked })}
                      className="w-4 h-4 accent-[hsl(38_88%_52%)]"
                    />
                    Black Mask очищення обличчя (+350 грн)
                  </span>
                  <span className="text-xs text-[hsl(0_0%_50%)]">+15 хв</span>
                </label>

                <label className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg border border-[hsl(0_0%_88%)] cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="flex items-center gap-2 text-sm text-[hsl(0_0%_25%)] font-medium">
                    <input
                      type="checkbox"
                      checked={addons.waxing}
                      onChange={(e) => setAddons({ ...addons, waxing: e.target.checked })}
                      className="w-4 h-4 accent-[hsl(38_88%_52%)]"
                    />
                    Waxing носа/вух воском (+100 грн)
                  </span>
                  <span className="text-xs text-[hsl(0_0%_50%)]">+10 хв</span>
                </label>

                <label className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg border border-[hsl(0_0%_88%)] cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="flex items-center gap-2 text-sm text-[hsl(0_0%_25%)] font-medium">
                    <input
                      type="checkbox"
                      checked={addons.scalpCare}
                      onChange={(e) => setAddons({ ...addons, scalpCare: e.target.checked })}
                      className="w-4 h-4 accent-[hsl(38_88%_52%)]"
                    />
                    СПА-догляд за шкірою голови (+300 грн)
                  </span>
                  <span className="text-xs text-[hsl(0_0%_50%)]">+15 хв</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Card Side */}
          <div className="lg:col-span-5 bg-[hsl(0_0%_8%)] text-white p-6 sm:p-8 rounded-xl flex flex-col justify-between h-full border border-[hsl(0_0%_18%)]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[hsl(38_88%_52%)] font-semibold">
                Підсумок розрахунку
              </span>
              <div className="mt-4 pb-4 border-b border-[hsl(0_0%_20%)]">
                <div className="text-sm text-[hsl(0_0%_70%)]">{t("calculator.chosenService") as string}</div>
                <div className="font-display text-2xl font-bold uppercase text-white mt-0.5">
                  {selectedService.name}
                </div>
                <div className="text-xs text-[hsl(38_88%_52%)] mt-1 font-semibold">
                  Майстер: {pricingData.tiers[tierKey].name}
                </div>
              </div>

              <div className="my-6 space-y-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between text-sm">
                  <span className="text-[hsl(0_0%_70%)]">{t("calculator.estTime") as string}</span>
                  <span className="font-mono text-lg font-bold text-white">{duration} {t("calculator.minutes") as string}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between text-sm">
                  <span className="text-[hsl(0_0%_70%)]">{t("calculator.parking") as string}</span>
                  <span className="text-emerald-400 font-semibold">{t("calculator.free") as string}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between text-sm">
                  <span className="text-[hsl(0_0%_70%)]">{t("calculator.drinksWhiskey") as string}</span>
                  <span className="text-emerald-400 font-semibold">{t("calculator.included") as string}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[hsl(0_0%_20%)]">
              <div className="text-xs text-[hsl(0_0%_60%)] uppercase tracking-wider mb-1">
                {t("calculator.totalPrice") as string}
              </div>
              <div className="font-display text-5xl font-extrabold text-[hsl(38_88%_52%)] tracking-tight mb-6">
                {finalPrice} грн
              </div>

              <a
                href="#booking"
                className="w-full block text-center py-4 min-h-[44px] flex items-center justify-center bg-[hsl(38_88%_52%)] hover:bg-[hsl(35_92%_44%)] text-[hsl(0_0%_5%)] font-display text-xl uppercase font-extrabold tracking-wider rounded transition-transform active:scale-98"
              >
                {t("calculator.bookCalculated") as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
