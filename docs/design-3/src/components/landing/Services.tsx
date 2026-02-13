import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import liveaboardImage from "@/assets/liveaboard.jpg";
import diveResortImage from "@/assets/dive-resort.jpg";
import responsibleTravelImage from "@/assets/responsible-travel.jpg";

const Services = () => {
  const services = [
    {
      image: liveaboardImage,
      title: "Liveaboard Expeditions",
      description:
        "Multi-day voyages to remote dive sites inaccessible from land. Wake up to new underwater worlds each morning.",
      features: ["Remote dive sites", "All-inclusive", "Expert crew"],
    },
    {
      image: diveResortImage,
      title: "Curated Dive Resorts",
      description:
        "Hand-picked resorts that blend exceptional diving with authentic hospitality and sustainable practices.",
      features: ["Carefully vetted", "Local partnerships", "Premium comfort"],
    },
    {
      image: responsibleTravelImage,
      title: "Responsible Travel",
      description:
        "Every journey supports marine conservation and local communities. Dive with purpose and leave a positive impact.",
      features: ["Conservation focus", "Community support", "Low impact"],
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-aqua/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-ocean-mid tracking-wide uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-4">
            Your Ocean Journey Awaits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate liveaboard adventures to boutique resort experiences,
            we craft each journey with meticulous attention to detail.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/30 hover:border-aqua/30 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-ocean-mid transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-ocean-light/10 text-ocean-mid font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn text-ocean-mid hover:text-ocean-deep p-0 h-auto font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* Glass overlay on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-aqua/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
