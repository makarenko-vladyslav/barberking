"use client";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-text-muted border-t border-border-dark pt-16 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* 4 Rich Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border-dark">
          {/* Brand Col */}
          <div>
            <img
              src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg"
              alt={String(t("brand.name"))}
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-xs leading-relaxed text-text-muted">
              {String(t("footer.aboutText"))}
            </p>
            <div className="mt-4 p-3 rounded bg-bg-surface border border-border-dark text-xs font-mono text-text-light">
              <span className="text-accent font-bold block mb-0.5">ГОДИНИ РОБОТИ:</span>
              {String(t("footer.hours"))}
            </div>
          </div>

          {/* Branches Col */}
          <div>
            <div className="font-display text-xl font-bold uppercase text-text-light mb-4">
              {String(t("footer.branchesTitle"))}
            </div>
            <ul className="space-y-3 text-xs">
              {pricingData.branches.map((b) => (
                <li key={b.id} className="border-b border-border-dark/40 pb-2">
                  <strong className="text-text-light block font-semibold">{b.name}</strong>
                  <span>{b.address}</span>
                  <span className="block text-[10px] text-accent font-mono mt-0.5">{b.metro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav Col */}
          <div>
            <div className="font-display text-xl font-bold uppercase text-text-light mb-4">
              {String(t("footer.menuTitle"))}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.services"))}
                </a>
              </li>
              <li>
                <a href="#prices" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.prices"))}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.calculator"))}
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.standards"))}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.masters"))}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.gallery"))}
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.branches"))}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors duration-200 ease-out">
                  {String(t("nav.faq"))}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Socials Col */}
          <div>
            <div className="font-display text-xl font-bold uppercase text-text-light mb-4">
              {String(t("footer.contactsTitle"))}
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-text-muted block">Телефон:</span>
                <a
                  href="tel:0951079215"
                  className="font-display text-2xl text-accent font-bold hover:underline"
                >
                  {String(t("footer.phone"))}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-text-muted block">Email:</span>
                <a href="mailto:barberking.kv1@gmail.com" className="text-text-light hover:text-accent transition-colors duration-200 ease-out font-mono">
                  {String(t("footer.email"))}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-text-muted block">Адреса офісу:</span>
                <div className="text-text-light">{String(t("footer.address"))}</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-dark flex items-center gap-4">
              <a
                href="https://www.instagram.com/barberking_kv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-text-light hover:text-accent font-semibold"
              >
                Instagram ↗
              </a>
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-text-light hover:text-accent font-semibold"
              >
                Facebook ↗
              </a>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Barberking Kyiv. {String(t("footer.rights"))}
          </div>
          <div className="italic text-text-muted">
            {String(t("footer.signatureQuote"))}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200 ease-out"
            >
              {String(t("footer.devCredit"))}
            </a>
          </div>
        </div>
      </div>

      {/* Giant Full-Width Bleeding Brand Wordmark */}
      <div
        aria-hidden="true"
        className="w-full select-none pointer-events-none text-center font-display font-black text-[18vw] leading-none text-white/[0.035] tracking-tight uppercase translate-y-4"
      >
        BARBERKING
      </div>
    </footer>
  );
}