import type { Metadata } from "next";
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
import { destinations, getDestinationBySlug } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { title: "Destination Not Found" };
  }

  const url = `https://www.bluesouljourneys.com/destinations/${slug}`;

  return {
    title: `${destination.name} Diving — ${destination.region}`,
    description: destination.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${destination.name} — Blue Soul Journeys`,
      description: destination.description,
      url,
      images: [
        {
          url: destination.image,
          alt: destination.alt,
        },
      ],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main>
      <DestinationHero destination={destination} />
      <DestinationDescription destination={destination} />
      <DestinationVessel destination={destination} />
      <DestinationInclusions destination={destination} />
      <DestinationItinerary destination={destination} />
      <DestinationDates destination={destination} />
      <DestinationTransfers destination={destination} />
      <Contact />
      <Footer />
    </main>
  );
}
