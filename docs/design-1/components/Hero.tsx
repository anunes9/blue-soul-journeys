
import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax-ready setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=90&w=1920" 
          alt="Underwater Ocean" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D62]/40 to-[#0F1E2E]/80" />
      </div>

      {/* Bubbles Animation Placeholder */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              '--duration': `${10 + Math.random() * 20}s`,
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              animationDelay: `${Math.random() * 10}s`
            } as any}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Dive Journeys Designed for Those Who Truly Feel <span className="text-[#6DD5ED]">at Home in the Ocean</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Bespoke expeditions that prioritize safety, ethics, and deep connection. 
          Personally accompanied journeys to the world's most pristine reefs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-[#43C6AC] hover:bg-[#6DD5ED] text-[#0F1E2E] font-bold rounded-full transition-all shadow-[0_10px_30px_rgba(67,198,172,0.3)] hover:-translate-y-1">
            Start Your Journey
          </button>
          <button className="px-10 py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all">
            Explore Destinations
          </button>
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[200%] h-[60px] animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F5F5F0" />
        </svg>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};
