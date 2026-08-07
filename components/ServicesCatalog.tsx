"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function ServicesCatalog() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "Усі послуги" },
    { id: "haircut", label: t("services.categories.main") },
    { id: "combo", label: t("services.categories.combos") },
    { id: "shaving", label: t("services.categories.shaving") },
    { id: "care", label: t("services.categories.care") },
  ];

  const fullServicesList = [
    { name: "Чоловіча стрижка", category: "haircut", price: "750 грн", time: "45 хв", desc: "Консультація, миття голови, підбір форми під анатомію обличчя, стайлінг.", tag: "ТОП ВІЗИТ" },
    { name: "Стрижка + Стрижка бороди (Комплекс)", category: "combo", price: "1 150 грн", time: "75 хв", desc: "Повне оновлення образу: стрижка волосся та моделювання бороди з гарячим рушником.", tag: "ХІТ ВІЗИТІВ", signature: true },
    { name: "Стрижка бороди та вусів", category: "shaving", price: "550 грн", time: "30 хв", desc: "Розпарювання, розробка лінії геометрії, окантовка небезпечною бритвою." },
    { name: "Королівське гоління", category: "shaving", price: "500 грн", time: "40 хв", desc: "Традиційний ритуал з гарячим компресом, кремом й окантовкою бритвою.", tag: "РИТУАЛ" },
    { name: "Стрижка машинкою (2 насадки)", category: "haircut", price: "550 грн", time: "30 хв", desc: "Точна стрижка однією або двома насадками з окантовкою шиї." },
    { name: "Дитяча стрижка (до 10 років)", category: "haircut", price: "700 грн", time: "40 хв", desc: "Терплячий підхід майстра, зачіска для молодого джентльмена." },
    { name: "Батько та син (стрижка для двох)", category: "combo", price: "1 150 грн", time: "75 хв", desc: "Спільний візит для батька та сина одночасно у сусідніх кріслах.", tag: "СЕМЕЙНИЙ" },
    { name: "Передвесільний комплекс", category: "combo", price: "1 500 грн", time: "90 хв", desc: "Стрижка, борода, догляд за обличчям Black Mask та воскова корекція." },
    { name: "Камуфлювання сивини волосся", category: "care", price: "550 грн", time: "30 хв", desc: "Природне затонування сивини без ефекту пофарбованого волосся." },
    { name: "Black Mask (очищення шкіри)", category: "care", price: "350 грн", time: "20 хв", desc: "Глибоке очищення пор та зволоження шкіри обличчя." },
    { name: "Воскова корекція (Waxing)", category: "care", price: "150 грн", time: "15 хв", desc: "Видалення небажаного волосся у зоні вух, носа чи брів." },
    { name: "Художній татуаж (Tattoo Room)", category: "care", price: "від 1 500 грн", time: "120 хв", desc: "Консультація тату-майстра, розробка ескізу та нанесення татуювання.", tag: "TATTOO ROOM" },
  ];

  const filtered = activeTab === "all"
    ? fullServicesList
    : fullServicesList.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-bg-dark border-b border-border-dark scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
            ПРЕЙСКУРАНТ ПОСЛУГ
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide uppercase">
            ПОСЛУГИ ТА ПРОЗОРА ВАРТІСТЬ
          </h2>
          <p className="text-text-muted text-base max-w-2xl mt-2 font-normal leading-relaxed">
            Без прихованих доплат. Фіксована ціна включає миття голови, консультацію, напої в барі та преміальний стайлінг.
          </p>
        </div>

        {/* Layer 2: Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-border-dark/60 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 font-display text-lg uppercase tracking-wider whitespace-nowrap transition-colors border ${
                activeTab === cat.id
                  ? "bg-accent text-bg-dark border-accent font-bold"
                  : "bg-secondary/40 text-text-muted border-border-dark hover:text-text-light hover:border-border-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Layer 3: Price List Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {filtered.map((item, idx) => {
            const isSignature = item.signature;

            return (
              <div
                key={idx}
                className={`p-6 border transition-all flex flex-col justify-between group relative ${
                  isSignature
                    ? "bg-secondary/80 border-accent shadow-lg shadow-accent/10"
                    : "bg-bg-card/70 border-border-dark/80 hover:border-accent/60"
                }`}
              >
                {/* Micro-tag if present */}
                {item.tag && (
                  <span className={`absolute top-0 right-0 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest ${
                    isSignature ? "bg-accent text-bg-dark" : "bg-secondary text-accent border-b border-l border-border-dark"
                  }`}>
                    {item.tag}
                  </span>
                )}

                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2 pt-2">
                    <h3 className="font-display font-bold text-2xl text-text-light group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-border-dark/80 mx-2 hidden sm:block" />
                    <span className="font-display font-extrabold text-2xl text-accent whitespace-nowrap tabular-nums">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-text-muted max-w-md leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mt-4 pt-3 border-t border-border-dark/50">
                  <span>ТРИВАЛІСТЬ: <strong className="text-text-light">{item.time}</strong></span>
                  <a
                    href="#contact"
                    className="text-accent hover:underline uppercase font-bold tracking-wider"
                  >
                    Записатися →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Layer 4: Footnote Line & Secondary CTA */}
        <div className="mt-12 p-5 bg-secondary/40 border border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
          <span>
            Усі матеріали, кавова карта та віскі включені у вартість кожної послуги.
          </span>
          <a
            href="#contact"
            className="font-display font-bold text-accent hover:text-accent-hover uppercase tracking-wider text-base whitespace-nowrap"
          >
            Забронювати візит онлайн →
          </a>
        </div>
      </div>
    </section>
  );
}
