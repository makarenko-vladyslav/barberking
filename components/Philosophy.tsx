"use client";

import { useLocale } from "@/lib/i18n";

export default function Philosophy() {
  const { t } = useLocale();

  return (
    <section id="philosophy" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Absolute Decorative Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] overflow-hidden z-0"
      >
        <span className="font-display font-extrabold text-[22vw] leading-none uppercase text-white whitespace-nowrap">
          CRAFT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            {/* Layer 1: Kicker */}
            <div className="inline-block px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase rounded">
              {t("philosophy.kicker") as string}
            </div>

            {/* Layer 2: Display Heading */}
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white leading-[0.95]">
              {t("philosophy.title") as string}
            </h2>

            {/* Layer 3: Oversized Pull Quote Line */}
            <div className="p-4 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 text-amber-200 font-display text-xl sm:text-2xl uppercase tracking-tight">
              "{t("philosophy.quote") as string}"
            </div>

            {/* Layer 4: Body Copy */}
            <p className="text-base text-zinc-300 font-body leading-relaxed">
              {t("philosophy.lead") as string}
            </p>

            <div className="space-y-3 text-zinc-400 text-xs sm:text-sm leading-relaxed border-l border-zinc-800 pl-4">
              <p>{t("philosophy.p1") as string}</p>
              <p>{t("philosophy.p2") as string}</p>
            </div>

            {/* Layer 5: Stat Row with Real Numerals */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-zinc-800/80 my-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 tabular-nums">265K+</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 font-mono uppercase">{t("philosophy.statHaircuts") as string}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 tabular-nums">4</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 font-mono uppercase">{t("philosophy.statLocations") as string}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 tabular-nums">100%</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 font-mono uppercase">{t("philosophy.statHygiene") as string}</div>
              </div>
            </div>

            {/* Layer 6: Named Person + Secondary Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div>
                <div className="text-sm font-display font-bold uppercase text-white">
                  {t("philosophy.founder") as string}
                </div>
                <div className="text-xs text-zinc-500 font-mono">{t("philosophy.founderSub") as string}</div>
              </div>
              <a
                href="#hygiene"
                className="text-xs font-mono uppercase text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Стандарти роботи →
              </a>
            </div>
          </div>

          {/* Right Imagery Collage: 2-photo cluster with framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative space-y-4">
              {/* Main Photo */}
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6059-300x200.jpg"
                  alt="Інтер'єр Barberking"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              {/* Overlapped Secondary Photo */}
              <div className="sm:absolute -bottom-8 -left-6 sm:w-2/3 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-zinc-900 transform rotate-1">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5183-300x200.jpg"
                  alt="Процес стрижки"
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>

            {/* Photo Caption with Rule */}
            <div className="mt-6 sm:mt-12 text-right">
              <span className="text-xs text-zinc-400 font-mono">
                {t("philosophy.processTitle") as string}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}