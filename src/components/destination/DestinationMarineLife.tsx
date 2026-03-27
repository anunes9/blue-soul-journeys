import { Fish } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ScrollReveal'
import type { Destination } from '@/data/destinations'

const DestinationMarineLife = ({
  slug,
}: {
  slug: string
  destination: Destination
}) => {
  const t = useTranslations('destinationPage')
  const td = useTranslations('destinationData')

  const marineLife = td.raw(`${slug}.marineLife` as never) as string[]

  if (!Array.isArray(marineLife) || marineLife.length === 0) return null

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <Fish className="w-4 h-4 text-ocean-deep" />
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  {t('marineLifeLabel')}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3 justify-center">
            {marineLife.map((species, index) => (
              <ScrollReveal key={species} animation="fade-up" delay={index * 40}>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-aqua/30 hover:border-aqua/60 hover:shadow-md transition-all duration-300 group cursor-default">
                  <Fish className="w-3.5 h-3.5 text-aqua shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-navy font-medium text-sm whitespace-nowrap">
                    {species}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationMarineLife
