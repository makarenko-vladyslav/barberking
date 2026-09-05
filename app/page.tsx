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
        <Advantages />

        {/* Interstitial 2: Bold Statement Band */}
        <StatementStrip />

        {/* Section 3: Primary Services Showcase */}
        <ServicesSection />

        {/* Section 4: Full Transparent Price Rows */}
        <PriceListRows />

        {/* Section 5: Dynamic Calculator with Slider */}
        <Calculator />

        {/* Section 6: Workflow Protocol */}
        <Workflow />

        {/* Interstitial 3: Social Proof & Metrics Strip */}
        <RatingStrip />

        {/* Section 7: Team with Real Barber Portraits */}
        <TeamSection />

        {/* Section 8: Real Results Gallery & Proof */}
        <GallerySection />

        {/* Section 9: Video Atmosphere Showcase */}
        <VideoAtmosphere />

        {/* Section 10: Gift Certificates */}
        <GiftCertificates />

        {/* Section 11: 4 Kyiv Branches with Parking */}
        <BranchesSection />

        {/* Section 12: Real Client FAQ Accordion */}
        <FaqSection />

        {/* Section 13: Online Booking & Call Request */}
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
