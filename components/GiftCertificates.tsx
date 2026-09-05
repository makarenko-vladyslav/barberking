"use client";
import { useLocale } from "@/lib/i18n";

export default function GiftCertificates() {
  const { t } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-bg-surface border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Certificate Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded overflow-hidden border border-border-dark bg-bg-dark p-4 sm:p-6 shadow-xl">
              <img
                src="https://kyiv.bking.com.ua/wp-content/uploads/2024/12/certificate-768x549.png"
                alt="Подарунковий сертифікат Barberking"
                loading="lazy"
                className="w-full h-auto object-contain rounded"
              />
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-wider text-text-muted">
                <span>Діє у всіх 4 філіях Києва</span>
                <span className="text-accent font-bold">Номінал від 750 грн</span>
              </div>
            </div>
          </div>

          {/* Certificate Description */}
          <div className="lg:col-span-6">
            <div className="text-accent font-display text-sm tracking-widest uppercase mb-2">
              {String(t("certificateSection.kicker"))}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase leading-tight text-text-light">
              {String(t("certificateSection.title"))}
            </h2>
            <p className="mt-3 text-text-muted text-base sm:text-lg">
              {String(t("certificateSection.subtitle"))}
            </p>
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              {String(t("certificateSection.text"))}
            </p>

            <div className="mt-6 space-y-2 text-sm text-text-light">
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Паперовий сертифікат у матовому чорному конверті</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Електронний сертифікат в Apple Wallet / Telegram за 5 хвилин</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Термін дії — 6 місяців з дати придбання</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-dark font-display text-xl font-bold uppercase tracking-wider rounded hover:bg-accent-deep transition-colors"
              >
                {String(t("certificateSection.button"))}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
