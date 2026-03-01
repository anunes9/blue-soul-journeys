'use client'

import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { destinations } from '@/data/destinations'
import { routing } from '@/i18n/routing'

const localeLabels: Record<string, string> = {
  en: 'EN',
  pt: 'PT',
  es: 'ES',
}

const Navbar = () => {
  const t = useTranslations('nav')
  const td = useTranslations('destinationData')
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [destinationsOpen, setDestinationsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = (params?.locale as string) || 'en'

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLocale = (locale: string) => {
    router.push(pathname, { locale })
    setLangOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          hasScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className='container mx-auto px-6 flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              width={48}
              height={48}
              className='h-auto w-12 sm:w-10'
              alt='Blue Soul Journeys'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {/* Destinations Dropdown */}
            <nav
              className='relative'
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
              aria-label={t('journeys')}
            >
              <button
                type='button'
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  hasScrolled
                    ? 'text-navy/80 hover:text-ocean-deep'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {t('journeys')}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    destinationsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  destinationsOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className='bg-white rounded-xl shadow-lg border border-border/50 py-2 min-w-50'>
                  {destinations.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      className='block px-4 py-2.5 text-sm text-navy/80 hover:text-ocean-deep hover:bg-sand transition-colors'
                    >
                      <span className='font-medium'>
                        {td(`${dest.slug}.name` as never)}
                      </span>
                      <span className='block text-xs text-muted-foreground'>
                        {td(`${dest.slug}.region` as never)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <Link
              href='/what-i-do'
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? 'text-navy/80 hover:text-ocean-deep'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {t('whatIDo')}
            </Link>

            <Link
              href='/how-it-works'
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? 'text-navy/80 hover:text-ocean-deep'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {t('howItWorks')}
            </Link>

            <Link
              href='/my-story'
              className={`text-sm font-medium transition-colors ${
                hasScrolled
                  ? 'text-navy/80 hover:text-ocean-deep'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {t('myStory')}
            </Link>

            <Link
              href='/#contact'
              className={`text-sm font-medium transition-colors border rounded-lg px-2 py-1 hover:bg-accent ${
                hasScrolled
                  ? 'text-navy/80 hover:text-ocean-deep'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {t('contact')}
            </Link>

            {/* Language Switcher */}
            <div
              className='relative'
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                type='button'
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  hasScrolled
                    ? 'text-navy/80 hover:text-ocean-deep'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                <Globe className='w-4 h-4' />
                {localeLabels[currentLocale]}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    langOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full right-0 pt-2 transition-all duration-200 ${
                  langOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className='bg-white rounded-xl shadow-lg border border-border/50 py-2 min-w-[80px]'>
                  {routing.locales.map((locale) => (
                    <button
                      key={locale}
                      type='button'
                      onClick={() => switchLocale(locale)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-sand ${
                        locale === currentLocale
                          ? 'text-ocean-deep font-semibold'
                          : 'text-navy/80 hover:text-ocean-deep'
                      }`}
                    >
                      {localeLabels[locale]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            type='button'
            className={`md:hidden transition-colors duration-300 ${
              hasScrolled ? 'text-navy' : 'text-primary-foreground'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t('toggleMenu')}
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-sand transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className='flex flex-col items-center justify-center h-full gap-8'>
          {/* Mobile Logo */}
          <div className='flex items-center gap-3 mb-4'>
            <Image
              src='/logo.avif'
              width={56}
              height={56}
              className='h-auto w-14'
              alt='Blue Soul Journeys'
            />
            <span className='text-lg font-serif text-navy tracking-wide'>
              Blue Soul Journeys
            </span>
          </div>

          <div className='w-12 h-px bg-aqua/30' />

          <p className='text-xs font-medium text-ocean-deep tracking-widest uppercase'>
            {t('journeys')}
          </p>
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
            >
              {td(`${dest.slug}.name` as never)}
            </Link>
          ))}

          <div className='w-12 h-px bg-aqua/30' />

          <Link
            href='/what-i-do'
            onClick={() => setMobileMenuOpen(false)}
            className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
          >
            {t('whatIDo')}
          </Link>

          <Link
            href='/how-it-works'
            onClick={() => setMobileMenuOpen(false)}
            className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
          >
            {t('howItWorks')}
          </Link>

          <Link
            href='/my-story'
            onClick={() => setMobileMenuOpen(false)}
            className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
          >
            {t('myStory')}
          </Link>

          <Link
            href='/#contact'
            onClick={() => setMobileMenuOpen(false)}
            className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
          >
            {t('contact')}
          </Link>

          <div className='w-12 h-px bg-aqua/30' />

          {/* Mobile Language Switcher */}
          <div className='flex items-center gap-4'>
            {routing.locales.map((locale) => (
              <button
                key={locale}
                type='button'
                onClick={() => switchLocale(locale)}
                className={`text-sm font-medium transition-colors ${
                  locale === currentLocale
                    ? 'text-ocean-deep font-semibold underline underline-offset-4'
                    : 'text-navy/60 hover:text-ocean-deep'
                }`}
              >
                {localeLabels[locale]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
