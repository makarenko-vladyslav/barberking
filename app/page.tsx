import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Locations from "@/components/Locations";
import ServicesCatalogue from "@/components/ServicesCatalogue";
import Calculator from "@/components/Calculator";
import TeamSection from "@/components/TeamSection";
import CraftStandards from "@/components/CraftStandards";
import TattooZone from "@/components/TattooZone";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Interstitial from "@/components/Interstitials";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Reveal><Ticker /></Reveal>
        <Reveal><Locations /></Reveal>
        <Reveal><Interstitial type="statement" text="69 000+ КЛІЄНТІВ ОБРАЛИ BARBERKING З 2014 РОКУ" subText="РЕЗУЛЬТАТ ТА ДОВІРА" /></Reveal>
        <Reveal><ServicesCatalogue /></Reveal>
        <Reveal><Calculator /></Reveal>
        <Reveal><Interstitial type="watermark" text="KYIV CRAFT BARBERS" /></Reveal>
        <Reveal><TeamSection /></Reveal>
        <Reveal><CraftStandards /></Reveal>
        <Reveal><Interstitial type="hairline" text="СТАНДАРТИ ТА ТАЙМІНГ" /></Reveal>
        <Reveal><TattooZone /></Reveal>
        <Reveal><GallerySection /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><FaqSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
