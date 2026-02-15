import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Destination } from "@/data/destinations";

const DestinationInclusions = ({
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
            id="incl-wave-pattern"
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
          <rect width="100%" height="100%" fill="url(#incl-wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  What&apos;s Included
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <ScrollReveal animation="fade-right">
              <div className="p-8 rounded-2xl bg-card border-2 border-aqua/30 shadow-lg h-full">
                <h3 className="text-xl font-serif text-navy mb-6">Included</h3>
                <ul className="space-y-4">
                  {destination.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-aqua/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-ocean-deep" />
                      </div>
                      <span className="text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Not Included */}
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="p-8 rounded-2xl bg-card border border-border/50 h-full">
                <h3 className="text-xl font-serif text-navy/60 mb-6">
                  Not Included
                </h3>
                <ul className="space-y-4">
                  {destination.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
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
  );
};

export default DestinationInclusions;
