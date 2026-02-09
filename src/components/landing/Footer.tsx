import { Instagram, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-navy py-16'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-10'>
              <img src='/logo.avif' className='h-auto w-16' />

              <p className='text-primary-foreground/60 max-w-md leading-relaxed text-sm'>
                Creating meaningful dive journeys for those who truly feel at
                home in the ocean. Quality, ethics, and personal connection in
                every expedition.
              </p>
            </div>
            <div className='flex gap-4'>
              <a
                href='https://instagram.com/bluesouljourneys'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='mailto:contact@bluesouljourneys.com'
                className='w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-aqua/20 hover:text-aqua transition-all'
              >
                <Mail className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-primary-foreground font-medium font-sans mb-4'>
              Destinations
            </h4>
            <ul className='space-y-3'>
              {['Red Sea', 'Maldives', 'Mozambique'].map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-primary-foreground/60 hover:text-aqua transition-colors text-sm'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-primary-foreground font-medium mb-4'>
              Contact
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2 text-primary-foreground/60 text-sm'>
                <Mail className='w-4 h-4' />
                contact@bluesouljourneys.com
              </li>
              <li className='flex items-center gap-2 text-primary-foreground/60 text-sm'>
                <Instagram className='w-4 h-4' />
                @bluesouljourneys
              </li>
              <li className='flex items-start gap-2 text-primary-foreground/60 text-sm'>
                <MapPin className='w-4 h-4 mt-0.5' />
                Available worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-primary-foreground/40 text-sm'>
            © {currentYear} Blue Soul Journeys. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <a
              href='#'
              className='text-primary-foreground/40 hover:text-primary-foreground/60 text-sm transition-colors'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-primary-foreground/40 hover:text-primary-foreground/60 text-sm transition-colors'
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
