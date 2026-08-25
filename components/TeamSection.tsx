"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

interface TeamSectionProps {
  onOpenBooking: () => void;
}

export default function TeamSection({ onOpenBooking }: TeamSectionProps) {
  const { t } = useLocale();

  const kicker = String(t("team.kicker"));
  const title = String(t("team.title"));
  const subtitle = String(t("team.subtitle"));
  const members = content.locales.uk.team.members;

  return (
    <section id="team" className="py-20 sm:py-28 bg-[hsl(24_16%_8%)] relative">
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] rounded-lg overflow-hidden group hover:border-[hsl(32_95%_50%/0.5)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-80 overflow-hidden bg-[hsl(24_16%_8%)]">
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24_14%_13%)] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-3 left-3 bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] font-display font-bold text-xs uppercase px-2.5 py-1 rounded">
                    {m.role}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-2xl font-display font-bold text-[hsl(36_10%_92%)] uppercase">
                      {m.name}
                    </h3>
                    <span className="text-xs font-mono text-[hsl(32_95%_50%)] font-bold">
                      {m.exp}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[hsl(36_8%_60%)] mb-3">
                    📍 {m.location}
                  </p>
                  <p className="text-xs sm:text-sm text-[hsl(36_8%_75%)] leading-relaxed">
                    {m.spec}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-[hsl(24_16%_8%)] hover:bg-[hsl(32_95%_50%)] text-[hsl(36_10%_92%)] hover:text-[hsl(24_15%_9%)] border border-[hsl(36_10%_22%)] font-display font-bold text-xs uppercase tracking-wider rounded transition-all"
                >
                  Записатись до майстра
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
