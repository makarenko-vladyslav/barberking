"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesShowcase from "@/components/ServicesShowcase";
import BookingCalculator from "@/components/BookingCalculator";
import LocationsMap from "@/components/LocationsMap";
import AtmosphereCraft from "@/components/AtmosphereCraft";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import GalleryMasonry from "@/components/GalleryMasonry";
import TeamSection from "@/components/TeamSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import CertificatesSubscriptions from "@/components/CertificatesSubscriptions";
import FaqSection from "@/components/FaqSection";
import BookingContactModal from "@/components/BookingContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(24_16%_8%)] text-[hsl(36_10%_92%)]">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Interstitial 1: Text Marquee */}
        <SocialProof />

        {/* Section 2: Services & Price List */}
        <ServicesShowcase onOpenBooking={() => setBookingOpen(true)} />

        {/* Interstitial 2: Standalone Statement Band */}
        <div className="bg-[hsl(24_14%_12%)] py-4 border-y border-[hsl(36_10%_22%)] text-center">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[hsl(32_95%_50%)] font-bold">
            «КОЖЕН МІЛІМЕТР ЗРІЗУ — ЦЕ РЕПУТАЦІЯ НАШОЇ МЕРЕЖІ»
          </p>
        </div>

        {/* Section 3: Booking Calculator */}
        <BookingCalculator onOpenBooking={() => setBookingOpen(true)} />

        {/* Section 4: Locations & Parking Map */}
        <LocationsMap />

        {/* Interstitial 3: Watermark Labeled Hairline */}
        <div className="py-6 bg-[hsl(24_16%_8%)] flex items-center justify-center gap-4 text-xs font-mono text-[hsl(36_8%_55%)] uppercase tracking-widest">
          <div className="w-16 h-px bg-[hsl(36_10%_22%)]" />
          <span>ЧОЛОВІЧИЙ КЛУБ ТА ФІЛОСОФІЯ ГРАДІЄНТА</span>
          <div className="w-16 h-px bg-[hsl(36_10%_22%)]" />
        </div>

        {/* Section 5: Atmosphere & Philosophy */}
        <AtmosphereCraft />

        {/* Section 6: Before & After Precision */}
        <BeforeAfterShowcase />

        {/* Section 7: Real Gallery */}
        <GalleryMasonry />

        {/* Interstitial 4: Rating Proof Strip */}
        <div className="bg-[hsl(32_95%_50%/0.1)] py-4 border-y border-[hsl(32_95%_50%/0.25)] text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[hsl(36_10%_92%)]">
            4.9 / 5.0 У GOOGLE MAPS • 580+ ПІДТВЕРДЖЕНИХ ВІДГУКІВ • 4 ФІЛІЇ З ПАРКІНГОМ
          </p>
        </div>

        {/* Section 8: Masters & Team */}
        <TeamSection onOpenBooking={() => setBookingOpen(true)} />

        {/* Section 9: Process Timeline */}
        <ProcessTimeline />

        {/* Section 10: Testimonials */}
        <Testimonials />

        {/* Section 11: Certificates & Subscriptions */}
        <CertificatesSubscriptions onOpenBooking={() => setBookingOpen(true)} />

        {/* Section 12: FAQ Accordions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Online Booking Modal */}
      <BookingContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}