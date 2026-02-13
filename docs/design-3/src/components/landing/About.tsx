import { Award, Compass, Eye, HeartHandshake } from "lucide-react";

const About = () => {
  const differentiators = [
    {
      icon: Compass,
      title: "Personally Accompanied",
      description:
        "Every journey is led by experienced guides who share your passion for the ocean.",
    },
    {
      icon: HeartHandshake,
      title: "Local Partnerships",
      description:
        "We work directly with local dive operators and communities for authentic experiences.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "From equipment to accommodation, every aspect is carefully considered.",
    },
    {
      icon: Award,
      title: "Safety First",
      description:
        "Rigorous safety standards and emergency protocols on every expedition.",
    },
  ];

  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
              Dive with Someone Who{" "}
              <span className="text-gradient-ocean">Truly Understands</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Blue Soul Journeys was born from a deep, personal connection to
              the ocean. We don't just organize trips—we create meaningful
              experiences for divers who, like us, feel most alive beneath the
              waves.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our founder has explored the world's greatest dive sites and built
              relationships with the best local operators. This network, combined
              with our unwavering commitment to quality and ethics, ensures every
              journey exceeds expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-ocean-mid mb-1">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-ocean-mid mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Dives Guided
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-ocean-mid mb-1">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Differentiators */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-light/20 to-aqua/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-ocean-mid" />
                </div>
                <h3 className="text-lg font-serif text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
