"use client";
import { useLocale } from "@/lib/i18n";

export default function GallerySection() {
  const { t } = useLocale();

  const works = [
    {
      url: "https://kyiv.bking.com.ua/wp-content/themes/bking/images/map-banner.jpg",
      title: "Textured Crop Fade",
      desc: "Низький skin-fade з матовою текстурою верху."
    },
    {
      url: "https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: "Моделювання довгої бороди",
      desc: "Вирівнювання лінії щоки та насичений контур лезом."
    },
    {
      url: "https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: "Classic Side Part",
      desc: "Класичний діловий проділ з фіксацією без блиску."
    },
    {
      url: "https://images.pexels.com/photos/7320169/pexels-photo-7320169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      title: "Skin Fade машинка",
      desc: "Зведення нанівець від шкіри без видимих переходів."
    },
    {
      url: "https://images.pexels.com/videos/7426382/pexels-photo-7426382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
      title: "Комплекс стрижка + вуса",
      desc: "Синхронізація ліній щелепи та форми скроневих зон."
    },
    {
      url: "https://images.pexels.com/videos/27999071/dumbbell-factory-dumbbell-manufacturing-dumbbell-production-factory-operations-27999071.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
      title: "Modern Taper Fade",
      desc: "Плавне сходження на скронях та охайний потиличний контур."
    }
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("gallerySection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("gallerySection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("gallerySection.subtitle"))}
          </p>
        </div>

        {/* Real Customer Pull-Quote Proof Layer */}
        <div className="mt-10 p-6 sm:p-8 rounded bg-bg-dark border border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="font-display text-5xl text-accent font-serif leading-none mb-2">
              “
            </div>
            <p className="font-display text-2xl text-text-light leading-snug">
              {String(t("gallerySection.reviewQuote"))}
            </p>
            <div className="mt-3 text-xs font-mono text-text-muted">
              {String(t("gallerySection.reviewAuthor"))}
            </div>
          </div>
          <div className="shrink-0 p-4 rounded bg-primary border border-border-dark text-right">
            <div className="font-display text-3xl font-extrabold text-accent tabular-nums">
              4.9 / 5.0
            </div>
            <div className="text-[11px] font-mono text-text-light uppercase tracking-wider mt-0.5">
              Google Maps
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">
              540+ підтверджених відгуків
            </div>
            {/* Visual Dot Indicators */}
            <div className="mt-3 flex items-center justify-end gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-dark"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-dark"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-dark"></span>
            </div>
          </div>
        </div>

        {/* Real Work Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="group relative rounded overflow-hidden border border-border-dark bg-bg-dark aspect-[4/3]"
            >
              <img
                src={work.url}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 bg-bg-dark/80 px-2 py-0.5 rounded text-[10px] font-mono text-accent uppercase border border-border-dark">
                Кадр {idx + 1} / 06
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-xl font-bold uppercase text-text-light">
                  {work.title}
                </div>
                <div className="text-xs text-text-muted mt-0.5">
                  {work.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}