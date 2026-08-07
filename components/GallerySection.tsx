"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface GalleryItem {
  url: string;
  title: string;
  category: string;
}

export default function GallerySection() {
  const { t } = useLocale();

  const kicker = t("gallery.kicker") as string;
  const title = t("gallery.title") as string;
  const subtitle = t("gallery.subtitle") as string;
  const items = (t("gallery.items") as GalleryItem[]) || [];

  const [activeFilter, setActiveFilter] = useState("Всі");

  const categories = ["Всі", "Стрижка", "Борода", "Класика", "Комплекс", "Процес"];

  const filteredItems =
    activeFilter === "Всі"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[hsl(0_0%_7%)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeFilter === cat
                  ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)]"
                  : "bg-white/5 text-white/70 border border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-xl overflow-hidden border border-white/10 bg-black/40 group cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-black/60 backdrop-blur-md border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.65rem] font-mono text-[hsl(32_90%_50%)] uppercase block mb-1">
                  {item.category}
                </span>
                <span className="font-display font-bold text-lg text-white block leading-tight">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}