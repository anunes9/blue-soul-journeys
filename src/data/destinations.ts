export interface DestinationHighlight {
  title: string
  description: string
}

export interface DestinationVessel {
  name: string
  type: 'liveaboard' | 'resort'
  description: string
  amenities: string[]
  image: string
  imageAlt: string
}

export interface DestinationDate {
  startDate: string
  endDate: string
  status: 'available' | 'limited' | 'sold-out'
  note?: string
}

export interface DestinationItineraryDay {
  day: string
  title: string
  description: string
}

export interface Destination {
  slug: string
  name: string
  region: string
  description: string
  longDescription: string[]
  highlights: DestinationHighlight[]
  image: string
  alt: string
  vessel: DestinationVessel
  included: string[]
  notIncluded: string[]
  dates: DestinationDate[]
  itinerary: DestinationItineraryDay[]
  transfers: string
}

export const destinations: Destination[] = [
  {
    slug: 'red-sea',
    name: 'The Red Sea',
    region: 'Egypt',
    description:
      'A journey into the origins of modern diving, shaped by history, vibrant reefs and the iconic wrecks of the Red Sea.',
    longDescription: [
      'The Red Sea is where modern recreational diving was born. Its crystal-clear waters, reaching visibility of up to 40 metres, reveal a world of vibrant coral gardens, dramatic wall dives, and some of the most iconic wrecks in the world \u2014 including the SS Thistlegorm, a World War II cargo ship resting on the seabed since 1941.',
      'Our Red Sea expeditions take you beyond the crowded resort reefs. We explore the remote southern reaches by liveaboard, visiting untouched sites like Elphinstone Reef, where oceanic whitetip sharks patrol the blue, and the Brothers Islands, home to thriving soft coral forests and schooling hammerheads.',
      'Whether you are drawn to the history beneath the waves or the kaleidoscope of marine life that thrives on every reef, the Red Sea offers a diving experience that is both deeply rooted in tradition and endlessly surprising.',
    ],
    highlights: [
      {
        title: 'World-Class Wrecks',
        description:
          'Dive the SS Thistlegorm, the Rosalie Moller, and other legendary wrecks preserved by warm, clear waters.',
      },
      {
        title: 'Pristine Coral Reefs',
        description:
          'Explore vibrant hard and soft coral gardens teeming with life, from tiny nudibranchs to giant moray eels.',
      },
      {
        title: 'Pelagic Encounters',
        description:
          'Spot oceanic whitetip sharks, hammerheads, dolphins, and manta rays in the deep blue channels.',
      },
    ],
    image: '/images/red_sea.jpg',
    alt: 'Red Sea Diving',
    vessel: {
      name: 'Red Sea Liveaboard',
      type: 'liveaboard',
      description:
        'A carefully selected liveaboard vessel offering comfortable cabins, spacious dive decks, and access to remote dive sites across the southern Red Sea. The boat is equipped with modern safety equipment, Nitrox, and experienced crew who know these waters intimately.',
      amenities: [
        'En-suite cabins with air conditioning',
        'Spacious dive deck with personal storage',
        'Nitrox available',
        'Sundeck and lounge areas',
        'Full-board meals with fresh, local cuisine',
        'Experienced dive guides',
      ],
      image: '/images/red_sea.jpg',
      imageAlt: 'Red Sea liveaboard vessel',
    },
    included: [
      'Full-board accommodation on the liveaboard',
      'Up to 4 dives per day',
      'Nitrox (for certified divers)',
      'Dive guide services',
      'Tanks and weights',
      'Towels and bed linen',
      'Tea, coffee and water throughout',
    ],
    notIncluded: [
      'International flights',
      'Egyptian visa',
      'Travel insurance',
      'Personal dive equipment',
      'Alcoholic beverages',
      'Crew gratuities',
      'Marine park fees',
    ],
    dates: [
      {
        startDate: '2025-09-15',
        endDate: '2025-09-22',
        status: 'available',
      },
      {
        startDate: '2025-11-10',
        endDate: '2025-11-17',
        status: 'limited',
        note: 'Only 3 spots remaining',
      },
      {
        startDate: '2026-03-08',
        endDate: '2026-03-15',
        status: 'available',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Check-in',
        description:
          'Arrive in Hurghada or Marsa Alam. Transfer to the liveaboard, settle into your cabin, safety briefing and a check dive in sheltered waters.',
      },
      {
        day: 'Days 2\u20133',
        title: 'Northern Wrecks & Reefs',
        description:
          'Dive the SS Thistlegorm and surrounding reef systems. Explore the cargo holds, encounter resident marine life, and night dive on the wreck.',
      },
      {
        day: 'Days 4\u20135',
        title: 'Brothers Islands',
        description:
          'Open water crossing to the Brothers. Wall dives with soft corals, hammerhead sharks, and the Numidia wreck. Some of the most dramatic diving in the Red Sea.',
      },
      {
        day: 'Days 6\u20137',
        title: 'Elphinstone & Daedalus',
        description:
          'Drift dives along Elphinstone\u2019s famous walls, with chances to see oceanic whitetip sharks. Daedalus offers pristine reefs and pelagic encounters.',
      },
      {
        day: 'Day 8',
        title: 'Return & Departure',
        description:
          'Final morning dive, return to port. Transfer to the airport for your departure flight.',
      },
    ],
    transfers:
      'Airport transfers between Hurghada International Airport (HRG) or Marsa Alam Airport (RMF) and the liveaboard marina are included in the journey. I\u2019ll coordinate your arrival and departure times to ensure a smooth connection. If you\u2019d like to arrive earlier or extend your stay, I can help arrange additional accommodation.',
  },
  {
    slug: 'maldives',
    name: 'The Maldives',
    region: 'Central & Deep South Atolls',
    description:
      'A journey guided by the rhythm of the ocean \u2014 drifting through channels, currents and frequent encounters with large pelagic species.',
    longDescription: [
      'The Maldives is a diver\u2019s paradise \u2014 a chain of 26 atolls scattered across the Indian Ocean, where warm currents bring an extraordinary concentration of marine life to channels, thilas, and cleaning stations. Here, the diving is defined by drift: you surrender to the current and let the ocean carry you through a world of colour and movement.',
      'Our Maldives itineraries focus on the Central and Deep South Atolls, far from the tourist hubs. We visit manta cleaning stations where dozens of rays glide in graceful circles, explore channel dives teeming with grey reef sharks and schools of jackfish, and drift along coral-encrusted overhangs alive with soft corals and glass fish.',
      'Above the waterline, life aboard our carefully selected liveaboards is unhurried and intimate. Between dives, you can kayak across turquoise lagoons, snorkel with whale sharks, or simply watch the sun set over an ocean that stretches to every horizon.',
    ],
    highlights: [
      {
        title: 'Manta Ray Encounters',
        description:
          'Visit world-renowned cleaning stations where mantas gather in remarkable numbers throughout the season.',
      },
      {
        title: 'Channel Drift Dives',
        description:
          'Ride ocean currents through atoll channels surrounded by sharks, rays, and dense schools of fish.',
      },
      {
        title: 'Remote Atolls',
        description:
          'Explore the rarely visited Deep South, where pristine reefs remain untouched and marine life is abundant.',
      },
    ],
    image: '/images/maldives.avif',
    alt: 'Maldives Diving',
    vessel: {
      name: 'Maldives Liveaboard',
      type: 'liveaboard',
      description:
        'A traditional dhoni-style liveaboard, thoughtfully refitted for diving comfort. The vessel carries a small group of divers, allowing for personalised dive briefings and flexible itineraries based on conditions and marine life sightings.',
      amenities: [
        'En-suite cabins with air conditioning',
        'Dedicated dive dhoni',
        'Nitrox available',
        'Sundeck with loungers',
        'Full-board meals with Maldivian and international cuisine',
        'Kayaks and snorkelling gear',
      ],
      image: '/images/maldives.avif',
      imageAlt: 'Maldives liveaboard vessel',
    },
    included: [
      'Full-board accommodation on the liveaboard',
      'Up to 3\u20134 dives per day',
      'Nitrox (for certified divers)',
      'Dive guide services',
      'Tanks and weights',
      'Snorkelling equipment',
      'Tea, coffee, water and soft drinks',
    ],
    notIncluded: [
      'International flights',
      'Maldives green tax',
      'Travel insurance',
      'Personal dive equipment',
      'Alcoholic beverages',
      'Crew gratuities',
      'GST and service charges',
    ],
    dates: [
      {
        startDate: '2025-10-05',
        endDate: '2025-10-13',
        status: 'available',
      },
      {
        startDate: '2026-01-18',
        endDate: '2026-01-26',
        status: 'available',
      },
      {
        startDate: '2026-04-12',
        endDate: '2026-04-20',
        status: 'limited',
        note: 'Only 4 spots remaining',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Mal\u00e9',
        description:
          'Arrive at Velana International Airport. Transfer to the liveaboard, welcome briefing and a sunset check dive on a nearby reef.',
      },
      {
        day: 'Days 2\u20133',
        title: 'South Mal\u00e9 & Vaavu Atoll',
        description:
          'Channel dives with grey reef sharks and eagle rays. Visit manta cleaning stations and drift through thilas alive with colour.',
      },
      {
        day: 'Days 4\u20135',
        title: 'Meemu & Thaa Atolls',
        description:
          'Venture into less-visited atolls. Night dives with nurse sharks, pristine coral gardens, and chances for whale shark encounters.',
      },
      {
        day: 'Days 6\u20137',
        title: 'Deep South \u2014 Huvadhoo Atoll',
        description:
          'The jewel of the trip. Strong currents bring dense schools of fish, hammerheads, and mantas. Some of the most thrilling drift dives in the Maldives.',
      },
      {
        day: 'Day 8',
        title: 'Return & Departure',
        description:
          'Final morning dive, cruise back towards Mal\u00e9. Transfer to the airport for your departure.',
      },
    ],
    transfers:
      'The liveaboard departs from Mal\u00e9, easily accessible from Velana International Airport (MLE). I\u2019ll coordinate transfers between the airport and the marina. For early arrivals or late departures, I can arrange hotel accommodation in Mal\u00e9 or Hulhumal\u00e9.',
  },
  {
    slug: 'mozambique',
    name: 'Mozambique',
    region: 'Tofo & The Wild Coast',
    description:
      'A journey developed in partnership with local dive centres and accommodation, where connection to the ocean and the local community is part of the experience.',
    longDescription: [
      'Mozambique is one of the last true frontiers of diving. Along its wild coastline, the warm Agulhas Current sweeps nutrient-rich waters close to shore, creating a marine ecosystem of staggering diversity and scale. This is where you come face to face with the ocean\u2019s giants \u2014 whale sharks, manta rays, humpback whales, and the elusive oceanic manta.',
      'Our Mozambique expeditions are based around Tofo and the Inhambane coast, where the diving is raw, real, and utterly unforgettable. Morning dives often begin with a boat ride through the surf, landing you on reef systems that few divers have ever explored. The visibility can surprise you, the currents can challenge you, and the encounters will stay with you forever.',
      'Beyond the diving, Mozambique offers a cultural richness that adds depth to every journey. From the warm hospitality of local fishing communities to the flavours of peri-peri seafood cooked on the beach, this is a destination that engages all your senses.',
    ],
    highlights: [
      {
        title: 'Megafauna Capital',
        description:
          'One of the best places on Earth for whale shark and oceanic manta ray encounters in open water.',
      },
      {
        title: 'Untouched Reefs',
        description:
          'Dive pristine coral systems along the wild coast, far from the crowds and full of surprises.',
      },
      {
        title: 'Cultural Immersion',
        description:
          'Connect with local coastal communities and experience the authentic spirit of East Africa.',
      },
    ],
    image: '/images/tofo.avif',
    alt: 'Mozambique Diving',
    vessel: {
      name: 'Tofo Beach Dive Resort',
      type: 'resort',
      description:
        'A carefully selected beachfront dive resort in Tofo, run in partnership with a local dive centre. The accommodation is simple, comfortable, and deeply connected to the local community \u2014 with ocean views, warm hospitality, and direct access to the beach.',
      amenities: [
        'Ocean-view rooms with private bathroom',
        'On-site dive centre with experienced guides',
        'Beach restaurant with local cuisine',
        'Equipment rental available',
        'Snorkelling and ocean safari excursions',
        'Community-supported tourism',
      ],
      image: '/images/tofo.avif',
      imageAlt: 'Tofo Beach dive resort',
    },
    included: [
      'Accommodation at the dive resort',
      '2\u20133 guided dives per day',
      'Dive guide services',
      'Tanks and weights',
      'Breakfast daily',
      'Ocean safari excursion',
      'Local community visit',
    ],
    notIncluded: [
      'International flights',
      'Mozambique visa',
      'Travel insurance',
      'Personal dive equipment',
      'Lunch and dinner (available at resort)',
      'Alcoholic beverages',
      'Additional excursions',
    ],
    dates: [
      {
        startDate: '2025-10-20',
        endDate: '2025-10-27',
        status: 'available',
      },
      {
        startDate: '2026-02-15',
        endDate: '2026-02-22',
        status: 'available',
      },
      {
        startDate: '2026-06-01',
        endDate: '2026-06-08',
        status: 'available',
        note: 'Whale shark season',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Tofo',
        description:
          'Arrive in Inhambane. Transfer to the dive resort in Tofo, settle in and enjoy your first evening on the beach.',
      },
      {
        day: 'Days 2\u20133',
        title: 'Reef Exploration',
        description:
          'Morning boat dives on Tofo\u2019s reef systems \u2014 Manta Reef, Giants Castle, and the Back Wall. Afternoon snorkelling or beach time.',
      },
      {
        day: 'Day 4',
        title: 'Ocean Safari',
        description:
          'A full-day ocean safari searching for whale sharks, mantas, dolphins, and humpback whales (seasonal). An unforgettable open-water experience.',
      },
      {
        day: 'Days 5\u20136',
        title: 'Deep Dives & Community',
        description:
          'Explore deeper sites along the wild coast. Visit a local fishing community, learn about traditional practices, and enjoy a beachside seafood dinner.',
      },
      {
        day: 'Day 7',
        title: 'Final Dive & Departure',
        description:
          'One last morning dive, time to say goodbye to Tofo. Transfer to Inhambane airport for your departure.',
      },
    ],
    transfers:
      'Transfers between Inhambane Airport (INH) and the dive resort in Tofo (approximately 25 minutes) are included. I can also help arrange transfers from Maputo (Mavalane International Airport) if you\u2019re flying via the capital \u2014 the scenic drive takes around 6 hours along the coast.',
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
