import Image from 'next/image'
import { Compass, Anchor, Waves } from 'lucide-react'

const milestones = [
  {
    icon: Compass,
    title: 'Born from Passion',
    description:
      'Blue Soul Journeys was founded by a team of marine biologists and PADI-certified dive masters who wanted to share the ocean in a more intentional, respectful way.',
  },
  {
    icon: Anchor,
    title: 'Rooted in Experience',
    description:
      'With over 15 years of combined diving experience across three continents, we bring deep knowledge and genuine care to every expedition we design.',
  },
  {
    icon: Waves,
    title: 'Driven by Purpose',
    description:
      'Every journey we craft supports local marine conservation efforts and gives back to the coastal communities that welcome us.',
  },
]

const AboutUs = () => {
  return (
    <section id='about' className='py-24 bg-white relative overflow-hidden'>
      {/* Subtle wave pattern background */}
      <div className='absolute inset-0 opacity-5'>
        <svg
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <pattern
            id='about-wave-pattern'
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
          <rect width='100%' height='100%' fill='url(#about-wave-pattern)' />
        </svg>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          {/* Section Label */}
          <div className='inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8'>
            <span className='text-sm font-medium text-ocean-deep tracking-wide uppercase'>
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight'>
            The People Behind the{' '}
            <span className='text-gradient-aqua'>Blue</span>
          </h2>

          <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            We are a small, dedicated team of ocean lovers, storytellers, and
            dive professionals. We don&apos;t just plan trips — we share a piece
            of the world that changed our lives, hoping it will change yours
            too.
          </p>
        </div>

        {/* Image + Text Block */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div className='relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-xl group'>
            <Image
              src='/hero-underwater.jpg'
              alt='Blue Soul Journeys team diving together'
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className='absolute inset-0 bg-linear-to-t from-[#0A3D62]/60 via-transparent to-transparent' />
          </div>

          <div>
            <h3 className='text-2xl md:text-3xl font-serif text-navy mb-6 leading-tight'>
              Our story started underwater
            </h3>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              What began as a shared love for diving between a few close friends
              quickly grew into something bigger — a mission to create
              thoughtful, small-group dive experiences that prioritize
              connection over convenience.
            </p>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              We believe the ocean teaches us patience, humility, and wonder.
              Every bubble, every current, every encounter with marine life
              reminds us why we do what we do.
            </p>
            <p className='text-muted-foreground leading-relaxed'>
              Based between Portugal and the tropics, we spend our days scouting
              new reefs, building relationships with local dive operators, and
              ensuring every detail of your journey feels personal and
              purposeful.
            </p>
          </div>
        </div>

        {/* Milestones / Values */}
        <div className='grid md:grid-cols-3 gap-8'>
          {milestones.map((item, index) => (
            <div
              key={item.title}
              className='group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                <item.icon className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-sans text-navy mb-3'>
                {item.title}
              </h3>
              <p className='text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
