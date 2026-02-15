import {
  Anchor,
  CalendarCheck,
  Compass,
  Headset,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "First Contact",
    description:
      "A relaxed conversation to understand your travel style, diving experience and what you\u2019re looking for \u2014 beyond dates and destinations.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Journey Design",
    description:
      "Based on our conversation, I design destinations, stays and dive experiences that match your rhythm \u2014 always prioritising safety, quality and authenticity.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Journey Planning",
    description:
      "I take care of logistics and coordination, ensuring everything flows smoothly \u2014 from dive operators and liveaboards to accommodations.",
  },
  {
    number: "04",
    icon: Headset,
    title: "Ongoing Support",
    description:
      "Before and during your journey, I\u2019m available to support you whenever needed \u2014 creating space for you to fully experience the ocean.",
  },
];

const HowItWorks = () => {
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
                How It Works
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground mb-8 leading-tight animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Every Journey Starts with a{" "}
              <span className="text-gradient-aqua">Conversation</span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              From there, I design a travel experience shaped around who you
              are, how you dive and what you seek from the ocean.
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

      {/* Philosophy Section */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="fade-right">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 leading-tight">
                    Built on Trust & Shared Values
                  </h2>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      I work closely with a small circle of trusted local
                      operators &mdash; people I&rsquo;ve dived with, learned
                      from and built long-term relationships with.
                    </p>
                    <p>
                      These partnerships are built on clear values: safety,
                      respect for the ocean and genuine care for the experiences
                      of each traveller.
                    </p>
                    <p>
                      Some journeys are accompanied by me, whenever my presence
                      adds real value to the group and the overall experience.
                    </p>
                    <p>
                      Others are led by the local teams I trust completely
                      &mdash; always with the same level of care, preparation
                      and attention to detail.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150}>
                <div className="relative h-80 md:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/img2.avif"
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

      {/* What Can You Expect */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  What Can You Expect?
                </span>
              </div>

              <p className="text-xl md:text-2xl text-navy font-serif leading-relaxed">
                Transparency, honest guidance and a journey designed with
                purpose.
              </p>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
                No rush. No unnecessary extras. Just thoughtfully structured
                dive experiences, delivered responsibly and in tune with what
                truly matters to you.
              </p>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <ScrollReveal
                  key={step.title}
                  animation="fade-up"
                  delay={index * 120}
                >
                  <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-aqua mb-1">
                          Step {step.number}
                        </div>
                        <h3 className="text-xl font-serif text-navy mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Summary line */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-3xl mx-auto text-center mt-16">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Beyond planning trips, I create experiences, select trusted
                partners and support you before and during the entire journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
