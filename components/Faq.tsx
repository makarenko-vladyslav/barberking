"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList = [
    {
      q: "СКІЛЬКИ КОШТУЄ ЧОЛОВІЧА СТРИЖКА У BARBERKING КИЇВ?",
      a: "Чоловіча стрижка в Barberking — від 750 грн. Комплекс «стрижка + борода» — від 1 150 грн. Стрижка машинкою — від 550 грн. Дитяча стрижка (до 10 років) — від 700 грн. Усі матеріали та кавова карта включені."
    },
    {
      q: "Скільки триває чоловіча стрижка?",
      a: "Зазвичай візит триває від 45 до 60 хвилин. Стрижка бороди — 30 хвилин. Комплексний візит із доглядом обличчя займає близько 75-90 хвилин."
    },
    {
      q: "Чи можна прийти або записатися день у день?",
      a: "Так! Найшвидший спосіб забронювати зручний час — через онлайн-запис на сайті або за телефоном 095 107 92 15."
    },
    {
      q: "Як відбувається стерилізація інструментів?",
      a: "Усі інструменти проходять дезінфекцію в ультразвуковій ванні, після чого обробляються в сухожаровій шафі при 180°C. Леза для гоління — суворо одноразові."
    },
    {
      q: "Чи є безкоштовні напої та паркування?",
      a: "Так! Для кожного гостя безкоштовно пропонується шот віскі, кава, сік або вода. Усі 4 філії у Києві мають вільні місця для паркування авто."
    },
    {
      q: "Як доглядати за татуюванням після процедури в Tattoo Room?",
      a: "Тату-майстер наклеює спеціальну захисну гіпоалергенну плівку. Після цього рекомендуємо обробляти маззю Bepanthen чи Panthenol."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-bg-dark border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            ЧАСТІ ПИТАННЯ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            УСЕ, ЩО ВАРТО ЗНАТИ ПЕРЕД ВІЗИТОМ
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Відповіді на запитання про вартість, тривалість та стерилізацію.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-bg-card border border-border-dark transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:text-accent transition-colors"
                >
                  <span className="font-display font-bold text-xl text-text-light uppercase">
                    {item.q}
                  </span>
                  <span className="font-mono text-accent text-2xl font-black">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 text-xs text-text-muted leading-relaxed border-t border-border-dark/40 font-mono">
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
