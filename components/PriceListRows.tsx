"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface PriceRow {
  name: string;
  junior: string;
  barber: string;
  top: string;
  grand: string;
  desc: string;
  tag?: string;
}

export default function PriceListRows() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<"hair" | "beard" | "care">("hair");

  const hairPrices: PriceRow[] = [
    {
      name: "Професійна чоловіча стрижка",
      junior: "600 грн",
      barber: "750 грн",
      top: "850 грн",
      grand: "1 150 грн",
      desc: "Класична форма, crop, fade, pompadour. Подвійне миття голови та укладка.",
      tag: "Базовий вибір"
    },
    {
      name: "Стрижка машинкою (2 насадки)",
      junior: "450 грн",
      barber: "550 грн",
      top: "600 грн",
      grand: "750 грн",
      desc: "Швидка робота з чистим зведенням крайових ліній шиї."
    },
    {
      name: "Стрижка подовженого волосся",
      junior: "700 грн",
      barber: "850 грн",
      top: "950 грн",
      grand: "1 250 грн",
      desc: "Робота з текстурою та каскадом ножицями без втрати потрібної довжини."
    },
    {
      name: "Оновлення стрижки (до 10 днів)",
      junior: "450 грн",
      barber: "600 грн",
      top: "700 грн",
      grand: "900 грн",
      desc: "Підчищення контурів та скронь для постійного охайного вигляду."
    },
    {
      name: "Дитяча стрижка (до 10 років)",
      junior: "550 грн",
      barber: "700 грн",
      top: "800 грн",
      grand: "950 грн",
      desc: "Уважний та спокійний сервіс для наймолодших з витримкою геометрії."
    },
    {
      name: "Батько та син (одночасний сеанс)",
      junior: "1 000 грн",
      barber: "1 150 грн",
      top: "1 400 грн",
      grand: "1 750 грн",
      desc: "Спільний візит у сусідніх кріслах зі знижкою на комплексний чек.",
      tag: "Сімейний сет"
    },
    {
      name: "Стрижка бороди з окантовкою",
      junior: "350 грн",
      barber: "550 грн",
      top: "600 грн",
      grand: "800 грн",
      desc: "Створення лінії щоки, окантовка небезпечною бритвою та живлення олією."
    },
    {
      name: "Стрижка волосся + стрижка бороди",
      junior: "850 грн",
      barber: "1 150 грн",
      top: "1 250 грн",
      grand: "1 600 грн",
      desc: "Головний флагманський комплекс Barberking для повного оновлення форми.",
      tag: "ТОП вибір"
    }
  ];

  const beardPrices: PriceRow[] = [
    {
      name: "Стрижка та моделювання бороди",
      junior: "350 грн",
      barber: "550 грн",
      top: "600 грн",
      grand: "800 грн",
      desc: "Створення чіткої лінії щоки та шиї, підрізання вусів і окантовка лезом.",
      tag: "Регулярний догляд"
    },
    {
      name: "Стрижка волосся + стрижка бороди",
      junior: "850 грн",
      barber: "1 150 грн",
      top: "1 250 грн",
      grand: "1 600 грн",
      desc: "Головний комплекс Barberking для повного оновлення чоловічого стилю.",
      tag: "Повний комплекс"
    },
    {
      name: "Королівське гоління небезпечною бритвою",
      junior: "400 грн",
      barber: "500 грн",
      top: "600 грн",
      grand: "700 грн",
      desc: "Розпарювання рушником, ефірні масла, гладке лезо та заспокоєння шкіри."
    },
    {
      name: "Гоління голови бритвою",
      junior: "400 грн",
      barber: "500 грн",
      top: "600 грн",
      grand: "700 грн",
      desc: "Чистий зріз під нуль з доглядовим охолоджувальним лосьйоном."
    },
    {
      name: "Окантовка бороди воском",
      junior: "150 грн",
      barber: "150 грн",
      top: "200 грн",
      grand: "400 грн",
      desc: "Видалення дрібного пушкового волосся вище основної лінії бороди."
    },
    {
      name: "Камуфляж бороди",
      junior: "450 грн",
      barber: "550 грн",
      top: "600 грн",
      grand: "700 грн",
      desc: "Природне затемнення сивини без ефекту неприродного фарбування."
    },
    {
      name: "SPA-розпарювання бороди",
      junior: "250 грн",
      barber: "300 грн",
      top: "350 грн",
      grand: "400 грн",
      desc: "Глибоке живлення волосся термокомпресом та аргановою олією."
    },
    {
      name: "Корекція форми вусів",
      junior: "150 грн",
      barber: "200 грн",
      top: "250 грн",
      grand: "300 грн",
      desc: "Окреме виведення геометрії та фіксація воском з матовим ефектом."
    }
  ];

  const carePrices: PriceRow[] = [
    {
      name: "Передвесільний комплекс для чоловіка",
      junior: "1 200 грн",
      barber: "1 500 грн",
      top: "1 700 грн",
      grand: "2 100 грн",
      desc: "Стрижка, борода/гоління, Face waxing та очищувальна Black Mask.",
      tag: "All Inclusive"
    },
    {
      name: "Камуфляж сивини волосся",
      junior: "500 грн",
      barber: "550 грн",
      top: "550 грн",
      grand: "600 грн",
      desc: "Натуральний матовий відтінок без штучного блиску."
    },
    {
      name: "Black Mask — очищення пор обличчя",
      junior: "300 грн",
      barber: "350 грн",
      top: "400 грн",
      grand: "400 грн",
      desc: "Глибоке очищення т-зони від пилу та надлишкового себуму."
    },
    {
      name: "Waxing (ніс / вуха / міжбрів'я)",
      junior: "100 грн",
      barber: "100 грн",
      top: "100 грн",
      grand: "150 грн",
      desc: "Видалення зайвого волосся теплим воском за 5 хвилин."
    },
    {
      name: "Обпалення вух вогнем",
      junior: "50 грн",
      barber: "50 грн",
      top: "50 грн",
      grand: "50 грн",
      desc: "Традиційний східний метод усунення тонкого пуху на вушних раковинах."
    },
    {
      name: "Масаж голови з тоніком",
      junior: "200 грн",
      barber: "250 грн",
      top: "300 грн",
      grand: "350 грн",
      desc: "Покращення мікроциркуляції та зняття напруги після робочого дня."
    },
    {
      name: "Глибокий пілінг шкіри голови",
      junior: "350 грн",
      barber: "400 грн",
      top: "450 грн",
      grand: "500 грн",
      desc: "Очищення від залишків стайлінгу та ороговілих клітин шкіри."
    },
    {
      name: "Індивідуальний підбір стайлінгу",
      junior: "100 грн",
      barber: "100 грн",
      top: "100 грн",
      grand: "100 грн",
      desc: "Тестування помади, пасти чи глини під тип вашого волосся."
    }
  ];

  const currentList =
    activeTab === "hair" ? hairPrices : activeTab === "beard" ? beardPrices : carePrices;

  return (
    <section id="prices" className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header with Kicker, Heading and Lede */}
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("pricingSection.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("pricingSection.title"))}
          </h2>
          <p className="mt-3 text-text-muted text-base">
            {String(t("pricingSection.subtitle"))}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-border-dark pb-4">
          <button
            onClick={() => setActiveTab("hair")}
            className={`px-6 py-2.5 rounded font-display text-lg uppercase tracking-wider transition-colors duration-200 ease-out ${
              activeTab === "hair"
                ? "bg-accent text-bg-dark font-bold"
                : "bg-bg-dark text-text-muted hover:text-text-light"
            }`}
          >
            {String(t("pricingSection.tabHair"))}
          </button>
          <button
            onClick={() => setActiveTab("beard")}
            className={`px-6 py-2.5 rounded font-display text-lg uppercase tracking-wider transition-colors duration-200 ease-out ${
              activeTab === "beard"
                ? "bg-accent text-bg-dark font-bold"
                : "bg-bg-dark text-text-muted hover:text-text-light"
            }`}
          >
            {String(t("pricingSection.tabBeard"))}
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`px-6 py-2.5 rounded font-display text-lg uppercase tracking-wider transition-colors duration-200 ease-out ${
              activeTab === "care"
                ? "bg-accent text-bg-dark font-bold"
                : "bg-bg-dark text-text-muted hover:text-text-light"
            }`}
          >
            {String(t("pricingSection.tabCare"))}
          </button>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-4 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border-dark">
          <div className="col-span-6">{String(t("pricingSection.colService"))}</div>
          <div className="col-span-6 grid grid-cols-4 text-right font-mono">
            <span>{String(t("pricingSection.colJunior"))}</span>
            <span className="text-text-light">{String(t("pricingSection.colBarber"))}</span>
            <span>{String(t("pricingSection.colTop"))}</span>
            <span className="text-accent">{String(t("pricingSection.colGrand"))}</span>
          </div>
        </div>

        {/* Item Rows with Clear Visual Hierarchy */}
        <div className="divide-y divide-border-dark">
          {currentList.map((row, idx) => (
            <div
              key={idx}
              className={`py-4 flex flex-col lg:grid lg:grid-cols-12 gap-3 lg:gap-4 items-start lg:items-center px-3 rounded transition-colors duration-200 ease-out ${
                row.tag
                  ? "bg-bg-dark/80 border-l-2 border-accent"
                  : "hover:bg-bg-dark/40"
              }`}
            >
              <div className="lg:col-span-6 w-full">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-2xl font-bold uppercase text-text-light">
                    {row.name}
                  </span>
                  {row.tag && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-display uppercase tracking-wider bg-accent/20 text-accent border border-accent/40">
                      {row.tag}
                    </span>
                  )}
                </div>
                <div className="text-xs text-text-muted mt-1 max-w-md">
                  {row.desc}
                </div>
              </div>

              {/* Price Columns with Tabular Numbers */}
              <div className="lg:col-span-6 w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-right pt-2 lg:pt-0 font-mono">
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-text-muted lg:hidden">Junior</div>
                  <div className="font-display text-xl text-text-muted tabular-nums">{row.junior}</div>
                </div>
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-accent lg:hidden">Barber</div>
                  <div className="font-display text-xl font-bold text-text-light tabular-nums">{row.barber}</div>
                </div>
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-text-muted lg:hidden">Top</div>
                  <div className="font-display text-xl text-text-muted tabular-nums">{row.top}</div>
                </div>
                <div className="bg-bg-dark/60 lg:bg-transparent p-2 rounded lg:p-0">
                  <div className="text-[10px] uppercase text-accent lg:hidden">Grand</div>
                  <div className="font-display text-xl font-extrabold text-accent tabular-nums">{row.grand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote & Subscriptions Card */}
        <div className="mt-8 p-5 rounded bg-bg-dark border border-border-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            <span className="text-accent font-display text-sm font-bold uppercase tracking-wider mr-2">
              {String(t("pricingSection.subNoteTitle"))}
            </span>
            <span>{String(t("pricingSection.subNoteText"))}</span>
            <div className="mt-1 text-[11px] text-text-muted/80">
              {String(t("pricingSection.footnote"))}
            </div>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-accent text-bg-dark font-display text-lg uppercase tracking-wider font-bold rounded hover:bg-accent-deep transition-colors duration-200 ease-out whitespace-nowrap"
          >
            {String(t("pricingSection.ctaText"))} →
          </a>
        </div>
      </div>
    </section>
  );
}