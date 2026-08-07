"use client";
import { useLocale } from "@/lib/i18n";

interface StandardItem {
  num: string;
  title: string;
  desc: string;
}

export default function CraftStandards() {
  const { t } = useLocale();

  const kicker = (t("standards.kicker") as string) || "СТАНДАРТИ ТА БЕЗПЕКА";
  const title = (t("standards.title") as string) || "3-ЕТАПНА СТЕРИЛІЗАЦІЯ ТА ТАЙМІНГ";
  const subtitle = (t("standards.subtitle") as string) || "";
  const statement = (t("standards.statement") as string) || "";
  const quoteMaster = (t("standards.quoteMaster") as string) || "";
  const items = (t("standards.items") as StandardItem[]) || [];

  return (
    <section id="standards" className="py-20 sm:py-28 bg-[hsl(0_0%_7%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[hsl(32_90%_50%)] uppercase mb-2 block">
            — {kicker}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light">
            {subtitle}
          </p>
        </div>

        {/* Statement Pull-Quote */}
        <div className="p-8 rounded-2xl bg-[hsl(0_0%_11%)] border-l-4 border-[hsl(32_90%_50%)] border-y border-r border-white/10 mb-12">
          <p className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase leading-tight mb-3">
            "{statement}"
          </p>
          <span className="text-xs font-mono text-[hsl(32_90%_50%)] uppercase block">
            — {quoteMaster}
          </span>
        </div>

        {/* Content Layout: 4 Cards + Photo Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Grid Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[hsl(0_0%_11%)] border border-white/10 relative overflow-hidden group hover:border-[hsl(32_90%_50%/0.4)] transition-all"
              >
                <span className="font-display font-extrabold text-4xl text-[hsl(32_90%_50%)] block mb-2 tabular-nums">
                  {item.num}
                </span>
                <h3 className="font-display font-bold text-xl text-white uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 2-Photo Overlapped Cluster (5 cols) */}
          <div className="lg:col-span-5 relative h-[26rem] sm:h-[30rem]">
            {/* Primary Frame */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/15 bg-black/40">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2025/04/photo_2025-04-26-15.12.24-768x1024.webp"
                alt="Стерилізація інструментів Barberking"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 contrast-110"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-transparent to-transparent" />
            </div>

            {/* Overlapped Secondary Frame */}
            <div className="absolute -bottom-4 -left-4 w-3/5 h-48 rounded-xl overflow-hidden border-2 border-[hsl(32_90%_50%)] bg-black/60 shadow-2xl hidden sm:block">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_6955-1024x682.jpg"
                alt="Сухожарова шафа"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>

            {/* Photo Caption */}
            <div className="absolute bottom-4 right-4 p-3 rounded bg-black/80 backdrop-blur border border-white/10 text-[0.65rem] font-mono text-white/80 max-w-[14rem]">
              — Крафт-пакети відкриваються в присутності гостя
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
