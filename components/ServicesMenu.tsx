"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServicesMenuProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServicesMenu({ onOpenBooking }: ServicesMenuProps) {
  const { t } = useLocale();
  const [activeRank, setActiveRank] = useState<"barber" | "top" | "grand">("top");

  const rankMultipliers = {
    barber: 1.0,
    top: 1.25,
    grand: 1.5,
  };

  const servicesList = [
    {
      category: String(t("services.categories.main")),
      items: [
        { name: "Професійна чоловіча стрижка", basePrice: 750, desc: "Миття голови, підбір форми під силует обличчя, укладка стайлінгом", tag: "POPULAR" },
        { name: "Стрижка машинкою (2 насадки)", basePrice: 550, desc: "Лаконічна чоловіча стрижка з чисткою окантовки та миттям", tag: "EXPRESS" },
        { name: "Стрижка подовженого волосся", basePrice: 950, desc: "Робота з довгою текстурою, пошарове градуювання та догляд", tag: "LONG HAIR" },
        { name: "Оновлення стрижки (до 10 днів)", basePrice: 600, desc: "Чистка контурів та скроней між основними візитами", tag: "REFRESH" },
        { name: "Дитяча стрижка (до 10 років)", basePrice: 700, desc: "Дбайливий підхід та адаптована форменна стрижка", tag: "KIDS" },
      ],
    },
    {
      category: String(t("services.categories.combos")),
      items: [
        { name: "Професійна стрижка + стрижка бороди", basePrice: 1150, desc: "Повний комплекс догляду за головою та бородою з розпарюванням", tag: "TOP CHOICE", isSignature: true },
        { name: "Стрижка машинкою + стрижка бороди", basePrice: 850, desc: "Швидкий комплексний догляд для бороди та голови", tag: "COMBO" },
        { name: "Батько + син (комплексна стрижка)", basePrice: 1150, desc: "Послідовна стрижка для двох поколінь в один час", tag: "FAMILY" },
        { name: "Передвесільний комплекс", basePrice: 1500, desc: "Стрижка, борода, догляд за обличчям та напої з бару", tag: "EVENT" },
      ],
    },
    {
      category: String(t("services.categories.shaving")),
      items: [
        { name: "Стрижка бороди та вусів", basePrice: 550, desc: "Моделювання форми, окантовка, нанесення олії для бороди", tag: "BEARD" },
        { name: "Королівське гоління бритвою", basePrice: 600, desc: "Розпарювання гарячим рушником, бритва, холодний компрес", tag: "ROYAL" },
        { name: "Гоління голови", basePrice: 600, desc: "Ідеально гладке гоління з відновлювальним бальзамом", tag: "SMOOTH" },
        { name: "Камуфляж сивини бороди / волосся", basePrice: 550, desc: "Натуральне тонування без ефекту пофарбованого волосся", tag: "TONING" },
      ],
    },
    {
      category: String(t("services.categories.care")),
      items: [
        { name: "Black Mask (чорна маска для очищення)", basePrice: 350, desc: "Глибоке очищення пор та чорних точок на обличчі", tag: "SPA" },
        { name: "Професійний догляд за шкірою обличчя", basePrice: 450, desc: "Зволоження та відновлення після гоління", tag: "CARE" },
        { name: "Waxing (видалення волосся воском)", basePrice: 150, desc: "Делікатне видалення волосся з носа, вух або брів", tag: "WAX" },
      ],
    },
  ];

  const calcPrice = (base: number) => {
    return Math.round(base * rankMultipliers[activeRank]);
  };

  return (
    <section id="services" className="py-20 bg-[hsl(30_20%_96%)] text-[hsl(18_12%_10%)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layer 1: Kicker, Heading, Lede */}
        <div className="space-y-2 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-amber-700 text-xs font-bold uppercase tracking-widest">
            {String(t("services.kicker"))} — КИЇВ
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-gray-900">
            {String(t("services.heading"))}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {String(t("services.subheading"))}
          </p>
        </div>

        {/* Layer 2: Barber Rank Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 p-1.5 rounded-lg flex space-x-1 border border-gray-300 shadow-inner">
            <button
              onClick={() => setActiveRank("barber")}
              className={`px-5 py-2.5 rounded font-display font-bold text-xl transition-all ${
                activeRank === "barber"
                  ? "bg-[hsl(18_12%_8%)] text-amber-400 shadow"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {String(t("services.rankTabs.barber"))}
            </button>
            <button
              onClick={() => setActiveRank("top")}
              className={`px-5 py-2.5 rounded font-display font-bold text-xl transition-all ${
                activeRank === "top"
                  ? "bg-[hsl(18_12%_8%)] text-amber-400 shadow"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {String(t("services.rankTabs.top"))}
            </button>
            <button
              onClick={() => setActiveRank("grand")}
              className={`px-5 py-2.5 rounded font-display font-bold text-xl transition-all ${
                activeRank === "grand"
                  ? "bg-[hsl(18_12%_8%)] text-amber-400 shadow"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {String(t("services.rankTabs.grand"))}
            </button>
          </div>
        </div>

        {/* Layer 3: Price Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-md border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-amber-500">
                  <h3 className="font-display font-extrabold text-3xl uppercase tracking-tight text-gray-900">
                    {cat.category}
                  </h3>
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                    ПРАЙС UAH
                  </span>
                </div>

                <div className="space-y-6">
                  {cat.items.map((item, itemIdx) => {
                    const price = calcPrice(item.basePrice);
                    return (
                      <div 
                        key={itemIdx} 
                        className={`group p-3 rounded transition-colors ${
                          item.isSignature 
                            ? "bg-amber-50 border border-amber-300" 
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-display font-bold text-2xl text-gray-900 group-hover:text-amber-700 transition-colors">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase ${
                                item.isSignature 
                                  ? "bg-amber-500 text-black" 
                                  : "bg-gray-100 text-gray-600 border border-gray-200"
                              }`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          
                          {/* Layer 4: Dotted Leader Line */}
                          <span className="shrink-0 border-b border-dotted border-gray-300 grow mx-2 hidden sm:block" />
                          
                          {/* Layer 5: Tabular Price */}
                          <span className="font-display font-extrabold text-2xl text-gray-900 shrink-0">
                            від {price} грн
                          </span>
                        </div>
                        
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  Тривалість: 30 — 75 хв
                </span>
                <button
                  onClick={() => onOpenBooking(cat.category)}
                  className="text-amber-700 hover:text-amber-800 font-display font-bold text-xl inline-flex items-center space-x-1 group"
                >
                  <span>Записатися на {cat.category}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Layer 6: Footnote Line & Secondary CTA */}
        <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            * Усі послуги включають миття голови до та після стрижки, укладку професійним стайлінгом та напої з безкоштовного бару.
          </div>
          <button
            onClick={() => onOpenBooking("Консультація майстра")}
            className="font-display font-bold text-lg text-amber-700 hover:underline uppercase shrink-0"
          >
            Потрібна консультація щодо форми? →
          </button>
        </div>

      </div>
    </section>
  );
}
