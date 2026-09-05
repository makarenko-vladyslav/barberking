"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const rawFaqs = t("faqSection.items");
  const faqs: FaqItem[] = Array.isArray(rawFaqs) ? (rawFaqs as FaqItem[]) : [];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("faqSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("faqSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("faqSection.subtitle"))}
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 max-w-4xl divide-y divide-border-dark border-y border-border-dark">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full min-h-[44px] flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-2xl font-bold uppercase text-text-light group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <span className="font-display text-2xl text-accent font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed pr-6">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}