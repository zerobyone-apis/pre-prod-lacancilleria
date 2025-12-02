import { useTranslation } from 'react-i18next';
import { Section } from '@/app/components/layout/Section';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  span?: string;
}

export const EstateGalleryMasonry = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { src: '/images/estate-gallery-1.jpg', alt: 'Estate view 1', span: 'md:col-span-1 md:row-span-2' },
    { src: '/images/estate-gallery-2.jpg', alt: 'Estate view 2', span: 'md:col-span-1 md:row-span-1' },
    { src: '/images/estate-gallery-3.jpg', alt: 'Estate view 3', span: 'md:col-span-1 md:row-span-2' },
    { src: '/images/estate-gallery-4.jpg', alt: 'Estate view 4', span: 'md:col-span-2 md:row-span-1' },
    { src: '/images/estate-gallery-5.jpg', alt: 'Estate view 5', span: 'md:col-span-1 md:row-span-1' },
    { src: '/images/estate-gallery-6.jpg', alt: 'Estate view 6', span: 'md:col-span-1 md:row-span-1' }
  ];

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToNext = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const goToPrevious = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  return (
    <Section>
      <SectionHeader
        title={t('estate.gallery.title')}
        align="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'relative overflow-hidden rounded-sm cursor-pointer group',
              image.span
            )}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </Section>
  );
};
