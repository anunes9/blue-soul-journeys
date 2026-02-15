"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { destinations } from "@/data/destinations";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.avif"
              width={48}
              height={48}
              className="h-auto w-12 sm:w-10"
              alt="Blue Soul Journeys"
            />
            <span
              className={`text-sm font-serif tracking-wide hidden sm:inline transition-colors duration-300 ${
                hasScrolled ? "text-navy" : "text-primary-foreground"
              }`}
            >
              Blue Soul Journeys
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Destinations Dropdown */}
            <nav
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
              aria-label="Journeys"
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  hasScrolled
                    ? "text-navy/80 hover:text-ocean-deep"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                Journeys
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    destinationsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  destinationsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg border border-border/50 py-2 min-w-50">
                  {destinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      className="block px-4 py-2.5 text-sm text-navy/80 hover:text-ocean-deep hover:bg-sand transition-colors"
                    >
                      <span className="font-medium">{dest.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {dest.region}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <Link
              href="/what-i-do"
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? "text-navy/80 hover:text-ocean-deep"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              What I Do
            </Link>

            <Link
              href="/how-it-works"
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? "text-navy/80 hover:text-ocean-deep"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/my-story"
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? "text-navy/80 hover:text-ocean-deep"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              My Story
            </Link>

            <Link
              href="/#contact"
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? "text-navy/80 hover:text-ocean-deep"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={`md:hidden transition-colors duration-300 ${
              hasScrolled ? "text-navy" : "text-primary-foreground"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-sand transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.avif"
              width={56}
              height={56}
              className="h-auto w-14"
              alt="Blue Soul Journeys"
            />
            <span className="text-lg font-serif text-navy tracking-wide">
              Blue Soul Journeys
            </span>
          </div>

          <div className="w-12 h-px bg-aqua/30" />

          <p className="text-xs font-medium text-ocean-deep tracking-widest uppercase">
            Journeys
          </p>
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-navy hover:text-ocean-deep transition-colors"
            >
              {dest.name}
            </Link>
          ))}

          <div className="w-12 h-px bg-aqua/30" />

          <Link
            href="/what-i-do"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-navy hover:text-ocean-deep transition-colors"
          >
            What I Do
          </Link>

          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-navy hover:text-ocean-deep transition-colors"
          >
            How It Works
          </Link>

          <Link
            href="/my-story"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-navy hover:text-ocean-deep transition-colors"
          >
            My Story
          </Link>

          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-navy hover:text-ocean-deep transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
