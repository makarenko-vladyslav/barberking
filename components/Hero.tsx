
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  const videoUrl = t("hero.videoUrl") as string;
  const posterUrl = t("hero.posterUrl") as string;
  const kicker = t("hero.kicker") as string;
  const subtitle = t("hero.subtitle") as string;
  const crownText = t("hero.crown") as string;
  const scrollText = t("hero.scroll") as string;
  const stats = (t("hero.stats") as Array<{ value: string; label: string }>) || [];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[hsl(0_0%_5%)] border-b border-[hsl(0_0%_14%)]">
      {/* Background Stack: Video + Dark Scrim Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover scale-105 opacity-35 filter contrast-125 brightness-75"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Tinted Scrim (Dark HSL Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/0.7)] to-[hsl(0_0%_5%/0.8)]" />
      </div>

      {/* Layer 10: Giant Decorative Type Watermark Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[1]" aria-hidden="true">
        <span className="font-display font-extrabold text-[18vw] leading-none uppercase text-white/[0.03] tracking-tighter whitespace-nowrap">
          BARBERKING
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 my-auto text-left w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            {/* Layer 1: Kicker with REAL Meta */}
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsl(38_88%_52%/0.12)] border border-[hsl(38_88%_52%/0.35)] text-[hsl(38_88%_52%)] text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[hsl(38_88%_52%)] animate-pulse" />
                <span>{kicker}</span>
              </div>
            </Reveal>

            {/* Layer 2: Multi-line Poster H1 with ONE word styled differently */}
            <Reveal>
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white uppercase drop-shadow-md mb-6">
                БЕЗДОГАННИЙ СТИЛЬ ТА <span className="text-[hsl(38_88%_52%)] font-normal italic tracking-normal lowercase">{crownText}</span> ДОГЛЯД У КИЄВІ
              </h1>
            </Reveal>

            {/* Layer 3: 1-2 line sub */}
            <Reveal>
              <p className="text-base sm:text-xl text-[hsl(0_0%_80%)] max-w-2xl font-light leading-relaxed mb-8">
                {subtitle}
              </p>
            </Reveal>

            {/* Layer 4: CTA Pair + Direct Contact */}
            <Reveal className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#booking"
                className="px-8 py-4 min-h-[44px] flex items-center justify-center bg-[hsl(38_88%_52%)] hover:bg-[hsl(35_92%_44%)] text-[hsl(0_0%_5%)] font-display text-xl uppercase font-extrabold tracking-wider rounded shadow-lg shadow-[hsl(38_88%_52%/0.25)] transition-all transform hover:-translate-y-0.5 text-center"
              >
                {t("common.bookNow") as string}
              </a>

              <a
                href="#locations"
                className="px-6 py-4 min-h-[44px] flex items-center justify-center bg-[hsl(0_0%_14%/0.85)] hover:bg-[hsl(0_0%_20%)] text-white border border-[hsl(0_0%_28%)] font-display text-lg uppercase font-bold tracking-wider rounded backdrop-blur-sm transition-all text-center gap-2"
              >
                <span>{t("common.chooseBranch") as string} (4 локації) →</span>
              </a>
            </Reveal>
          </div>

          {/* Layer 5 & 6: Flanking Mini-Copy & Rotating Text Badge */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-6">
            {/* Text Seal / Badge */}
            <div className="relative w-36 h-36 rounded-full border border-[hsl(38_88%_52%/0.4)] bg-[hsl(0_0%_8%/0.9)] backdrop-blur-md p-4 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="font-display text-xs uppercase font-extrabold tracking-wider text-[hsl(38_88%_52%)] block">
                BARBERKING
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[hsl(0_0%_60%)] font-mono block mt-1">
                EST. 2018
              </span>
              <span className="text-[10px] uppercase font-bold text-white tracking-widest block mt-1">
                KYIV · UA
              </span>
              <div className="absolute inset-1 border border-dashed border-[hsl(38_88%_52%/0.3)] rounded-full animate-spin-slow" />
            </div>

            {/* Flanking Mini-copy Box */}
            <div className="bg-[hsl(0_0%_9%/0.9)] backdrop-blur-md p-5 rounded-xl border border-[hsl(0_0%_18%)] max-w-xs text-xs space-y-2">
              <div className="text-[hsl(38_88%_52%)] font-bold uppercase tracking-wider font-display text-sm">
                ПРАВИЙ ТА ЛІВИЙ БЕРЕГ
              </div>
              <p className="text-[hsl(0_0%_70%)] font-light leading-relaxed">
                Філії з охоронюваним підземним та наземним паркінгом. Індивідуальний підбір формати стрижки.
              </p>
              <div className="pt-2 border-t border-[hsl(0_0%_16%)] font-mono text-[11px] text-[hsl(0_0%_60%)]">
                Пн—Нд: 10:00 — 21:00
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Layer 7: 3-Item Meta Strip with Hairline Separators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[hsl(0_0%_8%/0.92)] backdrop-blur-md rounded-xl border border-[hsl(0_0%_18%)]">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l-2 border-[hsl(38_88%_52%)] pl-4">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs text-[hsl(0_0%_70%)] font-medium uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 8: Scroll Cue (Classic tiny indicator at bottom center) */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 mt-6 text-[hsl(0_0%_50%)] text-[9px] uppercase tracking-[0.3em] font-mono">
        <span>{scrollText}</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-[hsl(38_88%_52%)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
