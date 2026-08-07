"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const kicker = (t("hero.kicker") as string) || "EST. 2014 · КИЇВ · 4 ФІЛІЇ З ПАРКУВАННЯМ";
  const h1First = (t("hero.h1First") as string) || "ТВІЙ РИТУАЛ";
  const h1Italic = (t("hero.h1Italic") as string) || "спокою та стилю";
  const h1Last = (t("hero.h1Last") as string) || "У КИЄВІ";
  const description = (t("hero.description") as string) || "";
  const primaryCta = (t("hero.primaryCta") as string) || "Обрати майстра";
  const secondaryCta = (t("hero.secondaryCta") as string) || "Послуги та ціни";
  const videoUrl = (t("hero.videoUrl") as string) || "";
  const posterUrl = (t("hero.posterUrl") as string) || "";

  const stats = (t("hero.stats") as Array<{ value: string; label: string }>) || [];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[hsl(0_0%_7%)]">
      {/* Background Video Stack */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Dual Layer Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-[hsl(0_0%_7%/0.7)] to-[hsl(0_0%_7%/0.5)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[hsl(0_0%_7%/0.4)] to-[hsl(0_0%_7%/0.9)]" />
      </div>

      {/* Giant Decorative Watermark Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none aria-hidden overflow-hidden">
        <span className="font-display font-extrabold text-[18vw] text-white/[0.03] tracking-tighter whitespace-nowrap leading-none uppercase">
          BARBERKING
        </span>
      </div>

      {/* Flanking Side Column Left */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 z-10 text-[0.65rem] font-mono tracking-[0.25em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
        01 / ТРАДИЦІЙНЕ ГОЛІННЯ ТА СТРИЖКИ — КИЇВ
      </div>

      {/* Flanking Side Column Right */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 z-10 text-[0.65rem] font-mono tracking-[0.25em] text-[hsl(32_90%_50%/0.8)] uppercase [writing-mode:vertical-lr]">
        02 / БЕЗКОШТОВНИЙ БАР ДЛЯ КОЖНОГО ГОСТЯ
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto">
        <div className="max-w-4xl relative">
          {/* Floating Rotating Text-Only Circular Seal */}
          <div className="hidden md:flex absolute -right-12 -top-6 w-32 h-32 rounded-full items-center justify-center pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[9px] font-mono tracking-[0.2em] fill-[hsl(32_90%_50%)] uppercase font-bold">
                <textPath href="#circlePath">
                  BARBERKING · EST 2014 · KYIV · BARBERSHOP ·
                </textPath>
              </text>
            </svg>
            <span className="absolute font-display font-extrabold text-white text-xl">BK</span>
          </div>

          {/* Kicker Badge with Real Meta */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-mono tracking-widest text-[hsl(32_90%_50%)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(32_90%_50%)]" />
            — {kicker}
          </div>

          {/* Typography */}
          <h1 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl tracking-tight text-white leading-[0.88] uppercase mb-6">
            {h1First} <br />
            <span className="font-serif italic font-normal text-[hsl(32_90%_50%)] lowercase tracking-normal text-5xl sm:text-7xl md:text-8xl">
              {h1Italic}
            </span>{" "}
            <br />
            {h1Last}
          </h1>

          {/* Lede Paragraph */}
          <p className="text-base sm:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-8">
            {description}
          </p>

          {/* CTA Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#booking"
              className="px-8 py-4 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-2xl tracking-wider text-center hover:bg-[hsl(28_95%_45%)] transition-all shadow-xl shadow-[hsl(32_90%_50%/0.3)] hover:scale-[1.02]"
            >
              {primaryCta} →
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded bg-white/10 backdrop-blur-md text-white border border-white/20 font-display font-bold text-2xl tracking-wider text-center hover:bg-white/20 transition-all hover:border-white/40"
            >
              {secondaryCta}
            </a>
          </div>

          {/* Meta Strip Layer */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/70">
            <span>Пн-Нд: 10:00 — 21:00</span>
            <span className="text-white/30">•</span>
            <span>вул. Павлівська, 18 / Позняки / Виноградар</span>
            <span className="text-white/30">•</span>
            <span className="text-[hsl(32_90%_50%)] font-bold">4.8/5 rating in Google Maps (580+ відгуків)</span>
          </div>
        </div>
      </div>

      {/* Hero Stats Bottom Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(32_90%_50%)] tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-white/70 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Cue Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-6">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/50 mb-1.5 font-mono">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[hsl(32_90%_50%)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
