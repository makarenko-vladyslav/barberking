
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function RitualProcess() {
  const { t } = useLocale();

  const kicker = t("processSection.kicker") as string;
  const title = t("processSection.title") as string;
  const subtitle = t("processSection.subtitle") as string;
  const standardBadge = t("processSection.standardBadge") as string;
  const steps = (t("processSection.steps") as Array<{ step: string; title: string; desc: string }>) || [];

  return (
    <section className="py-24 bg-[hsl(0_0%_8%)] text-white relative">
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

        {/* Process Steps */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((stepItem, idx) => (
            <StaggerItem
              key={idx}
              className="p-6 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_16%)] rounded-xl relative flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-extrabold text-[hsl(38_88%_52%)] block mb-4">
                  {stepItem.step}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-[hsl(0_0%_70%)] font-light leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[hsl(0_0%_14%)] flex items-center justify-between text-xs text-[hsl(0_0%_50%)]">
                <span>Етап {idx + 1} з 4</span>
                <span className="text-[hsl(38_88%_52%)]">{standardBadge}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
