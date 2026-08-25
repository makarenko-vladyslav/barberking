"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, TextReveal, Marquee } from "./motion";

export default function Hero() {
  const { t } = useLocale();

  const tickerItems = [
    String(t("hero.ticker1")),
    String(t("hero.ticker2")),
    String(t("hero.ticker3")),
    String(t("hero.ticker4")),
    String(t("hero.ticker5")),
    String(t("hero.ticker6")),
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-neutral-950 pt-28 pb-10 border-b border-white/10">
      {/* Background Stack Layer 1: Looping Video + Dark Scrim Layer 2 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={String(t("hero.poster"))}
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-115"
        >
          <source src={String(t("hero.videoSrc"))} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950" />
      </div>

      {/* Giant Decorative Type Layer (Watermark Word) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-5 whitespace-nowrap">
        <span className="font-display text-[16vw] font-extrabold uppercase tracking-widest text-white leading-none">
          {String(t("hero.watermark"))}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Flanking Mini-Copy Columns (Desktop) */}
        <div className="hidden lg:flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-6 border-b border-white/10 pb-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {String(t("hero.leftMiniCopy"))}
          </span>
          <span className="flex items-center gap-2">
            {String(t("hero.rightMiniCopy"))}
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Kicker with REAL Meta */}
          <Reveal>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-accent/40 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {String(t("hero.kicker"))}
              </span>
            </div>
          </Reveal>

          {/* Headline with Accent Word */}
          <TextReveal
            text={String(t("hero.title"))}
            as="h1"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight text-center justify-center mb-2"
          />
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-accent italic leading-tight text-center mb-6">
              {String(t("hero.titleAccent"))}
            </h2>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              {String(t("hero.subtitle"))}
            </p>
          </Reveal>

          {/* CTA Buttons Pair */}
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest bg-accent hover:bg-amber-400 text-black rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 text-center"
              >
                {String(t("hero.ctaPrimary"))}
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest border border-white/30 hover:border-accent text-white hover:text-accent rounded-lg transition-all text-center"
              >
                {String(t("hero.ctaSecondary"))}
              </a>
            </div>
          </Reveal>

          {/* 3-Item Meta Strip with Hairline Separators */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-md w-full max-w-3xl text-center">
              <div className="py-2 px-3 border-b sm:border-b-0 sm:border-r border-white/10">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">{String(t("hero.metaHoursLabel"))}</span>
                <span className="font-display text-lg font-bold text-accent">{String(t("hero.metaHours"))}</span>
              </div>
              <div className="py-2 px-3 border-b sm:border-b-0 sm:border-r border-white/10">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">{String(t("hero.metaLocationsLabel"))}</span>
                <span className="font-display text-lg font-bold text-white">{String(t("hero.metaAddress"))}</span>
              </div>
              <div className="py-2 px-3">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">{String(t("hero.metaMapsLabel"))}</span>
                <span className="font-display text-lg font-bold text-accent">{String(t("hero.metaRating"))}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hero Base Ticker */}
      <div className="relative z-10 mt-8 border-t border-white/10 pt-3">
        <Marquee items={tickerItems} speed={25} className="py-1 bg-neutral-950/90" />
      </div>

      {/* Classic Scroll Cue */}
      <div className="relative z-10 pt-4 flex flex-col items-center gap-1.5 opacity-70">
        <span className="text-[9px] tracking-widest uppercase font-bold text-neutral-400">{String(t("hero.scrollCue"))}</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
