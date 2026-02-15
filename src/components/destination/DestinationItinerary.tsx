import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Destination } from "@/data/destinations";

const DestinationItinerary = ({
  destination,
}: {
  destination: Destination;
}) => {
  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg
          aria-hidden="true"
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="itin-wave-pattern"
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
          <rect width="100%" height="100%" fill="url(#itin-wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <MapPin className="w-4 h-4 text-ocean-deep" />
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  {destination.vessel.type === "liveaboard"
                    ? "About the Route"
                    : "About the Programme"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 leading-tight">
                Your Journey, Day by Day
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {destination.itinerary.map((item, index) => (
              <ScrollReveal
                key={item.day}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="flex gap-6">
                  {/* Timeline */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center shrink-0 text-sm font-medium text-primary-foreground">
                      {index + 1}
                    </div>
                    {index < destination.itinerary.length - 1 && (
                      <div className="w-px flex-1 bg-aqua/20 mt-3" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="group flex-1 p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300">
                    <span className="text-sm font-medium text-aqua tracking-wide">
                      {item.day}
                    </span>
                    <h3 className="text-xl font-serif text-navy mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationItinerary;
