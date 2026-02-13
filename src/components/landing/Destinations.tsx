import Image from 'next/image'

const destinations = [
  {
    name: 'The Red Sea',
    region: 'Egypt',
    description:
      'A journey into the origins of modern diving, shaped by history, vibrant reefs and the iconic wrecks of the Red Sea.',
    image:
      'https://cdn.ailandingpage.ai/landingpage_io/user-generate/64521692-7885-44a6-8bcf-d1d3d1afa10b/64521692-7885-44a6-8bcf-d1d3d1afa10b/destinations/dest-redsea-dcafe0eede2546bf894c1ed1ad9a3ce5.png',
    alt: 'Red Sea Diving',
  },
  {
    name: 'The Maldives',
    region: 'Central & Deep South Atolls',
    description:
      'Drift dives through channels, manta cleaning stations, and endless blue.',
    image:
      'https://cdn.ailandingpage.ai/landingpage_io/user-generate/64521692-7885-44a6-8bcf-d1d3d1afa10b/64521692-7885-44a6-8bcf-d1d3d1afa10b/destinations/dest-maldives-16204dd0f71d4d77874d67d7aa7c5a17.png',
    alt: 'Maldives Diving',
  },
  {
    name: 'Mozambique',
    region: 'Tofo & The Wild Coast',
    description:
      'Megafauna encounters and untouched reefs for the adventurous spirit.',
    image:
      'https://cdn.ailandingpage.ai/landingpage_io/user-generate/64521692-7885-44a6-8bcf-d1d3d1afa10b/64521692-7885-44a6-8bcf-d1d3d1afa10b/destinations/dest-mozambique-667b060d0f7f48df851199701edcff39.png',
    alt: 'Mozambique Diving',
  },
]

const Destinations = () => {
  return (
    <>
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20'>
        <svg
          className='relative block w-[calc(100%+1.3px)] h-12.5 md:h-25'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            fill='#F5F5F0'
          />
        </svg>
      </div>
      <section id='destinations' className='py-24 bg-[#F5F5F0]'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#0A3D62] mb-6'>
              Featured Dive Journeys
            </h2>

            <p className='text-lg text-[#0F1E2E]/80 leading-relaxed'>
              From remote coral reefs to legendary wrecks, these dive journeys
              invite you to explore the ocean in its many expressions - from
              calm, contemplative dives to more intense encounters.
              <br />
              <br />
              Each destination moves at its own rhythm, leaving space to
              observe, feel and dive at your own pace.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className='group relative h-125 rounded-3xl overflow-hidden shadow-xl cursor-pointer'
              >
                <Image
                  src={dest.image}
                  alt={dest.alt}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#0A3D62] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300' />
                <div className='absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-2xl font-merriweather font-bold text-white mb-2'>
                    {dest.name}
                  </h3>
                  <p className='text-[#6DD5ED] font-medium mb-3'>
                    {dest.region}
                  </p>
                  <p className='text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100'>
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations
