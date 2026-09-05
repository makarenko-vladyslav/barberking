"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 sm:pt-32 sm:pb-10 bg-bg-dark overflow-hidden">
      {/* Background Video Stack with Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg"
          className="w-full h-full object-cover opacity-25 scale-[1.02]"
        >
          <source
            src="https://videos.pexels.com/video-files/7426382/7426382-hd_2048_864_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/75 to-bg-dark/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38_92%_50%/0.08),transparent_60%)]" />
      </div>

      {/* Rotating Text-Only Badge (Top-Right Marginalia) */}
      <div className="hidden lg:block absolute top-28 right-8 xl:right-16 z-20 pointer-events-none select-none">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
            <defs>
              <path
                id="textPathCircle"
                d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
              />
            </defs>
            <text className="font-display text-[9px] uppercase tracking-[0.24em] fill-text-light/60 font-semibold">
              <textPath href="#textPathCircle" startOffset="0%">
                {String(t("hero.sealText"))}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 m-auto w-10 h-10 rounded-full border border-border-dark flex items-center justify-center font-display text-xs font-bold text-accent">
            2018
          </div>
        </div>
      </div>

      {/* Hero Main Content with Asymmetric Editorial Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Concrete Offer & Precision Typography */}
          <div className="lg:col-span-8">
            {/* Kicker with Status Pill */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-border-dark/60 rounded border border-accent/30 text-accent font-display text-sm tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-subtle"></span>
              {String(t("hero.kicker"))}
            </div>

            {/* Poster H1 with Targeted Commercial Anchor */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold uppercase leading-[0.92] text-text-light tracking-tight">
              <span className="block">{String(t("hero.titlePart1"))}</span>
              <span className="text-accent italic font-normal inline-block">{String(t("hero.titleAccent"))}</span>{" "}
              <span className="inline-block">{String(t("hero.titlePart2"))}</span>
            </h1>

            {/* Lede Body */}
            <p className="mt-5 text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
              {String(t("hero.lede"))}
            </p>

            {/* CTA Pair */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-dark font-display text-xl font-bold uppercase tracking-wider rounded hover:bg-accent-deep transition-colors duration-200 ease-out shadow-md"
              >
                {String(t("hero.primaryCta"))}
              </a>
              <a
                href="#prices"
                className="inline-flex items-center justify-center px-6 py-4 text-text-light/90 hover:text-accent font-display text-lg font-semibold uppercase tracking-wider transition-colors duration-200 ease-out border-b border-border-dark hover:border-accent"
              >
                {String(t("hero.secondaryCta"))} →
              </a>
            </div>

            {/* Two Flanking Mini-Copy Columns */}
            <div className="mt-8 pt-6 border-t border-border-dark/60 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-text-muted leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-accent font-mono font-bold">—</span>
                <span>{String(t("hero.flankLeft"))}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent font-mono font-bold">—</span>
                <span>{String(t("hero.flankRight"))}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Editorial Offset Poster Card */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="relative rounded bg-bg-surface border border-border-dark overflow-hidden p-3 group shadow-2xl">
              <div className="relative aspect-[4/5] rounded overflow-hidden">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-1024x682.jpg"
                  alt="Barberking Kyiv Master Cut"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 bg-bg-dark/90 px-3 py-1 rounded text-xs font-display tracking-widest text-accent uppercase border border-border-dark">
                  Grand Protocol
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-2xl font-bold uppercase text-text-light leading-tight">
                    Анатомічний Fade & Чисте Лезо
                  </div>
                  <div className="text-[11px] font-mono text-text-muted mt-1">
                    Фіксація форми до 3-4 тижнів
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded bg-primary/60 border border-border-dark">
                <div className="font-display text-3xl font-extrabold text-accent tabular-nums">265 000+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-text-muted mt-0.5">Стрижок з 2018</div>
              </div>
              <div className="p-3.5 rounded bg-primary/60 border border-border-dark">
                <div className="font-display text-3xl font-extrabold text-text-light tabular-nums">4.9 / 5.0</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-text-muted mt-0.5">Google Maps</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Item Meta Strip + Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-4 border-t border-b border-border-dark text-xs uppercase tracking-wider text-text-muted">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">ГОДИНИ:</span>
            <span className="text-text-light font-mono">{String(t("hero.metaHours"))}</span>
          </div>
          <div className="flex items-center gap-2 md:justify-center border-t md:border-t-0 md:border-x border-border-dark/60 pt-2 md:pt-0">
            <span className="text-accent font-bold">ЛОКАЦІЇ:</span>
            <span className="text-text-light">{String(t("hero.metaAddress"))}</span>
          </div>
          <div className="flex items-center gap-2 md:justify-end border-t md:border-t-0 border-border-dark/60 pt-2 md:pt-0">
            <span className="text-accent font-bold">РЕЙТИНГ:</span>
            <span className="text-text-light font-mono font-semibold">{String(t("hero.metaRating"))}</span>
          </div>
        </div>

        {/* Minimal Bottom Scroll Cue */}
        <div className="mt-4 flex flex-col items-center justify-center gap-1 text-[9px] font-mono tracking-[0.25em] text-text-muted/70">
          <span>{String(t("hero.scroll"))}</span>
          <div className="w-[1px] h-5 bg-border-dark overflow-hidden relative">
            <div className="w-full h-2.5 bg-accent animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}