"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      name: "Олександр Коваленко",
      role: "Постійний гість філії на Павлівській з 2019 року",
      quote: "Ходжу до Дмитра вже майже 3 роки. Завжди ідеальний Fade та чітка окантовка бороди. Напої з бару безкоштовно, а паркінг біля входу завжди вільний.",
      location: "Лук'янівка",
      rating: "5.0 / 5.0",
    },
    {
      name: "Максим Дерев'янко",
      role: "Мешканець ЖК Great, Позняки",
      quote: "Дуже радий відкриттю філії в нашому ЖК. Стригся у майстра Олександра — ювелірна точність та дотримання часу візиту. Окремий респект за якісну каву!",
      location: "ЖК Great",
      rating: "5.0 / 5.0",
    },
    {
      name: "Артем Сергієнко",
      role: "Клієнт Tattoo Room на Павлівській",
      quote: "Робив татуювання в Андрія на Павлівській 18. Все абсолютно стерильно, ескіз доопрацювали прямо на місці. Загоїлось швидко з їхньою плівкою.",
      location: "Tattoo Room",
      rating: "5.0 / 5.0",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[hsl(18_12%_8%)] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Layer 1: Kicker, Heading, Subheading */}
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("reviews.kicker"))} — ДУМКА ГОСТЕЙ
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("reviews.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {String(t("reviews.subheading"))}
          </p>
        </div>

        {/* Layer 2: Main Featured Quote in Display Type with Oversized Citation Symbol */}
        <div className="bg-[hsl(18_10%_12%)] border border-hairline rounded-lg p-8 sm:p-12 relative overflow-hidden">
          <span 
            aria-hidden="true" 
            className="absolute top-2 right-6 font-display font-extrabold text-[120px] leading-none text-amber-500/10 select-none pointer-events-none"
          >
            «
          </span>

          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="inline-block bg-amber-500/10 border border-hairline-accent px-3 py-1 rounded text-amber-400 text-xs font-bold uppercase tracking-wider">
              {reviews[activeIdx].location} · РЕЙТИНГ {reviews[activeIdx].rating}
            </div>

            <p className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-white">
              «{reviews[activeIdx].quote}»
            </p>

            {/* Layer 3: Attribution with Descriptor */}
            <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-display font-extrabold text-2xl text-amber-400">
                  {reviews[activeIdx].name}
                </div>
                <div className="text-xs text-gray-400 uppercase font-semibold">
                  {reviews[activeIdx].role}
                </div>
              </div>

              {/* Layer 4: Plain Text Rating + Named Source */}
              <div className="text-xs uppercase font-bold text-gray-300 tracking-wider">
                ОЦІНКА: 4.8 / 5.0 · GOOGLE MAPS (580+ ВІДГУКІВ)
              </div>
            </div>
          </div>
        </div>

        {/* Layer 5: Review Selector Dots (No Prev/Next Arrows) */}
        <div className="flex justify-center items-center space-x-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Перейти до відгуку ${idx + 1}`}
              className={`h-3 rounded-full transition-all ${
                activeIdx === idx
                  ? "w-10 bg-amber-500"
                  : "w-3 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
