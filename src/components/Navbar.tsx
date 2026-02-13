'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { destinations } from '@/data/destinations'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [destinationsOpen, setDestinationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible
            ? 'translate-y-0 bg-white/80 backdrop-blur-lg shadow-md'
            : '-translate-y-full'
        }`}
      >
        <div className='container mx-auto px-6 flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <img
              src='/logo.avif'
              className='h-auto w-10'
              alt='Blue Soul Journeys'
            />
            <span className='text-sm font-serif text-navy tracking-wide hidden sm:inline'>
              Blue Soul Journeys
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {/* Destinations Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button className='flex items-center gap-1 text-sm font-medium text-navy/80 hover:text-ocean-deep transition-colors'>
                Destinations
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
                      <span className='font-medium'>{dest.name}</span>
                      <span className='block text-xs text-muted-foreground'>
                        {dest.region}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href='/my-story'
              className='text-sm font-medium text-navy/80 hover:text-ocean-deep transition-colors'
            >
              My Story
            </Link>

            <Link
              href='/#contact'
              className='text-sm font-medium text-navy/80 hover:text-ocean-deep transition-colors'
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className='md:hidden text-navy'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
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
          <p className='text-xs font-medium text-ocean-deep tracking-widest uppercase'>
            Destinations
          </p>
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
            >
              {dest.name}
            </Link>
          ))}

          <div className='w-12 h-px bg-aqua/30' />

          <Link
            href='/my-story'
            onClick={() => setMobileMenuOpen(false)}
            className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
          >
            My Story
          </Link>

          <Link
            href='/#contact'
            onClick={() => setMobileMenuOpen(false)}
            className='text-2xl font-serif text-navy hover:text-ocean-deep transition-colors'
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
