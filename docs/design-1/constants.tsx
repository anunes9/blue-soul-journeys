
import React from 'react';
import { Anchor, ShieldCheck, Heart, MapPin, Ship, Waves, Globe } from 'lucide-react';
import { NavLink, ServiceItem, Destination, TrustElement } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Journeys', href: '#journeys' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Guide', href: '#guide' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Liveaboard Expeditions',
    description: 'Reach the most remote reefs in style. Fully equipped vessels with professional crews dedicated to your diving experience.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Curated Dive Resorts',
    description: 'Selected for their environmental commitment and proximity to world-class dive sites. Luxury meets raw nature.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    icon: <Waves className="w-6 h-6" />
  },
  {
    title: 'Responsible Travel',
    description: 'Ethical journeys that respect local ocean communities and contribute directly to reef conservation efforts.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800',
    icon: <Globe className="w-6 h-6" />
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'red-sea',
    name: 'Red Sea',
    tagline: 'Vibrant coral walls and historic wrecks.',
    image: 'https://images.unsplash.com/photo-1682687371116-4e0912cc2712?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    tagline: 'Manta rays and endless turquoise atolls.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mozambique',
    name: 'Mozambique',
    tagline: 'Untamed waters and giants of the deep.',
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRUST_ELEMENTS: TrustElement[] = [
  {
    title: 'Uncompromising Quality',
    description: 'Every detail of your trip is personally vetted for excellence.',
    icon: <Anchor className="text-[#43C6AC]" />
  },
  {
    title: 'Ethical Heart',
    description: 'We prioritize local partnerships and ocean conservation.',
    icon: <Heart className="text-[#43C6AC]" />
  },
  {
    title: 'Expert Connection',
    description: 'Personally accompanied by guides who know the ocean intimately.',
    icon: <ShieldCheck className="text-[#43C6AC]" />
  }
];
