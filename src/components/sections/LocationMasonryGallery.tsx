import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  span?: 'row-span-2' | 'col-span-2' | 'row-span-2 col-span-2';
}

export const LocationMasonryGallery = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { src: '/images/location-aerial.jpg', alt: 'Vista aérea', span: 'row-span-2 col-span-2' },
    { src: '/images/nearby-beach.jpg', alt: 'Playa' },
    { src: '/images/nearby-marina.jpg', alt: 'Marina' },
    { src: '/images/nearby-golf.jpg', alt: 'Golf', span: 'row-span-2' },
    { src: '/images/nearby-restaurants.jpg', alt: 'Restaurantes' },
    { src: '/images/location-hero.jpg', alt: 'Ubicación', span: 'col-span-2' },
  ];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center">
            {t('location.gallery.title')}
          </h2>
        </div>
        
        <div className="w-full px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4">
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 px-4 py-2 rounded-full">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
