"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

interface BookingCalculatorProps {
  onOpenBooking: () => void;
}

export default function BookingCalculator({ onOpenBooking }: BookingCalculatorProps) {
  const { t } = useLocale();

  const [location, setLocation] = useState<string>("lukyanivka");
  const [tier, setTier] = useState<"junior" | "barber" | "top" | "grand">("barber");
  const [service, setService] = useState<keyof typeof pricing.basePrices>("combo");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["black_mask"]);

  const basePrice = pricing.basePrices[service][tier];

  const addonsTotal = selectedAddons.reduce((acc, addonKey) => {
    return acc + (pricing.addons[addonKey as keyof typeof pricing.addons] || 0);
  }, 0);

  const totalPrice = basePrice + addonsTotal;

  const toggleAddon = (key: string) => {
    if (selectedAddons.includes(key)) {
      setSelectedAddons(selectedAddons.filter((k) => k !== key));
    } else {
      setSelectedAddons([...selectedAddons, key]);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-[hsl(24_14%_11%)] border-y border-[hsl(36_10%_22%)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold mb-2 block">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-3">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-sm text-[hsl(36_8%_70%)]">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] p-6 rounded-md space-y-6">
            {/* Location selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] mb-2 font-bold">
                {String(t("calculator.selectLocation"))}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: "lukyanivka", label: String(t("calcLoc.lukyanivka")) },
                  { id: "great", label: String(t("calcLoc.great")) },
                  { id: "varshavsky", label: String(t("calcLoc.varshavsky")) },
                  { id: "urlivska", label: String(t("calcLoc.urlivska")) },
                ].map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setLocation(loc.id)}
                    className={`p-3 rounded text-left transition-all border font-semibold min-h-[44px] ${
                      location === loc.id
                        ? "bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] border-[hsl(32_95%_50%)]"
                        : "bg-[hsl(24_16%_8%)] text-[hsl(36_10%_80%)] border-[hsl(36_10%_22%)] hover:border-[hsl(32_95%_50%/0.4)]"
                    }`}
                  >
                    📍 {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Barber Tier selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] mb-2 font-bold">
                {String(t("calculator.selectTier"))}
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs font-display uppercase font-bold">
                {[
                  { id: "junior", label: String(t("calcTier.junior")) },
                  { id: "barber", label: String(t("calcTier.barber")) },
                  { id: "top", label: String(t("calcTier.top")) },
                  { id: "grand", label: String(t("calcTier.grand")) },
                ].map((tItem) => (
                  <button
                    key={tItem.id}
                    onClick={() => setTier(tItem.id as any)}
                    className={`p-3 text-center rounded transition-all border min-h-[44px] ${
                      tier === tItem.id
                        ? "bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] border-[hsl(32_95%_50%)]"
                        : "bg-[hsl(24_16%_8%)] text-[hsl(36_10%_80%)] border-[hsl(36_10%_22%)]"
                    }`}
                  >
                    {tItem.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Service selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] mb-2 font-bold">
                {String(t("calculator.selectService"))}
              </label>
              <div className="space-y-2">
                {[
                  { id: "haircut", name: String(t("calcServ.haircut")) },
                  { id: "combo", name: String(t("calcServ.combo")) },
                  { id: "beard", name: String(t("calcServ.beard")) },
                  { id: "royal_shave", name: String(t("calcServ.royal_shave")) },
                  { id: "father_son", name: String(t("calcServ.father_son")) },
                ].map((sItem) => (
                  <button
                    key={sItem.id}
                    onClick={() => setService(sItem.id as any)}
                    className={`w-full p-3.5 rounded text-left flex justify-between items-center transition-all border text-sm font-semibold min-h-[44px] ${
                      service === sItem.id
                        ? "bg-[hsl(24_16%_8%)] border-[hsl(32_95%_50%)] text-[hsl(32_95%_50%)]"
                        : "bg-[hsl(24_16%_8%)] border-[hsl(36_10%_22%)] text-[hsl(36_10%_80%)]"
                    }`}
                  >
                    <span>{sItem.name}</span>
                    <span className="font-display font-bold text-base">
                      {pricing.basePrices[sItem.id as keyof typeof pricing.basePrices][tier]} {String(t("currency.uah"))}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Addons selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] mb-2 font-bold">
                {String(t("calculator.selectAddons"))}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: "black_mask", name: String(t("calcAddon.black_mask")) },
                  { id: "waxing", name: String(t("calcAddon.waxing")) },
                  { id: "grey_camouflage", name: String(t("calcAddon.grey_camouflage")) },
                  { id: "head_massage", name: String(t("calcAddon.head_massage")) },
                ].map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded text-left transition-all border font-sans min-h-[44px] ${
                        isChecked
                          ? "bg-[hsl(32_95%_50%/0.2)] border-[hsl(32_95%_50%)] text-[hsl(36_10%_92%)]"
                          : "bg-[hsl(24_16%_8%)] border-[hsl(36_10%_22%)] text-[hsl(36_8%_65%)]"
                      }`}
                    >
                      {isChecked ? "✓ " : "+ "} {addon.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[hsl(24_14%_14%)] to-[hsl(24_16%_8%)] border-2 border-[hsl(32_95%_50%)] p-6 sm:p-8 rounded-md shadow-2xl flex flex-col justify-between sticky top-28">
            <div>
              <div className="inline-block px-3 py-1 bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] font-display font-bold uppercase text-xs rounded mb-4">
                {String(t("calculator.summaryBadge"))}
              </div>
              <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-[hsl(36_10%_92%)] mb-4">
                Barberking Kyiv
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[hsl(36_8%_75%)] border-y border-[hsl(36_10%_22%)] py-4 my-4">
                <div className="flex justify-between">
                  <span>{String(t("calculator.branchLabel"))}</span>
                  <span className="font-semibold text-white uppercase">
                    {location === "lukyanivka" && String(t("calcLoc.lukyanivka"))}
                    {location === "great" && String(t("calcLoc.great"))}
                    {location === "varshavsky" && String(t("calcLoc.varshavsky"))}
                    {location === "urlivska" && String(t("calcLoc.urlivska"))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{String(t("calculator.barberTierLabel"))}</span>
                  <span className="font-semibold text-[hsl(32_95%_50%)] uppercase">
                    {tier} Barber
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{String(t("calculator.selectedServicesLabel"))}</span>
                  <span className="font-semibold text-white">
                    {selectedAddons.length + 1} {String(t("calculator.itemsCount"))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{String(t("calculator.freeParkingLabel"))}</span>
                  <span className="text-[hsl(160_70%_45%)] font-bold">{String(t("calculator.includedBadge"))}</span>
                </div>
                <div className="flex justify-between">
                  <span>{String(t("calculator.drinksLabel"))}</span>
                  <span className="text-[hsl(160_70%_45%)] font-bold">{String(t("calculator.freeBadge"))}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs uppercase font-mono text-[hsl(36_8%_65%)]">
                  {String(t("calculator.totalLabelText"))}
                </span>
                <span className="text-4xl sm:text-5xl font-display font-bold text-[hsl(32_95%_50%)] tracking-tight">
                  {totalPrice} {String(t("currency.uah"))}
                </span>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[hsl(32_95%_50%)] hover:bg-[hsl(35_100%_44%)] text-[hsl(24_15%_9%)] font-display font-bold text-lg uppercase tracking-widest py-4 rounded-sm transition-all shadow-xl hover:shadow-[hsl(32_95%_50%/0.4)] min-h-[44px]"
              >
                {String(t("calculator.bookNow"))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}