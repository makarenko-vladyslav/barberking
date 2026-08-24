"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const features = (t("hero.features") as string[]) || [];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[hsl(0_0%_5%)]">
      {/* Background Video Layer with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-40 contrast-110"
        >
          <source src={String(t("hero.videoSrc"))} type="video/mp4" />
        </video>
        {/* Gradient Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/0.6)] to-[hsl(0_0%_5%/0.8)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[hsl(0_0%_5%/0.5)] to-[hsl(0_0%_5%)]" />
      </div>

      {/* Giant Background Watermark Text Layer (Absolute, Zero Height Impact) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5"
      >
        <span className="font-['Alumni_Sans'] font-extrabold text-[22vw] uppercase tracking-tighter text-[hsl(0_0%_100%)] whitespace-nowrap leading-none">
          BARBERKING
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Content Column */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Eyebrow Kicker with Real Meta */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xs bg-[hsl(38_90%_50%/0.12)] border border-[hsl(38_90%_50%/0.3)] mb-6 backdrop-blur-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-[hsl(38_90%_50%)]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[hsl(38_90%_50%)]">
              {String(t("hero.kicker"))}
            </span>
          </div>

          {/* Poster H1 Display Heading */}
          <h1 className="font-['Alumni_Sans'] text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[hsl(0_0%_98%)] leading-[0.92] mb-6">
            {String(t("hero.titlePart1"))}{" "}
            <span className="text-[hsl(38_90%_50%)] italic underline decoration-[hsl(38_90%_50%/0.4)] decoration-4 underline-offset-8">
              {String(t("hero.titleHighlight"))}
            </span>{" "}
            {String(t("hero.titlePart2"))}
          </h1>

          {/* Subtitle Lede */}
          <p className="text-sm sm:text-lg text-[hsl(0_0%_75%)] max-w-2xl leading-relaxed mb-8 font-normal">
            {String(t("hero.description"))}
          </p>

          {/* Features Checklist */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 mb-10 text-xs text-[hsl(0_0%_85%)]">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[hsl(38_90%_50%)] font-bold text-sm">/</span>
                <span className="font-semibold uppercase tracking-wider">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider rounded-xs text-center transition-all shadow-lg"
            >
              {String(t("hero.primaryCta"))}
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-[hsl(0_0%_12%/0.9)] hover:bg-[hsl(0_0%_20%)] text-[hsl(0_0%_90%)] border border-[hsl(0_0%_28%)] font-bold text-xs uppercase tracking-wider rounded-xs text-center transition-all backdrop-blur-sm"
            >
              {String(t("hero.secondaryCta"))}
            </a>
          </div>
        </div>

        {/* Flanking Side Column with Rotating Text Seal & Mini Copy */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-between items-end gap-10 border-l border-[hsl(0_0%_18%)] pl-8 py-4">
          {/* Circular Text Seal (No glyphs) */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fill="hsl(38, 90%, 50%)" fontSize="9.5" fontWeight="bold" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0%">
                  {String(t("hero.sealText"))}
                </textPath>
              </text>
            </svg>
            <div className="absolute font-['Alumni_Sans'] font-extrabold text-2xl text-[hsl(0_0%_95%)] tracking-tighter">
              2018
            </div>
          </div>

          {/* Flanking Mini Copy 1 */}
          <div className="text-right max-w-[240px]">
            <span className="text-[10px] uppercase font-bold text-[hsl(38_90%_50%)] tracking-widest block mb-1">
              КОНЦЕПЦІЯ
            </span>
            <p className="text-xs text-[hsl(0_0%_65%)] leading-snug">
              {String(t("hero.flankLeft"))}
            </p>
          </div>

          {/* Flanking Mini Copy 2 */}
          <div className="text-right max-w-[240px] pt-4 border-t border-[hsl(0_0%_15%)]">
            <span className="text-[10px] uppercase font-bold text-[hsl(38_90%_50%)] tracking-widest block mb-1">
              СЕРВІС
            </span>
            <p className="text-xs text-[hsl(0_0%_65%)] leading-snug">
              {String(t("hero.flankRight"))}
            </p>
          </div>
        </div>
      </div>

      {/* 3-Item Meta Strip with Hairline Separators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[hsl(0_0%_18%)] bg-[hsl(0_0%_7%/0.95)] border border-[hsl(0_0%_18%)] rounded-xs backdrop-blur-md">
          <div className="p-4 sm:p-5 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] uppercase tracking-widest text-[hsl(0_0%_50%)] font-bold mb-1">
              РЕЖИМ РОБОТИ
            </span>
            <span className="font-['Alumni_Sans'] text-2xl font-bold text-[hsl(38_90%_50%)] uppercase tracking-wider">
              {String(t("hero.metaTime"))}
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] uppercase tracking-widest text-[hsl(0_0%_50%)] font-bold mb-1">
              ЛОКАЦІЇ КИЇВ
            </span>
            <span className="font-['Alumni_Sans'] text-2xl font-bold text-[hsl(0_0%_95%)] uppercase tracking-wider">
              {String(t("hero.metaAddress"))}
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] uppercase tracking-widest text-[hsl(0_0%_50%)] font-bold mb-1">
              РЕЙТИНГ МЕРЕЖІ
            </span>
            <span className="font-['Alumni_Sans'] text-2xl font-bold text-[hsl(38_90%_50%)] uppercase tracking-wider">
              {String(t("hero.metaRating"))}
            </span>
          </div>
        </div>
      </div>

      {/* Tiny Bottom-Center Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-6">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[hsl(0_0%_50%)] mb-1">
          {String(t("hero.scrollText"))}
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[hsl(38_90%_50%)] to-transparent" />
      </div>
    </section>
  );
}