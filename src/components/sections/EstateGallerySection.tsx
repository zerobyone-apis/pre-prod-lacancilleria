import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImageGrid } from '@/components/ui/ImageGrid';

export const EstateGallerySection = () => {
  const { t } = useTranslation();

  const images = [
    { src: '/images/estate-gallery-1.jpg', alt: 'Clubhouse' },
    { src: '/images/estate-gallery-2.jpg', alt: 'Pool area' },
    { src: '/images/estate-gallery-3.jpg', alt: 'Tennis courts' },
    { src: '/images/estate-gallery-4.jpg', alt: 'Fitness center' },
    { src: '/images/estate-gallery-5.jpg', alt: 'Gardens' },
    { src: '/images/estate-gallery-6.jpg', alt: 'Common areas' }
  ];

  return (
    <Section>
      <SectionHeader
        title={t('estate.gallery.title')}
        align="center"
        className="mb-16"
      />
      <ImageGrid images={images} columns={3} />
    </Section>
  );
};
