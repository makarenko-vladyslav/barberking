"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Carousel } from "./motion";

interface Testimonial {
  name: string;
  branch: string;
  date: string;
  stars: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useLocale();

  const items = (t("testimonials.items") as Testimonial[]) || [];

  const slides = items.map((review, idx) => (
    <div key={idx} className="bg-neutral-950 border border-white/10 rounded-xl p-8 max-w-2xl mx-auto text-left">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-white">
            {review.name}
          </h3>
          <span className="text-xs text-neutral-400 font-medium">
            Локація: {review.branch} · {review.date}
          </span>
        </div>
        <div className="text-right">
          <span className="font-display text-2xl font-extrabold text-accent block">
            {review.stars}
          </span>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            ОЦІНКА ГОСТЯ
          </span>
        </div>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed italic">
        "{review.text}"
      </p>
    </div>
  ));

  return (
    <section className="py-24 bg-neutral-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("testimonials.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("testimonials.title"))}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              {String(t("testimonials.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* Display Quote Block with Oversized Quotation Mark */}
        <Reveal delay={0.1}>
          <div className="mb-12 bg-neutral-950 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden text-center">
            <span className="font-display text-8xl font-extrabold text-accent/20 absolute -top-4 left-6 select-none pointer-events-none">
              “
            </span>
            <p className="font-display text-2xl sm:text-3xl font-bold uppercase text-white leading-snug relative z-10 mb-4">
              {String(t("testimonials.displayQuote"))}
            </p>
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">
              {String(t("testimonials.quoteAuthor"))}
            </span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
              {String(t("testimonials.ratingSource"))}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Carousel items={slides} />
        </Reveal>
      </div>
    </section>
  );
}
