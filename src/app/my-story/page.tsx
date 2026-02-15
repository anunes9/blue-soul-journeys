import type { Metadata } from 'next'
import MyStoryHero from '@/components/my-story/MyStoryHero'
import MyStoryContent from '@/components/my-story/MyStoryContent'
import Contact from '@/components/landing/Contact'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'My Story',
  description:
    'The ocean changed my life in ways I never expected. Discover the story behind Blue Soul Journeys and why meaningful dive travel matters.',
  alternates: {
    canonical: 'https://www.bluesouljourneys.com/my-story',
  },
  openGraph: {
    title: 'My Story — Blue Soul Journeys',
    description:
      'The ocean changed my life in ways I never expected. Discover the story behind Blue Soul Journeys and why meaningful dive travel matters.',
    url: 'https://www.bluesouljourneys.com/my-story',
  },
}

export default function MyStoryPage() {
  return (
    <main>
      <MyStoryHero />
      <MyStoryContent />
      <Contact />
      <Footer />
    </main>
  )
}
