import { Anchor, Check, Compass, Heart, Shield, X } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: Compass,
    title: "Real Ocean Experience",
    description:
      "Years spent in and around the ocean have shaped the way I travel \u2014 and the way I design each journey. I help you choose destinations and experiences that respect your rhythm, your interests and your comfort level \u2014 always grounded in real, first-hand experience, never from catalogues.",
  },
  {
    icon: Shield,
    title: "Quality & Trusted Partners",
    description:
      "Every destination is chosen with care. I work exclusively with trusted local partners \u2014 responsible operators and well-tested experiences \u2014 so you can travel with peace of mind, knowing you are supported at every stage of your journey.",
  },
  {
    icon: Heart,
    title: "Meaningful & Personal Travel",
    description:
      "Each journey is designed with intention \u2014 balancing nature, culture, adventure and time. The result is an experience that feels deep, fluid and authentic. Never rushed. Never generic.",
  },
];

const withMe = [
  "Tailor-made itineraries",
  "Ocean-specialised partners",
  "Support before and during your journey",
  "Experiences aligned with your values",
  "A journey that truly feels like yours",
];

const onYourOwn = [
  "Generic packages",
  "Limited expertise in marine experiences",
  "Minimal support",
  "Hard to assess what\u2019s safe or truly worth it",
  "Higher risk of disappointments",
];

const WhyTravelWithMe = () => {
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
              id="wave-bg-why"
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
            <rect width="100%" height="100%" fill="url(#wave-bg-why)" />
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
                Why Travel With Me
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground mb-8 leading-tight animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Travel with Purpose.{" "}
              <span className="text-gradient-aqua">
                Explore with Confidence.
              </span>
            </h1>
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

      {/* Reasons Section */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {reasons.map((reason, index) => (
              <ScrollReveal
                key={reason.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group p-8 md:p-10 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <reason.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-serif text-navy mb-4">
                        {reason.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal animation="fade-right">
                <div className="p-8 md:p-10 rounded-2xl bg-card border-2 border-aqua/30 shadow-lg h-full">
                  <h3 className="text-2xl font-serif text-navy mb-8">
                    With Me
                  </h3>
                  <ul className="space-y-5">
                    {withMe.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-aqua/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-ocean-deep" />
                        </div>
                        <span className="text-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150}>
                <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/50 h-full">
                  <h3 className="text-2xl font-serif text-navy/60 mb-8">
                    On Your Own
                  </h3>
                  <ul className="space-y-5">
                    {onYourOwn.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="scale-in">
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/img4.avif"
                  alt="Diving journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyTravelWithMe;
