
import React from 'react';
import { Logo } from './Logo';
import { Instagram, Facebook, Twitter, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1E2E] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 pb-16 border-b border-white/10">
          <div>
            <Logo light />
            <p className="mt-6 text-white/60 font-light max-w-sm leading-relaxed">
              Crafting immersive ocean experiences for the soulful diver. Join our community and discover the depths like never before.
            </p>
            <div className="mt-10 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0F1E2E] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Ready to Explore?</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#43C6AC] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#43C6AC] transition-all"
                />
              </div>
              <textarea 
                placeholder="Tell us about your dream journey..." 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#43C6AC] transition-all"
              ></textarea>
              <button className="w-full py-4 bg-[#43C6AC] hover:bg-[#6DD5ED] text-[#0F1E2E] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-light">
          <p>© {new Date().getFullYear()} Blue Soul Journeys. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
