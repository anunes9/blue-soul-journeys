import { Instagram, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { WHATSAPP_URL } from '@/lib/contact'

const Footer = () => {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-navy py-16'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-10'>
              <Image
                src='/logo.png'
                width={64}
                height={64}
                className='h-auto w-16'
                alt='Blue Soul Journeys'
              />
              <p className='text-primary-foreground/60 max-w-md leading-relaxed text-sm'>
                {t('brandDescription')}
              </p>
            </div>
            <div className='flex gap-4'>
              <a
                href='https://instagram.com/bluesouljourneys'
                target='_blank'
                rel='noopener noreferrer'
                aria-label={t('instagramAriaLabel')}
                className='w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='mailto:contact@bluesouljourneys.com'
                aria-label={t('emailAriaLabel')}
                className='w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all'
              >
                <Mail className='w-5 h-5' />
              </a>
              <a
                href={WHATSAPP_URL}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={t('whatsappAriaLabel')}
                className='w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all'
              >
                <WhatsAppIcon className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-primary-foreground font-medium font-sans mb-4'>
              {t('exploreHeading')}
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/journeys'
                  className='text-primary-foreground/60 hover:text-aqua transition-colors text-sm'
                >
                  {nav('journeys')}
                </Link>
              </li>
              <li>
                <Link
                  href='/what-i-do'
                  className='text-primary-foreground/60 hover:text-aqua transition-colors text-sm'
                >
                  {nav('whatIDo')}
                </Link>
              </li>
              <li>
                <Link
                  href='/how-it-works'
                  className='text-primary-foreground/60 hover:text-aqua transition-colors text-sm'
                >
                  {nav('howItWorks')}
                </Link>
              </li>
              <li>
                <Link
                  href='/why-travel-with-me'
                  className='text-primary-foreground/60 hover:text-aqua transition-colors text-sm'
                >
                  {nav('whyTravelWithMe')}
                </Link>
              </li>
              <li>
                <Link
                  href='/my-story'
                  className='text-primary-foreground/60 hover:text-aqua transition-colors text-sm'
                >
                  {nav('myStory')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-primary-foreground font-medium mb-4'>
              {t('contactHeading')}
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2 text-primary-foreground/60 text-sm'>
                <Mail className='w-4 h-4' />
                <a
                  href='mailto:contact@bluesouljourneys.com'
                  className='hover:text-aqua transition-colors'
                >
                  contact@bluesouljourneys.com
                </a>
              </li>
              <li className='flex items-center gap-2 text-primary-foreground/60 text-sm'>
                <Instagram className='w-4 h-4' />
                <a
                  href='https://www.instagram.com/bluesouljourneys'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-aqua transition-colors'
                >
                  @bluesouljourneys
                </a>
              </li>
              <li className='flex items-center gap-2 text-primary-foreground/60 text-sm'>
                <WhatsAppIcon className='w-4 h-4' />
                <a
                  href={WHATSAPP_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-aqua transition-colors'
                >
                  +351 914 171 793
                </a>
              </li>
              <li className='flex items-start gap-2 text-primary-foreground/60 text-sm'>
                <MapPin className='w-4 h-4 mt-0.5' />
                {t('availableWorldwide')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-primary-foreground/40 text-sm'>
            © {currentYear} {t('copyright')}
          </p>
          {/*<div className='flex gap-6'>
            <span className='text-primary-foreground/40 text-sm'>
              {t('privacyPolicy')}
            </span>
            <span className='text-primary-foreground/40 text-sm'>
              {t('termsOfService')}
            </span>
          </div>*/}
        </div>
      </div>
    </footer>
  )
}

export default Footer
