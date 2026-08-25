"use client";

import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

export default function GalleryMasonry() {
  const { t } = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const kicker = String(t("gallery.kicker"));
  const title = String(t("gallery.title"));
  const subtitle = String(t("gallery.subtitle"));
  const images = content.locales.uk.gallery.images;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[hsl(24_14%_11%)] border-t border-[hsl(36_10%_22%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-[hsl(32_95%_50%)] font-semibold mb-2 block">
            {kicker}
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[hsl(36_10%_92%)] mb-4">
            {title}
          </h2>
          <p className="text-[hsl(36_8%_70%)] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.url)}
              className="relative group cursor-pointer overflow-hidden rounded-md border border-[hsl(36_10%_22%)] bg-[hsl(24_16%_8%)] h-64"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24_16%_8%)] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs font-display font-bold uppercase text-[hsl(36_10%_92%)] group-hover:text-[hsl(32_95%_50%)] transition-colors">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[hsl(24_16%_8%/0.95)] backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded border border-[hsl(36_10%_22%)]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] p-2 rounded-full font-bold text-sm min-h-[44px] min-w-[44px] flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedImage} alt="Expanded view" className="w-full h-auto object-contain max-h-[85vh]" />
            <div className="p-4 bg-[hsl(24_14%_13%)] flex justify-end">
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] px-6 py-2.5 rounded font-display font-bold uppercase text-xs min-h-[44px]"
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
