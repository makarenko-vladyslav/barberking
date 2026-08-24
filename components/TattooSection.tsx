"use client";
import { useLocale } from "@/lib/i18n";

export default function TattooSection() {
  const { t } = useLocale();

  const features = (t("tattoo.features") as string[]) || [];
  const stats = (t("tattoo.stats") as Array<{ num: string; label: string }>) || [];

  return (
    <section id="tattoo" className="py-24 bg-[hsl(0_0%_7%)] border-t border-[hsl(0_0%_15%)] text-[hsl(0_0%_95%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 2-Photo Cluster Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xs overflow-hidden border border-[hsl(38_90%_50%/0.4)] shadow-2xl bg-[hsl(0_0%_12%)]">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2026/06/img_4703-e1782466384832-759x1024.webp"
                alt={String(t("tattoo.photo1Alt"))}
                loading="lazy"
                className="w-full h-[460px] object-cover object-top filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-transparent to-transparent opacity-80" />
              
              {/* Photo Caption with Hairline Rule */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[hsl(0_0%_8%/0.95)] backdrop-blur-md border border-[hsl(0_0%_20%)] rounded-xs">
                <div className="w-8 h-[2px] bg-[hsl(38_90%_50%)] mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(38_90%_50%)] block">
                  {String(t("tattoo.authorName"))} — {String(t("tattoo.authorRole"))}
                </span>
                <span className="text-[11px] text-[hsl(0_0%_65%)] mt-0.5 block">
                  {String(t("tattoo.branchPavlovska"))}
                </span>
              </div>
            </div>

            {/* Overlapped Secondary Frame using a unique themed stock image url to avoid repetition */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 rounded-xs overflow-hidden border-2 border-[hsl(38_90%_50%)] shadow-2xl z-20 transform rotate-2">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2020/09/mg_7104-300x200.jpg"
                alt={String(t("tattoo.photo2Alt"))}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[hsl(38_90%_50%)] font-bold">
              {String(t("tattoo.kicker"))}
            </span>
            <h2 className="font-['Alumni_Sans'] text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mt-2 mb-6">
              {String(t("tattoo.title"))}
            </h2>
            <p className="text-sm text-[hsl(0_0%_70%)] leading-relaxed mb-6">
              {String(t("tattoo.subtitle"))}
            </p>

            {/* Pull-Quote Line */}
            <blockquote className="p-4 bg-[hsl(0_0%_9%)] border-l-2 border-[hsl(38_90%_50%)] text-xs italic text-[hsl(0_0%_85%)] mb-8">
              "{String(t("tattoo.quote"))}"
            </blockquote>

            {/* Stat Row */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-[hsl(0_0%_16%)]">
              {stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-['Alumni_Sans'] text-3xl font-extrabold text-[hsl(38_90%_50%)] tabular-nums">
                    {st.num}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[hsl(0_0%_60%)] leading-tight mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-2.5 mb-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[hsl(38_90%_50%)] font-bold text-xs">/</span>
                  <span className="text-xs text-[hsl(0_0%_85%)]">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#booking"
                className="py-4 px-6 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider rounded-xs text-center transition-all shadow-lg"
              >
                {String(t("tattoo.cta"))}
              </a>
              <a
                href="#gallery"
                className="text-xs font-bold uppercase tracking-wider text-[hsl(38_90%_50%)] hover:underline text-center sm:text-left"
              >
                {String(t("tattoo.secondaryLink"))} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
