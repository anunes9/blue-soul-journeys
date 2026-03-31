import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale, getMessages } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { routing } from '@/i18n/routing'

const siteUrl = 'https://www.bluesouljourneys.com'
const siteName = 'Blue Soul Journeys'

const ogLocale: Record<string, string> = {
  en: 'en_GB',
  pt: 'pt_PT',
  es: 'es_ES',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.home' })
  const canonicalUrl = `${siteUrl}/${locale}`

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteName} | ${t('title')}`,
      template: `%s | ${siteName}`,
    },
    description: t('description'),
    keywords: [
      'dive journeys',
      'dive expeditions',
      'scuba diving trips',
      'liveaboard diving',
      'dive resort',
      'Red Sea diving',
      'Maldives diving',
      'Mozambique diving',
      'whale shark encounters',
      'manta ray diving',
      'personalized dive travel',
      'ethical dive travel',
      'marine conservation',
    ],
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    openGraph: {
      type: 'website',
      locale: ogLocale[locale] ?? 'en_GB',
      alternateLocale: Object.entries(ogLocale)
        .filter(([l]) => l !== locale)
        .map(([, v]) => v),
      url: canonicalUrl,
      siteName,
      title: `${siteName} | ${t('title')}`,
      description: t('description'),
      images: [
        {
          url: '/hero-underwater.jpg',
          width: 1200,
          height: 630,
          alt: 'Blue Soul Journeys — underwater diving scene',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteName} | ${t('title')}`,
      description: t('description'),
      images: ['/hero-underwater.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en`,
        pt: `${siteUrl}/pt`,
        es: `${siteUrl}/es`,
        'x-default': `${siteUrl}/en`,
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

function buildJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteName,
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/hero-underwater.jpg`,
    description:
      'Dive journeys designed for those who truly feel at home in the ocean. Liveaboard expeditions and dive resorts in the Red Sea, Maldives and Mozambique, chosen with care.',
    email: 'contact@bluesouljourneys.com',
    telephone: '+351914171793',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
    sameAs: ['https://www.instagram.com/bluesouljourneys'],
    areaServed: [
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Maldives' },
      { '@type': 'Country', name: 'Mozambique' },
    ],
    knowsAbout: [
      'Scuba Diving',
      'Liveaboard Diving',
      'Marine Conservation',
      'Dive Travel',
    ],
    inLanguage: locale,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <script type='application/ld+json'>
        {JSON.stringify(buildJsonLd(locale))}
      </script>
      <Navbar />
      {children}
      <WhatsAppFloat />
    </NextIntlClientProvider>
  )
}
