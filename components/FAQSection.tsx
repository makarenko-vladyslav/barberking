"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = (t("faq.items") as Array<{ q: string; a: string }>) || [];

  return (
    <section id="faq" className="py-20 bg-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
            {t("faq.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4">
            {t("faq.title") as string}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-display font-bold text-xl uppercase text-white flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-amber-400 text-2xl font-mono">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 font-body leading-relaxed border-t border-zinc-900 pt-4">
                    {faq.a}
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