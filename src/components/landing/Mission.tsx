import { Shield, Heart, Users } from 'lucide-react'

const Mission = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'Uncompromising standards in every journey',
    },
    {
      icon: Heart,
      title: 'Ethical Travel',
      description: 'Respect for ocean ecosystems and local communities',
    },
    {
      icon: Users,
      title: 'Personal Connection',
      description: 'Intimate groups with personalized attention',
    },
  ]

  return (
    <section id='mission' className='py-24 bg-sand relative overflow-hidden'>
      {/* Subtle wave pattern background */}
      <div className='absolute inset-0 opacity-5'>
        <svg
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <pattern
            id='wave-pattern'
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
          <rect width='100%' height='100%' fill='url(#wave-pattern)' />
        </svg>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Section Label */}
          <div className='inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8'>
            <span className='text-sm font-medium text-ocean-deep tracking-wide uppercase'>
              Our Mission
            </span>
          </div>

          {/* Main Statement */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight'>
            More Than Just a Holiday
          </h2>

          <p className='text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed'>
            We create meaningful dive journeys for those who share our deep love
            for the ocean. Every expedition is crafted with
            intention—prioritizing quality over quantity, safety without
            compromise, and genuine respect for the underwater world and its
            communities.
          </p>

          <div className='flex flex-col gap-8'>
            {values.map((value, index) => (
              <div
                key={value.title}
                className='flex flex-col items-start gap-4'
              >
                <h3 className='text-4xl font-sans text-navy mb-3'>
                  {value.title}
                </h3>

                <p className='text-muted-foreground'>{value.description}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className='grid md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={value.title}
                className='group p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <value.icon className='w-8 h-8 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-sans text-navy mb-3'>
                  {value.title}
                </h3>
                <p className='text-muted-foreground'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
