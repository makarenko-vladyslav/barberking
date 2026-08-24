"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    { href: "#team", label: String(t("nav.team")) },
    { href: "#gallery", label: String(t("nav.gallery")) },
    { href: "#tattoo", label: String(t("nav.tattoo")) },
    { href: "#testimonials", label: String(t("nav.testimonials")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(0_0%_5%/0.95)] backdrop-blur-md py-3 border-b border-[hsl(0_0%_15%)]"
          : "bg-gradient-to-b from-[hsl(0_0%_0%/0.8)] to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Real Client Logo */}
        <a href="#" className="flex items-center gap-2 group py-1">
          <img
            src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/logo.png"
            alt="Barberking Kyiv"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[hsl(0_0%_80%)] hover:text-[hsl(38_90%_50%)] transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Direct Phone Call */}
          <a
            href="tel:0951079215"
            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[hsl(0_0%_90%)] hover:text-[hsl(38_90%_50%)] transition-colors py-1"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(38_90%_50%)]"></span>
            095 107 92 15
          </a>

          {/* Language Switcher */}
          <div className="flex items-center border border-[hsl(0_0%_20%)] rounded-xs overflow-hidden text-xs">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2.5 py-1 font-bold transition-colors ${
                locale === "uk"
                  ? "bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)]"
                  : "text-[hsl(0_0%_70%)] hover:bg-[hsl(0_0%_15%)]"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 font-bold transition-colors ${
                locale === "en"
                  ? "bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)]"
                  : "text-[hsl(0_0%_70%)] hover:bg-[hsl(0_0%_15%)]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary CTA button */}
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[hsl(38_90%_50%)] hover:bg-[hsl(35_95%_45%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider rounded-xs transition-transform active:scale-95"
          >
            {String(t("nav.bookCta"))}
          </a>

          {/* Mobile Menu Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[hsl(0_0%_90%)] hover:text-[hsl(38_90%_50%)] focus:outline-none"
            aria-label={String(t("header.toggleMenu"))}
          >
            <span className="text-sm font-bold tracking-widest uppercase">
              {menuOpen ? String(t("header.close")) : String(t("header.menu"))}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(0_0%_5%)] flex flex-col justify-between p-6 sm:p-10">
          <div className="flex items-center justify-between border-b border-[hsl(0_0%_15%)] pb-4">
            <img
              src="https://kyiv.bking.com.ua/wp-content/themes/bking/images/logo.png"
              alt={String(t("header.brandAlt"))}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-[hsl(38_90%_50%)] text-xs font-bold uppercase tracking-widest"
            >
              {String(t("header.closeX"))}
            </button>
          </div>

          <div className="flex flex-col gap-4 my-auto py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-['Alumni_Sans'] text-4xl uppercase tracking-wider text-[hsl(0_0%_90%)] hover:text-[hsl(38_90%_50%)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[hsl(0_0%_15%)] flex flex-col gap-4">
            <a
              href="tel:0951079215"
              className="text-lg font-bold text-[hsl(38_90%_50%)] tracking-wider py-1"
            >
              {String(t("header.telPrefix"))}: 095 107 92 15
            </a>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-3 bg-[hsl(38_90%_50%)] text-[hsl(0_0%_5%)] font-bold text-xs uppercase tracking-wider rounded-xs"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
