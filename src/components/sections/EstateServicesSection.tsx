import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useState } from 'react';
import { cn } from '@/lib/utils';

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
  const [hoveredId, setHoveredId] = useState<string | null>(SERVICES[0].id);

  return (
    <Section>
      <SectionHeader
        title={t('estate.services.title')}
        description={t('estate.services.description')}
        align="center"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Services List */}
        <div className="space-y-1">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onTouchStart={() => setHoveredId(service.id)}
              className={cn(
                'w-full text-left py-6 px-4 border-b border-border transition-all duration-300',
                hoveredId === service.id 
                  ? 'text-foreground bg-secondary/30' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/10'
              )}
            >
              <h3 className="text-2xl md:text-3xl font-serif">
                {service.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={cn(
                'absolute inset-0 transition-opacity duration-500',
                hoveredId === service.id ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
