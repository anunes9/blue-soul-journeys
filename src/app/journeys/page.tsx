import type { Metadata } from "next";
import JourneysList from "@/components/journeys/JourneysList";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Dive journeys designed to explore the ocean with time, awareness and depth. From remote coral reefs to legendary wrecks, explore the ocean in its many expressions.",
  alternates: {
    canonical: "https://www.bluesouljourneys.com/journeys",
  },
  openGraph: {
    title: "Journeys \u2014 Blue Soul Journeys",
    description:
      "Dive journeys designed to explore the ocean with time, awareness and depth. From remote coral reefs to legendary wrecks, explore the ocean in its many expressions.",
    url: "https://www.bluesouljourneys.com/journeys",
  },
};

export default function JourneysPage() {
  return (
    <main>
      <JourneysList />
      <Contact />
      <Footer />
    </main>
  );
}
