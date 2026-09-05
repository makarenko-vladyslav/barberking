"use client";
import { useLocale } from "@/lib/i18n";

interface AdvantageItem {
  num: string;
  title: string;
  text: string;
}

export default function Advantages() {
  const { t } = useLocale();
  const rawItems = t("advantages.items");
  const items: AdvantageItem[] = Array.isArray(rawItems) ? (rawItems as AdvantageItem[]) : [];

  return (
    <section id="standards" className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl">
          <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
            {String(t("advantages.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
            {String(t("advantages.title"))}
          </h2>
          <p className="mt-4 text-text-muted text-base sm:text-lg">
            {String(t("advantages.subtitle"))}
          </p>
        </div>

        {/* Pull-Quote with Statement */}
        <div className="mt-10 p-6 sm:p-8 rounded bg-bg-dark border-l-2 border-accent border-y border-r border-border-dark">
          <p className="font-display text-2xl sm:text-3xl text-text-light leading-snug">
            {String(t("advantages.statement"))}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-muted pt-3 border-t border-border-dark/60">
            <span>{String(t("advantages.author"))}</span>
            <a href="#booking" className="text-accent hover:underline uppercase tracking-wider font-semibold">
              {String(t("advantages.linkText"))}
            </a>
          </div>
        </div>

        {/* 3 Real Numerals Stat Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded bg-primary/40 border border-border-dark text-center">
          <div>
            <div className="font-display text-4xl font-extrabold text-accent tabular-nums">
              {String(t("advantages.stat1"))}
            </div>
            <div className="text-xs uppercase tracking-wider text-text-muted mt-1">
              {String(t("advantages.stat1Desc"))}
            </div>
          </div>
          <div className="border-t sm:border-t-0 sm:border-x border-border-dark/60 pt-3 sm:pt-0">
            <div className="font-display text-4xl font-extrabold text-text-light tabular-nums">
              {String(t("advantages.stat2"))}
            </div>
            <div className="text-xs uppercase tracking-wider text-text-muted mt-1">
              {String(t("advantages.stat2Desc"))}
            </div>
          </div>
          <div className="border-t sm:border-t-0 border-border-dark/60 pt-3 sm:pt-0">
            <div className="font-display text-4xl font-extrabold text-accent tabular-nums">
              {String(t("advantages.stat3"))}
            </div>
            <div className="text-xs uppercase tracking-wider text-text-muted mt-1">
              {String(t("advantages.stat3Desc"))}
            </div>
          </div>
        </div>

        {/* Editorial Split Showcase: Master Standards vs Visual Toolset Protocol */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Structured Editorial Protocol Ledger */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded bg-bg-dark border border-border-dark hover:border-accent/60 transition-[border-color,background-color] duration-200 ease-out group flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="shrink-0 font-display text-3xl font-extrabold text-accent tabular-nums sm:w-12">
                  {item.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-2xl font-bold uppercase text-text-light group-hover:text-accent transition-colors duration-200 ease-out">
                      {item.title}
                    </h3>
                    <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-text-muted bg-primary px-2 py-0.5 rounded border border-border-dark shrink-0">
                      Standard
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: High-Contrast Macro Photography Proof Panels */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="relative rounded overflow-hidden border border-border-dark bg-bg-dark group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5902-2-1024x683.jpg"
                  alt="Стерилізація інструментів та королівське гоління"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-5 border-t border-border-dark">
                <div className="text-[10px] uppercase font-mono tracking-widest text-accent mb-1">
                  ПРОТОКОЛ БЕЗПЕКИ #03
                </div>
                <div className="font-display text-xl font-bold uppercase text-text-light">
                  Триетапна медична стерилізація лез
                </div>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Ультразвукова ванна, дезінфекційний розчин та сухожарова обробка інструментів перед кожним гостем.
                </p>
              </div>
            </div>

            <div className="relative rounded overflow-hidden border border-border-dark bg-bg-dark group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_5822-1024x683.jpg"
                  alt="Точна геометрія стрижки та моделювання бороди"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-5 border-t border-border-dark">
                <div className="text-[10px] uppercase font-mono tracking-widest text-accent mb-1">
                  АРХІТЕКТУРА ЛІНІЙ #04
                </div>
                <div className="font-display text-xl font-bold uppercase text-text-light">
                  Індивідуальне зведення Fade під анатомію
                </div>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Плавний градієнт від шкіри без видимих переходів та сходинок, вивірений баланс форми черепа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}