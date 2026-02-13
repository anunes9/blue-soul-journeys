
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const DifferentiatorSection: React.FC = () => {
  return (
    <section id="guide" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
              alt="The Founder" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#43C6AC]/20 rounded-full blur-3xl -z-0" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1E88A8]/20 rounded-full blur-3xl -z-0" />
          
          <div className="absolute top-10 right-10 glass p-6 rounded-2xl animate-bounce">
            <span className="text-[#43C6AC] font-bold text-4xl leading-none">12+</span>
            <p className="text-[#0A3D62] text-sm font-semibold">Years of Ocean Mastery</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <span className="text-[#1E88A8] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Blue Soul Difference</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mb-6">
            Personally Accompanied Journeys
          </h2>
          <p className="text-lg text-[#0F1E2E]/70 font-light leading-relaxed mb-8">
            We don't just book your travel; we join you. Our founder and expert guides are there at every step to ensure your safety, maximize your encounters, and handle every detail with precision.
          </p>

          <div className="space-y-4">
            {[
              "Local partnerships with ethical operators",
              "Small, intimate group sizes (max 8)",
              "Expert wildlife spotting & briefing",
              "Full trip logistical management"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#43C6AC] w-6 h-6" />
                <span className="text-[#0F1E2E] font-medium">{text}</span>
              </div>
            ))}
          </div>

          <button className="mt-12 px-10 py-4 bg-[#0A3D62] text-white font-bold rounded-full hover:bg-[#1E88A8] transition-all shadow-xl">
            Meet the Guides
          </button>
        </div>
      </div>
    </section>
  );
};
