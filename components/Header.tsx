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

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#locations", label: t("nav.locations") },
    { href: "#advantages", label: t("nav.advantages") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#tattoo", label: t("nav.tattoo") },
    { href: "#team", label: t("nav.team") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/95 backdrop-blur-md py-3 border-b border-border-dark/60 shadow-xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-accent text-bg-dark flex items-center justify-center font-display font-extrabold text-2xl tracking-tighter group-hover:bg-accent-hover transition-colors">
              BK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-text-light tracking-wide leading-none group-hover:text-accent transition-colors">
                BARBERKING
              </span>
              <span className="text-[10px] tracking-widest text-accent uppercase font-medium">
                Barbershop Kyiv
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase font-medium tracking-wider text-text-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action & Phone & Lang */}
          <div className="flex items-center gap-4">
            {/* Phone link */}
            <a
              href="tel:0951079215"
              className="hidden sm:flex flex-col text-right group"
            >
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Запис / Дзвінок
              </span>
              <span className="text-sm font-semibold text-text-light group-hover:text-accent transition-colors">
                095 107 92 15
              </span>
            </a>

            {/* Language switch */}
            <div className="flex items-center border border-border-dark rounded-sm p-0.5 bg-secondary text-xs">
              <button
                type="button"
                onClick={() => setLocale("uk")}
                className={`px-2 py-1 rounded-xs font-semibold transition-colors ${
                  locale === "uk"
                    ? "bg-accent text-bg-dark"
                    : "text-text-muted hover:text-text-light"
                }`}
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2 py-1 rounded-xs font-semibold transition-colors ${
                  locale === "en"
                    ? "bg-accent text-bg-dark"
                    : "text-text-muted hover:text-text-light"
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary CTA button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center bg-accent text-bg-dark font-display font-bold px-5 py-2.5 text-base tracking-wider hover:bg-accent-hover transition-colors uppercase"
            >
              {t("nav.book")}
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-text-light hover:text-accent focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark/98 flex flex-col justify-between p-6 pt-24 xl:hidden overflow-y-auto">
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-wider text-text-light hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-border-dark text-center">
            <a
              href="tel:0951079215"
              className="font-display text-2xl text-accent font-bold"
            >
              095 107 92 15
            </a>
            <p className="text-xs text-text-muted">
              Щодня з 10:00 до 21:00 • 4 філії у Києві
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-accent text-bg-dark font-display font-bold py-3 text-lg uppercase tracking-wider text-center"
            >
              {t("nav.book")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
