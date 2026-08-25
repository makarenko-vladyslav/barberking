
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function Advantages() {
  const { t } = useLocale();

  const kicker = t("whyUs.kicker") as string;
  const title = t("whyUs.title") as string;
  const subtitle = t("whyUs.subtitle") as string;
  const brandQuote = t("whyUs.brandQuote") as string;
  const sterilizationText = t("whyUs.sterilizationText") as string;
  const bookOnlineBtn = t("whyUs.bookOnlineBtn") as string;
  const masterAtWork = t("whyUs.masterAtWork") as string;
  const cards = (t("whyUs.cards") as Array<{ num: string; title: string; text: string }>) || [];
  const advLabel = t("whyUs.advLabel") as string;

  return (
    <section id="why-us" className="py-24 bg-[hsl(0_0%_5%)] text-white relative border-b border-[hsl(0_0%_14%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
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

        {/* Oversized Statement Pull-Quote */}
        <Reveal className="mb-16">
          <div className="p-8 sm:p-12 bg-[hsl(0_0%_8%)] border-l-4 border-[hsl(38_88%_52%)] rounded-r-2xl border-y border-r border-[hsl(0_0%_16%)] relative overflow-hidden">
            <div className="absolute top-2 right-4 text-7xl font-display font-extrabold text-[hsl(38_88%_52%/0.1)] select-none pointer-events-none">
              “
            </div>
            <blockquote className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 max-w-4xl">
              {t("whyUs.quoteText") as string}
            </blockquote>
            <div className="flex items-center gap-3 text-xs text-[hsl(0_0%_60%)] font-mono">
              <span className="w-6 h-px bg-[hsl(38_88%_52%)]" />
              <span>{brandQuote}</span>
            </div>
          </div>
        </Reveal>

        {/* 2-Photo Cluster + Stat Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Photo Cluster */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[hsl(0_0%_20%)] bg-[hsl(0_0%_10%)] shadow-2xl">
              <img
                src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg"
                alt={t("whyUs.interiorAlt") as string}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapped Framed Photo */}
            <div className="absolute -bottom-6 -right-4 w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[hsl(38_88%_52%)] bg-[hsl(0_0%_12%)] shadow-2xl hidden sm:block">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2026/03/dyno-e1774703810461-904x1024.webp"
                alt={masterAtWork}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="mt-4 text-xs text-[hsl(0_0%_60%)] font-mono flex items-center gap-2">
              <span className="w-4 h-px bg-[hsl(38_88%_52%)]" />
              <span>{sterilizationText}</span>
            </div>
          </div>

          {/* Stat Row & Craft Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_16%)] rounded-xl">
                <div className="font-display text-4xl font-extrabold text-[hsl(38_88%_52%)] tabular-nums">
                  265,000+
                </div>
                <div className="text-xs text-[hsl(0_0%_70%)] uppercase tracking-wider font-medium mt-1">
                  {t("whyUs.stat1Label") as string}
                </div>
              </div>

              <div className="p-5 bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_16%)] rounded-xl">
                <div className="font-display text-4xl font-extrabold text-[hsl(38_88%_52%)] tabular-nums">
                  4 локації
                </div>
                <div className="text-xs text-[hsl(0_0%_70%)] uppercase tracking-wider font-medium mt-1">
                  {t("whyUs.stat2Label") as string}
                </div>
              </div>

              <div className="p-5 bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_16%)] rounded-xl">
                <div className="font-display text-4xl font-extrabold text-[hsl(38_88%_52%)] tabular-nums">
                  8 років
                </div>
                <div className="text-xs text-[hsl(0_0%_70%)] uppercase tracking-wider font-medium mt-1">
                  {t("whyUs.stat3Label") as string}
                </div>
              </div>

              <div className="p-5 bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_16%)] rounded-xl">
                <div className="font-display text-4xl font-extrabold text-[hsl(38_88%_52%)] tabular-nums">
                  4.9 / 5.0
                </div>
                <div className="text-xs text-[hsl(0_0%_70%)] uppercase tracking-wider font-medium mt-1">
                  {t("whyUs.stat4Label") as string}
                </div>
              </div>
            </div>

            <p className="text-sm text-[hsl(0_0%_75%)] font-light leading-relaxed">
              {t("whyUs.descText") as string}
            </p>

            <div>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[hsl(38_88%_52%)] hover:underline font-mono min-h-[44px] py-2"
              >
                <span>{bookOnlineBtn}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Grid Advantage Cards */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <StaggerItem
              key={idx}
              className="p-8 bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] rounded-xl relative hover:border-[hsl(38_88%_52%/0.5)] transition-all group"
            >
              <div className="font-display text-5xl font-extrabold text-[hsl(38_88%_52%/0.3)] group-hover:text-[hsl(38_88%_52%)] transition-colors mb-4 tabular-nums">
                {card.num}
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-[hsl(0_0%_70%)] font-light leading-relaxed">
                {card.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
