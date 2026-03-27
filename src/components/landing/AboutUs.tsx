import { Compass, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AboutUs = () => {
  const t = useTranslations("aboutUs");

  const values = [
    {
      icon: Compass,
      title: t("value1Title"),
      description: t("value1Description"),
    },
    {
      icon: Heart,
      title: t("value2Title"),
      description: t("value2Description"),
    },
    {
      icon: Sparkles,
      title: t("value3Title"),
      description: t("value3Description"),
    },
  ];

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
                {t("label")}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-navy mb-6 leading-tight">
              {t("heading")}{" "}
              <span className="text-gradient-aqua">{t("headingHighlight")}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </ScrollReveal>
        </div>

        {/* Image + Text Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal animation="fade-right">
            <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/hero-underwater.jpg"
                alt={t("imageAlt")}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A3D62]/60 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150}>
            <div>
              <h3 className="text-2xl md:text-3xl font-heading text-navy mb-6 leading-tight">
                {t("subheading")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("paragraph1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("paragraph2")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("paragraph3")}
              </p>
              <Link
                href="/what-i-do"
                className={cn(
                  buttonVariants({ variant: "hero", size: "xl" }),
                  "inline-flex",
                )}
              >
                {t("cta")}
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
