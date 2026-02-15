import Image from 'next/image'
import Link from 'next/link'
import { destinations } from '@/data/destinations'

const Destinations = () => {
  return (
    <>
      {/* Wave Divider */}
      <div className='wave-divider z-10'>
        <svg
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='fill-sand'
        >
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,321.39,56.44Z' />
        </svg>
      </div>

      <section id='destinations' className='py-24 bg-[#F5F5F0]'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#0A3D62] mb-6'>
              Featured Dive Journeys
            </h2>

            <p className='text-lg text-[#0F1E2E]/80 leading-relaxed'>
              From remote coral reefs to legendary wrecks, these dive journeys
              invite you to explore the ocean in its many expressions - from
              calm, contemplative dives to more intense encounters.
              <br />
              <br />
              Each destination moves at its own rhythm, leaving space to
              observe, feel and dive at your own pace.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className='group relative h-125 rounded-3xl overflow-hidden shadow-xl cursor-pointer block'
              >
                <Image
                  src={dest.image}
                  alt={dest.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#0A3D62] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300' />
                <div className='absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-2xl font-merriweather font-bold text-white mb-2'>
                    {dest.name}
                  </h3>
                  <p className='text-[#6DD5ED] font-medium mb-3'>
                    {dest.region}
                  </p>
                  <p className='text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100'>
                    {dest.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations
