
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function CertificatesSubscriptions() {
  const { t } = useLocale();

  const kicker = t("certificates.kicker") as string;
  const title = t("certificates.title") as string;
  const subtitle = t("certificates.subtitle") as string;
  const certTitle = t("certificates.certTitle") as string;
  const certDesc = t("certificates.certDesc") as string;
  const subs = (t("certificates.subs") as Array<{ name: string; price: string; save: string }>) || [];

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Certificate Card */}
          <div className="lg:col-span-5 bg-[hsl(0_0%_6%)] border border-[hsl(38_88%_52%/0.4)] p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="mb-6 rounded-xl overflow-hidden border border-[hsl(0_0%_20%)]">
                {/* Real certificate card photo from client_images */}
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2024/12/certificate-768x549.png"
                  alt={certTitle}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-display text-3xl font-extrabold uppercase tracking-wide text-white mb-3">
                {certTitle}
              </h3>
              <p className="text-sm text-[hsl(0_0%_75%)] font-light leading-relaxed mb-6">
                {certDesc}
              </p>
            </div>

            <a
              href="#booking?cert=true"
              className="w-full text-center py-3.5 min-h-[44px] flex items-center justify-center bg-[hsl(38_88%_52%)] hover:bg-[hsl(35_92%_44%)] text-[hsl(0_0%_5%)] font-display text-lg uppercase font-extrabold tracking-wider rounded transition-transform"
            >
              Замовити сертифікат
            </a>
          </div>

          {/* Subscriptions Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <Stagger className="space-y-4">
              {subs.map((sub, idx) => (
                <StaggerItem
                  key={idx}
                  className="p-6 bg-[hsl(0_0%_10%)] border border-[hsl(0_0%_18%)] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[hsl(38_88%_52%/0.5)] transition-all"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {sub.save}
                    </span>
                    <h4 className="font-display text-2xl font-bold uppercase tracking-wide text-white mt-2">
                      {sub.name}
                    </h4>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-display text-3xl font-extrabold text-[hsl(38_88%_52%)]">
                      {sub.price}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="p-6 bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] rounded-xl text-center">
              <span className="font-display text-xl uppercase font-bold text-white block">
                Бажаєте розрахувати індивідуальний корпоративний абонемент?
              </span>
              <p className="text-xs text-[hsl(0_0%_70%)] mt-1 mb-4">
                Спеціальні умови для компаній від 5 співробітників з можливістю безготівкового розрахунку.
              </p>
              <a
                href="tel:0951079215"
                className="inline-block px-6 py-2.5 min-h-[44px] flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-display text-sm uppercase tracking-wider font-bold rounded mx-auto"
              >
                Зв'язатися з менеджером
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
