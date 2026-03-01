'use client'

import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { WHATSAPP_URL } from '@/lib/contact'

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat with us on WhatsApp'
      className='group fixed bottom-6 right-6 z-50 flex items-center gap-3'
    >
      {/* Tooltip label - visible on hover, hidden by default */}
      <span className='hidden sm:flex items-center bg-navy text-primary-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out pointer-events-none whitespace-nowrap'>
        Chat on WhatsApp
      </span>

      {/* Button circle */}
      <div
        className='w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative'
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Subtle pulse ring */}
        <span
          className='absolute inset-0 rounded-full animate-ping opacity-20'
          style={{ backgroundColor: '#25D366' }}
          aria-hidden='true'
        />
        <WhatsAppIcon className='w-7 h-7 text-white relative z-10' />
      </div>
    </a>
  )
}

export default WhatsAppFloat
