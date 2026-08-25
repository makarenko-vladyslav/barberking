"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

export default function ProcessTimeline() {
  const { t } = useLocale();

  const kicker = String(t("process.kicker"));
  const title = String(t("process.title"));
  const subtitle = String(t("process.subtitle"));
  const steps = content.locales.uk.process.steps;

  return (
    <section className="py-20 sm:py-28 bg-[hsl(24_14%_11%)] border-y border-[hsl(36_10%_22%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] p-6 rounded-md relative group hover:border-[hsl(32_95%_50%)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-display font-bold text-[hsl(32_95%_50%)] block mb-3">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg text-[hsl(36_10%_92%)] uppercase mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[hsl(36_8%_70%)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="w-full h-1 bg-[hsl(36_10%_22%)] group-hover:bg-[hsl(32_95%_50%)] transition-colors mt-6 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
