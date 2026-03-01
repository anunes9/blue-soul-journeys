import { setRequestLocale } from "next-intl/server";
import AboutUs from "@/components/landing/AboutUs";
import Contact from "@/components/landing/Contact";
import Destinations from "@/components/landing/Destinations";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Mission from "@/components/landing/Mission";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Mission />
      <Destinations />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
