"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [tierId, setTierId] = useState("barber");
  const [selectedServices, setSelectedServices] = useState<string[]>(["haircut"]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const money = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const currentTier = pricingData.tiers.find((t) => t.id === tierId) || pricingData.tiers[1];

  let totalPrice = 0;
  let totalTimeMinutes = 0;

  if (selectedServices.includes("haircut")) {
    totalPrice += currentTier.haircut;
    totalTimeMinutes += 45;
  }
  if (selectedServices.includes("combo")) {
    totalPrice += currentTier.combo;
    totalTimeMinutes += 60;
  }
  if (selectedServices.includes("beard")) {
    totalPrice += currentTier.beard;
    totalTimeMinutes += 30;
  }

  selectedAddOns.forEach((addonId) => {
    const item = pricingData.addOns.find((a) => a.id === addonId);
    if (item) {
      totalPrice += item.price;
      totalTimeMinutes += 15;
    }
  });

  return (
    <section className="py-20 bg-zinc-950 relative border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
            {t("calculator.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4">
            {t("calculator.title") as string}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            {t("calculator.subtitle") as string}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Options Selector */}
            <div className="md:col-span-7 space-y-6">
              {/* Master Tier */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                  {t("calculator.masterLabel") as string}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {pricingData.tiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setTierId(tier.id)}
                      className={`p-3 rounded-lg text-left border transition-all ${
                        tierId === tier.id
                          ? "bg-amber-500/20 border-amber-500 text-white"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <div className="font-display font-bold uppercase text-lg leading-tight">{tier.name}</div>
                      <div className="text-[11px] text-zinc-400 font-mono">від {money(tier.haircut)} грн</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Services */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                  {t("calculator.servicesLabel") as string}
                </label>
                <div className="space-y-2">
                  {[
                    { id: "haircut", label: t("calculator.serviceHaircut") as string },
                    { id: "combo", label: "Стрижка + Стрижка бороди (Комплекс)" },
                    { id: "beard", label: "Стрижка та окантовка бороди" },
                  ].map((srv) => {
                    const active = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`w-full p-3 rounded-lg flex items-center justify-between border transition-all text-left ${
                          active
                            ? "bg-amber-500/10 border-amber-500 text-amber-300 font-medium"
                            : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <span className="text-sm">{srv.label}</span>
                        <span className={`w-5 h-5 rounded flex items-center justify-center border text-xs font-bold ${active ? "bg-amber-500 border-amber-500 text-zinc-950" : "border-zinc-700"}`}>
                          {active ? "✓" : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                  {t("calculator.addonsLabel") as string}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pricingData.addOns.map((addon) => {
                    const active = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-2.5 rounded-lg text-left border text-xs transition-all flex items-center justify-between ${
                          active
                            ? "bg-amber-500/20 border-amber-500 text-amber-200"
                            : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <span>{addon.name}</span>
                        <span className="font-mono text-amber-400">+{addon.price} грн</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Total Summary Box */}
            <div className="md:col-span-5 flex flex-col justify-between bg-zinc-950 p-6 rounded-xl border border-zinc-800">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-4">
                  ПІДСУМОК ВІЗИТУ
                </h3>

                <div className="space-y-3 mb-6 text-xs text-zinc-300">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500">{t("calculator.masterLabel") as string}</span>
                    <span className="font-semibold text-white">{currentTier.name}</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500">{t("calculator.totalTime") as string}</span>
                    <span className="font-semibold text-amber-400">{totalTimeMinutes} хв</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
                    {t("calculator.totalEstimate") as string}
                  </div>
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-amber-400 tabular-nums">
                    {money(totalPrice)} грн
                  </div>
                </div>
              </div>

              <a
                href="#booking"
                className="block w-full text-center py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-xl rounded transition-colors"
              >
                Забронювати цей час
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}