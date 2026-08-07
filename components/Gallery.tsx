"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();
  const items = t("gallery.items") as any[];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            ПОРТФОЛІО РОБІТ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            РЕАЛЬНІ СТРИЖКИ ТА ФОРМИ БОРОДИ
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Фотографії реальних гостей після візиту до майстрів Barberking у Києві.
          </p>
        </div>

        {/* Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.url)}
              className="group relative h-80 bg-secondary overflow-hidden border border-border-dark cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-text-light leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={activeImage}
              alt="Work sample full size"
              className="max-w-full max-h-[85vh] object-contain border border-border-dark"
            />
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-accent text-bg-dark font-display font-bold px-4 py-2 text-sm uppercase"
            >
              Закрити ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
