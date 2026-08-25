
"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#why-us", label: t("nav.whyUs") as string },
    { href: "#masters", label: t("nav.team") as string },
    { href: "#gallery", label: t("nav.gallery") as string },
    { href: "#locations", label: t("nav.locations") as string },
    { href: "#faq", label: t("nav.faq") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(0_0%_6%/0.95)] backdrop-blur-md border-b border-[hsl(0_0%_15%)] py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Real Logo from client_logo */}
          <a href="#" className="flex items-center gap-3 group min-h-[44px] py-2">
            <img
              src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/logo.png"
              alt={t("nav.barberkingKyiv") as string}
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider font-medium text-[hsl(0_0%_85%)] hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Phone button */}
            <a
              href="tel:0951079215"
              className="text-xs font-semibold tracking-wider text-[hsl(0_0%_90%)] hover:text-[hsl(38_88%_52%)] transition-colors flex items-center gap-1.5 min-h-[44px] py-2"
            >
              <svg className="w-3.5 h-3.5 text-[hsl(38_88%_52%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t("common.phone") as string}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-[hsl(0_0%_12%)] p-1 rounded-md border border-[hsl(0_0%_20%)] text-xs">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2 py-1.5 min-h-[36px] rounded font-medium transition-colors ${
                  locale === "uk"
                    ? "bg-[hsl(38_88%_52%)] text-[hsl(0_0%_5%)] font-bold"
                    : "text-[hsl(0_0%_70%)] hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1.5 min-h-[36px] rounded font-medium transition-colors ${
                  locale === "en"
                    ? "bg-[hsl(38_88%_52%)] text-[hsl(0_0%_5%)] font-bold"
                    : "text-[hsl(0_0%_70%)] hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="#booking"
              className="px-4 py-2.5 min-h-[44px] flex items-center bg-[hsl(38_88%_52%)] hover:bg-[hsl(35_92%_44%)] text-[hsl(0_0%_5%)] font-display text-sm tracking-wider uppercase font-bold rounded transition-transform active:scale-95"
            >
              {t("common.bookNow") as string}
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:0951079215"
              aria-label={t("nav.callUs") as string}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[hsl(38_88%_52%)] border border-[hsl(38_88%_52%/0.3)] rounded"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[hsl(0_0%_90%)] hover:text-[hsl(38_88%_52%)] focus:outline-none"
              aria-label="Меню"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(0_0%_5%/0.98)] backdrop-blur-xl flex flex-col justify-between p-6 pt-24 lg:hidden">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-widest text-[hsl(0_0%_90%)] hover:text-[hsl(38_88%_52%)] transition-colors min-h-[44px] flex items-center justify-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-[hsl(0_0%_18%)]">
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => setLocale("uk")}
                className={`px-4 py-2 min-h-[44px] rounded text-sm font-bold ${
                  locale === "uk" ? "bg-[hsl(38_88%_52%)] text-black" : "bg-[hsl(0_0%_15%)] text-white"
                }`}
              >
                {t("nav.ukrainian") as string}
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-4 py-2 min-h-[44px] rounded text-sm font-bold ${
                  locale === "en" ? "bg-[hsl(38_88%_52%)] text-black" : "bg-[hsl(0_0%_15%)] text-white"
                }`}
              >
                {t("nav.english") as string}
              </button>
            </div>

            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 min-h-[44px] flex items-center justify-center bg-[hsl(38_88%_52%)] text-[hsl(0_0%_5%)] font-display text-lg uppercase tracking-wider font-extrabold rounded"
            >
              {t("common.bookNow") as string}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
