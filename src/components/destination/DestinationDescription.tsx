import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ScrollReveal'
import type { Destination } from '@/data/destinations'

const DestinationDescription = ({
  slug,
  destination,
}: {
  slug: string
  destination: Destination
}) => {
  const t = useTranslations('destinationPage')
  const td = useTranslations('destinationData')

  const longDescription = td.raw(`${slug}.longDescription` as never) as string[]
  const highlights = [
    {
      title: td(`${slug}.highlight1Title` as never) as string,
      description: td(`${slug}.highlight1Description` as never) as string,
    },
    {
      title: td(`${slug}.highlight2Title` as never) as string,
      description: td(`${slug}.highlight2Description` as never) as string,
    },
    {
      title: td(`${slug}.highlight3Title` as never) as string,
      description: td(`${slug}.highlight3Description` as never) as string,
    },
  ]

  return (
    <section className='py-24 bg-sand relative overflow-hidden'>
      {/* Subtle wave pattern background */}
      <div className='absolute inset-0 opacity-5'>
        <svg
          aria-hidden='true'
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <pattern
            id='dest-wave-pattern'
            x='0'
            y='0'
            width='50'
            height='10'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M0 5 Q12.5 0 25 5 T50 5'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
              className='text-ocean-deep'
            />
          </pattern>
          <rect width='100%' height='100%' fill='url(#dest-wave-pattern)' />
        </svg>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto mb-16'>
          {/* Section Label */}
          <ScrollReveal animation='fade-up'>
            <div className='text-center'>
              <div className='inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8'>
                <span className='text-sm font-medium text-ocean-deep tracking-wide uppercase'>
                  {t('aboutLabel')}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal animation='fade-up' delay={100}>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading text-navy mb-6 leading-tight text-center'>
              {td(`${slug}.discoverHeading` as never)}
            </h2>
          </ScrollReveal>

          {/* Long Description */}
          <div className='space-y-6'>
            {Array.isArray(longDescription) &&
              longDescription.map((paragraph, index) => (
                <ScrollReveal
                  key={paragraph.slice(0, 50)}
                  animation='fade-up'
                  delay={200 + index * 100}
                >
                  <p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
          </div>
        </div>

        {/* Highlights */}
        <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {highlights.map((highlight, index) => (
            <ScrollReveal
              key={highlight.title}
              animation='fade-up'
              delay={index * 150}
            >
              <div className='group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full'>
                <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <Sparkles className='w-8 h-8 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-sans text-navy mb-3'>
                  {highlight.title}
                </h3>
                <p className='text-muted-foreground'>{highlight.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinationDescription
