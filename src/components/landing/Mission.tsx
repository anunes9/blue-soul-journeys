import { Heart, Shield, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Mission = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality & Safety",
      description:
        "Every destination is chosen with care, working exclusively with trusted local partners and well-tested experiences.",
    },
    {
      icon: Heart,
      title: "Conscious Travel",
      description:
        "Travel that respects the ocean, the people and natural rhythms \u2014 creating meaningful experiences without rush or excess.",
    },
    {
      icon: Users,
      title: "Personal Connection",
      description:
        "Each journey is designed with intention, shaped around who you are and what you seek from the ocean.",
    },
  ];

  return (
    <section id="mission" className="py-24 bg-sand relative overflow-hidden">
      {/* Subtle wave pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="wave-pattern"
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
              className="text-ocean-deep"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
              <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                Dive Journeys, Chosen with Care
              </span>
            </div>
          </ScrollReveal>

          {/* Main Statement */}
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
              More Than Just a Holiday
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              Each journey is carefully selected, with a strong focus on
              quality, safety, respect for the ocean and the communities we
              visit. Blue Soul Journeys focuses exclusively on dive travel
              &mdash; from liveaboard expeditions to stays at carefully selected
              dive resorts.
            </p>
          </ScrollReveal>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-sans text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
