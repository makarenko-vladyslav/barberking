"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const { t } = useLocale();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[100svh] pt-24 pb-8 flex flex-col justify-between overflow-hidden bg-[hsl(18_12%_8%)] text-white">
      {/* Layer 1: Background Video Loop with Fallback Poster & Tinted Scrim */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://kyiv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-35" : "opacity-20"
          }`}
        >
          <source
            src="https://kyiv.bking.com.ua/wp-content/themes/bking/video-bg/video-bg.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/7426382/7426382-hd_2048_864_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(18_12%_8%)] via-[hsl(18_12%_8%/0.65)] to-[hsl(18_12%_8%/0.85)]" />
      </div>

      {/* Layer 2: Decorative Watermark Background Word (Absolute, zero height, pointer-events-none) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0"
      >
        <span className="font-display font-black text-[18vw] leading-none uppercase tracking-tighter text-white/[0.03] whitespace-nowrap">
          BARBERKING
        </span>
      </div>

      {/* Layer 3: Kicker with REAL Meta */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-hairline-accent px-3 py-1 rounded text-amber-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{String(t("brand.established"))} — КИЇВ · 4 ЛОКАЦІЇ</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs text-gray-400 tracking-wider uppercase font-semibold">
            <span>ПРАВИЙ БЕРЕГ: ЛУК'ЯНІВКА · ВИНОГРАДАР</span>
            <span className="text-amber-500/40">|</span>
            <span>ЛІВИЙ БЕРЕГ: ПОЗНЯКИ · ЖК GREAT</span>
          </div>
        </div>
      </div>

      {/* Hero Central Typography, CTAs & Rotating Text Seal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Headline & Subtitle Column */}
          <div className="lg:col-span-9 space-y-6">
            <h1 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl tracking-tight leading-[0.86] uppercase text-white">
              <span className="block">{String(t("hero.titleWord1"))}</span>
              <span className="block text-amber-500 italic font-normal">
                {String(t("hero.titleWord2"))}
              </span>
              <span className="block text-gray-200">{String(t("hero.titleWord3"))}</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg font-normal max-w-2xl leading-relaxed border-l-2 border-amber-500 pl-4">
              {String(t("hero.subtitle"))}
            </p>

            {/* Layer 5: CTA Pair (Primary Solid + Secondary Text Link) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-2xl sm:text-3xl px-8 py-4 rounded transition-all transform hover:translate-y-[-2px] shadow-2xl shadow-amber-500/25 active:scale-95 text-center"
              >
                {String(t("hero.ctaPrimary"))}
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center text-amber-400 hover:text-amber-300 font-display font-bold text-xl sm:text-2xl px-6 py-4 border-b border-amber-500/30 hover:border-amber-400 transition-all text-center group"
              >
                <span>{String(t("hero.ctaSecondary"))}</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Layer 6: Text-Only Rotating Circular Badge / Seal (No icons/glyphs) */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-center">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg 
                viewBox="0 0 120 120" 
                className="w-full h-full animate-spin-slow text-amber-400/90 font-display font-bold text-[10.5px] tracking-widest uppercase"
              >
                <path
                  id="textPathCircle"
                  d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  fill="none"
                />
                <text fill="currentColor">
                  <textPath href="#textPathCircle" startOffset="0%">
                    BARBERKING KYIV • EST 2014 • 4 LOCATIONS • 
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display font-extrabold text-3xl text-amber-400 leading-none">10</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-300 font-semibold mt-0.5">РОКІВ</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Layer 7: Flanking Mini-Copy Columns & Layer 8: 3-Item Meta Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 border-t border-hairline space-y-6">
        
        {/* Flanking Mini-Copy Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400 font-medium">
          <div className="flex items-center space-x-3">
            <span className="text-amber-500 font-display font-bold text-sm">01</span>
            <span>КОЖЕН ВІЗИТ ВКЛЮЧАЄ МИТТЯ, КОНСУЛЬТАЦІЮ ТА НАПОЇ З БАРУ</span>
          </div>
          <div className="flex items-center space-x-3 md:justify-end">
            <span className="text-amber-500 font-display font-bold text-sm">02</span>
            <span>АВТОНОМНЕ ЖИВЛЕННЯ ТА ЗРУЧНИЙ ПАРКІНГ БІЛЯ КОЖНОЇ ФІЛІЇ</span>
          </div>
        </div>

        {/* 3-Item Meta Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-hairline/60">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-gray-400">ГРАФІК РОБОТИ:</span>
            <span className="font-display font-bold text-2xl text-white">ЩОДНЯ 09:00 — 21:00</span>
          </div>
          <div className="flex flex-col sm:border-l sm:border-hairline sm:pl-6">
            <span className="text-xs uppercase tracking-wider text-gray-400">ЛОКАЦІЇ В КИЄВІ:</span>
            <span className="font-display font-bold text-2xl text-amber-400">4 ЗРУЧНІ ФІЛІЇ</span>
          </div>
          <div className="flex flex-col sm:border-l sm:border-hairline sm:pl-6">
            <span className="text-xs uppercase tracking-wider text-gray-400">СЕРЕДНІЙ РЕЙТИНГ:</span>
            <span className="font-display font-bold text-2xl text-white">4.8 / 5.0 GOOGLE MAPS</span>
          </div>
        </div>

        {/* Layer 9: Scroll Cue (Normal flow at hero base) */}
        <div className="pt-2 flex flex-col items-center justify-center text-center">
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-1.5">SCROLL</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-amber-400 via-amber-400/50 to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
}
