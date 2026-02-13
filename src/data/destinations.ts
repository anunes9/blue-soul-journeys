export interface DestinationHighlight {
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
}

export const destinations: Destination[] = [
  {
    slug: 'red-sea',
    name: 'The Red Sea',
    region: 'Egypt',
    description:
      'A journey into the origins of modern diving, shaped by history, vibrant reefs and the iconic wrecks of the Red Sea.',
    longDescription: [
      'The Red Sea is where modern recreational diving was born. Its crystal-clear waters, reaching visibility of up to 40 metres, reveal a world of vibrant coral gardens, dramatic wall dives, and some of the most iconic wrecks in the world — including the SS Thistlegorm, a World War II cargo ship resting on the seabed since 1941.',
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
    image:
      'https://cdn.ailandingpage.ai/landingpage_io/user-generate/64521692-7885-44a6-8bcf-d1d3d1afa10b/64521692-7885-44a6-8bcf-d1d3d1afa10b/destinations/dest-redsea-dcafe0eede2546bf894c1ed1ad9a3ce5.png',
    alt: 'Red Sea Diving',
  },
  {
    slug: 'maldives',
    name: 'The Maldives',
    region: 'Central & Deep South Atolls',
    description:
      'Drift dives through channels, manta cleaning stations, and endless blue.',
    longDescription: [
      'The Maldives is a diver\'s paradise — a chain of 26 atolls scattered across the Indian Ocean, where warm currents bring an extraordinary concentration of marine life to channels, thilas, and cleaning stations. Here, the diving is defined by drift: you surrender to the current and let the ocean carry you through a world of colour and movement.',
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
    image:
      'https://cdn.ailandingpage.ai/landingpage_io/user-generate/64521692-7885-44a6-8bcf-d1d3d1afa10b/64521692-7885-44a6-8bcf-d1d3d1afa10b/destinations/dest-maldives-16204dd0f71d4d77874d67d7aa7c5a17.png',
    alt: 'Maldives Diving',
  },
  {
    slug: 'mozambique',
    name: 'Mozambique',
    region: 'Tofo & The Wild Coast',
    description:
      'Megafauna encounters and untouched reefs for the adventurous spirit.',
    longDescription: [
      'Mozambique is one of the last true frontiers of diving. Along its wild coastline, the warm Agulhas Current sweeps nutrient-rich waters close to shore, creating a marine ecosystem of staggering diversity and scale. This is where you come face to face with the ocean\'s giants — whale sharks, manta rays, humpback whales, and the elusive oceanic manta.',
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
    image:
      'https://cdn.ailandingpage.ai/landingpage_io/user-generate/64521692-7885-44a6-8bcf-d1d3d1afa10b/64521692-7885-44a6-8bcf-d1d3d1afa10b/destinations/dest-mozambique-667b060d0f7f48df851199701edcff39.png',
    alt: 'Mozambique Diving',
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}
