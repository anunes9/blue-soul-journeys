import Hero from '@/components/landing/Hero'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <section id='mission' className='min-h-screen bg-sand p-16'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-serif text-navy'>Our Mission</h2>
        </div>
      </section>
      <Footer />
    </main>
  )
}
