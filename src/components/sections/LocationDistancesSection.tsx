import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useState } from 'react';

const DISTANCES = [
  {
    id: 'pde-airport',
    title: '16 miles from Punta del Este Airport',
    image: '/images/location-aerial.jpg'
  },
  {
    id: 'carrasco',
    title: '70 miles from Carrasco Airport',
    image: '/images/estate-entrance.jpg'
  },
  {
    id: 'montoya',
    title: '5-minute walk to Playa Montoya',
    image: '/images/nearby-beach.jpg'
  },
  {
    id: 'bikini',
    title: '7 minutes to Playa Bikini',
    image: '/images/house-intro.jpg'
  },
  {
    id: 'labarra',
    title: '3 minutes to La Barra restaurants and nightlife',
    image: '/images/nearby-restaurants.jpg'
  }
];

export const LocationDistancesSection = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif">
              Easily accessible. Perfectly secluded
            </h2>
          </div>
          
          <div className="space-y-1">
            {DISTANCES.map((distance) => (
              <div
                key={distance.id}
                className="relative group"
                onMouseEnter={() => setHoveredId(distance.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative py-4 cursor-pointer">
                  <p className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                    {distance.title}
                  </p>
                  <div className={`absolute left-0 bottom-0 h-[1px] bg-accent transition-all duration-500 ${
                    hoveredId === distance.id ? 'w-full' : 'w-0'
                  }`}>
                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent transition-opacity duration-300 ${
                      hoveredId === distance.id ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-secondary/30">
          {DISTANCES.map((distance) => (
            <img
              key={distance.id}
              src={distance.image}
              alt={distance.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hoveredId === distance.id ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </div>
    </Section>
  );
};
