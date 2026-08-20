"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

interface HeaderProps {
  onOpenBooking: (locationId?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "#locations", label: String(t("nav.locations")) },
    { href: "#services", label: String(t("nav.services")) },
    { href: "#calculator", label: String(t("nav.calculator")) },
    { href: "#craft", label: String(t("nav.craft")) },
    { href: "#gallery", label: String(t("nav.gallery")) },
    { href: "#team", label: String(t("nav.team")) },
    { href: "#tattoo", label: String(t("nav.tattoo")) },
    { href: "#reviews", label: String(t("nav.reviews")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(18_12%_8%/0.95)] backdrop-blur-md py-3 border-b border-hairline shadow-2xl"
          : "bg-gradient-to-b from-[hsl(18_12%_8%/0.9)] to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="group flex flex-col">
          <span className="font-display font-extrabold text-3xl tracking-wider text-white group-hover:text-amber-400 transition-colors">
            BARBERKING
          </span>
          <span className="text-[10px] uppercase tracking-widest text-amber-500 font-medium -mt-1">
            {String(t("brand.established"))} · КИЇВ
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-amber-400 transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Phone Link */}
          <a
            href={String(t("brand.phoneRaw"))}
            className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-amber-400 hover:text-amber-300 transition-colors px-3 py-1.5 rounded border border-hairline-accent bg-amber-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{String(t("brand.phone"))}</span>
          </a>

          {/* Lang Switcher */}
          <div className="flex items-center border border-hairline rounded overflow-hidden text-xs">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2 py-1 font-bold transition-colors ${
                locale === "uk"
                  ? "bg-amber-500 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 font-bold transition-colors ${
                locale === "en"
                  ? "bg-amber-500 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Booking CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="bg-amber-500 hover:bg-amber-400 text-black font-display font-bold text-xl px-5 py-2 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-amber-500/20 active:scale-95"
          >
            {String(t("nav.bookBtn"))}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex xl:hidden items-center space-x-3">
          <button
            onClick={() => onOpenBooking()}
            className="bg-amber-500 text-black font-display font-bold text-base px-3 py-1.5 rounded sm:hidden"
          >
            {String(t("nav.bookBtn"))}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-gray-300 hover:text-amber-400 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[hsl(18_12%_8%/0.98)] backdrop-blur-xl z-50 flex flex-col justify-between p-6 xl:hidden border-t border-hairline">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
                {String(t("nav.langLabel"))}
              </span>
              <div className="flex items-center space-x-2 text-sm">
                <button
                  onClick={() => setLocale("uk")}
                  className={`px-3 py-1 rounded font-bold ${
                    locale === "uk"
                      ? "bg-amber-500 text-black"
                      : "bg-gray-800 text-gray-300"
                  }`}
                >
                  УКРАЇНСЬКА
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 rounded font-bold ${
                    locale === "en"
                      ? "bg-amber-500 text-black"
                      : "bg-gray-800 text-gray-300"
                  }`}
                >
                  ENGLISH
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-2xl text-gray-200 hover:text-amber-400 py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-hairline">
            <a
              href={String(t("brand.phoneRaw"))}
              className="block text-center font-display text-2xl font-bold text-amber-400 py-2 border border-hairline-accent rounded"
            >
              {String(t("brand.phone"))}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-display font-bold text-2xl py-3 rounded shadow-lg shadow-amber-500/20"
            >
              {String(t("nav.bookBtn"))}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
