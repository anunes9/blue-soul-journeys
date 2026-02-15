import { Compass, Heart, Sparkles } from "lucide-react";
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

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle wave pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="about-wave-pattern"
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
          <rect width="100%" height="100%" fill="url(#about-wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
              <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                What I Do
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
              Dive Journeys Designed with{" "}
              <span className="text-gradient-aqua">Care & Purpose</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I design dive journeys bringing together trusted local knowledge,
              thoughtful planning and respect for the ocean.
            </p>
          </ScrollReveal>
        </div>

        {/* Image + Text Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal animation="fade-right">
            <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/hero-underwater.jpg"
                alt="Underwater diving scene"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A3D62]/60 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150}>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-navy mb-6 leading-tight">
                Born from real dives and genuine connections
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blue Soul Journeys grew from years spent in and around the ocean
                &mdash; diving remote reefs, exploring iconic wrecks and sharing
                time with people whose lives are shaped by the sea.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every journey I create is rooted in places I know, journeys
                I&apos;ve experienced first-hand and partners I trust deeply. I
                don&apos;t build trips from a catalogue.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether it&apos;s a liveaboard in the Red Sea, drifting through
                the channels of the Maldives or slow, immersive dives along the
                Mozambican coast, each journey is designed to feel personal,
                conscious and connected to the ocean.
              </p>
              <Link
                href="/what-i-do"
                className={cn(
                  buttonVariants({ variant: "hero", size: "xl" }),
                  "inline-flex",
                )}
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default AboutUs;
