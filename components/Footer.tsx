"use client";

import React from "react";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  const brandName = (t("brand.name") as string) || "Barberking";

  return (
    <footer className="bg-[hsl(24_16%_6%)] text-[hsl(36_10%_80%)] pt-16 pb-12 border-t border-[hsl(36_10%_22%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[hsl(36_10%_22%/0.6)]">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl uppercase tracking-wider text-[hsl(36_10%_92%)]">
              {brandName}
            </div>
            <p className="text-xs leading-relaxed text-[hsl(36_8%_65%)]">
              {String(t("footer.about"))}
            </p>
            <div className="text-xs font-mono text-[hsl(32_95%_50%)] font-bold">
              {String(t("footer.estText"))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg text-white mb-4">
              {String(t("footer.quickLinks"))}
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              <li><a href="#services" className="hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block">{String(t("footer.linkServices"))}</a></li>
              <li><a href="#calculator" className="hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block">{String(t("footer.linkCalculator"))}</a></li>
              <li><a href="#locations" className="hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block">{String(t("footer.linkLocations"))}</a></li>
              <li><a href="#craft" className="hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block">{String(t("footer.linkCraft"))}</a></li>
              <li><a href="#team" className="hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block">{String(t("footer.linkTeam"))}</a></li>
              <li><a href="#reviews" className="hover:text-[hsl(32_95%_50%)] transition-colors py-2 inline-block">{String(t("footer.linkReviews"))}</a></li>
            </ul>
          </div>

          {/* Column 3: Contacts (Separate lines) */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg text-white mb-4">
              {String(t("footer.contacts"))}
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <p className="text-[hsl(36_8%_55%)] uppercase">{String(t("footer.phoneCallLabel"))}</p>
              <a
                href="tel:0951079215"
                className="font-display font-bold text-xl text-[hsl(32_95%_50%)] block hover:underline py-2"
              >
                095 107 92 15
              </a>
              <p className="text-[hsl(36_8%_55%)] uppercase pt-2">{String(t("footer.emailLabel"))}</p>
              <a href="mailto:barberking.kv1@gmail.com" className="text-white hover:underline block py-2">
                barberking.kv1@gmail.com
              </a>
              <p className="text-[hsl(36_8%_55%)] uppercase pt-2">{String(t("footer.centralOfficeLabel"))}</p>
              <p className="text-white py-1">{String(t("footer.centralOfficeAddress"))}</p>
            </div>
          </div>

          {/* Column 4: Hours & Social Row as TEXT links */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg text-white mb-4">
              {String(t("footer.hoursSocialTitle"))}
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <p className="text-[hsl(36_8%_65%)]">{String(t("footer.workingDailyLabel"))}</p>
              <p className="text-white font-bold text-sm">09:00 — 21:00</p>
              <p className="text-[hsl(36_8%_55%)] pt-2 uppercase">{String(t("footer.socialsLabel"))}</p>
              <div className="flex flex-wrap gap-3 text-xs uppercase font-bold text-[hsl(32_95%_50%)]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline py-2 inline-block">
                  INSTAGRAM
                </a>
                <span>•</span>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:underline py-2 inline-block">
                  TELEGRAM
                </a>
                <span>•</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline py-2 inline-block">
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom */}
        <div className="pt-8 text-center overflow-hidden border-b border-[hsl(36_10%_22%/0.4)]">
          <span className="font-display font-bold text-6xl sm:text-8xl lg:text-[11rem] uppercase tracking-tighter text-[hsl(36_10%_22%/0.2)] select-none block leading-none">
            BARBERKING
          </span>
        </div>

        {/* Footer Legal Row & Studio Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[hsl(36_8%_55%)]">
          <div>
            {String(t("footer.rights"))}
          </div>

          {/* Mandatory Developer Studio Credit */}
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(32_95%_50%)] transition-colors underline py-2 inline-block"
            >
              {String(t("footer.developer"))}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
