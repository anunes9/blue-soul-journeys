import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.ailandingpage.ai',
      },
    ],
  },
}

export default nextConfig
