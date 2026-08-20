"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems = [
    {
      q: "СКІЛЬКИ КОШТУЄ ЧОЛОВІЧА СТРИЖКА У BARBERKING КИЇВ?",
      a: "Чоловіча стрижка в Barberking — від 750 грн. Комплекс «стрижка + борода» — від 1 150 грн. Стрижка машинкою — від 550 грн. Дитяча стрижка (до 10 років) — від 700 грн. Актуальні ціни залежать від рівня майстра (Barber, Top, Grand).",
    },
    {
      q: "Скільки триває чоловіча стрижка?",
      a: "Зазвичай від 45 до 60 хвилин — залежно від довжини, форми та складності. Комплексна послуга з бородою триває 60-75 хвилин.",
    },
    {
      q: "Чи можна записатися день у день або прийти без запису?",
      a: "Так, якщо є вільні слоти. Проте ми рекомендуємо попередній онлайн-запис, щоб гарантувати відсутність черги у зручний для вас час.",
    },
    {
      q: "Що входить в оформлення та стрижку бороди?",
      a: "Консультація щодо форми під анатомію обличчя, распарювання, окантовка небезпечною бритвою або воском, моделювання довжини та нанесення олії.",
    },
    {
      q: "Чи робите камуфляж сивини?",
      a: "Так, робимо камуфляж сивини волосся та бороди з підбором відтінку максимально природно під ваш рідний колір (без рудого чи штучного відблиску).",
    },
    {
      q: "Як працює власна Tattoo Room?",
      a: "Кабінет тату розміщено на Павлівській 18. Ми пропонуємо художнє татуювання, розробку індивідуального ескізу та перекриття старих робіт. Обладнання 100% одноразове та стерильне.",
    },
    {
      q: "Які напої входять у безкоштовний бар?",
      a: "Для кожного гостя пропонується еспресо, американо, заспокійливий чай, газовані напої або преміальний віскі.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[hsl(18_10%_12%)] text-white border-t border-hairline scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12 text-center">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-widest">
            {String(t("faq.kicker"))}
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-white">
            {String(t("faq.heading"))}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            {String(t("faq.subheading"))}
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[hsl(18_12%_8%)] border border-hairline rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-gray-200 hover:text-amber-400 transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-amber-500 text-2xl font-normal ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-hairline/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
