import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useState } from 'react';

const SERVICES = [
  {
    id: 'housekeeping',
    title: 'Housekeeping / Cleaning',
    image: '/images/service-housekeeping.jpg'
  },
  {
    id: 'laundry',
    title: 'Laundry / Wardrobe',
    image: '/images/service-laundry.jpg'
  },
  {
    id: 'garden',
    title: 'Garden / Exterior Maintenance',
    image: '/images/service-garden.jpg'
  },
  {
    id: 'pool',
    title: 'Pool Maintenance / Technician',
    image: '/images/service-pool.jpg'
  },
  {
    id: 'property',
    title: 'Property / Estate Maintenance',
    image: '/images/service-maintenance.jpg'
  }
];

export const EstateServicesSection = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif">
              {t('estate.services.title')}
            </h2>
          </div>
          
          <div className="space-y-1">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="relative group"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative py-4 cursor-pointer">
                  <p className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                    {service.title}
                  </p>
                  <div className={`absolute left-0 bottom-0 h-[1px] bg-accent transition-all duration-500 ${
                    hoveredId === service.id ? 'w-full' : 'w-0'
                  }`}>
                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent transition-opacity duration-300 ${
                      hoveredId === service.id ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-secondary/30">
          {SERVICES.map((service) => (
            <img
              key={service.id}
              src={service.image}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hoveredId === service.id ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </div>
    </Section>
  );
};
