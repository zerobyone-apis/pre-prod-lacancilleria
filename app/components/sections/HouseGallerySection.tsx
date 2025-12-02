import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImageGrid } from '@/components/ui/ImageGrid';

export const HouseGallerySection = () => {
  const { t } = useTranslation();

  const images = [
    { src: '/images/house-gallery-1.jpg', alt: 'Living room' },
    { src: '/images/house-gallery-2.jpg', alt: 'Kitchen' },
    { src: '/images/house-gallery-3.jpg', alt: 'Master bedroom' },
    { src: '/images/house-gallery-4.jpg', alt: 'Bathroom' },
    { src: '/images/house-gallery-5.jpg', alt: 'Pool area' },
    { src: '/images/house-gallery-6.jpg', alt: 'Terrace' }
  ];

  return (
    <Section>
      <SectionHeader
        title={t('house.gallery.title')}
        align="center"
        className="mb-16"
      />
      <ImageGrid images={images} columns={3} />
    </Section>
  );
};
