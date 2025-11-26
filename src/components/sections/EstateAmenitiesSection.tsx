import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const EstateAmenitiesSection = () => {
  const { t } = useTranslation();
  
  const amenities = [
    { id: 'clubhouse', image: '/images/estate-gallery-1.jpg' },
    { id: 'fitness', image: '/images/estate-gallery-4.jpg' },
    { id: 'tennis', image: '/images/estate-gallery-3.jpg' },
    { id: 'pool', image: '/images/estate-gallery-2.jpg' },
    { id: 'security', image: '/images/estate-gallery-6.jpg' },
    { id: 'concierge', image: '/images/estate-gallery-5.jpg' }
  ];

  return (
    <Section>
      <SectionHeader
        title={t('estate.amenities.title')}
        align="center"
        className="mb-16"
      />
      <div className="space-y-24">
        {amenities.map((amenity, index) => (
          <div
            key={amenity.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 0 ? '' : 'lg:grid-flow-dense'
            }`}
          >
            <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
              <img
                src={amenity.image}
                alt={t(`estate.amenities.items.${amenity.id}.title`)}
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </div>
            <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                {t(`estate.amenities.items.${amenity.id}.title`)}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(`estate.amenities.items.${amenity.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
