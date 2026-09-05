import { MotionLayer } from "@/components/motion-layer";
import "./motion-layer.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barberking — Мережа барбершопів у Києві | Чоловічі стрижки та гоління",
  description: "Мережа барбершопів Barberking у Києві: 4 локації з паркінгом, понад 265 000 стрижок, Grand Master барбери, королівське гоління та тату-простір. Онлайн-запис за 1 хвилину.",
  keywords: ["барбершоп київ", "чоловіча стрижка київ", "гоління небезпечною бритвою", "стрижка бороди київ", "barberking", "барбершоп позняки", "барбершоп лук'янівка"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Barberking — Культура чоловічої форми в Києві",
    description: "4 локації на Правому та Лівому берегах. Чіткі fade-лінії, моделювання бороди та тату-зона. Власний паркінг.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html style={{ "--motion-duration": "0.8s", "--motion-stagger": "0.07s", "--motion-shift": "32px", "--motion-ease": "cubic-bezier(0.7, 0, 0.15, 1)" } as React.CSSProperties} lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700&family=Libre+Franklin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json">{"[{\"@context\":\"https://schema.org\",\"@type\":\"HairSalon\",\"name\":\"Barberking\",\"description\":\"Барбершоп Київ — Barberking на Позняках, Виноградарі та в Центрі на Лук'янівці. Чоловіча стрижка, стрижка бороди, гоління, догляд. Щодня 10:00–21:00. Онлайн-запис ✓\",\"url\":\"https://kyiv.bking.com.ua/\",\"telephone\":[\"0951079215\"],\"email\":\"barberking.kv1@gmail.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"вул. Січових Стрільців, 10\",\"addressLocality\":\"Київ\",\"addressCountry\":\"UA\"},\"sameAs\":[\"https://www.facebook.com/BarberKingkh/\",\"https://www.instagram.com/barberking_kv/\"],\"logo\":\"/barberking/media/210b09d0793a22f8.png\"}]"}</script>
      </head>
      <body className="bg-bg-dark text-text-light antialiased selection:bg-accent selection:text-black">
        <LocaleProvider>{children}</LocaleProvider>
        <SmoothScroll />
        <MotionLayer />
      </body>
    </html>
  );
}