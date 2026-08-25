
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function TattooAndSpecialized() {
  const { t } = useLocale();

  const kicker = t("tattooSection.kicker") as string;
  const title = t("tattooSection.title") as string;
  const subtitle = t("tattooSection.subtitle") as string;
  const artistCaption = t("tattooSection.artistCaption") as string;
  const items = (t("tattooSection.items") as Array<{ title: string; price: string; desc: string }>) || [];

  return (
    <section className="py-24 bg-[hsl(0_0%_5%)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Cards */}
          <div className="lg:col-span-7">
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
              <p className="text-[hsl(0_0%_75%)] text-base sm:text-lg font-light mb-8">
                {subtitle}
              </p>
            </Reveal>

            <Stagger className="space-y-4">
              {items.map((item, idx) => (
                <StaggerItem
                  key={idx}
                  className="p-5 bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[hsl(0_0%_70%)] mt-1 font-light max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-display text-2xl font-extrabold text-[hsl(38_88%_52%)]">
                      {item.price}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Tattoo Artist Feature Visual */}
          <div className="lg:col-span-5 relative">
            <Reveal className="rounded-2xl overflow-hidden border border-[hsl(0_0%_20%)] bg-[hsl(0_0%_10%)] relative">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2026/03/img_1831-e1773677468520-737x1024.webp"
                alt={artistCaption}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-[hsl(0_0%_25%)]">
                <span className="text-xs text-[hsl(38_88%_52%)] font-bold uppercase tracking-wider">
                  Власна Тату-Студія
                </span>
                <div className="font-display text-2xl font-bold uppercase text-white">
                  Андрій (АРТ) — Tattoo Artist
                </div>
                <p className="text-xs text-[hsl(0_0%_70%)] mt-1">
                  Локація: вул. Павлівська 18. Попередній запис та безкоштовна консультація ескізу.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
