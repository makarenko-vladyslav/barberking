"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-extrabold uppercase tracking-wider text-white block">
              BARBERKING
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {String(t("footer.desc"))}
            </p>
            {/* Social Row as Plain Text Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
              <a
                href="https://www.facebook.com/BarberKingkh/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-accent transition-colors border-b border-white/20 pb-0.5 py-1"
              >
                FACEBOOK
              </a>
              <a
                href="https://www.instagram.com/barberking_kv/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-accent transition-colors border-b border-white/20 pb-0.5 py-1"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Column */}
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white mb-4">
              {String(t("footer.navTitle"))}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-accent transition-colors py-1 inline-block">{String(t("footer.linkServices"))}</a></li>
              <li><a href="#advantages" className="hover:text-accent transition-colors py-1 inline-block">{String(t("footer.linkAdvantages"))}</a></li>
              <li><a href="#masters" className="hover:text-accent transition-colors py-1 inline-block">{String(t("footer.linkMasters"))}</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors py-1 inline-block">{String(t("footer.linkGallery"))}</a></li>
              <li><a href="#certificates" className="hover:text-accent transition-colors py-1 inline-block">{String(t("footer.linkCertificates"))}</a></li>
              <li><a href="#branches" className="hover:text-accent transition-colors py-1 inline-block">{String(t("footer.linkBranches"))}</a></li>
            </ul>
          </div>

          {/* Col 3: Kyiv Branches Column */}
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white mb-4">
              {String(t("footer.branchesTitle"))}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>{String(t("footer.branch1"))}</li>
              <li>{String(t("footer.branch2"))}</li>
              <li>{String(t("footer.branch3"))}</li>
              <li>{String(t("footer.branch4"))}</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Hours */}
          <div>
            <h4 className="font-display text-xl font-bold uppercase text-white mb-4">
              {String(t("footer.contactsTitle"))}
            </h4>
            <div className="space-y-2 text-xs font-medium">
              <p>{String(t("footer.telLabel"))} <a href="tel:0951079215" className="text-accent font-bold hover:underline py-1 inline-block">095 107 92 15</a></p>
              <p>{String(t("footer.emailLabel"))} <a href="mailto:barberking.kv1@gmail.com" className="hover:text-white py-1 inline-block">barberking.kv1@gmail.com</a></p>
              <p>{String(t("footer.hoursLabel"))}</p>
              <p className="text-neutral-400">{String(t("footer.parkingLabel"))}</p>
            </div>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
        <div className="py-8 text-center border-b border-white/5 overflow-hidden">
          <span className="font-display text-7xl sm:text-9xl lg:text-[13vw] font-extrabold uppercase tracking-widest text-white/5 select-none block leading-none">
            {String(t("footer.brandWordmark"))}
          </span>
        </div>

        {/* Legal Row & Credit Meta-Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 Barberking Kyiv. {String(t("footer.rights"))} Est. 2018.
          </div>

          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors font-semibold py-1 inline-block"
            >
              {String(t("footer.developer"))}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
