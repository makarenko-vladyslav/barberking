"use client";

import { useLocale } from "@/lib/i18n";

export default function TattooRoom() {
  const { t } = useLocale();
  const features = t("tattoo.features") as string[];

  return (
    <section id="tattoo" className="py-24 bg-bg-card border-b border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Multi-layer Media */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[450px] sm:h-[520px] w-full border border-border-dark overflow-hidden">
              <img
                src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/banner2.jpg"
                alt="Tattoo Room Barberking"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-80 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />

              <div className="absolute top-6 left-6 bg-accent text-bg-dark font-display font-black px-4 py-1 text-sm uppercase tracking-wider">
                TATTOO ROOM BARBERKING
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-bg-dark/90 border border-border-dark text-xs text-text-muted font-mono">
                Окремий стерильний кабінет з обладнанням USA/Germany.
              </div>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 font-mono">
              ЕКСКЛЮЗИВ МЕРЕЖІ
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-text-light tracking-wide leading-tight mb-4 uppercase">
              TATTOO ROOM — ВЛАСНА ТАТУ-СТУДІЯ
            </h2>
            <p className="text-text-muted text-base mb-6 leading-relaxed">
              {t("tattoo.subtitle")}
            </p>

            <ul className="space-y-4 mb-8 w-full font-mono text-xs text-text-light">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 border-b border-border-dark/50 pb-3">
                  <span className="text-accent font-bold">0{idx + 1}.</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent text-bg-dark font-display font-extrabold text-xl px-8 py-4 uppercase tracking-wider hover:bg-accent-hover transition-colors"
            >
              {t("tattoo.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
