'use client'

import { Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <section id='contact' className='py-24 bg-sand relative overflow-hidden'>
      {/* Subtle wave pattern background */}
      <div className='absolute inset-0 opacity-5'>
        <svg
          aria-hidden='true'
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <pattern
            id='contact-wave-pattern'
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
          <rect width='100%' height='100%' fill='url(#contact-wave-pattern)' />
        </svg>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <ScrollReveal animation='fade-up'>
            <div className='inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8'>
              <span className='text-sm font-medium text-ocean-deep tracking-wide uppercase'>
                Get in Touch
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation='fade-up' delay={100}>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight'>
              Ready to Start Your{' '}
              <span className='text-gradient-aqua'>Journey</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation='fade-up' delay={200}>
            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Let&apos;s create a travel experience that feels like you &mdash;
              guided by experience and deeply connected to the ocean.
            </p>
          </ScrollReveal>
        </div>

        <div className='grid md:grid-cols-5 gap-12 max-w-5xl mx-auto'>
          {/* Contact Info */}
          <ScrollReveal
            animation='fade-right'
            className='md:col-span-2 flex flex-col gap-8'
          >
            <div className='group flex gap-4 p-4 items-center rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'>
              <div className='w-10 h-10 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Mail className='w-6 h-6 text-primary-foreground' />
              </div>

              <p className='text-primary text-sm'>
                contact@bluesouljourneys.com
              </p>
            </div>

            <div className='group flex gap-4 p-4 items-center rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'>
              <div className='w-10 h-10 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Phone className='w-6 h-6 text-primary-foreground' />
              </div>

              <p className='text-primary text-sm'>+351 914 171 793</p>
            </div>

            <div className='group flex gap-4 p-4 items-center rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'>
              <div className='w-10 h-10 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Instagram className='w-6 h-6 text-primary-foreground' />
              </div>

              <p className='text-primary text-sm'>@bluesouljourneys</p>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal
            animation='fade-left'
            delay={150}
            className='md:col-span-3'
          >
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 p-8 rounded-2xl bg-card border border-border/50 shadow-sm'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-navy mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-aqua/30 focus:border-aqua/50 transition-all duration-300'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-navy mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-aqua/30 focus:border-aqua/50 transition-all duration-300'
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-navy mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-aqua/30 focus:border-aqua/50 transition-all duration-300 resize-none'
                  placeholder='Tell us about your dream dive journey...'
                />
              </div>

              <Button type='submit' variant='hero' size='xl' className='w-full'>
                <Send className='w-5 h-5 mr-2' />
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
