import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blue Soul Journeys',
  description:
    'Personalized dive expeditions crafted with passion, ethics, and deep respect for our ocean communities.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
