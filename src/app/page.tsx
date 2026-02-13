import Hero from '@/components/landing/Hero'
import Destinations from '@/components/landing/Destinations'
import Footer from '@/components/landing/Footer'
import Mission from '@/components/landing/Mission'
import AboutUs from '@/components/landing/AboutUs'
import Contact from '@/components/landing/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Destinations />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}
