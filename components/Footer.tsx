"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(18_15%_6%)] text-gray-400 pt-16 pb-8 border-t border-hairline text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Layer 1: Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
        <div className="border-b border-hairline pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="font-display font-extrabold text-7xl sm:text-9xl text-white tracking-wider block leading-none">
              BARBERKING
            </span>
            <span className="text-amber-500 font-display font-bold text-2xl uppercase tracking-widest mt-2 block">
              {String(t("brand.tagline"))} · EST. 2014
            </span>
          </div>

          {/* Layer 2: Social Row as TEXT Links */}
          <div className="flex space-x-4">
            <a
              href={String(t("brand.instagram"))}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-amber-500 hover:text-black border border-hairline rounded text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href={String(t("brand.facebook"))}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-amber-500 hover:text-black border border-hairline rounded text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href={String(t("brand.tiktok"))}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-900 hover:bg-amber-500 hover:text-black border border-hairline rounded text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              TIKTOK
            </a>
          </div>
        </div>

        {/* Layer 3: Multi-column Grid (Nav, Contacts, Hours) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xl text-white uppercase">
              {String(t("footer.aboutTitle"))}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {String(t("footer.aboutText"))}
            </p>
          </div>

          {/* Locations Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xl text-white uppercase">
              {String(t("footer.locationsTitle"))}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>— Лук'янівка: вул. Павлівська 18</li>
              <li>— Позняки: Дніпровська набережна 15К</li>
              <li>— Виноградар: вул. Олександра Олеся 8А</li>
              <li>— Позняки: вул. Урлівська 11/44</li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xl text-white uppercase">
              {String(t("footer.contactsTitle"))}
            </h4>
            <div className="space-y-1.5 text-xs">
              <div>
                Телефон:{" "}
                <a
                  href={String(t("brand.phoneRaw"))}
                  className="text-amber-400 font-bold hover:underline"
                >
                  {String(t("brand.phone"))}
                </a>
              </div>
              <div>Email: {String(t("brand.email"))}</div>
              <div>Графік: Щодня 09:00 — 21:00</div>
            </div>
          </div>

          {/* Hours / Service Note Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xl text-white uppercase">
              ОНЛАЙН СЕРВІС
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Запис доступний цілодобово. Всі 4 локації оснащені автономним живленням та безкоштовним баром.
            </p>
          </div>

        </div>

        {/* Layer 4: Legal Row & Developer Credit Line */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>{String(t("footer.copyright"))}</div>
          <div className="text-gray-400">
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              {String(t("footer.developer"))}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
