import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const siteUrl = "https://www.bluesouljourneys.com";
const siteName = "Blue Soul Journeys";
const description =
  "Dive journeys designed for those who truly feel at home in the ocean. Liveaboard expeditions and dive resorts in the Red Sea, Maldives and Mozambique, chosen with care.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Dive Journeys Designed with Care`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "dive journeys",
    "dive expeditions",
    "scuba diving trips",
    "liveaboard diving",
    "dive resort",
    "Red Sea diving",
    "Maldives diving",
    "Mozambique diving",
    "whale shark encounters",
    "manta ray diving",
    "personalized dive travel",
    "ethical dive travel",
    "dive resort",
    "marine conservation",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: `${siteName} | Dive Journeys Designed with Care`,
    description,
    images: [
      {
        url: "/hero-underwater.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Soul Journeys — underwater diving scene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Dive Journeys Designed with Care`,
    description,
    images: ["/hero-underwater.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.avif`,
  description,
  email: "contact@bluesouljourneys.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  sameAs: [],
  areaServed: [
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "Maldives" },
    { "@type": "Country", name: "Mozambique" },
  ],
  knowsAbout: [
    "Scuba Diving",
    "Liveaboard Diving",
    "Marine Conservation",
    "Dive Travel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
