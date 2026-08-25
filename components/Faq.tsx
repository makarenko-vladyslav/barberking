
"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Faq() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const kicker = t("faqSection.kicker") as string;
  const title = t("faqSection.title") as string;
  const subtitle = t("faqSection.subtitle") as string;
  const faqList = (t("faqSection.faqs") as Array<{ q: string; a: string }>) || [];

  return (
    <section id="faq" className="py-24 bg-[hsl(0_0%_5%)] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
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

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_18%)] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 min-h-[44px] font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white flex justify-between items-center gap-4 hover:text-[hsl(38_88%_52%)] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-2xl text-[hsl(38_88%_52%)] shrink-0 font-mono">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[hsl(0_0%_75%)] font-light leading-relaxed border-t border-[hsl(0_0%_14%)] pt-4">
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
