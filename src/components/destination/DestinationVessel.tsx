import { Check, Home, Ship } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import type { Destination } from "@/data/destinations";

const DestinationVessel = ({ destination }: { destination: Destination }) => {
  const { vessel } = destination;
  const Icon = vessel.type === "liveaboard" ? Ship : Home;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <Icon className="w-4 h-4 text-ocean-deep" />
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  {vessel.type === "liveaboard"
                    ? "The Liveaboard"
                    : "The Dive Resort"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 leading-tight">
                {vessel.name}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src={vessel.image}
                  alt={vessel.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {vessel.description}
                </p>

                <ul className="space-y-3">
                  {vessel.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-aqua/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-ocean-deep" />
                      </div>
                      <span className="text-navy">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationVessel;
