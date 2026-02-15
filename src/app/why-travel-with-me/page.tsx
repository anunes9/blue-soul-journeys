import type { Metadata } from "next";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WhyTravelWithMe from "@/components/why-travel-with-me/WhyTravelWithMe";

export const metadata: Metadata = {
  title: "Why Travel With Me",
  description:
    "Travel with purpose. Explore with confidence. Real ocean experience, quality partners and meaningful, personal travel designed around you.",
  alternates: {
    canonical: "https://www.bluesouljourneys.com/why-travel-with-me",
  },
  openGraph: {
    title: "Why Travel With Me \u2014 Blue Soul Journeys",
    description:
      "Travel with purpose. Explore with confidence. Real ocean experience, quality partners and meaningful, personal travel designed around you.",
    url: "https://www.bluesouljourneys.com/why-travel-with-me",
  },
};

export default function WhyTravelWithMePage() {
  return (
    <main>
      <WhyTravelWithMe />
      <Contact />
      <Footer />
    </main>
  );
}
