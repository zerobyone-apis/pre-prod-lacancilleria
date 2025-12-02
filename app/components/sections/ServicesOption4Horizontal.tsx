import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { Sparkles, Shirt, Trees, Droplets, Wrench } from 'lucide-react';

export const ServicesOption4Horizontal = () => {
  const { t } = useTranslation();
  const gridRef = useGsapStagger('.service-horizontal');

  const services = [
    {
      key: 'housekeeping',
      icon: Sparkles,
      title: 'Housekeeping',
      subtitle: 'Cleaning',
      description: 'Daily professional services'
    },
    {
      key: 'laundry',
      icon: Shirt,
      title: 'Laundry',
      subtitle: 'Wardrobe',
      description: 'Complete care service'
    },
    {
      key: 'garden',
      icon: Trees,
      title: 'Garden',
      subtitle: 'Exterior',
      description: 'Landscaping & upkeep'
    },
    {
      key: 'pool',
      icon: Droplets,
      title: 'Pool',
      subtitle: 'Technician',
      description: 'Maintenance & support'
    },
    {
      key: 'property',
      icon: Wrench,
      title: 'Property',
      subtitle: 'Estate',
      description: 'Full maintenance'
    }
  ];

  return (
    <Section>
      <SectionHeader
        title="Option 4: Grid Horizontal con Cards Grandes"
        description="Diseño moderno y espacioso"
        align="center"
        className="mb-16"
      />
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((service) => (
          <div
            key={service.key}
            className="service-horizontal group relative bg-background border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary"
          >
            <div className="flex flex-col items-center text-center space-y-4 h-full">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1">{service.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
