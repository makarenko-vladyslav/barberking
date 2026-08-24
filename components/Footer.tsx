"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(0_0%_4%)] border-t border-[hsl(0_0%_15%)] text-[hsl(0_0%_80%)] pt-16 pb-24 lg:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Info */}
          <div>
            <img
              src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/logo.png"
              alt={String(t("footer.brandAlt"))}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-xs text-[hsl(0_0%_60%)] leading-relaxed mb-4 font-normal">
              {String(t("footer.aboutDesc"))}
            </p>
            <div className="text-[11px] text-[hsl(38_90%_50%)] font-bold uppercase tracking-widest">
              {String(t("footer.est"))}
            </div>
          </div>

          {/* Quick Links Nav Column */}
          <div>
            <h4 className="font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(0_0%_95%)] mb-4">
              {String(t("footer.navigation"))}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[hsl(38_90%_50%)] transition-colors py-1 block">
                  {String(t("footer.navServices"))}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[hsl(38_90%_50%)] transition-colors py-1 block">
                  {String(t("footer.navCalculator"))}
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[hsl(38_90%_50%)] transition-colors py-1 block">
                  {String(t("footer.navLocations"))}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[hsl(38_90%_50%)] transition-colors py-1 block">
                  {String(t("footer.navTeam"))}
                </a>
              </li>
              <li>
                <a href="#tattoo" className="hover:text-[hsl(38_90%_50%)] transition-colors py-1 block">
                  {String(t("footer.navTattoo"))}
                </a>
              </li>
            </ul>
          </div>

          {/* Branches Column */}
          <div>
            <h4 className="font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(0_0%_95%)] mb-4">
              {String(t("footer.branches"))}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[hsl(0_0%_70%)]">
              <li>{String(t("footer.branch1"))}</li>
              <li>{String(t("footer.branch2"))}</li>
              <li>{String(t("footer.branch3"))}</li>
              <li>{String(t("footer.branch4"))}</li>
            </ul>
          </div>

          {/* Contacts & Hours Column */}
          <div>
            <h4 className="font-['Alumni_Sans'] text-2xl font-bold uppercase tracking-wider text-[hsl(0_0%_95%)] mb-4">
              {String(t("footer.contacts"))}
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <a
                href="tel:0951079215"
                className="text-base font-bold text-[hsl(38_90%_50%)] hover:underline tracking-wider py-1"
              >
                {String(t("footer.phoneVal"))}
              </a>
              <div>{String(t("footer.emailVal"))}</div>
              <div>{String(t("footer.hoursVal"))}</div>
              
              {/* Social Row as Text Links */}
              <div className="flex gap-4 mt-3">
                <a
                  href="https://www.instagram.com/barberking_kv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[hsl(0_0%_12%)] hover:bg-[hsl(38_90%_50%)] hover:text-[hsl(0_0%_5%)] text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://www.facebook.com/BarberKingkh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[hsl(0_0%_12%)] hover:bg-[hsl(38_90%_50%)] hover:text-[hsl(0_0%_5%)] text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Voice Credit Meta-Line */}
        <div className="py-4 border-t border-[hsl(0_0%_12%)] text-center text-xs uppercase tracking-widest text-[hsl(0_0%_50%)] font-semibold">
          {String(t("brand.voiceCredit"))}
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 border-t border-[hsl(0_0%_12%)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[hsl(0_0%_50%)]">
          <div>
            {String(t("footer.copyright"))}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(38_90%_50%)] underline transition-colors py-1 inline-block"
            >
              {String(t("footer.developerCredit"))}
            </a>
          </div>
        </div>
      </div>

      {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
      <div
        aria-hidden="true"
        className="w-full text-center pointer-events-none select-none overflow-hidden opacity-5 mt-8 -mb-16"
      >
        <span className="font-['Alumni_Sans'] font-extrabold text-[20vw] uppercase tracking-tighter text-[hsl(0_0%_100%)] leading-none whitespace-nowrap">
          BARBERKING
        </span>
      </div>
    </footer>
  );
}
