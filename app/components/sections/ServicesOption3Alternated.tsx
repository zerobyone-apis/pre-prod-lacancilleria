import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { TwoColumn } from '@/components/ui/TwoColumn';

export const ServicesOption3Alternated = () => {
  const { t } = useTranslation();
  const itemsRef = useGsapStagger('.service-alternated');

  const services = [
    {
      key: 'housekeeping',
      title: 'Housekeeping / Cleaning',
      description: 'Professional daily cleaning and housekeeping services to maintain your residence in pristine condition. Our trained staff ensures every corner shines.',
      image: '/images/service-housekeeping.jpg'
    },
    {
      key: 'laundry',
      title: 'Laundry / Wardrobe',
      description: 'Complete laundry service and professional wardrobe management. From washing to ironing and organizing, we handle your clothing with the utmost care.',
      image: '/images/service-laundry.jpg'
    },
    {
      key: 'garden',
      title: 'Garden / Exterior Maintenance',
      description: 'Expert landscaping and exterior upkeep services to maintain the beauty of your grounds. Regular pruning, lawn care, and seasonal plantings.',
      image: '/images/service-garden.jpg'
    },
    {
      key: 'pool',
      title: 'Pool Maintenance / Technician',
      description: 'Professional pool cleaning and technical support year-round. Water testing, chemical balance, equipment maintenance, and cleaning services.',
      image: '/images/service-pool.jpg'
    },
    {
      key: 'property',
      title: 'Property / Estate Maintenance',
      description: 'Comprehensive property maintenance and repair services. From minor fixes to major renovations, our skilled technicians keep your property in top condition.',
      image: '/images/service-maintenance.jpg'
    }
  ];

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title="Option 3: Layout Alternado con Imágenes"
        description="Diseño visual con imágenes ilustrativas"
        align="center"
        className="mb-16"
      />
      <div ref={itemsRef} className="space-y-24">
        {services.map((service, index) => (
          <div key={service.key} className="service-alternated">
            <TwoColumn
              reverse={index % 2 === 1}
              left={
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              }
              right={
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              }
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
