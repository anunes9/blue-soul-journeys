'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'

const bubbles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  width: Math.floor(Math.random() * 20 + 10),
  left: Math.floor(Math.random() * 100),
  delay: Math.floor(Math.random() * 8),
  duration: Math.floor(Math.random() * 4 + 6),
}))

const Hero = () => {
  const t = useTranslations('hero')

  const scrollToNext = () => {
    const missionSection = document.getElementById('mission')
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/home.jpg'
          alt={t('imageAlt')}
          fill
          className='object-cover'
          priority
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-hero' />
      </div>

      {/* Floating Bubbles */}
      <div className='absolute inset-0 z-10 pointer-events-none overflow-hidden'>
        {bubbles.map((b) => (
          <div
            key={b.id}
            className='absolute rounded-full bg-primary-foreground/10 bubble'
            style={{
              width: `${b.width}px`,
              height: `${b.width}px`,
              left: `${b.left}%`,
              bottom: '-50px',
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-20 container mx-auto px-6 text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Logo/Brand */}
          <div className='animate-fade-up' style={{ animationDelay: '0.2s' }}>
            <Image
              src='/logo-horizontal-white.png'
              width={512}
              height={256}
              className='h-auto w-80 mx-auto'
              alt='Blue Soul Journeys'
            />
          </div>

          {/* Headline */}
          <h1
            className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-primary-foreground mb-6 leading-tight animate-fade-up'
            style={{ animationDelay: '0.4s' }}
          >
            {t('tagline').split(' ').slice(0, -1).join(' ')}{' '}
            <span className='text-gradient-aqua'>
              {t('tagline').split(' ').at(-1)}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className='text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light animate-fade-up'
            style={{ animationDelay: '0.6s' }}
          >
            {t('description')}
          </p>

          {/* CTAs */}
          <div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up'
            style={{ animationDelay: '0.8s' }}
          >
            <Button variant='hero' size='xl'>
              <Link href='/#contact'>{t('ctaPrimary')}</Link>
            </Button>
            <Button variant='heroOutline' size='xl'>
              <Link href='/journeys'>{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type='button'
        onClick={scrollToNext}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float cursor-pointer'
        aria-label={t('scrollLabel')}
      >
        <ChevronDown className='w-8 h-8' />
      </button>

      {/* Wave Divider */}
      <div className='wave-divider z-10'>
        <svg
          aria-hidden='true'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='fill-sand'
        >
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,321.39,56.44Z' />
        </svg>
      </div>
    </section>
  )
}

export default Hero
