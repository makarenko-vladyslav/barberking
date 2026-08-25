
"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function LocationsMap() {
  const { t } = useLocale();

  const kicker = t("locations.kicker") as string;
  const title = t("locations.title") as string;
  const subtitle = t("locations.subtitle") as string;
  const mapFilter = t("locations.mapFilter") as string;
  const branches = (t("locations.branches") as Array<{
    name: string;
    address: string;
    subway: string;
    parking: string;
    phone: string;
    hours: string;
    mapQuery: string;
  }>) || [];

  const [selectedBranch, setSelectedBranch] = useState(0);
  const activeBranch = branches[selectedBranch] || branches[0];

  return (
    <section id="locations" className="py-24 bg-[hsl(0_0%_7%)] text-white relative border-b border-[hsl(0_0%_14%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Branch Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {branches.map((b, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBranch(idx)}
                className={`w-full text-left p-6 min-h-[44px] rounded-xl border transition-all ${
                  selectedBranch === idx
                    ? "bg-[hsl(0_0%_12%)] border-[hsl(38_88%_52%)] shadow-lg"
                    : "bg-[hsl(0_0%_9%)] border-[hsl(0_0%_16%)] hover:border-[hsl(0_0%_25%)]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {b.name}
                  </h3>
                  {selectedBranch === idx && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[hsl(38_88%_52%)]" />
                  )}
                </div>
                <div className="text-sm font-semibold text-[hsl(38_88%_52%)] mb-2">
                  {b.address}
                </div>
                <div className="text-xs text-[hsl(0_0%_70%)] space-y-1 font-mono">
                  <div>{t("locations.subwayLabel") as string}: {b.subway}</div>
                  <div>{t("locations.parkingLabel") as string}: {b.parking}</div>
                  <div>{t("locations.hoursLabel") as string}: {b.hours}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_18%)] rounded-2xl overflow-hidden p-3 flex flex-col justify-between h-full min-h-[450px]">
            <div className="w-full h-[380px] rounded-xl overflow-hidden relative">
              <iframe
                src={`https://www.google.com/maps?q=${activeBranch.mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: mapFilter }}
                allowFullScreen
                loading="lazy"
                title={`${t("locations.mapTitlePrefix") as string} - ${activeBranch.name}`}
              />
            </div>

            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div>
                <div className="font-display text-xl font-bold uppercase text-white">
                  {activeBranch.name}
                </div>
                <div className="text-xs text-[hsl(0_0%_70%)] font-mono">
                  {activeBranch.address} · {t("locations.phonePrefix") as string}: {activeBranch.phone}
                </div>
              </div>

              <a
                href={`https://www.google.com/maps?q=${activeBranch.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 min-h-[44px] flex items-center justify-center bg-[hsl(38_88%_52%)] text-black font-display text-sm uppercase font-bold tracking-wider rounded text-center shrink-0 hover:bg-[hsl(35_92%_44%)] transition-colors"
              >
                {t("locations.routeBtn") as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
