import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  const t = useTranslations("destinations");
  const td = useTranslations("destinationData");

  return (
    <>
      {/* Wave Divider */}
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

      <section id="destinations" className="py-24 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D62] mb-6">
                {t("heading")}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-lg text-[#0F1E2E]/80 leading-relaxed">
                {t("description1")}
                <br />
                <br />
                {t("description2")}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <ScrollReveal
                key={dest.slug}
                animation="fade-up"
                delay={index * 150}
              >
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="group relative h-125 rounded-3xl overflow-hidden shadow-xl cursor-pointer block"
                >
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A3D62] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-merriweather font-bold text-white mb-2">
                      {td(`${dest.slug}.name` as never)}
                    </h3>
                    <p className="text-[#6DD5ED] font-medium mb-3">
                      {td(`${dest.slug}.region` as never)}
                    </p>
                    <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {td(`${dest.slug}.description` as never)}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
