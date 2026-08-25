import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import BookingWidget from "@/components/BookingWidget";
import Advantages from "@/components/Advantages";
import Team from "@/components/Team";
import VideoSection from "@/components/VideoSection";
import Certificates from "@/components/Certificates";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import LocationsMap from "@/components/LocationsMap";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Labeled Hairline Interstitial 1 */}
        <div className="bg-neutral-950 py-3 border-y border-white/10 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            ПРОФЕСІЙНИЙ ЧОЛОВІЧИЙ ДОГЛЯД У КИЄВІ · EST. 2018
          </span>
        </div>

        <SocialProof />

        {/* Standalone Statement Band Interstitial 2 */}
        <div className="bg-neutral-900 py-6 border-b border-white/10 text-center px-4">
          <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wider">
            БЕЗДОГАННИЙ ФЕЙД ТА ГАРЯЧИЙ КОМПРЕС ДЛЯ КОЖНОГО ГОСТЯ
          </p>
        </div>

        <Services />
        <BookingWidget />

        {/* Watermark Strip Interstitial 3 */}
        <div className="bg-neutral-950 py-4 border-b border-white/10 text-center overflow-hidden">
          <span className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-widest text-white/10 select-none">
            BARBERKING CRAFT & STYLE
          </span>
        </div>

        <Advantages />
        <Team />
        <VideoSection />

        {/* Press / Rating Strip Interstitial 4 */}
        <div className="bg-neutral-900 py-4 border-b border-white/10 text-center px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">
            4.9 / 5.0 НА GOOGLE MAPS · 500+ ПІДТВЕРДЖЕНИХ ВІДГУКІВ · ПАРКОВКА У ЦЕНТРІ КИЄВА
          </span>
        </div>

        <Certificates />
        <Gallery />
        <Testimonials />
        <LocationsMap />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
