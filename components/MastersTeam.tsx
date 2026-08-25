
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function MastersTeam() {
  const { t } = useLocale();

  const kicker = t("teamSection.kicker") as string;
  const title = t("teamSection.title") as string;
  const subtitle = t("teamSection.subtitle") as string;
  const masters = (t("teamSection.masters") as Array<{ name: string; role: string; branch: string; exp: string; photoUrl: string; specialty: string }>) || [];

  return (
    <section id="masters" className="py-24 bg-[hsl(0_0%_7%)] text-white relative">
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

        {/* Master Team Cards Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master, idx) => (
            <StaggerItem
              key={idx}
              className="bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] rounded-xl overflow-hidden hover:border-[hsl(38_88%_52%/0.5)] transition-all flex flex-col justify-between group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[hsl(0_0%_12%)]">
                <img
                  src={master.photoUrl}
                  alt={master.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_9%)] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[hsl(0_0%_5%/0.8)] backdrop-blur-md text-[hsl(38_88%_52%)] font-display text-sm uppercase tracking-wider font-bold rounded border border-[hsl(38_88%_52%/0.3)]">
                  {master.role}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-3xl font-extrabold uppercase tracking-wide text-white mb-1">
                    {master.name}
                  </h3>
                  <div className="text-xs text-[hsl(38_88%_52%)] font-semibold mb-3">
                    {master.branch} · {master.exp}
                  </div>
                  <p className="text-sm text-[hsl(0_0%_70%)] font-light">
                    {master.specialty}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[hsl(0_0%_15%)]">
                  <a
                    href={`#booking?master=${encodeURIComponent(master.name)}`}
                    className="w-full block text-center py-3 min-h-[44px] flex items-center justify-center bg-[hsl(0_0%_15%)] hover:bg-[hsl(38_88%_52%)] text-white hover:text-black font-display uppercase tracking-wider font-bold text-sm rounded transition-colors"
                  >
                    Записатися до майстра
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
