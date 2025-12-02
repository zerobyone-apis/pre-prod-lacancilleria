import { useTranslation } from 'react-i18next';
import { Section } from '@/app/components/layout/Section';
import { SectionHeader } from '@/app/components/ui/SectionHeader';

export const EstateAmenitiesSection = () => {
  const { t } = useTranslation();
  
  const amenities = [
    { id: 'clubhouse', image: '/images/estate-gallery-1.jpg', imagePosition: 'right' },
    { id: 'fitness', image: '/images/estate-gallery-4.jpg', imagePosition: 'left' },
    { id: 'tennis', image: '/images/estate-gallery-3.jpg', imagePosition: 'right' },
    { id: 'pool', image: '/images/estate-gallery-2.jpg', imagePosition: 'left' },
    { id: 'security', image: '/images/estate-gallery-6.jpg', imagePosition: 'right' }
  ];

  return (
    <Section>
      <SectionHeader
        label={t('estate.amenities.label')}
        title={t('estate.amenities.title')}
        align="center"
        className="mb-16 md:mb-24"
      />
      
      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block" />
        
        {/* Timeline Items */}
        <div className="space-y-16 md:space-y-24">
          {amenities.map((amenity, index) => (
            <div key={amenity.id} className="relative">
              <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                amenity.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className={`${
                  amenity.imagePosition === 'right' 
                    ? 'md:text-right md:pr-12' 
                    : 'md:text-left md:pl-12 md:order-2'
                }`}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif">
                    {t(`estate.amenities.items.${amenity.id}.title`)}
                  </h3>
                </div>

                {/* Image */}
                <div className={`${
                  amenity.imagePosition === 'left' ? 'md:order-1' : ''
                }`}>
                  <div className="relative overflow-hidden rounded-sm group aspect-[4/3]">
                    <img
                      src={amenity.image}
                      alt={t(`estate.amenities.items.${amenity.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
