"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();
  const [filter, setFilter] = useState("all");

  const images = [
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-1024x682.jpg",
      title: "Класична чоловіча стрижка",
      category: "haircuts",
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-1024x683.jpg",
      title: "Стрижка та окантовка бороди",
      category: "beards",
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5902-2-1024x683.jpg",
      title: "Текстурний Кроп & Fade",
      category: "haircuts",
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6059-1024x683.jpg",
      title: "Моделювання бороди та вусів",
      category: "beards",
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/uploads/2020/11/img_5183.jpg",
      title: "Королівське гоління бритвою",
      category: "shave",
    },
    {
      url: "https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg",
      title: "Атмосфера на Павлівській 18",
      category: "haircuts",
    },
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-[hsl(18_12%_8%)] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("gallery.kicker"))}
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("gallery.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {String(t("gallery.subheading"))}
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded font-display font-bold text-lg uppercase transition-all ${
              filter === "all"
                ? "bg-amber-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {String(t("gallery.filters.all"))}
          </button>
          <button
            onClick={() => setFilter("haircuts")}
            className={`px-4 py-2 rounded font-display font-bold text-lg uppercase transition-all ${
              filter === "haircuts"
                ? "bg-amber-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {String(t("gallery.filters.haircuts"))}
          </button>
          <button
            onClick={() => setFilter("beards")}
            className={`px-4 py-2 rounded font-display font-bold text-lg uppercase transition-all ${
              filter === "beards"
                ? "bg-amber-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {String(t("gallery.filters.beards"))}
          </button>
          <button
            onClick={() => setFilter("shave")}
            className={`px-4 py-2 rounded font-display font-bold text-lg uppercase transition-all ${
              filter === "shave"
                ? "bg-amber-500 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {String(t("gallery.filters.shave"))}
          </button>
        </div>

        {/* Gallery Gutterless Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-900 border border-hairline"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-400 font-display font-bold text-2xl uppercase">
                  {img.title}
                </span>
                <span className="text-gray-300 text-xs uppercase tracking-wider">
                  Barberking Portfolio
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
