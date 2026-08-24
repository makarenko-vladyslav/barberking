"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLocale();

  const faqList = [
    {
      q: String(t("faq.q1")),
      a: String(t("faq.a1"))
    },
    {
      q: String(t("faq.q2")),
      a: String(t("faq.a2"))
    },
    {
      q: String(t("faq.q3")),
      a: String(t("faq.a3"))
    },
    {
      q: String(t("faq.q4")),
      a: String(t("faq.a4"))
    },
    {
      q: String(t("faq.q5")),
      a: String(t("faq.a5"))
    },
    {
      q: String(t("faq.q6")),
      a: String(t("faq.a6"))
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_95%)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("faq.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("faq.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("faq.subtitle"))}
          </p>
        </div>

        {/* Full-width Accordions */}
        <div className="flex flex-col gap-3">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_16%)] rounded-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(0_0%_95%)] flex items-center justify-between gap-4 hover:text-[hsl(38_90%_50%)] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-[hsl(38_90%_50%)] font-extrabold text-xl shrink-0">
                    {isOpen ? "[−]" : "[+]"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[hsl(0_0%_75%)] leading-relaxed border-t border-[hsl(0_0%_12%)] pt-3 font-normal">
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
