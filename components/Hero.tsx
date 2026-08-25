"use client";

import { useLocale } from "@/lib/i18n";
import { TextReveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-zinc-950">
      {/* Absolute Watermark Layer (Layer 1) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5"
      >
        <span className="font-display font-extrabold text-[18vw] leading-none uppercase tracking-tighter text-white whitespace-nowrap">
          BARBERKING
        </span>
      </div>

      {/* Background Video with Scrim Overlay (Layer 2) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t("hero.posterUrl") as string}
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source src={t("hero.videoSrc") as string} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(220_20%_8%)_90%)]" />
      </div>

      {/* Flanking Side Labels (Layer 3) */}
      <div className="hidden xl:flex justify-between items-center absolute left-8 right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-[11px] font-mono tracking-widest uppercase text-zinc-500/80">
        <div className="rotate-90 origin-left">
          ПРАВИЙ БЕРЕГ — ПАВЛІВСЬКА & ОЛЕСЯ
        </div>
        <div className="-rotate-90 origin-right">
          ЛІВИЙ БЕРЕГ — ДНІПРОВСЬКА НАБ. & УРЛІВСЬКА
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center my-auto">
        {/* Kicker Badge with Real Meta (Layer 4) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-zinc-900/80 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
            {t("hero.kicker") as string}
          </span>
        </div>

        {/* Multi-line Poster H1 with Styled Word Accent (Layer 5) */}
        <div className="relative max-w-5xl mx-auto mb-6">
          <TextReveal
            text={t("hero.title") as string}
            as="h1"
            className="justify-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.9] text-center"
          />
        </div>

        {/* Lede / Subtitle (Layer 6) */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-body leading-relaxed mb-8">
          {t("hero.subtitle") as string}
        </p>

        {/* CTA Pair (Layer 7) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-xl rounded shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {t("hero.ctaPrimary") as string}
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 border border-amber-500/40 font-display font-bold uppercase tracking-wider text-xl rounded backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <span>{t("hero.ctaSecondary") as string}</span>
            <span className="font-mono text-xs">→</span>
          </a>
        </div>

        {/* 3-Item Meta Strip with Hairlines (Layer 8) */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 px-6 rounded-full bg-zinc-900/60 border border-zinc-800/80 max-w-3xl mx-auto backdrop-blur-md text-xs sm:text-sm text-zinc-300 font-mono">
          <span>{t("hero.metaHours") as string}</span>
          <span className="text-amber-500/40">|</span>
          <span>{t("hero.metaAddress") as string}</span>
          <span className="text-amber-500/40">|</span>
          <span className="text-amber-400 font-semibold">{t("hero.metaTrust") as string}</span>
        </div>
      </div>

      {/* Floating Rotating Text Seal Badge (Layer 9) */}
      <div className="hidden lg:block absolute bottom-24 right-12 z-20 pointer-events-none">
        <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-amber-500/30 bg-zinc-950/80 backdrop-blur-md shadow-2xl">
          <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="textPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[9.5px] font-mono uppercase fill-amber-400 font-semibold tracking-widest">
              <textPath href="#textPath" startOffset="0%">
                BARBERKING KYIV · EST 2018 · GRAND BARBER ·
              </textPath>
            </text>
          </svg>
          <div className="absolute text-center">
            <span className="font-display font-extrabold text-amber-400 text-lg leading-none">4.9</span>
          </div>
        </div>
      </div>

      {/* Scroll Cue (Layer 10) */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 opacity-80 mt-6">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">{t("hero.scrollCue") as string}</span>
        <div className="w-0.5 h-7 bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent animate-pulse rounded-full" />
      </div>

      {/* Hero Base Micro Ticker Bar */}
      <div className="w-full bg-zinc-900/90 border-t border-zinc-800 py-2 mt-4 z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-widest uppercase text-zinc-400">
          <span>{t("hero.networkBadge") as string}</span>
          <span className="hidden sm:inline text-amber-500/60">·</span>
          <span>{t("hero.parkingBadge") as string}</span>
          <span className="hidden sm:inline text-amber-500/60">·</span>
          <span>{t("hero.haircutsBadge") as string}</span>
        </div>
      </div>
    </section>
  );
}