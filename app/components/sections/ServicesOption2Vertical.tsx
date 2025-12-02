import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { Sparkles, Shirt, Trees, Droplets, Wrench } from 'lucide-react';

export const ServicesOption2Vertical = () => {
  const { t } = useTranslation();
  const listRef = useGsapStagger('.service-item');

  const services = [
    {
      key: 'housekeeping',
      icon: Sparkles,
      title: 'Housekeeping / Cleaning',
      description: 'Professional daily cleaning and housekeeping services for your residence'
    },
    {
      key: 'laundry',
      icon: Shirt,
      title: 'Laundry / Wardrobe',
      description: 'Complete laundry service and wardrobe management with care'
    },
    {
      key: 'garden',
      icon: Trees,
      title: 'Garden / Exterior Maintenance',
      description: 'Expert landscaping and exterior upkeep to maintain pristine grounds'
    },
    {
      key: 'pool',
      icon: Droplets,
      title: 'Pool Maintenance / Technician',
      description: 'Professional pool cleaning and technical support year-round'
    },
    {
      key: 'property',
      icon: Wrench,
      title: 'Property / Estate Maintenance',
      description: 'Comprehensive property maintenance and repair services'
    }
  ];

  return (
    <Section>
      <SectionHeader
        title="Option 2: Lista Vertical Elegante"
        description="Diseño minimalista con líneas divisorias"
        align="center"
        className="mb-16"
      />
      <div ref={listRef} className="max-w-3xl mx-auto space-y-0">
        {services.map((service, index) => (
          <div
            key={service.key}
            className={`service-item flex items-center gap-6 py-8 group hover:bg-muted/50 transition-all duration-300 px-6 rounded-lg ${
              index !== services.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
