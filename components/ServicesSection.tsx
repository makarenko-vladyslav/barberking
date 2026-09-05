"use client";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  title: string;
  price: string;
  time: string;
  desc: string;
  tag: string;
  photo: string;
}

export default function ServicesSection() {
  const { t } = useLocale();
  const rawCatalog = t("servicesSection.items");
  const catalog: ServiceItem[] = Array.isArray(rawCatalog) ? (rawCatalog as ServiceItem[]) : [];

  if (catalog.length === 0) return null;

  const [featuredService, ...otherServices] = catalog;

  return (
    <section id="services" className="py-20 sm:py-28 bg-bg-light text-text-main border-y border-border-light scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block with Editorial Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border-light">
          <div>
            <div className="text-accent-deep font-display text-sm tracking-widest uppercase mb-2 font-bold">
              {String(t("servicesSection.kicker"))}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-main">
              {String(t("servicesSection.title"))}
            </h2>
            <p className="mt-3 text-text-main/70 max-w-xl text-base">
              {String(t("servicesSection.subtitle"))}
            </p>
          </div>
          <a
            href="#prices"
            className="min-h-[44px] py-2.5 inline-flex items-center text-accent-deep hover:text-text-main font-display text-xl uppercase tracking-wider font-bold transition-colors duration-200 ease-out"
          >
            {String(t("servicesSection.fullPriceCta"))}
          </a>
        </div>

        {/* Asymmetrical Editorial Composition: Lead Hero Banner */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-card-light rounded border border-border-light overflow-hidden shadow-sm hover:border-accent transition-[border-color] duration-300 ease-out">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-primary">
              <img
                src={featuredService.photo}
                alt={featuredService.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-bg-dark/90 text-accent font-display text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                {featuredService.tag}
              </div>
            </div>
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono uppercase text-text-main/60 mb-3">
                  <span>{String(t("servicesSection.mainMenuItem"))}</span>
                  <span>{featuredService.time}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-text-main leading-tight">
                  {featuredService.title}
                </h3>
                <div className="font-display text-4xl font-black text-accent-deep mt-2 mb-4">
                  {featuredService.price}
                </div>
                <p className="text-sm text-text-main/75 leading-relaxed">
                  {featuredService.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-wider text-text-main/60 font-semibold">
                  {String(t("servicesSection.consultLabel"))}
                </span>
                <a
                  href="#booking"
                  className="min-h-[44px] px-6 py-2.5 inline-flex items-center justify-center bg-bg-dark text-text-light font-display text-lg font-bold uppercase tracking-wider rounded text-center hover:bg-accent hover:text-bg-dark transition-colors duration-200 ease-out"
                >
                  {String(t("servicesSection.bookCardCta"))}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining 5 Cards in Asymmetrical Staggered Editorial Layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-card-light rounded overflow-hidden border border-border-light hover:border-accent transition-[border-color,box-shadow] duration-300 ease-out shadow-sm"
            >
              {/* Card Photo */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-primary">
                <img
                  src={service.photo}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-bg-dark/85 px-2.5 py-1 rounded text-xs font-display tracking-wider uppercase text-accent border border-border-dark">
                  {service.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-bg-dark/85 px-2.5 py-1 rounded text-xs font-medium text-text-light">
                  {service.time}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-text-main leading-snug">
                    {service.title}
                  </h3>
                  <div className="font-display text-2xl font-extrabold text-accent-deep my-2">
                    {service.price}
                  </div>
                  <p className="text-sm text-text-main/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-text-main/60">
                    {String(t("servicesSection.consultLabel"))}
                  </span>
                  <a
                    href="#booking"
                    className="min-h-[44px] py-2 inline-flex items-center font-display text-lg font-bold uppercase tracking-wider text-text-main group-hover:text-accent-deep transition-colors duration-200 ease-out"
                  >
                    {String(t("servicesSection.bookCardCta"))}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}