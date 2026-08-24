"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();

  const realImages = [
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-300x200.jpg", title: String(t("gallery.img1")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5902-2-300x200.jpg", title: String(t("gallery.img2")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6059-300x200.jpg", title: String(t("gallery.img3")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5183-300x200.jpg", title: String(t("gallery.img4")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-300x200.jpg", title: String(t("gallery.img5")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5352-300x200.jpg", title: String(t("gallery.img6")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_7104-300x200.jpg", title: String(t("gallery.img7")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_4972-300x200.jpg", title: String(t("gallery.img8")) },
    { url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_4572-300x200.jpg", title: String(t("gallery.img9")) }
  ];

  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_95%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
            {String(t("gallery.kicker"))}
          </span>
          <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-4">
            {String(t("gallery.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(0_0%_65%)]">
            {String(t("gallery.subtitle"))}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {realImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImg(img.url)}
              className="group relative h-64 bg-[hsl(0_0%_10%)] border border-[hsl(0_0%_16%)] rounded-xs overflow-hidden cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%/0.9)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(38_90%_50%)]">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-50 bg-[hsl(0_0%_0%/0.92)] backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img
              src={activeImg}
              alt={String(t("gallery.enlargedAlt"))}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xs border border-[hsl(38_90%_50%/0.5)]"
            />
            <button
              onClick={() => setActiveImg(null)}
              className="absolute -top-10 right-0 text-[hsl(0_0%_100%)] text-xs font-bold uppercase tracking-widest hover:text-[hsl(38_90%_50%)]"
            >
              {String(t("gallery.close"))} [X]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
