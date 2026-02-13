
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo light={!isScrolled && !mobileMenuOpen} />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-[#0F1E2E] hover:text-[#1E88A8]' : 'text-white hover:text-[#6DD5ED]'}`}
            >
              {link.label}
            </a>
          ))}
          <button className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg ${isScrolled ? 'bg-[#0A3D62] text-white hover:bg-[#1E88A8]' : 'bg-white text-[#0A3D62] hover:bg-[#6DD5ED] hover:text-white'}`}>
            Start Your Journey
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="text-[#0A3D62]" /> : <Menu className={isScrolled ? "text-[#0A3D62]" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#F5F5F0] z-40 pt-24 px-6">
          <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-[#0A3D62]"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-4 px-8 py-4 rounded-full bg-[#0A3D62] text-white font-bold text-lg shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
