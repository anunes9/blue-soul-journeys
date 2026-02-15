import { Anchor, Compass, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Compass,
    title: "Conscious Travel",
    description:
      "I believe travel should respect the ocean, the people and natural rhythms \u2014 creating meaningful experiences without rush or excess.",
  },
  {
    icon: Heart,
    title: "Connection to the Ocean",
    description:
      "For me, diving is more than exploration. It\u2019s a way to slow down, observe and reconnect \u2014 with the ocean, with others and with ourselves.",
  },
  {
    icon: Sparkles,
    title: "Carefully Selected Experiences",
    description:
      "Each itinerary is thoughtfully designed, built around trusted local partners \u2014 always prioritising safety, quality and authenticity.",
  },
];

const WhatIDo = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg
            aria-hidden="true"
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="wave-bg"
              x="0"
              y="0"
              width="50"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 5 Q12.5 0 25 5 T50 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-aqua"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#wave-bg)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 bg-aqua/10 px-4 py-2 rounded-full mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Anchor className="w-4 h-4 text-aqua" />
              <span className="text-sm font-medium text-aqua tracking-wide uppercase">
                What I Do
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground mb-8 leading-tight animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Dive Journeys Designed with{" "}
              <span className="text-gradient-aqua">Care & Purpose</span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Bringing together trusted local knowledge, thoughtful planning and
              respect for the ocean.
            </p>
          </div>
        </div>

        <div className="wave-divider z-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-sand"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="fade-right">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 leading-tight">
                    Born from Real Dives and Genuine Connections
                  </h2>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      Blue Soul Journeys grew from years spent in and around the
                      ocean &mdash; diving remote reefs, exploring iconic wrecks
                      and sharing time with people whose lives are shaped by the
                      sea.
                    </p>
                    <p>
                      Every journey I create is rooted in places I know,
                      journeys I&apos;ve experienced first-hand and partners I
                      trust deeply.
                    </p>
                    <p className="font-medium text-navy">
                      I don&apos;t build trips from a catalogue.
                    </p>
                    <p>
                      I create journeys from authentic encounters, real dives
                      and genuine connections. Whether it&apos;s a liveaboard in
                      the Red Sea, drifting through the channels of the Maldives
                      or slow, immersive dives along the Mozambican coast, each
                      journey is designed to feel personal, conscious and
                      connected to the ocean.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150}>
                <div className="relative h-80 md:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/img3.avif"
                    alt="Diving journey experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  animation="fade-up"
                  delay={index * 150}
                >
                  <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-sans text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <Link
                  href="/how-it-works"
                  className={cn(
                    buttonVariants({ variant: "hero", size: "xl" }),
                    "inline-flex",
                  )}
                >
                  See How It Works
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal animation="scale-in">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-serif text-primary-foreground leading-relaxed mb-4">
                Travel deeper. Travel differently.
              </p>
              <p className="text-2xl md:text-3xl font-serif text-gradient-aqua">
                Let the ocean guide you. Live your journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default WhatIDo;
