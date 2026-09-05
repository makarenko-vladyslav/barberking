"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FaqSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Скільки коштує чоловіча стрижка у Barberking Київ?",
      a: "Чоловіча стрижка в Barberking — від 750 грн (рівень Barber), 850 грн (Top Barber) та 1 150 грн (Grand Barber). Комплекс «стрижка + борода» — від 1 150 грн. Стрижка машинкою — від 550 грн. Усі ціни фіксовані без прихованих платежів."
    },
    {
      q: "Скільки триває чоловіча стрижка?",
      a: "Зазвичай від 45 до 60 хвилин залежно від довжини, вихідної форми та складності зведення фейду. Комплекс «стрижка + борода» триває близько 75–90 хвилин."
    },
    {
      q: "Чи можна записатися день у день?",
      a: "Так, якщо є вільні слоти в онлайн-календарі. Найшвидше перевірити доступний час — відкрити форму онлайн-запису на нашому сайті або зателефонувати 095 107 92 15."
    },
    {
      q: "Що входить в оформлення бороди?",
      a: "Консультація щодо гармонії форми з овалом обличчя, розпарювання гарячим рушником, стрижка довжини ножицями та машинкою, окантовка контуру небезпечною бритвою й обробка бальзамом."
    },
    {
      q: "Чи робите камуфляж сивини для волосся та бороди?",
      a: "Так, ми використовуємо спеціальні безаміачні чоловічі барвники, що дають м'який природний відтінок без ефекту 'пофарбованого перукарського шолома'."
    },
    {
      q: "Чи є біля філій зручний паркінг?",
      a: "Так, біля кожної з 4 локацій (Павлівська, Дніпровська набережна, Олеся, Урлівська) передбачені паркомісця для автомобілів наших гостей."
    },
    {
      q: "Як працює тату-простір у Barberking?",
      a: "Наш тату-майстер Андрій приймає на локації вул. Павлівська, 18. Консультація та розробка індивідуального ескізу проводяться за попереднім записом."
    },
    {
      q: "Через скільки днів можна знімати плівку після тату?",
      a: "Плівку з татуювання зазвичай знімають через 3-5 днів за рекомендацією майстра. Після зняття тату акуратно промивають теплою водою з рідким милом і наносять загоювальний крем (Bepanthen, Panthenol)."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("faqSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("faqSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            {String(t("faqSection.subtitle"))}
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 max-w-4xl divide-y divide-border-dark border-y border-border-dark">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-2xl font-bold uppercase text-text-light group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <span className="font-display text-2xl text-accent font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed pr-6">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
