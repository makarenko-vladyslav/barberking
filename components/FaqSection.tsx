"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

export default function FaqSection() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const kicker = String(t("faq.kicker"));
  const title = String(t("faq.title"));
  const subtitle = String(t("faq.subtitle"));
  const items = content.locales.uk.faq.items;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[hsl(24_16%_8%)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
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

        {/* Accordions */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] rounded-md overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 font-display font-bold text-lg sm:text-xl uppercase text-[hsl(36_10%_92%)] flex justify-between items-center gap-4 hover:text-[hsl(32_95%_50%)]"
                >
                  <span>{item.q}</span>
                  <span className="text-[hsl(32_95%_50%)] text-2xl font-mono">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[hsl(36_8%_75%)] leading-relaxed border-t border-[hsl(36_10%_22%/0.5)] pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
