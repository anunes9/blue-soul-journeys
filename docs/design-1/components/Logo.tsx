
import React from 'react';

export const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className="flex items-center gap-2 group">
    <div className={`relative w-8 h-8 rounded-full flex items-center justify-center ${light ? 'bg-white' : 'bg-[#0A3D62]'} overflow-hidden shadow-lg transition-transform group-hover:scale-110`}>
      <svg viewBox="0 0 24 24" fill="none" className={`w-6 h-6 ${light ? 'text-[#0A3D62]' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22Z" fill="currentColor" />
        <path d="M12 18C13.6569 18 15 16.6569 15 15C15 13 12 11 12 11C12 11 9 13 9 15C9 16.6569 10.3431 18 12 18Z" fill="#6DD5ED" />
      </svg>
    </div>
    <span className={`font-bold tracking-tight text-xl ${light ? 'text-white' : 'text-[#0A3D62]'}`}>
      BLUE SOUL <span className="font-light">JOURNEYS</span>
    </span>
  </div>
);
