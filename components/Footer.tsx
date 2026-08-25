"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-16 border-t border-zinc-800 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xl font-display font-extrabold tracking-wider text-white uppercase block">
              BARBERKING
            </span>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-sm">
              {t("footer.tagline") as string}
            </p>
            <div className="text-xs font-mono text-amber-400">
              Est. 2018 · Київ, Україна
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold">
              {t("footer.navigation") as string}
            </h4>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">{t("footer.linkServices") as string}</a></li>
              <li><a href="#philosophy" className="hover:text-amber-400 transition-colors">{t("footer.linkPhilosophy") as string}</a></li>
              <li><a href="#team" className="hover:text-amber-400 transition-colors">{t("footer.linkTeam") as string}</a></li>
              <li><a href="#hygiene" className="hover:text-amber-400 transition-colors">{t("footer.linkHygiene") as string}</a></li>
              <li><a href="#branches" className="hover:text-amber-400 transition-colors">{t("footer.linkBranches") as string}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold">
              {t("footer.contacts") as string}
            </h4>
            <div className="space-y-2 text-xs font-body">
              <p className="text-white font-semibold">{t("footer.addressLine") as string}</p>
              <p>{t("footer.phonePrefix") as string} <a href="tel:0951079215" className="text-amber-400 hover:underline">095 107 92 15</a></p>
              <p>{t("footer.emailPrefix") as string} <a href="mailto:barberking.kv1@gmail.com" className="hover:text-white">{t("footer.email") as string}</a></p>
            </div>
          </div>

          {/* Column 4: Hours & Social Text Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold">
              {t("footer.hoursTitle") as string}
            </h4>
            <p className="text-xs text-zinc-400 font-mono">
              {t("footer.hoursText") as string}
            </p>
            <div className="flex flex-col gap-1.5 pt-2 text-xs font-mono font-bold text-amber-400">
              <a href="#" className="hover:underline">{t("footer.instagram") as string}</a>
              <a href="#" className="hover:underline">{t("footer.telegram") as string}</a>
              <a href="#" className="hover:underline">{t("footer.facebook") as string}</a>
            </div>
          </div>
        </div>

        {/* Legal Row + Studio Credit */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 border-b border-zinc-900">
          <div>
            © 2026 Barberking. {t("footer.rights") as string}
          </div>
          <div className="font-mono">
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              {t("footer.credit") as string}
            </a>
          </div>
        </div>

        {/* Giant Watermark Typography Bleeding off Bottom Edge */}
        <div aria-hidden="true" className="mt-8 overflow-hidden select-none pointer-events-none opacity-5 text-center -mb-10">
          <span className="font-display font-extrabold text-7xl sm:text-9xl lg:text-[14vw] uppercase tracking-tighter text-white whitespace-nowrap leading-none">
            {t("footer.brandName") as string}
          </span>
        </div>
      </div>
    </footer>
  );
}
