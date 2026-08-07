"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-bg-dark border-b border-border-dark">
      {/* Layer 1: Background Stack - Video Loop + Dark Scrim Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t("hero.posterUrl")}
          className="w-full h-full object-cover scale-105 filter brightness-[0.4] contrast-110"
        >
          <source src={t("hero.videoUrl")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/70 to-bg-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/60 to-transparent" />
      </div>

      {/* Layer 2: Giant Watermark Type Layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[22vw] font-display font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap">
          BARBERKING
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Flanking Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border-dark/60">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-secondary/90 border border-border-dark text-accent text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Est. 2014 — Київ, 4 філії</span>
          </div>

          {/* Floating Text-Only Rotating Circular Seal */}
          <div className="hidden md:flex items-center gap-3 text-[11px] font-mono text-text-muted uppercase tracking-widest">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[11px] fill-accent font-mono font-bold tracking-widest uppercase">
                  <textPath href="#circlePath">
                    BARBERKING • KYIV • 2014 •
                  </textPath>
                </text>
              </svg>
              <span className="absolute font-display font-black text-accent text-xs">BK</span>
            </div>
            <span className="max-w-[140px] leading-tight text-text-muted">
              Правий та Лівий берег Києва
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Headline & Narrative */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-text-light leading-[0.92] mb-6 uppercase">
              ЧОЛОВІЧИЙ СТИЛЬ ТА{" "}
              <span className="text-accent underline decoration-accent/40 underline-offset-8">
                ГЕОМЕТРІЯ
              </span>{" "}
              СТРИЖКИ
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-2xl font-normal leading-relaxed mb-8">
              {t("hero.subtitle")}
            </p>

            {/* CTA Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent text-bg-dark font-display font-extrabold text-xl px-8 py-4 uppercase tracking-wider hover:bg-accent-hover transition-all transform hover:-translate-y-0.5 shadow-xl shadow-accent/15"
              >
                {t("hero.cta")}
              </a>
              <a
                href="#locations"
                className="inline-flex items-center justify-center border border-border-dark bg-secondary/60 text-text-light hover:text-accent hover:border-accent font-display font-bold text-xl px-8 py-4 uppercase tracking-wider transition-colors"
              >
                {t("hero.cta_secondary")}
              </a>
            </div>

            {/* Flanking Mini-Copy Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-dark/80 w-full text-xs text-text-muted">
              <div className="flex flex-col gap-1 border-l-2 border-accent pl-3">
                <span className="font-display font-bold text-text-light text-sm uppercase">
                  3-Етапна Стерилізація
                </span>
                <span>Сухожар 180°C та відкриття крафт-пакета при вас.</span>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-border-dark pl-3">
                <span className="font-display font-bold text-text-light text-sm uppercase">
                  Бар та Паркінг
                </span>
                <span>Односолодовий віскі, кава та безкоштовне паркування.</span>
              </div>
            </div>
          </div>

          {/* Right Column Quick Slot Box */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-bg-card/95 border border-border-dark p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-dark/80">
                <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest">
                  ОНЛАЙН-СЛОТИ
                </span>
                <span className="text-[10px] text-text-muted font-mono uppercase">Оновлено 5 хв тому</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-text-light mb-2 uppercase">
                ШВИДКИЙ ЗАПИС СЬОГОДНІ
              </h3>
              <p className="text-xs text-text-muted mb-6 leading-relaxed">
                Забронюйте час у найближчій філії. Кавова карта та напої включені.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 bg-secondary/80 border border-border-dark/80 rounded-xs flex justify-between items-center text-xs">
                  <span className="text-text-light font-medium">Лук'янівка (Павлівська)</span>
                  <span className="text-accent font-mono font-bold">4 слоти</span>
                </div>
                <div className="p-3 bg-secondary/80 border border-border-dark/80 rounded-xs flex justify-between items-center text-xs">
                  <span className="text-text-light font-medium">Позняки (ЖК Great)</span>
                  <span className="text-accent font-mono font-bold">2 слоти</span>
                </div>
                <div className="p-3 bg-secondary/80 border border-border-dark/80 rounded-xs flex justify-between items-center text-xs">
                  <span className="text-text-light font-medium">Виноградар (Олеся)</span>
                  <span className="text-accent font-mono font-bold">5 слотів</span>
                </div>
              </div>

              <a
                href="#contact"
                className="block text-center w-full bg-accent text-bg-dark font-display font-bold py-3 text-lg uppercase tracking-wider hover:bg-accent-hover transition-colors"
              >
                Обрати час візиту
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: 3-Item Meta Strip Base */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-t border-b border-border-dark/80 bg-bg-card/40 backdrop-blur-xs text-xs font-mono">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-text-muted">
            <span className="text-accent uppercase font-bold">ГОДИНИ:</span>
            <span className="text-text-light">Щодня 10:00 — 21:00</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-text-muted border-y sm:border-y-0 sm:border-x border-border-dark/60 py-2 sm:py-0">
            <span className="text-accent uppercase font-bold">ЛОКАЦІЇ:</span>
            <span className="text-text-light">Київ (4 філії)</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2 text-text-muted">
            <span className="text-accent uppercase font-bold">РЕЙТИНГ:</span>
            <span className="text-text-light font-bold">4.8 / 5.0 Google (1200+ відгуків)</span>
          </div>
        </div>
      </div>

      {/* Layer 4: Scroll Cue Indicator */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-1">
        <span className="text-[9px] uppercase tracking-[0.3em] text-text-muted font-mono">
          SCROLL
        </span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
