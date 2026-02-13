
import React from 'react';
import { TRUST_ELEMENTS } from '../constants';

export const MissionSection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[#1E88A8] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Philosophy</span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mb-8">
          More than just a holiday.
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-[#0F1E2E]/80 font-light leading-relaxed mb-16">
          At Blue Soul Journeys, we believe the ocean is a sanctuary that deserves our utmost respect. 
          We curate dive experiences for the passionate, focusing on quality, safety, and an authentic 
          bond with the marine world and the communities that guard it.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {TRUST_ELEMENTS.map((element, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-2">
                {React.cloneElement(element.icon as React.ReactElement, { size: 36 })}
              </div>
              <h3 className="text-xl font-bold text-[#0A3D62] mb-3">{element.title}</h3>
              <p className="text-[#0F1E2E]/70 max-w-[250px]">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
