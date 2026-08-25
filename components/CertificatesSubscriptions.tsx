"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";

interface CertificatesSubscriptionsProps {
  onOpenBooking: () => void;
}

export default function CertificatesSubscriptions({ onOpenBooking }: CertificatesSubscriptionsProps) {
  const { t } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-[hsl(24_14%_13%)] border-t border-[hsl(36_10%_22%)] relative overflow-hidden">
      {/* Decorative Watermark Word */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span className="text-[16vw] font-display font-bold uppercase tracking-tighter text-[hsl(32_95%_50%/0.02)] leading-none whitespace-nowrap">
          GIFT & SUBSCRIPTION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Invitation Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold mb-2 block">
            {String(t("certificates.kicker"))}
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-4">
            {String(t("certificates.title"))}
          </h2>
          <p className="text-[hsl(36_8%_70%)] text-sm sm:text-base leading-relaxed">
            {String(t("certificates.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Certificate Box */}
          <div className="lg:col-span-6 bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] p-8 rounded-lg flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold block mb-1">
                ПОДАРУНКОВИЙ СЕРТИФІКАТ
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-3">
                {String(t("certificates.cardTitle"))}
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(36_8%_75%)] leading-relaxed mb-4">
                {String(t("certificates.cardDesc"))}
              </p>

              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2024/12/certificate-768x549.png"
                alt={String(t("certificates.giftAlt"))}
                className="w-full h-48 sm:h-56 object-contain rounded border border-[hsl(36_10%_22%)] bg-[hsl(24_14%_11%)] p-2"
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-[hsl(36_10%_22%)]">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto flex-1 py-3.5 bg-[hsl(32_95%_50%)] hover:bg-[hsl(35_100%_44%)] text-[hsl(24_15%_9%)] font-display font-bold text-sm uppercase tracking-widest rounded shadow text-center min-h-[44px]"
                >
                  {String(t("certificates.cta"))}
                </button>
                <a
                  href="tel:0951079215"
                  className="text-xs font-mono uppercase text-[hsl(36_8%_75%)] hover:text-[hsl(32_95%_50%)] py-3 inline-block"
                >
                  або тел. 095 107 92 15
                </a>
              </div>
              <p className="text-[11px] font-mono text-[hsl(36_8%_55%)] text-center sm:text-left">
                • ДІЄ 12 МІСЯЦІВ У ВСІХ 4 ФІЛІЯХ КИЄВА
              </p>
            </div>
          </div>

          {/* Right Subscriptions & Hours Table */}
          <div className="lg:col-span-6 bg-[hsl(24_16%_8%)] border border-[hsl(36_10%_22%)] p-8 rounded-lg flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold block mb-1">
                АБОНЕМЕНТИ НА СТРИЖКИ (-15%)
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-[hsl(36_10%_92%)] mb-3">
                ПАКЕТИ НА 10 ВІЗИТІВ
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(36_8%_75%)] mb-4">
                Зафіксуйте ціну на рік та отримуйте стабільний догляд за графіком.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { name: String(t("sub.haircut10")), price: "6 300 грн" },
                  { name: String(t("sub.beard10")), price: "9 900 грн" },
                  { name: String(t("sub.fatherSon10")), price: "9 900 грн" },
                ].map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-[hsl(24_14%_11%)] border border-[hsl(36_10%_22%)] p-3.5 rounded flex items-center justify-between"
                  >
                    <span className="font-display font-bold text-base text-[hsl(36_10%_92%)] uppercase">
                      {sub.name}
                    </span>
                    <span className="font-display font-bold text-lg text-[hsl(32_95%_50%)] tabular-nums">
                      {sub.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured Hours Mini-Table & Location Line */}
            <div className="pt-4 border-t border-[hsl(36_10%_22%)] space-y-3">
              <span className="text-[11px] font-mono uppercase text-[hsl(32_95%_50%)] font-bold block">
                ГРАФІК РОБОТИ ФІЛІЙ:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[hsl(36_8%_70%)]">
                <div className="bg-[hsl(24_14%_11%)] p-2 rounded border border-[hsl(36_10%_22%)]">
                  ПН — ПТ: <span className="text-white font-bold">09:00 — 21:00</span>
                </div>
                <div className="bg-[hsl(24_14%_11%)] p-2 rounded border border-[hsl(36_10%_22%)]">
                  СБ — НД: <span className="text-white font-bold">09:00 — 21:00</span>
                </div>
              </div>
              <p className="text-[11px] font-mono text-[hsl(36_8%_55%)]">
                Київ: Павлівська 18 • Дніпровська наб. 15К • Олеся 8А • Урлівська 11/44
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}