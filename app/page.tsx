import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Philosophy from "@/components/Philosophy";
import ServicesPrices from "@/components/ServicesPrices";
import Calculator from "@/components/Calculator";
import Team from "@/components/Team";
import Transformations from "@/components/Transformations";
import HygieneStandards from "@/components/HygieneStandards";
import TattooGrooming from "@/components/TattooGrooming";
import CertificatesSubscriptions from "@/components/CertificatesSubscriptions";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import LocationsMap from "@/components/LocationsMap";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import { useLocale } from "@/lib/i18n";
import ServerInterstitials from "@/components/ServerInterstitials";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-body">
      <Header />
      <main>
        <Hero />
        <SocialProof />

        {/* Interstitial 1: Labeled Hairline */}
        <div className="w-full bg-zinc-950 py-4 border-y border-zinc-800/80 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400/80">
            — ФІЛОСОФІЯ ЧИСТОГО РЕМЕСЛА ТА ГЕОМЕТРІЇ —
          </span>
        </div>

        <Philosophy />
        <ServicesPrices />

        {/* Interstitial 2: Standalone Oversized Statement Band */}
        <div className="w-full bg-amber-500 py-6 text-zinc-950 text-center overflow-hidden">
          <div className="font-display font-extrabold uppercase text-2xl sm:text-4xl tracking-tight max-w-5xl mx-auto px-4">
            ПОНАД 265 000 СТРИЖОК З 2018 РОКУ: ТВІЙ СТИЛЬ БЕЗ ЗАПІЗНЕНЬ
          </div>
        </div>

        <Calculator />
        <Team />
        <Transformations />

        {/* Interstitial 3: Labeled Hairline */}
        <div className="w-full bg-zinc-900 py-4 border-y border-zinc-800 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            — БЕЗПЕКА ГОСТЯ ТА 100% СТЕРИЛІЗАЦІЯ ІНСТРУМЕНТІВ —
          </span>
        </div>

        <HygieneStandards />
        <TattooGrooming />
        <CertificatesSubscriptions />
        <Testimonials />

        {/* Interstitial 4: Press / Rating Strip */}
        <ServerInterstitials />

        <FAQSection />
        <LocationsMap />
        <CTAForm />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}