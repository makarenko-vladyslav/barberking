"use client";
import { useState, useId } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();
  const [selectedTier, setSelectedTier] = useState<string>("barber");
  const [selectedServices, setSelectedServices] = useState<string[]>(["haircut", "beard"]);
  const [extraGuests, setExtraGuests] = useState<number>(1);
  const guestSliderId = useId();

  const handleToggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const currentTierObj = pricingData.tiers.find((tier) => tier.id === selectedTier) || pricingData.tiers[1];
  const tierMultiplier = currentTierObj.multiplier;

  const baseSum = selectedServices.reduce((acc, sId) => {
    const sObj = pricingData.services.find((s) => s.id === sId);
    return acc + (sObj ? sObj.price : 0);
  }, 0);

  const baseDuration = selectedServices.reduce((acc, sId) => {
    const sObj = pricingData.services.find((s) => s.id === sId);
    return acc + (sObj ? sObj.duration : 0);
  }, 0);

  const calculatedTotal = Math.round(baseSum * tierMultiplier * extraGuests);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("pricingCalculator.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("pricingCalculator.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("pricingCalculator.subtitle"))}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-bg-surface p-6 sm:p-8 rounded border border-border-dark">
            {/* Step 1: Select Master Seniority */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                {String(t("pricingCalculator.levelLabel"))}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {pricingData.tiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`min-h-[44px] py-3 px-3 rounded font-display text-lg uppercase tracking-wider border transition-[border-color,background-color,color] duration-200 ease-out ${
                      selectedTier === tier.id
                        ? "bg-accent text-bg-dark font-bold border-accent"
                        : "bg-bg-dark text-text-muted border-border-dark hover:border-text-muted hover:text-text-light"
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Services */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                {String(t("pricingCalculator.servicesLabel"))}
              </label>
              <div className="space-y-2.5">
                {pricingData.services.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => handleToggleService(srv.id)}
                      className={`w-full min-h-[44px] p-3.5 rounded border text-left flex items-center justify-between transition-colors duration-200 ease-out ${
                        isChecked
                          ? "bg-bg-dark border-accent text-text-light"
                          : "bg-bg-dark/40 border-border-dark text-text-muted hover:border-border-dark"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold border transition-colors duration-200 ease-out ${
                            isChecked
                              ? "bg-accent text-bg-dark border-accent"
                              : "border-border-dark text-transparent"
                          }`}
                        >
                          ✓
                        </span>
                        <span className="font-display text-xl uppercase font-semibold">
                          {srv.name}
                        </span>
                      </div>
                      <span className="font-display text-xl font-bold text-accent">
                        {srv.price} {String(t("pricingCalculator.currency"))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Range Slider for Guests */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={guestSliderId}
                  className="text-xs font-semibold uppercase tracking-wider text-text-muted"
                >
                  {String(t("pricingCalculator.guestsLabel"))}
                </label>
                <span className="font-display text-2xl font-bold text-accent">
                  {extraGuests} {extraGuests === 1 ? String(t("pricingCalculator.guestSuffix1")) : extraGuests < 5 ? String(t("pricingCalculator.guestSuffixFew")) : String(t("pricingCalculator.guestSuffixMany"))}
                </span>
              </div>
              <input
                id={guestSliderId}
                type="range"
                min="1"
                max="4"
                step="1"
                value={extraGuests}
                onChange={(e) => setExtraGuests(parseInt(e.target.value))}
                className="w-full h-2 bg-bg-dark rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1 font-mono">
                <span>{String(t("pricingCalculator.guest1"))}</span>
                <span>{String(t("pricingCalculator.guest2"))}</span>
                <span>{String(t("pricingCalculator.guest3"))}</span>
                <span>{String(t("pricingCalculator.guest4"))}</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-primary p-6 sm:p-8 rounded border border-border-dark sticky top-28">
            <div className="text-xs uppercase tracking-widest text-accent font-display">
              {String(t("pricingCalculator.summaryKicker"))}
            </div>

            <div className="mt-6 flex items-baseline justify-between border-b border-border-dark pb-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-text-muted">
                  {String(t("pricingCalculator.totalLabel"))}
                </div>
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-accent mt-1">
                  {calculatedTotal} <span className="text-2xl text-text-light">{String(t("pricingCalculator.currency"))}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-text-muted">
                  {String(t("pricingCalculator.timeLabel"))}
                </div>
                <div className="font-display text-3xl font-bold text-text-light mt-1">
                  ~{baseDuration} хв
                </div>
              </div>
            </div>

            <div className="py-6 space-y-3 border-b border-border-dark text-sm">
              <div className="flex justify-between text-text-muted">
                <span>{String(t("pricingCalculator.rankLabel"))}</span>
                <span className="text-text-light font-semibold uppercase">
                  {currentTierObj.name}
                </span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>{String(t("pricingCalculator.countLabel"))}</span>
                <span className="text-text-light font-semibold">
                  {selectedServices.length}
                </span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>{String(t("pricingCalculator.parkingLabel"))}</span>
                <span className="text-accent font-semibold">{String(t("pricingCalculator.includedValue"))}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>{String(t("pricingCalculator.drinksLabel"))}</span>
                <span className="text-accent font-semibold">{String(t("pricingCalculator.freeValue"))}</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#booking"
                className="w-full min-h-[44px] py-4 bg-accent text-bg-dark font-display text-2xl font-bold uppercase tracking-wider rounded text-center inline-flex items-center justify-center hover:bg-accent-deep transition-colors duration-200 ease-out"
              >
                {String(t("pricingCalculator.bookButton"))}
              </a>
              <p className="mt-3 text-center text-xs text-text-muted">
                {String(t("pricingCalculator.disclaimer"))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}