"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

interface ReviewItem {
  author: string;
  role: string;
  rating: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useLocale();

  const kicker = (t("reviews.kicker") as string) || "СЛОВО ГОСТЕЙ";
  const title = (t("reviews.title") as string) || "РЕЙТИНГ 4.8 / 5.0 У GOOGLE MAPS";
  const subtitle = (t("reviews.subtitle") as string) || "";
  const items = (t("reviews.items") as ReviewItem[]) || [];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const activeReview = items[activeIndex] || items[0];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[hsl(0_0%_11%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[hsl(32_90%_50%)] uppercase mb-2 block">
            — {kicker}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light">
            {subtitle}
          </p>
        </div>

        {/* Featured Proof Quote Box */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[hsl(0_0%_7%)] border border-white/10 relative overflow-hidden mb-8">
          <span className="font-display font-extrabold text-8xl sm:text-9xl text-[hsl(32_90%_50%/0.2)] absolute -top-4 left-4 select-none pointer-events-none">
            «
          </span>

          <div className="relative z-10 max-w-4xl pt-4">
            <p className="font-display font-bold text-2xl sm:text-4xl text-white uppercase leading-snug mb-6">
              "{activeReview.text}"
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="font-display font-extrabold text-2xl text-[hsl(32_90%_50%)] block">
                  {activeReview.author}
                </span>
                <span className="text-xs font-mono text-white/60 block">
                  {activeReview.role}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-white/80 bg-white/5 px-3 py-1.5 rounded border border-white/10">
                  4.8 / 5.0 · Google Maps
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === idx
                  ? "w-10 bg-[hsl(32_90%_50%)]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
