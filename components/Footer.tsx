"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-text-light border-t border-border-dark pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-border-dark/60">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-accent text-bg-dark flex items-center justify-center font-display font-black text-2xl tracking-tighter">
                BK
              </div>
              <span className="font-display font-extrabold text-3xl text-text-light tracking-wide">
                BARBERKING
              </span>
            </div>
            <p className="text-xs text-text-muted max-w-sm leading-relaxed">
              Barberking — мережа чоловічих барбершопів у Києві. Чоловіча культура, бездоганний сервіс, 3-етапна стерилізація та власна тату-студія.
            </p>
            <p className="text-xs font-mono text-accent">
              Графік роботи: Щодня з 10:00 до 21:00
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 flex flex-col space-y-2 text-xs uppercase tracking-wider text-text-muted font-mono">
            <span className="font-display font-bold text-base text-text-light uppercase mb-2">
              НАВІГАЦІЯ
            </span>
            <a href="#services" className="hover:text-accent transition-colors py-0.5">
              Послуги та Ціни
            </a>
            <a href="#calculator" className="hover:text-accent transition-colors py-0.5">
              Онлайн-розрахунок
            </a>
            <a href="#locations" className="hover:text-accent transition-colors py-0.5">
              Локації Києва
            </a>
            <a href="#tattoo" className="hover:text-accent transition-colors py-0.5">
              Tattoo Room
            </a>
            <a href="#team" className="hover:text-accent transition-colors py-0.5">
              Команда майстрів
            </a>
            <a href="#faq" className="hover:text-accent transition-colors py-0.5">
              Часті питання
            </a>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-4 flex flex-col space-y-2 text-xs text-text-muted font-mono">
            <span className="font-display font-bold text-base text-text-light uppercase mb-2">
              КОНТАКТИ ФІЛІЙ
            </span>
            <p>вул. Павлівська, 18 (Лук'янівка / Центр)</p>
            <p>вул. Дніпровська набережна, 15К (ЖК Great)</p>
            <p>вул. Олександра Олеся, 8А (ЖК Варшавський)</p>
            <p>вул. Урлівська, 11/44 (Позняки)</p>
            <a href="tel:0951079215" className="font-display font-bold text-accent text-xl mt-3 block">
              095 107 92 15
            </a>
          </div>
        </div>

        {/* Social Row as Plain Text Links */}
        <div className="py-6 border-b border-border-dark/40 flex items-center justify-between text-xs font-mono text-text-muted">
          <span>СОЦІАЛЬНІ МЕРЕЖІ:</span>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent uppercase">
              INSTAGRAM
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent uppercase">
              FACEBOOK
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-accent uppercase">
              TELEGRAM
            </a>
          </div>
        </div>

        {/* Legal Row & Developer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
          <span>© 2014–2026 BARBERKING. УСІ ПРАВА ЗАХИЩЕНО.</span>
          <a
            href="https://makarich.framer.website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors underline font-medium"
          >
            Розроблено Студія Тест
          </a>
        </div>

        {/* Giant Bleeding Wordmark at Footer Bottom */}
        <div className="w-full text-center overflow-hidden border-t border-border-dark/30 pt-10 -mb-12 pointer-events-none select-none">
          <span className="font-display font-black text-[13vw] sm:text-[15vw] leading-none text-white/[0.03] uppercase tracking-tighter whitespace-nowrap block">
            BARBERKING KYIV
          </span>
        </div>
      </div>
    </footer>
  );
}
