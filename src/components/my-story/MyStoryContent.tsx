import { Anchor, Compass, Heart, Sparkles, Users, Waves } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const timelineItems = [
  {
    icon: Compass,
    year: "2018",
    title: "Where It All Began",
    paragraphs: [
      "My journey began in 2018, when I completed my Open Water Course aboard my first liveaboard in Australia.",
      "On that first dive, something shifted. I felt an immediate sense of belonging \u2014 a quiet mix of clarity, freedom and presence that only the ocean can offer.",
      "Since then, the ocean has stayed with me, wherever I go.",
    ],
    image:
      "https://static.wixstatic.com/media/6ecca8_e48b589854494ac0b5894e9fe581993e~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/6ecca8_e48b589854494ac0b5894e9fe581993e~mv2.jpg",
    imageAlt: "First diving experience in Australia",
  },
  {
    icon: Anchor,
    year: "2020",
    title: "Learning From the Ocean",
    paragraphs: [
      "In 2020, a liveaboard experience in Thailand deepened that connection even further.",
      "Later, in Mozambique, I moved closer to marine conservation and completed my Advanced Open Water Course certification.",
      "Each journey added a new layer \u2014 not only as a diver, but as a person.",
    ],
    image:
      "https://static.wixstatic.com/media/6ecca8_54d9d87f326e4790ac219b8fd8e389e9~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/6ecca8_54d9d87f326e4790ac219b8fd8e389e9~mv2.jpg",
    imageAlt: "Diving in Thailand and Mozambique",
  },
  {
    icon: Sparkles,
    year: "2024",
    title: "Moments That Changed Everything",
    paragraphs: [
      "In 2024, I explored Raja Ampat \u2014 one of the most biodiverse marine regions on the planet.",
      "Being there confirmed something I already felt deeply: the ocean has the power to shift how we see the world, how we move through it and how we relate to nature.",
    ],
    image:
      "https://static.wixstatic.com/media/6ecca8_3a24b59b59b5436793387a7856ebbeb7~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/6ecca8_3a24b59b59b5436793387a7856ebbeb7~mv2.jpg",
    imageAlt: "Exploring Raja Ampat",
  },
  {
    icon: Waves,
    year: "2025",
    title: "The Origin of Blue Soul Journeys",
    paragraphs: [
      "In 2025, during a liveaboard in Egypt \u2014 surrounded by vibrant reefs, historic wrecks and remarkable people \u2014 I reached a turning point.",
      "I felt a strong desire to share this connection to the ocean with others. Not as something occasional or superficial, but in a way that was consistent, thoughtful and intentional.",
      "I wanted to create a space where travellers could feel safe, supported and confident. A space built on trust \u2014 in the partners, the itineraries, the pace of the journey \u2014 allowing people to simply be present.",
      "A place where the ocean wasn\u2019t just a backdrop, but part of the experience, the rhythm and the way of travelling.",
      "That was when Blue Soul Journeys truly began.",
    ],
    image:
      "https://static.wixstatic.com/media/6ecca8_9ca8164d60ae4010951fc652f5f77544~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/6ecca8_9ca8164d60ae4010951fc652f5f77544~mv2.jpg",
    imageAlt: "Liveaboard in Egypt",
  },
];

const MyStoryContent = () => {
  return (
    <>
      {/* Timeline Section */}
      <section className="py-24 bg-sand relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg
            aria-hidden="true"
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="story-wave-pattern"
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
            <rect width="100%" height="100%" fill="url(#story-wave-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-24">
            {timelineItems.map((item, index) => (
              <div key={item.year} className="space-y-8">
                {/* Image */}
                <ScrollReveal animation="scale-in">
                  <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0A3D62]/40 via-transparent to-transparent" />
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="flex gap-6">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center shrink-0">
                        <item.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="w-px flex-1 bg-aqua/20 mt-4" />
                      )}
                    </div>

                    <div>
                      <span className="text-sm font-medium text-aqua tracking-wide uppercase">
                        {item.year}
                      </span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-navy mt-2 mb-6 leading-tight">
                        {item.title}
                      </h2>
                      <div className="space-y-4">
                        {item.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 50)}
                            className="text-lg text-muted-foreground leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  Connection
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
                More Than Places &mdash;{" "}
                <span className="text-gradient-aqua">It&apos;s the People</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  What makes these journeys truly special isn&apos;t only where
                  we go, but{" "}
                  <strong className="text-navy">who we share them with.</strong>
                </p>
                <p>
                  The ocean is where I slow down, breathe deeply and feel most
                  present. It&apos;s where I gain perspective and return to
                  balance.
                </p>
                <p>
                  Over time, I&apos;ve realized that the ocean doesn&apos;t just
                  change us individually. It creates connection.
                </p>
                <p>
                  On liveaboards and shared journeys, conversations unfold
                  naturally. People meet around a shared respect for the ocean,
                  for simplicity and for a more conscious way of traveling.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollReveal animation="fade-right">
              <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-sans text-navy mb-3">
                  Built on Trust
                </h3>
                <p className="text-muted-foreground">
                  Every journey is designed with care, attention and trusted
                  partners &mdash; so you can simply be present.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-sans text-navy mb-3">
                  Shared Experiences
                </h3>
                <p className="text-muted-foreground">
                  The best moments happen when like-minded people come together
                  with a shared respect for the ocean.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Want For You */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-8">
                <span className="text-sm font-medium text-primary-foreground tracking-wide uppercase">
                  What I Want for You
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-10 leading-tight">
                I want you to feel what I&apos;ve felt
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="space-y-4 text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
                <p>The magic of the underwater world,</p>
                <p>the silence of sunrise at sea,</p>
                <p>the excitement of learning something new,</p>
                <p>the calm that only the ocean can give.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="space-y-4 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                <p>
                  And I want you to feel safe &mdash; knowing your journey has
                  been designed with care, attention and trusted partners.
                </p>
                <p className="text-2xl font-serif text-primary-foreground mt-8">
                  This is more than travel.
                </p>
                <p className="text-gradient-aqua text-2xl font-serif">
                  It&apos;s a way to reconnect with who you are.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyStoryContent;
