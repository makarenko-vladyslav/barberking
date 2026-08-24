"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  const reviews = (t("testimonials.reviews") as Array<{
    name: string;
    date: string;
    rating: number;
    branch: string;
    text: string;
  }>) || [];

  return (
    <section id="testimonials" className="py-24 bg-[hsl(0_0%_7%)] border-t border-[hsl(0_0%_15%)] text-[hsl(0_0%_95%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("testimonials.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("testimonials.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("testimonials.subtitle"))}
          </p>
        </div>

        {/* Featured Large Display Quote */}
        <div className="max-w-4xl mx-auto mb-16 p-8 bg-[hsl(0_0%_9%)] border border-[hsl(38_90%_50%/0.3)] rounded-xs relative">
          <span className="font-serif text-7xl text-[hsl(38_90%_50%/0.3)] absolute top-2 left-4 leading-none select-none">
            “
          </span>
          <div className="relative z-10 pt-4">
            <p className="font-['Alumni_Sans'] text-2xl sm:text-4xl font-bold uppercase tracking-wide leading-tight text-[hsl(0_0%_95%)] mb-6">
              "{String(t("testimonials.featuredQuote"))}"
            </p>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-t border-[hsl(0_0%_16%)] pt-4 gap-2">
              <span className="text-xs font-bold text-[hsl(38_90%_50%)] uppercase tracking-wider">
                {String(t("testimonials.featuredAuthor"))}
              </span>
              <span className="text-xs font-mono text-[hsl(0_0%_50%)]">
                {String(t("testimonials.ratingSource"))}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[hsl(38_90%_50%)] tracking-wider">
                    {String(t("testimonials.scoreLabel"))}
                  </span>
                  <span className="text-xs text-[hsl(0_0%_50%)] font-mono">
                    {r.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[hsl(0_0%_80%)] leading-relaxed italic mb-6 font-normal">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[hsl(0_0%_15%)] flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[hsl(0_0%_95%)] uppercase tracking-wider">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-[hsl(38_90%_50%)]">
                    {r.branch}
                  </div>
                </div>
                <span className="text-[9px] uppercase font-bold text-[hsl(0_0%_45%)] border border-[hsl(0_0%_20%)] px-2 py-0.5 rounded-xs tracking-widest">
                  {String(t("testimonials.googleVerified"))}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Interactive Dot Indicators (No Prev/Next Arrows) */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveTab(dot)}
              className={`h-1.5 rounded-full transition-all ${
                activeTab === dot ? "w-8 bg-[hsl(38_90%_50%)]" : "w-2 bg-[hsl(0_0%_25%)]"
              }`}
              aria-label={String(t("testimonials.slideAria")).replace("${dot + 1}", String(dot + 1))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
