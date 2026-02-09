"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const bubbles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  width: Math.floor(Math.random() * 20 + 10),
  left: Math.floor(Math.random() * 100),
  delay: Math.floor(Math.random() * 8),
  duration: Math.floor(Math.random() * 4 + 6),
}));

const Hero = () => {
  const scrollToNext = () => {
    const missionSection = document.getElementById("mission");
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-underwater.jpg"
          alt="Underwater diving scene"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full bg-primary-foreground/10 bubble"
            style={{
              width: `${b.width}px`,
              height: `${b.width}px`,
              left: `${b.left}%`,
              bottom: "-50px",
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div
            className="mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-aqua/20 backdrop-blur-sm flex items-center justify-center border border-aqua/30">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-aqua"
                  fill="currentColor"
                >
                  <path d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2ZM12 12C10.9 12 10 11.1 10 10C10 8.14 11.14 6.09 12 4.68C12.86 6.09 14 8.14 14 10C14 11.1 13.1 12 12 12ZM12 15C8.69 15 6 16.79 6 19V20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20V19C18 16.79 15.31 15 12 15Z" />
                </svg>
              </div>
              <span className="text-xl font-serif text-primary-foreground tracking-wide">
                Blue Soul Journeys
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-primary-foreground mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Dive Journeys Designed for Those Who Truly Feel{" "}
            <span className="text-gradient-aqua">at Home</span> in the Ocean
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Personalized dive expeditions crafted with passion, ethics, and deep
            respect for our ocean communities. Experience the underwater world
            like never before.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="xl">
              Start Your Journey
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Wave Divider */}
      <div className="wave-divider z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-sand"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
