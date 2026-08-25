"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import content from "@/lib/content.json";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoUrl = "/barberking/media/210b09d0793a22f8.png";
  const brandName = (t("brand.name") as string) || "Barberking";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    { href: "#calculator", label: String(t("nav.calculator")) },
    { href: "#locations", label: String(t("nav.locations")) },
    { href: "#craft", label: String(t("nav.craft")) },
    { href: "#team", label: String(t("nav.team")) },
    { href: "#reviews", label: String(t("nav.reviews")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[hsl(24_15%_9%/0.94)] backdrop-blur-md py-3 border-b border-[hsl(36_10%_22%/0.6)] shadow-xl"
            : "bg-gradient-to-b from-[hsl(24_16%_8%/0.9)] via-[hsl(24_16%_8%/0.5)] to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logoUrl}
              alt={brandName}
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-[hsl(36_10%_80%)] hover:text-[hsl(32_95%_50%)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] rounded-full p-1 text-xs font-bold">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "uk"
                    ? "bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] shadow"
                    : "text-[hsl(36_8%_65%)] hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "en"
                    ? "bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] shadow"
                    : "text-[hsl(36_8%_65%)] hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Phone Button */}
            <a
              href="tel:0951079215"
              className="text-xs font-bold uppercase tracking-wider text-[hsl(36_10%_92%)] hover:text-[hsl(32_95%_50%)] transition-colors px-2 py-1"
            >
              095 107 92 15
            </a>

            {/* CTA Booking Button */}
            <button
              onClick={onOpenBooking}
              className="bg-[hsl(32_95%_50%)] hover:bg-[hsl(35_100%_44%)] text-[hsl(24_15%_9%)] text-xs font-display font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all shadow-md hover:shadow-[hsl(32_95%_50%/0.3)] transform hover:-translate-y-0.5"
            >
              {String(t("nav.book"))}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={String(t("header.toggleMenu"))}
              className="p-2 text-[hsl(36_10%_92%)] bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] rounded-sm focus:outline-none min-h-[44px] min-w-[44px] flex flex-col justify-center items-center"
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform" />
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-4 h-0.5 bg-current ml-auto" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile & Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(24_16%_8%/0.98)] backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          {/* Menu Top Bar */}
          <div className="flex items-center justify-between">
            <img src={logoUrl} alt={brandName} className="h-9 w-auto object-contain" />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label={String(t("header.closeMenu"))}
              className="p-3 bg-[hsl(24_14%_13%)] border border-[hsl(36_10%_22%)] text-[hsl(32_95%_50%)] rounded-full text-xl font-bold hover:bg-[hsl(32_95%_50%)] hover:text-[hsl(24_15%_9%)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Menu Links */}
          <div className="my-auto space-y-4">
            <p className="text-[hsl(32_95%_50%)] text-xs uppercase tracking-widest font-mono mb-2">
              {String(t("header.menuNavTitle"))}
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-3xl sm:text-4xl font-display font-bold uppercase tracking-wider text-[hsl(36_10%_92%)] hover:text-[hsl(32_95%_50%)] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Menu Bottom Info & CTA */}
          <div className="space-y-4 pt-4 border-t border-[hsl(36_10%_22%)]">
            <div className="flex items-center justify-between">
              <a
                href="tel:0951079215"
                className="text-lg font-display font-bold text-[hsl(32_95%_50%)] tracking-wider py-2"
              >
                📞 095 107 92 15
              </a>

              {/* Language Picker Mobile */}
              <div className="flex gap-2 text-xs font-bold">
                <button
                  onClick={() => setLocale("uk")}
                  className={`px-3 py-2 rounded min-h-[44px] ${
                    locale === "uk" ? "bg-[hsl(32_95%_50%)] text-black" : "bg-[hsl(24_14%_13%)] text-white"
                  }`}
                >
                  UA
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-2 rounded min-h-[44px] ${
                    locale === "en" ? "bg-[hsl(32_95%_50%)] text-black" : "bg-[hsl(24_14%_13%)] text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[hsl(32_95%_50%)] text-[hsl(24_15%_9%)] font-display font-bold text-lg uppercase tracking-widest rounded shadow-lg text-center min-h-[44px]"
            >
              {String(t("nav.book"))}
            </button>
          </div>
        </div>
      )}
    </>
  );
}