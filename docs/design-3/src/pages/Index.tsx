import Hero from "@/components/landing/Hero";
import Mission from "@/components/landing/Mission";
import Services from "@/components/landing/Services";
import Destinations from "@/components/landing/Destinations";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Mission />
      <Services />
      <Destinations />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
