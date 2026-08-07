"use client";

import { useLocale } from "@/lib/i18n";

export default function Reviews() {
  const { t } = useLocale();
  const items = t("reviews.items") as any[];

  return (
    <section id="reviews" className="py-24 bg-bg-card border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            СЛОВО ГОСТЕЙ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            ВІДГУКИ КЛІЄНТІВ У GOOGLE MAPS
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Середній рейтинг 4.8 / 5.0 на основі понад 1 200 реальних відгуків мешканців Києва.
          </p>
        </div>

        {/* Layer 2: Featured Quote Banner */}
        <div className="mb-12 p-8 bg-bg-dark border border-border-dark relative">
          <span className="font-display font-black text-7xl text-accent/20 absolute top-2 right-6 select-none pointer-events-none">
            "
          </span>
          <p className="font-display font-bold text-2xl sm:text-3xl text-text-light uppercase leading-snug max-w-4xl mb-4">
            "ЗАВЖДИ ІДЕАЛЬНИЙ ФАДЕ, БОРОДА АКУРАТНА НАВІТЬ ЧЕРЕЗ 2 ТИЖНІ. ПРИЄМНО, ЩО ПАРКІНГ БІЛЯ ДОМУ ТА ПРИГОЩАЮТЬ ГАРНИМ ВІСКІ."
          </p>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-text-light font-bold">Олександр Ткаченко</span>
            <span className="text-border-dark">—</span>
            <span className="text-accent">4.8 / 5.0 · Google Maps</span>
          </div>
        </div>

        {/* Layer 3: Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((rev, idx) => (
            <div
              key={idx}
              className="bg-bg-dark border border-border-dark p-8 flex flex-col justify-between hover:border-accent/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-dark/60 font-mono text-xs">
                  <span className="text-accent font-bold">
                    ОЦІНКА: {rev.rating} / 5.0
                  </span>
                  <span className="text-text-muted">{rev.date}</span>
                </div>

                <p className="text-xs text-text-light leading-relaxed mb-6 font-normal">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-border-dark/60 flex flex-col">
                <span className="font-display font-bold text-xl text-text-light">
                  {rev.author}
                </span>
                <span className="text-xs text-text-muted font-mono">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
