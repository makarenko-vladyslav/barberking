"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: String(t("nav.services")) },
    { href: "#prices", label: String(t("nav.prices")) },
    { href: "#calculator", label: String(t("nav.calculator")) },
    { href: "#branches", label: String(t("nav.branches")) },
    { href: "#team", label: String(t("nav.masters")) },
    { href: "#gallery", label: String(t("nav.gallery")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,padding] duration-300 ease-out ${
        scrolled
          ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-dark py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="gap-6 max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Real Client Logo */}
        <a href="#" className="shrink-0 flex items-center gap-3 min-h-[44px] py-1 group">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-text-light group-hover:text-accent transition-colors duration-200 ease-out">
            BARBER<span className="text-accent">KING</span>
          </span>
          <span className="sr-only">{String(t("brand.name"))}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-[44px] py-2.5 inline-flex items-center text-text-light/80 hover:text-accent transition-colors duration-200 ease-out"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Language */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-border-dark rounded px-1 text-xs">
            <button
              onClick={() => setLocale("uk")}
              className={`min-h-[44px] px-2 py-2 inline-flex items-center rounded transition-colors duration-200 ease-out ${
                locale === "uk" ? "text-accent font-bold" : "text-text-muted hover:text-text-light"
              }`}
            >
              UA
            </button>
            <span className="text-border-dark">/</span>
            <button
              onClick={() => setLocale("en")}
              className={`min-h-[44px] px-2 py-2 inline-flex items-center rounded transition-colors duration-200 ease-out ${
                locale === "en" ? "text-accent font-bold" : "text-text-muted hover:text-text-light"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="tel:0951079215"
            className="hidden sm:inline-flex items-center min-h-[44px] py-2.5 font-display text-lg tracking-wider text-text-light hover:text-accent transition-colors duration-200 ease-out"
          >
            {String(t("nav.call"))}
          </a>

          <a
            href="#booking"
            className="hidden md:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-accent text-bg-dark font-display text-base font-bold tracking-wider uppercase rounded hover:bg-accent-deep transition-colors duration-200 ease-out shadow-sm"
          >
            {String(t("nav.bookCta"))}
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label={String(t("nav.openMenu"))}
            className="lg:hidden min-h-[44px] min-w-[44px] flex flex-col items-center justify-center p-2 text-text-light hover:text-accent transition-colors duration-200 ease-out"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-4 h-0.5 bg-current ml-auto"></span>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-bg-dark flex flex-col p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-border-dark">
            <span className="font-display text-2xl font-extrabold tracking-wider uppercase text-text-light">
              BARBER<span className="text-accent">KING</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label={String(t("nav.closeMenu"))}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-text-light hover:text-accent font-display text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-5 py-8 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] py-2 inline-flex items-center font-display text-3xl font-bold tracking-wider text-text-light hover:text-accent transition-colors duration-200 ease-out"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-border-dark flex flex-col gap-4">
            <a
              href="tel:0951079215"
              className="font-display text-2xl tracking-wider text-accent text-center min-h-[44px] py-2 inline-flex items-center justify-center"
            >
              095 107 92 15
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center min-h-[44px] py-3.5 inline-flex items-center justify-center bg-accent text-bg-dark font-display text-xl font-bold tracking-wider uppercase rounded"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
