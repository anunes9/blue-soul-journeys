import { Anchor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

const journeyLabels: Record<string, string> = {
  "red-sea": "Red Sea Liveaboard",
  maldives: "Maldives Dive Journey",
  mozambique: "Mozambique Dive Trip",
};

const JourneysList = () => {
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
              id="wave-bg-journeys"
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
            <rect width="100%" height="100%" fill="url(#wave-bg-journeys)" />
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
                Journeys
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground mb-8 leading-tight animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Dive Journeys Designed to{" "}
              <span className="text-gradient-aqua">Explore the Ocean</span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              From remote coral reefs to legendary wrecks, these dive journeys
              invite you to explore the ocean in its many expressions &mdash;
              from calm, contemplative dives to more intense encounters.
            </p>

            <p
              className="text-lg text-primary-foreground/60 mt-6 leading-relaxed max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              Each destination moves at its own rhythm, leaving space to
              observe, feel and dive at your own pace.
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

      {/* Journeys List */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  Featured Dive Journeys
                </span>
              </div>

              <p className="text-xl md:text-2xl text-navy font-serif leading-relaxed">
                A selection of journeys I recommend
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-12">
            {destinations.map((dest, index) => (
              <ScrollReveal
                key={dest.slug}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={100}
              >
                <div className="group bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:border-aqua/30 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:direction-rtl" : ""}`}
                  >
                    {/* Image */}
                    <div className="relative h-72 md:h-96">
                      <Image
                        src={dest.image}
                        alt={dest.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent md:bg-none" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center direction-ltr">
                      <span className="text-sm font-medium text-aqua tracking-wide uppercase mb-2">
                        {dest.region}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4">
                        {journeyLabels[dest.slug] || dest.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {dest.description}
                      </p>
                      <div>
                        <Link
                          href={`/destinations/${dest.slug}`}
                          className={cn(
                            buttonVariants({ variant: "hero", size: "lg" }),
                            "inline-flex",
                          )}
                        >
                          View Journey
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JourneysList;
