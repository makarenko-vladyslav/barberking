
"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(0_0%_3%)] text-white pt-20 pb-12 border-t border-[hsl(0_0%_14%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[hsl(0_0%_14%)]">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <img
              src="https://kyiv.bking.com.ua/wp-content/uploads/2026/03/dyno-e1774703810461-904x1024.webp"
              alt={t("nav.barberkingKyiv") as string}
              className="h-12 w-auto object-cover rounded"
            />
            <p className="text-xs text-[hsl(0_0%_65%)] font-light leading-relaxed">
              {t("nav.networkDesc") as string}
            </p>
            <div className="text-xs text-[hsl(38_88%_52%)] font-mono font-semibold">
              {t("nav.footerRating") as string}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="font-display text-lg uppercase font-bold text-white mb-4">
              {t("nav.navigation") as string}
            </div>
            <ul className="space-y-2 text-xs text-[hsl(0_0%_70%)] font-light">
              <li><a href="#services" className="hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center">{t("nav.services") as string}</a></li>
              <li><a href="#calculator" className="hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center">{t("nav.calculator") as string}</a></li>
              <li><a href="#masters" className="hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center">{t("nav.team") as string}</a></li>
              <li><a href="#gallery" className="hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center">{t("nav.gallery") as string}</a></li>
              <li><a href="#locations" className="hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center">{t("nav.locations") as string}</a></li>
              <li><a href="#faq" className="hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center">{t("nav.faq") as string}</a></li>
            </ul>
          </div>

          {/* Col 3: Kyiv Branches */}
          <div>
            <div className="font-display text-lg uppercase font-bold text-white mb-4">
              {t("nav.kyivLocations") as string}
            </div>
            <ul className="space-y-3 text-xs text-[hsl(0_0%_70%)] font-light">
              <li>
                <strong className="text-white block font-medium">{t("nav.branch1Title") as string}</strong>
                {t("nav.branch1Address") as string}
              </li>
              <li>
                <strong className="text-white block font-medium">{t("nav.branch2Title") as string}</strong>
                {t("nav.branch2Address") as string}
              </li>
              <li>
                <strong className="text-white block font-medium">{t("nav.branch3Title") as string}</strong>
                {t("nav.branch3Address") as string}
              </li>
              <li>
                <strong className="text-white block font-medium">{t("nav.branch4Title") as string}</strong>
                {t("nav.branch4Address") as string}
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Social TEXT Links */}
          <div>
            <div className="font-display text-lg uppercase font-bold text-white mb-4">
              {t("nav.contacts") as string}
            </div>
            <div className="space-y-3 text-xs text-[hsl(0_0%_70%)] font-light">
              <div>
                <span className="block text-[hsl(0_0%_40%)] uppercase font-semibold font-mono">{t("nav.phoneLabel") as string}</span>
                <a href="tel:0951079215" className="text-white font-mono font-bold text-sm hover:text-[hsl(38_88%_52%)]">
                  {t("common.phone") as string}
                </a>
              </div>
              <div>
                <span className="block text-[hsl(0_0%_40%)] uppercase font-semibold font-mono">{t("nav.emailLabel") as string}</span>
                <a href="mailto:barberking.kv1@gmail.com" className="hover:text-white font-mono">
                  {t("common.email") as string}
                </a>
              </div>
              <div>
                <span className="block text-[hsl(0_0%_40%)] uppercase font-semibold font-mono">{t("nav.workingHoursLabel") as string}</span>
                <span className="font-mono">{t("nav.dailyHours") as string}</span>
              </div>

              {/* Social ROW as TEXT links */}
              <div className="pt-3 flex flex-wrap gap-3 font-mono text-xs">
                <a
                  href="https://www.instagram.com/barberking_kv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(38_88%_52%)] hover:underline uppercase font-bold min-h-[44px] flex items-center"
                >
                  Instagram
                </a>
                <span>·</span>
                <a
                  href="https://www.facebook.com/BarberKingkh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(38_88%_52%)] hover:underline uppercase font-bold min-h-[44px] flex items-center"
                >
                  Facebook
                </a>
                <span>·</span>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(38_88%_52%)] hover:underline uppercase font-bold min-h-[44px] flex items-center"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* GIANT Barberking Wordmark Background Overlay Bleeding Off Bottom Edge */}
        <div className="py-8 my-2 text-center overflow-hidden opacity-[0.07] select-none pointer-events-none" aria-hidden="true">
          <span className="font-display font-extrabold text-[16vw] uppercase tracking-tighter text-white block leading-none whitespace-nowrap">
            {t("nav.wordmarkBrand") as string}
          </span>
        </div>

        {/* Bottom Bar & Preserved Mandatory Studio Credit */}
        <div className="pt-8 border-t border-[hsl(0_0%_12%)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[hsl(0_0%_50%)] font-mono">
          <div>
            © 2026 Barberking. {t("common.allRightsReserved") as string}
          </div>

          <div className="text-center sm:text-right">
            {t("nav.footerSub") as string}
          </div>

          {/* Preserved Mandatory Developer Credit */}
          <div>
            {t("nav.studioText") as string}{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(38_88%_52%)] hover:underline font-bold"
            >
              {t("nav.studioName") as string}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
