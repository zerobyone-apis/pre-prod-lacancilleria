import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const EstateExploreSection = () => {
  const { t } = useTranslation();

  const images = [
    { src: '/images/estate-gallery-4.jpg', alt: 'Estate interior 1' },
    { src: '/images/estate-gallery-5.jpg', alt: 'Estate interior 2' },
    { src: '/images/estate-gallery-6.jpg', alt: 'Estate interior 3' }
  ];

  return (
    <Section>
      <SectionHeader
        title={t('estate.explore.title')}
        align="center"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </Section>
  );
};
