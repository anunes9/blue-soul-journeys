
import React from 'react';
import { DESTINATIONS } from '../constants';
import { MapPin } from 'lucide-react';

export const DestinationsSection: React.FC = () => {
  return (
    <section id="destinations" className="py-24 px-6 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#1E88A8] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Great Blue</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62]">Featured Destinations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden ripple-hover cursor-pointer shadow-xl">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="flex items-center gap-2 mb-2 text-[#6DD5ED]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Recommended</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{dest.name}</h3>
                <p className="text-white/80 font-light translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {dest.tagline}
                </p>
                <div className="mt-6 w-10 h-1 bg-[#43C6AC] transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
