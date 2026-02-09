import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://www.bluesouljourneys.com'
const siteName = 'Blue Soul Journeys'
const description =
  'Personalized dive expeditions to the Red Sea, Maldives, and Mozambique. Crafted with passion, ethics, and deep respect for our ocean communities.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Personalized Dive Expeditions`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'dive expeditions',
    'scuba diving trips',
    'liveaboard diving',
    'Red Sea diving',
    'Maldives diving',
    'Mozambique diving',
    'whale shark encounters',
    'manta ray diving',
    'personalized dive travel',
    'ethical dive travel',
    'dive resort',
    'marine conservation',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName,
    title: `${siteName} | Personalized Dive Expeditions`,
    description,
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
    title: `${siteName} | Personalized Dive Expeditions`,
    description,
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
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
