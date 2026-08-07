"use client";
import { useLocale } from "@/lib/i18n";

export default function TattooZone() {
  const { t } = useLocale();

  const kicker = t("tattoo.kicker") as string;
  const title = t("tattoo.title") as string;
  const subtitle = t("tattoo.subtitle") as string;
  const features = (t("tattoo.features") as string[]) || [];
  const bgImage = (t("tattoo.bgImage") as string) || "https://kyiv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg";

  return (
    <section id="tattoo" className="py-20 sm:py-28 bg-[hsl(0_0%_11%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[hsl(32_90%_50%)] uppercase mb-2 block">
              — {kicker}
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
              {subtitle}
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[hsl(32_90%_50%)] font-bold text-lg">✦</span>
                  <span className="text-sm sm:text-base text-white/90 font-light">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-8 py-4 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-xl tracking-wider hover:bg-[hsl(28_95%_45%)] transition-colors shadow-xl"
              >
                Консультація тату-майстра ↗
              </a>
              <a
                href="tel:0951079215"
                className="px-8 py-4 rounded bg-white/10 text-white font-display font-bold text-xl tracking-wider hover:bg-white/20 transition-colors"
              >
                ☎ 095 107 92 15
              </a>
            </div>
          </div>

          {/* Right Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative h-96 sm:h-[30rem] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
            <img
              src={bgImage}
              alt="Tattoo Room Barberking"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement?.classList.add("img-fallback");
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_7%)] via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-xs font-mono text-[hsl(32_90%_50%)] uppercase block mb-1">
                Tattoo Room Location:
              </span>
              <span className="font-display font-bold text-2xl text-white uppercase block">
                вул. Павлівська, 18 (Лук'янівка)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}