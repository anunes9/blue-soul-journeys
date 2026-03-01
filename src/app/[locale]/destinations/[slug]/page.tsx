import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import DestinationDates from "@/components/destination/DestinationDates";
import DestinationDescription from "@/components/destination/DestinationDescription";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationInclusions from "@/components/destination/DestinationInclusions";
import DestinationItinerary from "@/components/destination/DestinationItinerary";
import DestinationTransfers from "@/components/destination/DestinationTransfers";
import DestinationVessel from "@/components/destination/DestinationVessel";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { destinations } from "@/data/destinations";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    destinations.map((d) => ({ locale, slug: d.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return { title: "Destination Not Found" };

  let name: string;
  let description: string;

  try {
    const t = await getTranslations({
      locale,
      namespace: `destinationData.${slug}` as never,
    });
    name = t("name" as never);
    description = t("description" as never);
  } catch {
    name = dest.name;
    description = dest.description;
  }

  const url = `https://www.bluesouljourneys.com/${locale}/destinations/${slug}`;

  return {
    title: `${name} Diving`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${name} — Blue Soul Journeys`,
      description,
      url,
      images: [{ url: dest.image, alt: dest.alt }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  return (
    <main>
      <DestinationHero slug={slug} destination={destination} />
      <DestinationDescription slug={slug} destination={destination} />
      <DestinationVessel slug={slug} destination={destination} />
      <DestinationInclusions slug={slug} destination={destination} />
      <DestinationItinerary slug={slug} destination={destination} />
      <DestinationDates destination={destination} />
      <DestinationTransfers slug={slug} destination={destination} />
      <Contact />
      <Footer />
    </main>
  );
}
