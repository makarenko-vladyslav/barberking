"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";
import { Carousel } from "@/components/motion";

export default function Testimonials() {
  const { t } = useLocale();

  const kicker = String(t("reviews.kicker"));
  const title = String(t("reviews.title"));
  const subtitle = String(t("reviews.subtitle"));
  const featuredQuote = String(t("reviews.featuredQuote"));
  const featuredAuthor = String(t("reviews.featuredAuthor"));
  const featuredDescriptor = String(t("reviews.featuredDescriptor"));
  const items = content.locales.uk.reviews.items;

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[hsl(24_16%_8%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Layer 2: Featured Display Quote with Oversized Quotation Mark */}
        <div className="max-w-4xl mx-auto bg-[hsl(24_14%_13%)] border-2 border-[hsl(32_95%_50%/0.5)] p-8 sm:p-12 rounded-lg relative mb-14 shadow-2xl">
          <span className="absolute top-4 left-6 text-7xl font-display text-[hsl(32_95%_50%/0.25)] select-none leading-none">
            «
          </span>
          <div className="relative z-10 space-y-6">
            <p className="text-xl sm:text-3xl font-display italic text-[hsl(36_10%_92%)] leading-snug">
              "{featuredQuote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[hsl(36_10%_22%)]">
              <div>
                <h4 className="text-lg font-display font-bold uppercase text-[hsl(32_95%_50%)]">
                  {featuredAuthor}
                </h4>
                <p className="text-xs font-mono text-[hsl(36_8%_60%)]">
                  {featuredDescriptor}
                </p>
              </div>

              {/* Rating as plain text + named source */}
              <div className="bg-[hsl(24_16%_8%)] px-4 py-2 rounded border border-[hsl(36_10%_22%)] text-xs font-mono">
                <span className="font-bold text-[hsl(32_95%_50%)]">4.9 / 5.0</span>
                <span className="text-[hsl(36_8%_55%)]"> {String(t("reviews.googleMapsSource"))}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Carousel with DOT indicators (no arrows) */}
        <div className="max-w-5xl mx-auto">
          <Carousel>
            {items.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-4 h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-[hsl(36_10%_92%)] uppercase">
                        {rev.name}
                      </h3>
                      <p className="text-xs font-mono text-[hsl(32_95%_50%)]">
                        {rev.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[hsl(32_95%_50%)] bg-[hsl(24_16%_8%)] px-2.5 py-1 rounded border border-[hsl(36_10%_22%)]">
                        {rev.rating}
                      </span>
                      <span className="text-[10px] text-[hsl(36_8%_55%)] block mt-1">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[hsl(36_8%_75%)] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[hsl(36_10%_22%)] text-[11px] font-mono text-[hsl(36_8%_55%)] flex items-center justify-between">
                  <span>{String(t("reviews.verifiedVisitGoogle"))}</span>
                  <span>{String(t("reviews.brandKyiv"))}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}