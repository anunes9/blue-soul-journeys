import type { Metadata } from "next";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WhatIDo from "@/components/what-i-do/WhatIDo";

export const metadata: Metadata = {
  title: "What I Do",
  description:
    "I design dive journeys with care and purpose \u2014 bringing together trusted local knowledge, thoughtful planning and respect for the ocean.",
  alternates: {
    canonical: "https://www.bluesouljourneys.com/what-i-do",
  },
  openGraph: {
    title: "What I Do \u2014 Blue Soul Journeys",
    description:
      "I design dive journeys with care and purpose \u2014 bringing together trusted local knowledge, thoughtful planning and respect for the ocean.",
    url: "https://www.bluesouljourneys.com/what-i-do",
  },
};

export default function WhatIDoPage() {
  return (
    <main>
      <WhatIDo />
      <Contact />
      <Footer />
    </main>
  );
}
