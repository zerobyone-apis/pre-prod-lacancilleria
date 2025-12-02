import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useState } from 'react';

const DISTANCE_KEYS = ['pde-airport', 'carrasco', 'montoya', 'bikini', 'labarra'] as const;

const DISTANCE_IMAGES: Record<string, string> = {
  'pde-airport': '/images/location-aerial.jpg',
  'carrasco': '/images/estate-entrance.jpg',
  'montoya': '/images/nearby-beach.jpg',
  'bikini': '/images/house-intro.jpg',
  'labarra': '/images/nearby-restaurants.jpg'
};

export const LocationDistancesSection = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif">
              {t('location.distances.title')}
            </h2>
          </div>
          
          <div className="space-y-1">
            {DISTANCE_KEYS.map((key) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setHoveredId(key)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative py-4 cursor-pointer">
                  <p className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                    {t(`location.distances.items.${key}`)}
                  </p>
                  <div className={`absolute left-0 bottom-0 h-[1px] bg-accent transition-all duration-500 ${
                    hoveredId === key ? 'w-full' : 'w-0'
                  }`}>
                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent transition-opacity duration-300 ${
                      hoveredId === key ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-secondary/30">
          {DISTANCE_KEYS.map((key) => (
            <img
              key={key}
              src={DISTANCE_IMAGES[key]}
              alt={t(`location.distances.items.${key}`)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hoveredId === key ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </div>
    </Section>
  );
};
