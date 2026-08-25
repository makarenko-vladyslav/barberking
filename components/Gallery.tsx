
"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function Gallery() {
  const { t } = useLocale();

  const kicker = t("gallerySection.kicker") as string;
  const title = t("gallerySection.title") as string;
  const subtitle = t("gallerySection.subtitle") as string;
  const galleryImages = (t("gallerySection.items") as Array<{ url: string; title: string; category: string }>) || [];

  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[hsl(0_0%_5%)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] text-[hsl(38_88%_52%)] uppercase block mb-3">
              {kicker}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
              {title}
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[hsl(0_0%_75%)] text-base sm:text-lg font-light">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <StaggerItem
              key={idx}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-[hsl(0_0%_18%)]"
            >
              <div 
                onClick={() => setActiveImg(img.url)} 
                className="w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[hsl(38_88%_52%)]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveImg(img.url); }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[10px] text-[hsl(38_88%_52%)] uppercase font-bold tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white uppercase">
                    {img.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[85vh]">
            <img src={activeImg} alt="Збільшене фото" className="max-w-full max-h-[85vh] rounded object-contain" />
            <button
              onClick={() => setActiveImg(null)}
              className="absolute -top-10 right-0 text-white font-display text-xl uppercase font-bold min-h-[44px] min-w-[44px] flex items-center justify-center px-2 py-1"
            >
              Закрити ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
