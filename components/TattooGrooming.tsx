"use client";

import { useLocale } from "@/lib/i18n";

export default function TattooGrooming() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image side */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_7104-300x200.jpg"
                alt={t("tattoo.studioTitle") as string}
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
                <div className="text-amber-400 font-display font-bold text-xl uppercase">
                  Тату-Майстер: Андрій (ART)
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  Студія на вул. Павлівській 18
                </div>
              </div>
            </div>
          </div>

          {/* Text content side */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
              {t("tattoo.kicker") as string}
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white leading-none">
              {t("tattoo.title") as string}
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              {t("tattoo.desc") as string}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200">
                <span className="text-amber-400 text-lg font-bold">✓</span>
                <span>{t("tattoo.feature1") as string}</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200">
                <span className="text-amber-400 text-lg font-bold">✓</span>
                <span>{t("tattoo.feature2") as string}</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-200">
                <span className="text-amber-400 text-lg font-bold">✓</span>
                <span>{t("tattoo.feature3") as string}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-lg rounded shadow-lg"
              >
                Консультація тату-майстра
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}