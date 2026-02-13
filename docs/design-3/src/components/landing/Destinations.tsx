import { MapPin } from "lucide-react";
import redSeaImage from "@/assets/red-sea.jpg";
import maldivesImage from "@/assets/maldives.jpg";
import mozambiqueImage from "@/assets/mozambique.jpg";

const Destinations = () => {
  const destinations = [
    {
      image: redSeaImage,
      name: "Red Sea",
      tagline: "Legendary Coral Gardens",
      description: "Vibrant reefs, dramatic walls, and historic wrecks",
    },
    {
      image: maldivesImage,
      name: "Maldives",
      tagline: "Manta Ray Paradise",
      description: "Crystal atolls with gentle giants and pristine waters",
    },
    {
      image: mozambiqueImage,
      name: "Tofo & Mozambique",
      tagline: "Whale Shark Encounters",
      description: "Africa's hidden gem for megafauna encounters",
    },
  ];

  return (
    <section className="py-24 ocean-gradient relative overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <svg
          className="absolute w-[200%] h-32 bottom-0 animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            className="fill-primary-foreground/20"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-aqua-light" />
            <span className="text-sm font-medium text-primary-foreground/90 tracking-wide uppercase">
              Featured Destinations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-4">
            Where the Ocean Calls
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Each destination has been personally explored and carefully selected
            for its exceptional diving experiences.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />

                {/* Glass Effect Card */}
                <div className="absolute inset-x-4 bottom-4 glass-card rounded-xl p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif text-primary-foreground mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-aqua-light font-medium text-sm mb-2">
                    {destination.tagline}
                  </p>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {/* Ripple Effect on Hover */}
                <div className="absolute inset-0 ripple" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-sand"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default Destinations;
