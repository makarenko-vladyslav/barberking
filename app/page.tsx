import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesPricing from "@/components/ServicesPricing";
import BookingCalculator from "@/components/BookingCalculator";
import Advantages from "@/components/Advantages";
import MastersTeam from "@/components/MastersTeam";
import Gallery from "@/components/Gallery";
import RitualProcess from "@/components/RitualProcess";
import TattooAndSpecialized from "@/components/TattooAndSpecialized";
import CertificatesSubscriptions from "@/components/CertificatesSubscriptions";
import Testimonials from "@/components/Testimonials";
import LocationsMap from "@/components/LocationsMap";
import Faq from "@/components/Faq";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { useLocale } from "@/lib/i18n";

export const metadata = {
  title: "Barberking — Барбершоп у Києві",
};

export default function Home() {
  return <HomePageContent />;
}

function HomePageContent() {
  return (
    <>
      <Header />
      <main className="bg-[hsl(0_0%_5%)] text-white">
        <Hero />
        
        {/* Interstitial 1: Social Proof Ticker */}
        <SocialProof />
        
        <ServicesPricing />
        
        {/* Interstitial 2: Labeled Hairline Strip */}
        <div className="py-4 bg-[hsl(0_0%_6%)] border-y border-[hsl(0_0%_15%)] text-center">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[hsl(38_88%_52%)]">
            — СТАНДАРТИ ОБСЛУГОВУВАННЯ BARBERKING 2026 —
          </span>
        </div>

        <BookingCalculator />
        <Advantages />
        
        {/* Interstitial 3: Standalone Statement Band */}
        <div className="py-8 bg-[hsl(38_88%_52%)] text-[hsl(0_0%_5%)] text-center font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-wider">
          ГОЛІННЯ НЕБЕЗПЕЧНОЮ БРИТВОЮ · ГАРЯЧІ ЕВКАЛІПТОВІ РУШНИКИ · СВІЖООБСМАЖЕНА КАВА
        </div>

        <MastersTeam />
        <Gallery />

        {/* Interstitial 4: Press & Rating Strip */}
        <TranslatedPressStrip />

        <RitualProcess />
        <TattooAndSpecialized />
        <CertificatesSubscriptions />
        <Testimonials />
        <LocationsMap />
        <Faq />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

function TranslatedPressStrip() {
  // Client component helper or inline text using useLocale via Header/etc, but since page.tsx is server, we render simple wrapper
  return (
    <div className="py-4 bg-[hsl(0_0%_7%)] border-y border-[hsl(0_0%_15%)] flex justify-center items-center gap-8 text-xs uppercase font-mono tracking-widest text-[hsl(0_0%_65%)]">
      <span>4.9 / 5.0 GOOGLE MAPS</span>
      <span>·</span>
      <span>4 КИЇВСЬКІ ФІЛІЇ</span>
      <span>·</span>
      <span>ВЛАСНИЙ ПАРКІНГ</span>
    </div>
  );
}
