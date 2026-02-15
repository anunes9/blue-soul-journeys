import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Blue Soul Journeys',
    short_name: 'Blue Soul',
    description:
      'Personalized dive expeditions to the Red Sea, Maldives, and Mozambique.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c1a2a',
    theme_color: '#0c1a2a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
