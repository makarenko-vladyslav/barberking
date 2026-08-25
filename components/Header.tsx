"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    { href: "#philosophy", label: t("nav.philosophy") as string },
    { href: "#team", label: t("nav.team") as string },
    { href: "#transformations", label: t("nav.transformations") as string },
    { href: "#hygiene", label: t("nav.hygiene") as string },
    { href: "#branches", label: t("nav.branches") as string },
    { href: "#faq", label: t("nav.faq") as string },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Real Client Logo */}
        <a href="#" className="flex items-center gap-3 group py-1">
          <img
            src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/logo.png"
            alt="Barberking Kyiv"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-body text-zinc-300 hover:text-amber-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Contacts */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0951079215"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 hover:text-amber-300 transition-colors py-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>095 107 92 15</span>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center border border-zinc-700 rounded-full p-0.5 bg-zinc-900/80">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-colors ${
                locale === "uk" ? "bg-amber-500 text-zinc-950" : "text-zinc-400 hover:text-white"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-colors ${
                locale === "en" ? "bg-amber-500 text-zinc-950" : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#booking"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-display font-bold uppercase tracking-wider text-base rounded transition-all transform active:scale-95 shadow-lg shadow-amber-500/10"
          >
            {t("nav.bookCta") as string}
          </a>

          {/* Mobile Burger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t("nav.openMenu") as string}
            className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <img
              src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/logo.png"
              alt="Barberking Kyiv"
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("nav.closeMenu") as string}
              className="p-2 text-zinc-400 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="my-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display uppercase font-bold text-zinc-200 hover:text-amber-400 transition-colors border-b border-zinc-800/40 pb-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-4 border-t border-zinc-800">
            <a
              href="tel:0951079215"
              className="flex items-center gap-3 text-lg font-bold text-amber-400 py-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>095 107 92 15</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-amber-500 text-zinc-950 font-display font-bold uppercase tracking-wider text-xl rounded shadow-lg"
            >
              {t("nav.bookCta") as string}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}