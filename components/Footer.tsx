"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  const tagline = (t("footer.tagline") as string) || "МЕРЕЖА ЧОЛОВІЧИХ БАРБЕРШОПІВ У КИЄВІ · EST. 2014";
  const copyright = (t("footer.copyright") as string) || "© 2026 Barberking Kyiv. Усі права захищені.";
  const developer = (t("footer.developer") as string) || "Розроблено Студія Тест";
  const developerUrl = (t("footer.developerUrl") as string) || "https://makarich.framer.website";

  return (
    <footer className="bg-[hsl(0_0%_5%)] text-white pt-20 pb-28 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Wordmark & Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[hsl(32_90%_50%)] flex items-center justify-center font-display font-extrabold text-2xl text-[hsl(0_0%_7%)]">
                BK
              </div>
              <span className="font-display font-extrabold text-3xl tracking-wider text-white">
                BARBERKING
              </span>
            </div>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              {tagline}
            </p>
            <span className="text-xs font-mono text-[hsl(32_90%_50%)]">
              4.8 / 5.0 Google Maps Rating
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold text-xl uppercase text-[hsl(32_90%_50%)]">
              Навігація
            </span>
            <a href="#locations" className="text-sm text-white/70 hover:text-white transition-colors">
              Локації у Києві
            </a>
            <a href="#services" className="text-sm text-white/70 hover:text-white transition-colors">
              Послуги та ціни
            </a>
            <a href="#calculator" className="text-sm text-white/70 hover:text-white transition-colors">
              Калькулятор візиту
            </a>
            <a href="#team" className="text-sm text-white/70 hover:text-white transition-colors">
              Майстри
            </a>
            <a href="#tattoo" className="text-sm text-white/70 hover:text-white transition-colors">
              Tattoo Room
            </a>
          </div>

          {/* Col 3: Addresses */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold text-xl uppercase text-[hsl(32_90%_50%)]">
              Філії у Києві
            </span>
            <span className="text-xs text-white/70">1. вул. Павлівська, 18 (Лук'янівка)</span>
            <span className="text-xs text-white/70">2. вул. Дніпровська наб., 15К (ЖК Great)</span>
            <span className="text-xs text-white/70">3. вул. Олександра Олеся, 8А (Виноградар)</span>
            <span className="text-xs text-white/70">4. вул. Урлівська, 11/44 (Позняки)</span>
          </div>

          {/* Col 4: Contacts & Social Text */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold text-xl uppercase text-[hsl(32_90%_50%)]">
              Контакти
            </span>
            <a href="tel:0951079215" className="font-display font-bold text-2xl text-white hover:text-[hsl(32_90%_50%)]">
              095 107 92 15
            </a>
            <span className="text-xs font-mono text-white/50">Пн-Нд: 10:00 — 21:00</span>
            <a href="mailto:barberking.kv1@gmail.com" className="text-xs text-white/60 hover:underline">
              barberking.kv1@gmail.com
            </a>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-white/70">
              <a href="https://www.instagram.com/barberking_kv/" target="_blank" rel="noreferrer" className="hover:text-[hsl(32_90%_50%)] underline">INSTAGRAM ↗</a>
              <span>·</span>
              <a href="https://www.facebook.com/BarberKingkh/" target="_blank" rel="noreferrer" className="hover:text-[hsl(32_90%_50%)] underline">FACEBOOK ↗</a>
            </div>
          </div>
        </div>

        {/* Giant Watermark Display Text Bleeding Off Bottom */}
        <div className="py-4 border-t border-white/10 text-center select-none pointer-events-none aria-hidden overflow-hidden">
          <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[14rem] text-white/[0.04] tracking-tighter block leading-none uppercase">
            BARBERKING
          </span>
        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <span>{copyright}</span>
          <a
            href={developerUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[hsl(32_90%_50%)] underline transition-colors"
          >
            {developer}
          </a>
        </div>
      </div>
    </footer>
  );
}
