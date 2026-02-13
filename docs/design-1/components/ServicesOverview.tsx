
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  return (
    <section id="journeys" className="py-24 px-6 ocean-gradient relative overflow-hidden">
      {/* Background Ray Animation */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_-20%,#6DD5ED,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="text-[#6DD5ED] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Curated Experiences</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">How we dive.</h2>
          </div>
          <p className="text-white/70 max-w-md font-light">
            Whether you prefer the freedom of a liveaboard or the luxury of a shore-based resort, we ensure your journey is flawless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden glass transition-all hover:shadow-2xl">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#43C6AC]/20 rounded-lg text-[#43C6AC]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/70 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[#43C6AC] font-semibold hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[200%] h-[60px] animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F5F5F0" />
        </svg>
      </div>
    </section>
  );
};
