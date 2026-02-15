import { Instagram, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <Image
                src="/logo.avif"
                width={64}
                height={64}
                className="h-auto w-16"
                alt="Blue Soul Journeys"
              />

              <p className="text-primary-foreground/60 max-w-md leading-relaxed text-sm">
                Dive journeys designed for those who truly feel at home in the
                ocean. Each journey is chosen for its quality, ethical approach
                and genuine connection to the ocean.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/bluesouljourneys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@bluesouljourneys.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-medium font-sans mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/journeys"
                  className="text-primary-foreground/60 hover:text-aqua transition-colors text-sm"
                >
                  Journeys
                </a>
              </li>
              <li>
                <a
                  href="/what-i-do"
                  className="text-primary-foreground/60 hover:text-aqua transition-colors text-sm"
                >
                  What I Do
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-primary-foreground/60 hover:text-aqua transition-colors text-sm"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/why-travel-with-me"
                  className="text-primary-foreground/60 hover:text-aqua transition-colors text-sm"
                >
                  Why Travel With Me
                </a>
              </li>
              <li>
                <a
                  href="/my-story"
                  className="text-primary-foreground/60 hover:text-aqua transition-colors text-sm"
                >
                  My Story
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-medium mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Mail className="w-4 h-4" />
                contact@bluesouljourneys.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Instagram className="w-4 h-4" />
                @bluesouljourneys
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                Available worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {currentYear} Blue Soul Journeys. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-primary-foreground/40 text-sm">
              Privacy Policy
            </span>
            <span className="text-primary-foreground/40 text-sm">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
