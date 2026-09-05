import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Advantages from "@/components/Advantages";
import StatementStrip from "@/components/StatementStrip";
import ServicesSection from "@/components/ServicesSection";
import PriceListRows from "@/components/PriceListRows";
import Calculator from "@/components/Calculator";
import Workflow from "@/components/Workflow";
import RatingStrip from "@/components/RatingStrip";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import VideoAtmosphere from "@/components/VideoAtmosphere";
import GiftCertificates from "@/components/GiftCertificates";
import BranchesSection from "@/components/BranchesSection";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Interstitial 1: Infinite Marquee Strip */}
        <MarqueeStrip />

        {/* Section 2: Standards / Advantages */}
        <Reveal>
          <Advantages />
        </Reveal>

        {/* Interstitial 2: Bold Statement Band */}
        <StatementStrip />

        {/* Section 3: Primary Services Showcase */}
        <Reveal>
          <ServicesSection />
        </Reveal>

        {/* Section 4: Full Transparent Price Rows */}
        <Reveal>
          <PriceListRows />
        </Reveal>

        {/* Section 5: Dynamic Calculator with Slider */}
        <Reveal>
          <Calculator />
        </Reveal>

        {/* Section 6: Workflow Protocol */}
        <Reveal>
          <Workflow />
        </Reveal>

        {/* Interstitial 3: Social Proof & Metrics Strip */}
        <RatingStrip />

        {/* Section 7: Team with Real Barber Portraits */}
        <Reveal>
          <TeamSection />
        </Reveal>

        {/* Section 8: Real Results Gallery & Proof */}
        <Reveal>
          <GallerySection />
        </Reveal>

        {/* Section 9: Video Atmosphere Showcase */}
        <Reveal>
          <VideoAtmosphere />
        </Reveal>

        {/* Section 10: Gift Certificates */}
        <Reveal>
          <GiftCertificates />
        </Reveal>

        {/* Section 11: 4 Kyiv Branches with Parking */}
        <Reveal>
          <BranchesSection />
        </Reveal>

        {/* Section 12: Real Client FAQ Accordion */}
        <Reveal>
          <FaqSection />
        </Reveal>

        {/* Section 13: Online Booking & Call Request */}
        <Reveal>
          <BookingSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}