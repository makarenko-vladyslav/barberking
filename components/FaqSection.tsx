"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const { t } = useLocale();

  const kicker = t("faq.kicker") as string;
  const title = t("faq.title") as string;
  const subtitle = t("faq.subtitle") as string;
  const items = (t("faq.items") as FaqItem[]) || [];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[hsl(0_0%_7%)] text-white relative">
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

        {/* Accordion Stack */}
        <div className="flex flex-col gap-4">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[hsl(0_0%_11%)] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-xl sm:text-2xl text-white hover:text-[hsl(32_90%_50%)] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-2xl font-mono text-[hsl(32_90%_50%)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-white/80 font-light leading-relaxed border-t border-white/5">
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