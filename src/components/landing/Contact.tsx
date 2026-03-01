'use client'

import { Instagram, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { WHATSAPP_URL } from '@/lib/contact'

const Contact = () => {
  const t = useTranslations('contact')

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
                {t('label')}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation='fade-up' delay={100}>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight'>
              {t('heading')}{' '}
              <span className='text-gradient-aqua'>
                {t('headingHighlight')}
              </span>
              ?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation='fade-up' delay={200}>
            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              {t('description')}
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
              <div>
                <p className='text-xs text-muted-foreground mb-0.5'>
                  {t('whatsappLabel')}
                </p>
                <p className='text-primary text-sm'>
                  contact@bluesouljourneys.com
                </p>
              </div>
            </div>

            <div className='group flex gap-4 p-4 items-center rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'>
              <div className='w-10 h-10 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Instagram className='w-6 h-6 text-primary-foreground' />
              </div>
              <div>
                <p className='text-xs text-muted-foreground mb-0.5'>
                  {t('whatsappLabel')}
                </p>
                <p className='text-primary text-sm'>@bluesouljourneys</p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex gap-4 p-4 items-center rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300'
              aria-label={t('whatsappAriaLabel')}
            >
              <div
                className='w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppIcon className='w-6 h-6 text-white' />
              </div>
              <div>
                <p className='text-xs text-muted-foreground mb-0.5'>
                  {t('whatsappLabel')}
                </p>
                <p className='text-primary text-sm'>+351 914 171 793</p>
              </div>
            </a>
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
                  {t('nameLabel')}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-aqua/30 focus:border-aqua/50 transition-all duration-300'
                  placeholder={t('namePlaceholder')}
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-navy mb-2'
                >
                  {t('emailLabel')}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-aqua/30 focus:border-aqua/50 transition-all duration-300'
                  placeholder={t('emailPlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-navy mb-2'
                >
                  {t('messageLabel')}
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-navy placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-aqua/30 focus:border-aqua/50 transition-all duration-300 resize-none'
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <Button type='submit' variant='hero' size='xl' className='w-full'>
                <Send className='w-5 h-5 mr-2' />
                {t('submitButton')}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
