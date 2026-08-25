"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function Gallery() {
  const { t } = useLocale();

  const items = (t("gallery.items") as string[]) || [];

  return (
    <section id="gallery" className="py-24 bg-neutral-950 border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("gallery.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("gallery.title"))}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              {String(t("gallery.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((imgUrl, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                <img
                  src={imgUrl}
                  alt={`Barberking Haircut ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    Робота майстра #{idx + 1} · Barberking Kyiv
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
