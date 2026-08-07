import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barberking — Мережа чоловічих барбершопів у Києві | Стрижки та гоління",
  description: "Чоловічі стрижки, моделювання бороди, королівське гоління та власна тату-студія Tattoo Room у Києві. 4 зручні локації: Лук'янівка, Позняки (ЖК Great, Урлівська), Виноградар (ЖК Варшавський). Запис онлайн.",
  keywords: ["барбершоп київ", "чоловіча стрижка київ", "стрижка бороди київ", "барбершоп позняки", "барбершоп лукянівка", "барбершоп виноградар", "barberking київ"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Barberking — Мужской барбершоп в Киеве",
    description: "69 000+ обслугованих клієнтів, майстри Grand Master, безкоштовні напої та власна парковка біля кожної локації.",
    type: "website",
    locale: "uk_UA",
    url: "https://kyiv.bking.com.ua/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700&family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[hsl(0_0%_7%)] text-[hsl(30_15%_92%)] font-body antialiased selection:bg-[hsl(32_90%_50%)] selection:text-[hsl(0_0%_7%)] overflow-x-hidden">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}