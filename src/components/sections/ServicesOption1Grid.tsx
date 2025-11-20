import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { Sparkles, Shirt, Trees, Droplets, Wrench } from 'lucide-react';

export const ServicesOption1Grid = () => {
  const { t } = useTranslation();
  const gridRef = useGsapStagger('.service-card');

  const services = [
    {
      key: 'housekeeping',
      icon: Sparkles,
      title: 'Housekeeping / Cleaning',
      description: 'Professional daily cleaning and housekeeping services'
    },
    {
      key: 'laundry',
      icon: Shirt,
      title: 'Laundry / Wardrobe',
      description: 'Complete laundry service and wardrobe management'
    },
    {
      key: 'garden',
      icon: Trees,
      title: 'Garden / Exterior Maintenance',
      description: 'Landscaping and exterior upkeep services'
    },
    {
      key: 'pool',
      icon: Droplets,
      title: 'Pool Maintenance / Technician',
      description: 'Professional pool cleaning and technical support'
    },
    {
      key: 'property',
      icon: Wrench,
      title: 'Property / Estate Maintenance',
      description: 'Comprehensive property maintenance and repairs'
    }
  ];

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title="Option 1: Grid de Cards con Iconos"
        description="Grid responsive con hover effects y diseño moderno"
        align="center"
        className="mb-16"
      />
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.key}
            className="service-card group relative bg-background border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
