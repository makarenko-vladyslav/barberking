"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

interface MasterOption {
  id: string;
  name: string;
  sub: string;
}

export default function Calculator() {
  const { t } = useLocale();

  const kicker = t("calculator.kicker") as string;
  const title = t("calculator.title") as string;
  const subtitle = t("calculator.subtitle") as string;
  const selectServiceLabel = t("calculator.selectService") as string;
  const selectMasterLabel = t("calculator.selectMaster") as string;
  const masters = (t("calculator.masters") as MasterOption[]) || [];

  const [selectedService, setSelectedService] = useState<string>("haircut");
  const [hasBeard, setHasBeard] = useState<boolean>(false);
  const [hasCare, setHasCare] = useState<boolean>(false);
  const [selectedMaster, setSelectedMaster] = useState<string>("barber");

  // Calculate live estimate
  const baseServicePrice =
    pricing.basePrices[selectedService as keyof typeof pricing.basePrices] || 750;
  const beardPrice = hasBeard ? pricing.basePrices.beard : 0;
  const carePrice = hasCare ? pricing.basePrices.blackMask : 0;

  const rawSum = baseServicePrice + beardPrice + carePrice;
  const masterMult =
    pricing.masterMultipliers[selectedMaster as keyof typeof pricing.masterMultipliers] || 1.0;

  const finalEstimate = Math.round(rawSum * masterMult);
  const estimatedTime = 45 + (hasBeard ? 30 : 0) + (hasCare ? 20 : 0);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[hsl(0_0%_7%)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Interactive Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl bg-[hsl(0_0%_11%)] border border-white/10 shadow-2xl">
          {/* Controls Side (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Step 1: Main Service */}
            <div>
              <label className="text-sm font-mono text-[hsl(32_90%_50%)] uppercase block mb-3">
                1. {selectServiceLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "haircut", label: "Чоловіча стрижка", price: "750 грн" },
                  { id: "royalShave", label: "Королівське гоління", price: "500 грн" },
                  { id: "fatherSon", label: "Батько та син", price: "1150 грн" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      selectedService === s.id
                        ? "bg-[hsl(32_90%_50%/0.15)] border-[hsl(32_90%_50%)] text-white"
                        : "bg-white/5 border-white/10 hover:border-white/30 text-white/70"
                    }`}
                  >
                    <span className="font-display font-bold text-xl uppercase">
                      {s.label}
                    </span>
                    <span className="text-xs font-mono text-[hsl(32_90%_50%)] mt-2">
                      від {s.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div>
              <label className="text-sm font-mono text-[hsl(32_90%_50%)] uppercase block mb-3">
                2. Додати до візиту
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    hasBeard
                      ? "bg-[hsl(32_90%_50%/0.15)] border-[hsl(32_90%_50%)]"
                      : "bg-white/5 border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasBeard}
                      onChange={(e) => setHasBeard(e.target.checked)}
                      className="w-5 h-5 accent-[hsl(32_90%_50%)]"
                    />
                    <div>
                      <span className="font-display font-bold text-lg uppercase block">
                        Моделювання бороди
                      </span>
                      <span className="text-xs text-white/60">
                        +550 грн (30 хв)
                      </span>
                    </div>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    hasCare
                      ? "bg-[hsl(32_90%_50%/0.15)] border-[hsl(32_90%_50%)]"
                      : "bg-white/5 border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasCare}
                      onChange={(e) => setHasCare(e.target.checked)}
                      className="w-5 h-5 accent-[hsl(32_90%_50%)]"
                    />
                    <div>
                      <span className="font-display font-bold text-lg uppercase block">
                        Black Mask догляд
                      </span>
                      <span className="text-xs text-white/60">
                        +350 грн (20 хв)
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 3: Master Tier */}
            <div>
              <label className="text-sm font-mono text-[hsl(32_90%_50%)] uppercase block mb-3">
                3. {selectMasterLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {masters.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMaster(m.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedMaster === m.id
                        ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-bold border-[hsl(32_90%_50%)]"
                        : "bg-white/5 border-white/10 text-white/70 hover:border-white/30"
                    }`}
                  >
                    <span className="font-display font-bold text-lg uppercase block leading-tight">
                      {m.name}
                    </span>
                    <span className="text-[0.65rem] opacity-75 block mt-1">
                      {m.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Summary Panel (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[hsl(32_90%_50%)] block mb-4">
                Підсумок розрахунку
              </span>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/70">Оригінальна калькуляція:</span>
                  <span className="font-mono text-white font-bold">{rawSum} грн</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/70">Категорія майстра:</span>
                  <span className="font-mono text-[hsl(32_90%_50%)] font-bold">
                    {masters.find((m) => m.id === selectedMaster)?.name}
                  </span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/70">Тривалість:</span>
                  <span className="font-mono text-white font-bold">~ {estimatedTime} хв</span>
                </div>
              </div>

              <div className="bg-[hsl(0_0%_7%)] p-4 rounded-xl border border-white/10 mb-6 text-center">
                <span className="text-xs font-mono uppercase text-white/60 block mb-1">
                  Підсумкова вартість
                </span>
                <span className="font-display font-extrabold text-5xl text-[hsl(32_90%_50%)]">
                  {finalEstimate} грн
                </span>
              </div>
            </div>

            <a
              href="#booking"
              className="w-full py-4 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-xl tracking-wider text-center hover:bg-[hsl(28_95%_45%)] transition-colors shadow-lg"
            >
              Записатись за розрахунком
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}