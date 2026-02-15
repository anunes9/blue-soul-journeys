import type { Metadata } from "next";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Every journey starts with a conversation. Discover how Blue Soul Journeys designs personalised dive expeditions shaped around who you are and what you seek from the ocean.",
  alternates: {
    canonical: "https://www.bluesouljourneys.com/how-it-works",
  },
  openGraph: {
    title: "How It Works — Blue Soul Journeys",
    description:
      "Every journey starts with a conversation. Discover how Blue Soul Journeys designs personalised dive expeditions shaped around who you are and what you seek from the ocean.",
    url: "https://www.bluesouljourneys.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
