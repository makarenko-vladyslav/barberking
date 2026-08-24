import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Locations from "@/components/Locations";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import TattooSection from "@/components/TattooSection";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { StatementStrip, LabeledHairline } from "@/components/Interstitials";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[hsl(0_0%_5%)]">
        <Reveal><Hero /></Reveal>
        <Reveal><SocialProof /></Reveal>
        <Reveal><Services /></Reveal>
        <LabeledHairline label="КАЛЬКУЛЯТОР ВАРТОСТІ ВІЗИТУ" />
        <Reveal><Calculator /></Reveal>
        <Reveal><Locations /></Reveal>
        <StatementStrip text="4 ЛОКАЦІЇ В КИЄВІ — ВЛАСНИЙ ПАРКІНГ ДЛЯ ГОСТЕЙ" />
        <Reveal><Team /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><TattooSection /></Reveal>
        <Reveal><VideoShowcase /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <LabeledHairline label="ПОПУЛЯРНІ ЗАПИТАННЯ ТА ВІДПОВІДІ" />
        <Reveal><FAQSection /></Reveal>
        <Reveal><ContactForm /></Reveal>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
