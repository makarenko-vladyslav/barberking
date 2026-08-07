import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ServicesCatalog from "@/components/ServicesCatalog";
import Calculator from "@/components/Calculator";
import Locations from "@/components/Locations";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import TattooRoom from "@/components/TattooRoom";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg-dark">
        <Reveal><Hero /></Reveal>
        <Reveal><Ticker /></Reveal>
        <Reveal><ServicesCatalog /></Reveal>

        {/* Interstitial Strip 1: Statement Hairline */}
        <Reveal>
          <div className="bg-secondary/80 py-4 border-y border-border-dark text-center font-mono text-xs text-accent tracking-widest uppercase select-none">
            3-ЕТАПНА СТЕРИЛІЗАЦІЯ ІНСТРУМЕНТІВ — ГАРАНТІЯ БЕЗПЕКИ КОЖНОГО ВІЗИТУ
          </div>
        </Reveal>

        <Reveal><Calculator /></Reveal>

        {/* Interstitial Strip 2: Statement Hairline */}
        <Reveal>
          <div className="bg-bg-dark py-4 border-b border-border-dark text-center font-mono text-xs text-text-muted tracking-widest uppercase select-none">
            4 ЗРУЧНІ ФІЛІЇ ПО КИЄВУ — ПРАВИЙ ТА ЛІВИЙ БЕРЕГ
          </div>
        </Reveal>

        <Reveal><Locations /></Reveal>
        <Reveal><Advantages /></Reveal>

        {/* Interstitial Strip 3: Statement Hairline */}
        <Reveal>
          <div className="bg-secondary/80 py-4 border-y border-border-dark text-center font-mono text-xs text-accent tracking-widest uppercase select-none">
            БЕЗКОШТОВНИЙ БАР ТА ВІСКІ ДЛЯ КОЖНОГО ГОСТЯ
          </div>
        </Reveal>

        <Reveal><Gallery /></Reveal>
        <Reveal><TattooRoom /></Reveal>
        <Reveal><Team /></Reveal>

        {/* Interstitial Strip 4: Marquee Ticker */}
        <Reveal><Ticker /></Reveal>

        <Reveal><Reviews /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><ContactForm /></Reveal>
      </main>
      <Footer />
    </>
  );
}
