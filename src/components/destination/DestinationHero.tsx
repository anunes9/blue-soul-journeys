import Image from 'next/image'
import type { Destination } from '@/data/destinations'

const DestinationHero = ({ destination }: { destination: Destination }) => {
  return (
    <section className='relative min-h-[70vh] flex items-end justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={destination.image}
          alt={destination.alt}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-hero' />
      </div>

      {/* Content */}
      <div className='relative z-20 container mx-auto px-6 pb-24 text-center'>
        <div className='max-w-4xl mx-auto'>
          <div
            className='inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-foreground/20 animate-fade-up'
            style={{ animationDelay: '0.2s' }}
          >
            <span className='text-sm font-medium text-primary-foreground tracking-wide uppercase'>
              {destination.region}
            </span>
          </div>

          <h1
            className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-primary-foreground mb-6 leading-tight animate-fade-up'
            style={{ animationDelay: '0.4s' }}
          >
            {destination.name}
          </h1>

          <p
            className='text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light animate-fade-up'
            style={{ animationDelay: '0.6s' }}
          >
            {destination.description}
          </p>
        </div>
      </div>

      {/* Wave Divider */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10'>
        <svg
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-[calc(100%+1.3px)] h-12.5 md:h-25 fill-sand'
        >
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,321.39,56.44Z' />
        </svg>
      </div>
    </section>
  )
}

export default DestinationHero
