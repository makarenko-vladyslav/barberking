"use client";

import { useLocale } from "@/lib/i18n";
import { Carousel } from "@/components/motion";

export default function Testimonials() {
  const { t } = useLocale();

  const reviews = (t("testimonials.reviews") as Array<{
    name: string;
    role: string;
    text: string;
    rating: number;
    date: string;
  }>) || [];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-800 overflow-hidden">
      {/* Absolute Decorative Background Mark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] z-0"
      >
        <span className="font-display font-extrabold text-[35vw] uppercase text-white leading-none">
          REVIEWS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Proof Section Header (Layers 1-3) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded">
            {t("testimonials.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4 mb-3">
            {t("testimonials.title") as string}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t("testimonials.subtitle") as string}
          </p>
        </div>

        {/* Testimonials Carousel (Dots only, no prev/next arrows) */}
        <Carousel>
          {reviews.map((review, idx) => (
            <div key={idx} className="p-4">
              <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-12 shadow-2xl text-center space-y-6 relative">
                {/* Oversized Display Quotation Mark */}
                <div 
                  aria-hidden="true" 
                  className="font-display font-extrabold text-7xl sm:text-8xl text-amber-500/20 leading-none select-none -mb-8"
                >
                  “
                </div>

                {/* Rating Display */}
                <div className="flex justify-center items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-widest">
                  <span className="font-bold text-lg">4.9 / 5.0</span>
                  <span className="text-zinc-600">·</span>
                  <span>{t("testimonials.googleLabel") as string}</span>
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl text-zinc-100 font-body leading-relaxed">
                  "{review.text}"
                </p>

                {/* Attribution & Descriptor */}
                <div className="pt-6 border-t border-zinc-800/80">
                  <div className="font-display font-extrabold uppercase text-2xl text-white">
                    {review.name}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    {review.role} · <span className="text-amber-400">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Named Source Summary Badge */}
        <div className="mt-12 text-center text-xs font-mono text-zinc-400 uppercase tracking-widest">
          ПОНАД 580 ПІДТВЕРДЖЕНИХ ВІДГУКІВ НА GOOGLE MAPS ДЛЯ 4 ЛОКАЦІЙ КИЄВА
        </div>
      </div>
    </section>
  );
}