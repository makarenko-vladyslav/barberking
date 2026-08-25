"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

export default function LocationsMap() {
  const { t } = useLocale();
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);

  const kicker = String(t("locations.kicker"));
  const title = String(t("locations.title"));
  const subtitle = String(t("locations.subtitle"));
  const branches = content.locales.uk.locations.items;

  const currentBranch = branches[activeBranchIndex];

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[hsl(24_16%_8%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold mb-2 block">
            {kicker}
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-4">
            {title}
          </h2>
          <p className="text-[hsl(36_8%_70%)] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Locations Grid Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {branches.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setActiveBranchIndex(idx)}
              className={`p-5 rounded-md text-left transition-all border min-h-[44px] ${
                activeBranchIndex === idx
                  ? "bg-[hsl(24_14%_14%)] border-[hsl(32_95%_50%)] shadow-xl"
                  : "bg-[hsl(24_14%_12%)] border-[hsl(36_10%_22%)] opacity-75 hover:opacity-100"
              }`}
            >
              <div className="text-xs font-mono uppercase text-[hsl(32_95%_50%)] font-bold mb-1">
                {b.district}
              </div>
              <div className="font-display font-bold text-xl text-[hsl(36_10%_92%)] uppercase">
                {b.address}
              </div>
              <div className="text-xs text-[hsl(36_8%_65%)] mt-2 flex items-center gap-1.5">
                <span className="text-[hsl(32_95%_50%)]">🚗</span> {b.parking}
              </div>
            </button>
          ))}
        </div>

        {/* Active Location Detail & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] rounded-lg overflow-hidden p-6 lg:p-8">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[hsl(32_95%_50%/0.15)] border border-[hsl(32_95%_50%/0.3)] text-[hsl(32_95%_50%)] text-xs font-mono uppercase font-bold rounded mb-4">
                {String(t("locations.selectedBranchBadge"))}
              </span>
              <h3 className="text-3xl font-display font-bold text-[hsl(36_10%_92%)] uppercase mb-2">
                {currentBranch.district}
              </h3>
              <p className="text-xl font-display text-[hsl(32_95%_50%)] font-bold mb-6">
                📍 {currentBranch.address}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[hsl(36_8%_75%)]">
                <div className="p-3 bg-[hsl(24_16%_8%)] rounded border border-[hsl(36_10%_22%)]">
                  <span className="font-bold text-white block mb-0.5">{String(t("locations.landmarkLabel"))}</span>
                  {currentBranch.landmark}
                </div>
                <div className="p-3 bg-[hsl(24_16%_8%)] rounded border border-[hsl(36_10%_22%)]">
                  <span className="font-bold text-[hsl(32_95%_50%)] block mb-0.5">
                    🚗 {String(t("locations.parkingLabel"))}
                  </span>
                  {currentBranch.parking}
                </div>
                <div className="p-3 bg-[hsl(24_16%_8%)] rounded border border-[hsl(36_10%_22%)]">
                  <span className="font-bold text-white block mb-0.5">{String(t("locations.hoursLabel"))}</span>
                  {currentBranch.hours}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[hsl(36_10%_22%)] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[hsl(36_8%_55%)] uppercase block">
                  {String(t("locations.phoneTitleLabel"))}
                </span>
                <a
                  href={`tel:${currentBranch.phone}`}
                  className="text-lg font-display font-bold text-white hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block"
                >
                  {currentBranch.phone}
                </a>
              </div>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(currentBranch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(32_95%_50%)] hover:bg-[hsl(35_100%_44%)] text-[hsl(24_15%_9%)] px-4 py-3 text-xs font-display font-bold uppercase rounded min-h-[44px] flex items-center"
              >
                {String(t("locations.routeCta"))}
              </a>
            </div>
          </div>

          {/* Map Preview Embed */}
          <div className="lg:col-span-7 h-[300px] lg:h-[450px] w-full rounded-md overflow-hidden border border-[hsl(36_10%_22%)] relative">
            <iframe
              title={String(t("locations.mapTitlePrefix")) + ` ${currentBranch.address}`}
              src={currentBranch.embedUrl}
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 brightness-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}