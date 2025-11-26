import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const EstateAmenitiesSection = () => {
  const { t } = useTranslation();
  
  const amenities = [
    { id: 'clubhouse', image: '/images/estate-gallery-1.jpg', size: 'large' },
    { id: 'fitness', image: '/images/estate-gallery-4.jpg', size: 'small' },
    { id: 'tennis', image: '/images/estate-gallery-3.jpg', size: 'medium' },
    { id: 'pool', image: '/images/estate-gallery-2.jpg', size: 'small' },
    { id: 'security', image: '/images/estate-gallery-6.jpg', size: 'large' }
  ];

  return (
    <Section>
      <SectionHeader
        label={t('estate.amenities.label')}
        title={t('estate.amenities.title')}
        align="center"
        className="mb-20"
      />
      
      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
        
        {/* Timeline Items */}
        <div className="space-y-16 lg:space-y-24">
          {amenities.map((amenity, index) => {
            const isLeft = index % 2 === 0;
            const sizeClasses = {
              small: 'w-32 h-32',
              medium: 'w-40 h-40',
              large: 'w-48 h-48'
            };
            
            return (
              <div
                key={amenity.id}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  isLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                  <h3 className="text-2xl md:text-3xl font-serif mb-3">
                    {t(`estate.amenities.items.${amenity.id}.title`)}
                  </h3>
                </div>
                
                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                
                {/* Image Side */}
                <div className="flex-1 flex justify-center">
                  <div className={`relative overflow-hidden rounded-sm group ${sizeClasses[amenity.size as keyof typeof sizeClasses]}`}>
                    <img
                      src={amenity.image}
                      alt={t(`estate.amenities.items.${amenity.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
