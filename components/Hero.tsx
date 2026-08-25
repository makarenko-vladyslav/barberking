"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { t } = useLocale();

  const kicker = String(t("hero.kicker"));
  const line1 = String(t("hero.titleLine1"));
  const line2 = String(t("hero.titleLine2"));
  const subtitle = String(t("hero.subtitle"));
  const ctaPrimary = String(t("hero.ctaPrimary"));
  const videoSrc = String(t("hero.videoSrc"));
  const posterUrl = String(t("hero.posterUrl"));

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-[hsl(24_16%_8%)]">
      {/* Layer 1: Giant Background Watermark Word */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[22vw] font-display font-bold uppercase tracking-tighter text-[hsl(32_95%_50%/0.03)] leading-none whitespace-nowrap">
          BARBERKING
        </span>
      </div>

      {/* Layer 2: Background Video Stack with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover opacity-30 filter contrast-125 brightness-90 scale-105"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24_16%_8%)] via-[hsl(24_16%_8%/0.65)] to-[hsl(24_16%_8%/0.8)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(24_16%_8%/0.85)_100%)]" />
      </div>

      {/* Layer 3: Flanking Mini-copy Left & Right (Desktop) */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 text-[11px] font-mono text-[hsl(36_8%_55%)] space-y-3 tracking-widest uppercase">
        <p className="border-l border-[hsl(32_95%_50%)] pl-3">{String(t("hero.branch1"))}</p>
        <p className="border-l border-[hsl(36_10%_22%)] pl-3">{String(t("hero.branch2"))}</p>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10 text-[11px] font-mono text-[hsl(36_8%_55%)] space-y-3 tracking-widest uppercase text-right">
        <p className="border-r border-[hsl(32_95%_50%)] pr-3">{String(t("hero.branch3"))}</p>
        <p className="border-r border-[hsl(36_10%_22%)] pr-3">{String(t("hero.branch4"))}</p>
      </div>

      {/* Layer 4: Floating Text-Only Badge Seal */}
      <div className="absolute top-28 right-6 lg:right-16 z-20 pointer-events-none hidden sm:block">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[9.5px] font-mono uppercase tracking-[0.2em] fill-[hsl(32_95%_50%)] font-bold">
              <textPath href="#circlePath" startOffset="0%">
                BARBERKING KYIV • EST. 2018 •
              </textPath>
            </text>
          </svg>
          <div className="absolute text-[10px] font-mono font-bold text-white uppercase tracking-tighter">
            2018
          </div>
        </div>
      </div>

      {/* Layer 5: Main Hero Content Cluster */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8 my-auto">
        {/* Kicker with REAL meta */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[hsl(32_95%_50%/0.12)] border border-[hsl(32_95%_50%/0.3)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[hsl(32_95%_50%)] animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold">
            {kicker}
          </span>
        </div>

        {/* Multi-line Poster H1 with italic accent word */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] leading-[0.92] max-w-4xl mb-6">
          <span className="block">{line1}</span>
          <span className="block text-[hsl(32_95%_50%)] italic font-semibold">{line2}</span>
        </h1>

        {/* 1-2 line subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[hsl(36_8%_75%)] font-normal leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* CTA Pair (Primary button + quiet phone text link) */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-10">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[hsl(32_95%_50%)] hover:bg-[hsl(35_100%_44%)] text-[hsl(24_15%_9%)] font-display font-bold text-lg uppercase tracking-widest px-8 py-4 rounded-sm transition-all shadow-xl hover:shadow-[hsl(32_95%_50%/0.35)] transform hover:-translate-y-0.5 text-center min-h-[44px]"
          >
            {ctaPrimary}
          </button>
          <a
            href="tel:0951079215"
            className="text-xs font-mono uppercase tracking-widest text-[hsl(36_8%_75%)] hover:text-[hsl(32_95%_50%)] transition-colors py-3 px-2 border-b border-[hsl(36_10%_28%)] inline-block"
          >
            {String(t("hero.phoneText"))}
          </a>
        </div>

        {/* 3-item Meta Strip with Hairline Separators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-[hsl(36_8%_65%)] py-3 px-6 bg-[hsl(24_14%_13%/0.6)] backdrop-blur-sm rounded-full border border-[hsl(36_10%_22%/0.6)]">
          <span>{String(t("hero.hoursMeta"))}</span>
          <span className="text-[hsl(36_10%_28%)]">•</span>
          <span>{String(t("hero.branchesMeta"))}</span>
          <span className="text-[hsl(36_10%_28%)]">•</span>
          <span className="text-[hsl(32_95%_50%)]">{String(t("hero.ratingMeta"))}</span>
        </div>
      </div>

      {/* Layer 6: Base Section Ticker & Classic Scroll Indicator */}
      <div className="relative z-10 w-full mt-10">
        <div className="bg-[hsl(24_14%_12%)] border-t border-[hsl(36_10%_22%)] py-2 text-[11px] font-mono text-[hsl(36_8%_55%)] uppercase tracking-widest">
          <Marquee speed={35}>
            <span className="flex items-center gap-8 whitespace-nowrap px-4">
              <span>{String(t("hero.ticker1"))}</span>
              <span>•</span>
              <span>{String(t("hero.ticker2"))}</span>
              <span>•</span>
              <span>{String(t("hero.ticker3"))}</span>
              <span>•</span>
              <span>{String(t("hero.ticker4"))}</span>
              <span>•</span>
            </span>
          </Marquee>
        </div>

        {/* Classic Scroll Indicator */}
        <div className="py-2 flex flex-col items-center gap-1 opacity-70">
          <span className="text-[9px] uppercase font-mono tracking-widest text-[hsl(36_8%_60%)]">
            SCROLL
          </span>
          <span className="w-0.5 h-4 bg-gradient-to-b from-[hsl(32_95%_50%)] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}