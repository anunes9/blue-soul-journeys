import { Anchor, Compass, Heart, Sparkles, Users, Waves } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ScrollReveal'

const MyStoryContent = () => {
  const t = useTranslations('myStory')

  const timelineItems = [
    {
      icon: Compass,
      year: t('timeline2018Year'),
      title: t('timeline2018Title'),
      paragraphs: [
        t('timeline2018P1'),
        t('timeline2018P2'),
        t('timeline2018P3'),
      ],
      image: '/images/my_story2.jpg',
      imageAlt: t('timeline2018ImageAlt'),
    },
    {
      icon: Anchor,
      year: t('timeline2020Year'),
      title: t('timeline2020Title'),
      paragraphs: [
        t('timeline2020P1'),
        t('timeline2020P2'),
        t('timeline2020P3'),
      ],
      image: '/images/my_story3.jpg',
      imageAlt: t('timeline2020ImageAlt'),
    },
    {
      icon: Sparkles,
      year: t('timeline2024Year'),
      title: t('timeline2024Title'),
      paragraphs: [t('timeline2024P1'), t('timeline2024P2')],
      image: '/images/my_story4.jpg',
      imageAlt: t('timeline2024ImageAlt'),
    },
    {
      icon: Waves,
      year: t('timeline2025Year'),
      title: t('timeline2025Title'),
      paragraphs: [
        t('timeline2025P1'),
        t('timeline2025P2'),
        t('timeline2025P3'),
        t('timeline2025P4'),
        t('timeline2025P5'),
      ],
      image: '/images/my_story5.jpg',
      imageAlt: t('timeline2025ImageAlt'),
    },
  ]

  return (
    <>
      {/* Timeline Section */}
      <section className='py-24 bg-sand relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <svg
            aria-hidden='true'
            className='w-full h-full'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <pattern
              id='story-wave-pattern'
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
            <rect width='100%' height='100%' fill='url(#story-wave-pattern)' />
          </svg>
        </div>

        <div className='container mx-auto px-6 relative z-10'>
          <div className='max-w-4xl mx-auto space-y-24'>
            {timelineItems.map((item, index) => (
              <div key={item.year} className='space-y-8'>
                {/* Image */}
                <ScrollReveal animation='scale-in'>
                  <div className='relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl group'>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                      sizes='(max-width: 768px) 100vw, 896px'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-[#0A3D62]/40 via-transparent to-transparent' />
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal animation='fade-up' delay={150}>
                  <div className='flex gap-6'>
                    <div className='hidden md:flex flex-col items-center'>
                      <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center shrink-0'>
                        <item.icon className='w-8 h-8 text-primary-foreground' />
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className='w-px flex-1 bg-aqua/20 mt-4' />
                      )}
                    </div>

                    <div>
                      <span className='text-sm font-medium text-aqua tracking-wide uppercase'>
                        {item.year}
                      </span>
                      <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading text-navy mt-2 mb-6 leading-tight'>
                        {item.title}
                      </h2>
                      <div className='space-y-4'>
                        {item.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 50)}
                            className='text-lg text-muted-foreground leading-relaxed'
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}

            {/* Image */}
            <ScrollReveal animation='scale-in'>
              <div className='relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl group'>
                <Image
                  src='/images/my_story6.jpg'
                  alt={t('timeline2018ImageAlt')}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 896px'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#0A3D62]/40 via-transparent to-transparent' />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className='py-24 bg-white relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='max-w-4xl mx-auto text-center mb-16'>
            <ScrollReveal animation='fade-up'>
              <div className='inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8'>
                <span className='text-sm font-medium text-ocean-deep tracking-wide uppercase'>
                  {t('connectionLabel')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation='fade-up' delay={100}>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading text-navy mb-6 leading-tight'>
                {t('connectionHeading')}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation='fade-up' delay={200}>
              <div className='space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed'>
                <p>{t('connectionP1')}</p>
                <p>{t('connectionP2')}</p>
                <p>{t('connectionP3')}</p>
                <p>{t('connectionP4')}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className='grid md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
            <ScrollReveal animation='fade-right'>
              <div className='group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full'>
                <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <Heart className='w-8 h-8 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-sans text-navy mb-3 text-center'>
                  {t('value1Title')}
                </h3>
                <p className='text-muted-foreground'>
                  {t('value1Description')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation='fade-left' delay={150}>
              <div className='group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300 h-full'>
                <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <Users className='w-8 h-8 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-sans text-navy mb-3  text-center'>
                  {t('value2Title')}
                </h3>
                <p className='text-muted-foreground'>
                  {t('value2Description')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Want For You */}
      <section className='py-24 bg-navy relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <ScrollReveal animation='fade-up'>
              <div className='inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-8'>
                <span className='text-sm font-medium text-primary-foreground tracking-wide uppercase'>
                  {t('wantLabel')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation='fade-up' delay={100}>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading text-primary-foreground mb-10 leading-tight'>
                {t('wantHeading')}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation='fade-up' delay={200}>
              <div className='space-y-4 text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10'>
                <p>{t('wantLine1')}</p>
                <p>{t('wantLine2')}</p>
                <p>{t('wantLine3')}</p>
                <p>{t('wantLine4')}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation='fade-up' delay={300}>
              <div className='space-y-4 text-lg md:text-xl text-primary-foreground/80 leading-relaxed'>
                <p>{t('wantP1')}</p>
                <p className='text-2xl font-heading text-primary-foreground mt-8'>
                  {t('wantClosing1')}
                </p>
                <p className='text-gradient-aqua text-2xl font-heading'>
                  {t('wantClosing2')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyStoryContent
