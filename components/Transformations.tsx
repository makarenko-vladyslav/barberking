"use client";

import { useLocale } from "@/lib/i18n";

export default function Transformations() {
  const { t } = useLocale();

  const works = (t("gallery.works") as Array<{
    title: string;
    barber: string;
    image: string;
    tag: string;
  }>) || [];

  return (
    <section id="transformations" className="py-20 bg-zinc-950 relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
            {t("gallery.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white mt-4 mb-3">
            {t("gallery.title") as string}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t("gallery.subtitle") as string}
          </p>
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/60 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 p-6 flex flex-col justify-end">
                <span className="self-start text-[10px] uppercase tracking-widest font-mono text-zinc-950 font-bold bg-amber-400 px-2 py-0.5 rounded mb-2">
                  {work.tag}
                </span>
                <h3 className="text-2xl font-display font-bold uppercase text-white">
                  {work.title}
                </h3>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Майстер: {work.barber}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}