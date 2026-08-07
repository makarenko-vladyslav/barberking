"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedService, setSelectedService] = useState(pricingData.baseServices[0].id);
  const [selectedMaster, setSelectedMaster] = useState("Barber");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const baseObj = pricingData.baseServices.find((s) => s.id === selectedService) || pricingData.baseServices[0];
  const multiplier = (pricingData.mastersMultipliers as Record<string, number>)[selectedMaster] || 1.0;

  const basePriceCalculated = Math.round(baseObj.price * multiplier);
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const found = pricingData.addons.find((a) => a.id === addonId);
    return acc + (found ? found.price : 0);
  }, 0);

  const grandTotal = basePriceCalculated + addonsTotal;

  return (
    <section id="calculator" className="py-24 bg-bg-light text-text-main scroll-mt-20 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            ОНЛАЙН-РОЗРАХУНОК
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-stone-900 tracking-wide uppercase">
            РОЗРАХУНОК ВАРТОСТІ ТА ЧАСУ ВІЗИТУ
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Оберіть необхідну послугу, категорію майстра та додаткові доглядові процедури для прозорого підсумку.
          </p>
        </div>

        {/* Interactive Calculator Surface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-stone-300 shadow-md rounded-xs space-y-8">
            {/* Step 1 */}
            <div>
              <label className="block font-display font-bold text-xl uppercase mb-4 text-stone-900">
                1. ОСНОВНА ПОСЛУГА:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingData.baseServices.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-4 text-left border rounded-xs transition-all flex flex-col justify-between ${
                      selectedService === srv.id
                        ? "border-amber-600 bg-amber-50/80 text-stone-900 shadow-sm font-semibold"
                        : "border-stone-200 hover:border-stone-400 text-stone-700"
                    }`}
                  >
                    <span className="text-sm font-semibold">{srv.name}</span>
                    <span className="font-display font-bold text-stone-900 text-lg mt-2 tabular-nums">
                      від {srv.price} {pricingData.currency}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <label className="block font-display font-bold text-xl uppercase mb-4 text-stone-900">
                2. КАТЕГОРІЯ МАЙСТРА:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.keys(pricingData.mastersMultipliers).map((masterKey) => (
                  <button
                    key={masterKey}
                    type="button"
                    onClick={() => setSelectedMaster(masterKey)}
                    className={`p-3 text-center border font-display text-base uppercase transition-all ${
                      selectedMaster === masterKey
                        ? "bg-stone-900 text-amber-400 border-stone-900 font-bold shadow-xs"
                        : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {masterKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <label className="block font-display font-bold text-xl uppercase mb-4 text-stone-900">
                3. ДОДАТКОВИЙ ДОГЛЯД:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingData.addons.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 border text-left flex items-center justify-between transition-colors ${
                        isSelected
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-200 text-stone-700 hover:border-stone-400"
                      }`}
                    >
                      <span className="text-xs font-medium">{addon.name}</span>
                      <span className="font-display font-bold text-sm ml-2 tabular-nums">
                        +{addon.price} {pricingData.currency}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Summary Box */}
          <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 shadow-xl rounded-xs border border-stone-800 sticky top-28">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
              ПІДСУМОК РОЗРАХУНКУ
            </span>
            <h3 className="font-display font-bold text-3xl text-white mt-1 mb-6 uppercase">
              ОРИЄНТОВНИЙ БЮДЖЕТ
            </h3>

            <div className="space-y-4 text-sm border-b border-stone-800 pb-6 mb-6 font-mono">
              <div className="flex justify-between items-center text-stone-300">
                <span>Основна послуга:</span>
                <span className="font-semibold text-white">{baseObj.name}</span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span>Рівень майстра:</span>
                <span className="font-semibold text-amber-400">{selectedMaster}</span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span>Тривалість:</span>
                <span className="text-stone-200">{baseObj.time}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between items-start text-stone-300">
                  <span>Додатково:</span>
                  <span className="text-right text-xs text-stone-400 max-w-[180px]">
                    {selectedAddons
                      .map((id) => pricingData.addons.find((a) => a.id === id)?.name)
                      .join(", ")}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col mb-8">
              <span className="text-xs text-stone-400 uppercase tracking-wider font-mono">
                ОРІЄНТОВНА ВАРТІСТЬ:
              </span>
              <span className="font-display font-black text-5xl text-amber-400 mt-1 tabular-nums">
                ~ {grandTotal} {pricingData.currency}
              </span>
            </div>

            <a
              href="#contact"
              className="block text-center w-full bg-accent text-bg-dark font-display font-bold py-4 text-xl uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-lg"
            >
              Забронювати вибір online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
