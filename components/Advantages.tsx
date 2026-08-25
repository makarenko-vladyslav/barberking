"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

interface AdvantageItem {
  title: string;
  desc: string;
}

export default function Advantages() {
  const { t } = useLocale();

  const items = (t("advantages.items") as AdvantageItem[]) || [];

  return (
    <section id="advantages" className="py-24 bg-neutral-950 border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {String(t("advantages.kicker"))}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight mb-4">
              {String(t("advantages.title"))}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              {String(t("advantages.subtitle"))}
            </p>
          </div>
        </Reveal>

        {/* Pull-Quote & 2-Photo Overlapped Cluster */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-neutral-900 border border-white/10 rounded-2xl p-8 lg:p-12">
          <Reveal className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block">
              ФІЛОСОФІЯ ТА СТАНДАРТ
            </span>
            <blockquote className="font-display text-2xl sm:text-3xl font-bold uppercase text-white leading-tight">
              "{String(t("advantages.pullQuote"))}"
            </blockquote>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider">
              — {String(t("advantages.quoteAuthor"))}
            </p>
            <div className="pt-4 border-t border-white/10">
              <a href="#booking" className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                {String(t("advantages.secondaryLink"))} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src="/barberking/media/3de94b826c157f9d.jpg"
                alt="Process"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-2/3 aspect-[4/3] rounded-xl overflow-hidden border-2 border-accent shadow-2xl hidden sm:block">
              <img
                src="/barberking/media/efa843d5303a55ab.jpg"
                alt="Craft"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mt-4">
              {String(t("advantages.photoCaption"))}
            </p>
          </Reveal>
        </div>

        {/* Advantage Cards Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-neutral-900 border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-all h-full flex flex-col justify-between group">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                    СТАНДАРТ 0{idx + 1}
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-neutral-400 font-semibold tracking-wider uppercase">
                  Гарантія якості Barberking Kyiv
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
