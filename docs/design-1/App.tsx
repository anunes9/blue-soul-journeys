
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { ServicesOverview } from './components/ServicesOverview';
import { DestinationsSection } from './components/DestinationsSection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <ServicesOverview />
        <DestinationsSection />
        <DifferentiatorSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
