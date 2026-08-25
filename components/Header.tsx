"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "#services", label: String(t("nav.services")) },
    { href: "#advantages", label: String(t("nav.advantages")) },
    { href: "#masters", label: String(t("nav.masters")) },
    { href: "#gallery", label: String(t("nav.gallery")) },
    { href: "#branches", label: String(t("nav.branches")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-950/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group py-1">
            <img
              src="/barberking/media/210b09d0793a22f8.png"
              alt="Barberking"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-neutral-300 hover:text-accent font-semibold transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs font-semibold">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  locale === "uk" ? "bg-accent text-black font-bold" : "text-neutral-300 hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  locale === "en" ? "bg-accent text-black font-bold" : "text-neutral-300 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:0951079215"
              className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-accent hover:text-white transition-colors py-2"
            >
              <span>{String(t("nav.phone"))}</span>
            </a>

            {/* CTA Button */}
            <a
              href="#booking"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase font-bold tracking-widest bg-accent hover:bg-amber-400 text-black rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md shadow-amber-500/20"
            >
              {String(t("nav.book"))}
            </a>

            {/* Mobile Burger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden px-3 py-2 rounded bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:text-accent focus:outline-none"
              aria-label={String(t("header.toggleMenu"))}
            >
              {menuOpen ? String(t("header.closeMenu")) : String(t("header.menu"))}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950 flex flex-col justify-between p-6 lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <img
              src="/barberking/media/210b09d0793a22f8.png"
              alt="Barberking"
              className="h-9 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 border border-accent/40 rounded text-accent text-xs font-bold uppercase tracking-widest"
              aria-label={String(t("header.closeMenuAlt"))}
            >
              {String(t("header.closeMenu"))}
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-bold uppercase tracking-wider text-white hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <a
              href="tel:0951079215"
              className="text-lg font-bold text-accent flex items-center justify-between py-2"
            >
              <span className="text-xs text-neutral-400 uppercase tracking-widest">{String(t("header.telLabel"))}</span>
              <span>095 107 92 15</span>
            </a>

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="w-full py-4 text-center font-display text-lg uppercase font-bold tracking-wider bg-accent text-black rounded-lg"
            >
              {String(t("nav.book"))}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
