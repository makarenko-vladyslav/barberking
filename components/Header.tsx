"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = (t("brand.phone") as string) || "0951079215";
  const phoneFormatted = (t("brand.phoneFormatted") as string) || "095 107 92 15";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[hsl(0_0%_7%/0.95)] backdrop-blur-md py-3 shadow-2xl hairline-b"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-[hsl(32_90%_50%)] flex items-center justify-center font-display font-extrabold text-2xl text-[hsl(0_0%_7%)] group-hover:bg-white transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-wider text-white leading-none">
                BARBERKING
              </span>
              <span className="text-[0.65rem] uppercase tracking-widest text-[hsl(32_90%_50%)] font-semibold">
                КИЇВ · EST. 2014
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-white/80">
            <a href="#locations" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.locations") as string}
            </a>
            <a href="#services" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.services") as string}
            </a>
            <a href="#calculator" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.calculator") as string}
            </a>
            <a href="#team" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.team") as string}
            </a>
            <a href="#tattoo" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.tattoo") as string}
            </a>
            <a href="#gallery" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.gallery") as string}
            </a>
            <a href="#faq" className="hover:text-[hsl(32_90%_50%)] transition-colors">
              {t("nav.faq") as string}
            </a>
          </nav>

          {/* Header Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Lang Switcher */}
            <div className="flex items-center text-xs font-semibold uppercase tracking-wider bg-white/5 rounded p-1 border border-white/10">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "uk" ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)]" : "text-white/60 hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "en" ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)]" : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Phone */}
            <a
              href={`tel:${phone}`}
              className="text-xs font-bold tracking-wider text-white hover:text-[hsl(32_90%_50%)] transition-colors whitespace-nowrap"
            >
              ☎ {phoneFormatted}
            </a>

            {/* CTA Button */}
            <a
              href="#booking"
              className="px-5 py-2.5 rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-bold text-lg tracking-wider hover:bg-[hsl(28_95%_45%)] transition-all shadow-lg shadow-[hsl(32_90%_50%/0.2)]"
            >
              {t("nav.bookCta") as string}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 text-2xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(0_0%_7%)] text-white flex flex-col justify-between p-8 pt-24 lg:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-display font-bold tracking-wider">
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.locations") as string}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.services") as string}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.calculator") as string}
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.team") as string}
            </a>
            <a
              href="#tattoo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.tattoo") as string}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.gallery") as string}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[hsl(32_90%_50%)] border-b border-white/10 pb-3"
            >
              {t("nav.faq") as string}
            </a>
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${phone}`}
              className="text-xl font-bold text-[hsl(32_90%_50%)] text-center"
            >
              ☎ {phoneFormatted}
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center rounded bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)] font-display font-extrabold text-2xl tracking-wider"
            >
              {t("nav.bookCta") as string}
            </a>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => setLocale("uk")}
                className={`px-4 py-2 rounded text-sm font-bold ${
                  locale === "uk" ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)]" : "bg-white/10 text-white"
                }`}
              >
                УКРАЇНСЬКА
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-4 py-2 rounded text-sm font-bold ${
                  locale === "en" ? "bg-[hsl(32_90%_50%)] text-[hsl(0_0%_7%)]" : "bg-white/10 text-white"
                }`}
              >
                ENGLISH
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}