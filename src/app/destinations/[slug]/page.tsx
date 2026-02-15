import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { destinations, getDestinationBySlug } from '@/data/destinations'
import DestinationHero from '@/components/destination/DestinationHero'
import DestinationDescription from '@/components/destination/DestinationDescription'
import Contact from '@/components/landing/Contact'
import Footer from '@/components/landing/Footer'

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return { title: 'Destination Not Found' }
  }

  const url = `https://www.bluesouljourneys.com/destinations/${slug}`

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
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  return (
    <main>
      <DestinationHero destination={destination} />
      <DestinationDescription destination={destination} />
      <Contact />
      <Footer />
    </main>
  )
}
