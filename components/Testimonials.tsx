
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Carousel } from "@/components/motion";

export default function Testimonials() {
  const { t } = useLocale();

  const kicker = t("testimonials.kicker") as string;
  const title = t("testimonials.title") as string;
  const subtitle = t("testimonials.subtitle") as string;
  const ratingLabel = t("testimonials.ratingLabel") as string;
  const mapsLabel = t("testimonials.mapsLabel") as string;
  const countLabel = t("testimonials.countLabel") as string;
  const items = (t("testimonials.items") as Array<{ name: string; branch: string; rating: number; text: string }>) || [];

  return (
    <section className="py-24 bg-[hsl(0_0%_5%)] text-white relative border-b border-[hsl(0_0%_14%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
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
            <p className="text-[hsl(0_0%_75%)] text-base sm:text-lg font-light mb-4">
              {subtitle}
            </p>
          </Reveal>
          
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] text-xs text-[hsl(0_0%_70%)] font-mono">
              <span>{ratingLabel} <strong className="text-[hsl(38_88%_52%)]">4.9 / 5.0</strong></span>
              <span>·</span>
              <span>{mapsLabel}</span>
              <span>·</span>
              <span>{countLabel}</span>
            </div>
          </Reveal>
        </div>

        {/* Testimonials Carousel (DOT indicators, zero arrows) */}
        <Carousel>
          {items.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_18%)] p-8 sm:p-12 rounded-2xl max-w-3xl mx-auto text-center relative shadow-xl">
                
                {/* Display Quotation Mark */}
                <div className="text-6xl font-display font-extrabold text-[hsl(38_88%_52%/0.2)] leading-none mb-2 select-none">
                  “
                </div>

                <blockquote className="font-body text-lg sm:text-xl text-[hsl(0_0%_90%)] italic font-light leading-relaxed mb-6">
                  “{item.text}”
                </blockquote>

                <div className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {item.name}
                </div>
                
                <div className="text-xs text-[hsl(38_88%_52%)] font-semibold mt-1">
                  {item.branch} · постійний гість
                </div>

                <div className="mt-4 pt-4 border-t border-[hsl(0_0%_15%)] text-[11px] text-[hsl(0_0%_50%)] font-mono">
                  Підтверджений візит через онлайн-запис
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
