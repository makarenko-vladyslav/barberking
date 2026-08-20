import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barberking — Мережа барбершопів у Києві | Чоловічі стрижки та гоління",
  description: "Сучасні чоловічі барбершопи Barberking у Києві: 4 зручні локації, класичне гоління, комплексна стрижка, власна Tattoo Room. Безкоштовний бар та паркінг. Онлайн-запис 24/7.",
  keywords: ["барбершоп Київ", "чоловіча стрижка Київ", "стрижка бороди", "королівське гоління", "Barberking", "Лук'янівка", "Позняки", "ЖК Варшавський", "ЖК Грейт"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Barberking — Барбершоп у Києві",
    description: "4 філії в Києві. Чоловічі стрижки, борода, королівське гоління та власна тату-студія.",
    type: "website",
    url: "https://kyiv.bking.com.ua/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Barberking",
    "image": "https://kyiv.bking.com.ua/wp-content/themes/bking/images/price-banner.jpg",
    "telephone": "0951079215",
    "email": "barberking.kv1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Павлівська, 18",
      "addressLocality": "Київ",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.4533",
      "longitude": "30.4905"
    },
    "priceRange": "300 UAH - 1750 UAH",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,500;0,600;0,700;0,800;1,700&family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
