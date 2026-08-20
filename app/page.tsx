"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Locations from "@/components/Locations";
import ServicesMenu from "@/components/ServicesMenu";
import Calculator from "@/components/Calculator";
import CraftAdvantages from "@/components/CraftAdvantages";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import Team from "@/components/Team";
import TattooStudio from "@/components/TattooStudio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { LabeledHairline, StatementBand, RatingStrip } from "@/components/Interstitials";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || "");
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[hsl(18_12%_8%)] text-white">
      <Header onOpenBooking={handleOpenBooking} />
      
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        
        <MarqueeTicker />
        
        <Locations onOpenBooking={handleOpenBooking} />
        
        <LabeledHairline label="BARBERKING KYIV — PREMIER MEN'S GROOMING & PRICELIST" />
        
        <ServicesMenu onOpenBooking={handleOpenBooking} />
        
        <Calculator onOpenBooking={handleOpenBooking} />
        
        <RatingStrip />
        
        <CraftAdvantages />
        
        <Gallery />
        
        <StatementBand 
          title="10 РОКІВ БЕЗДОГАННОЇ РЕПУТАЦІЇ В КИЄВІ" 
          subtitle="БЕЗДОГАННИЙ ФОРМАТ ЧОЛОВІЧОГО КЛУБУ З БЕЗКОШТОВНИМ БАРОМ" 
        />
        
        <VideoShowcase />
        
        <Team onOpenBooking={handleOpenBooking} />
        
        <TattooStudio onOpenBooking={handleOpenBooking} />
        
        <LabeledHairline label="ГОСТІ ПРО BARBERKING — СУМЛІННІ ВІДГУКИ ТА ОЦІНКИ" />
        
        <Testimonials />
        
        <FAQ />
        
        <CtaBanner onOpenBooking={handleOpenBooking} />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
