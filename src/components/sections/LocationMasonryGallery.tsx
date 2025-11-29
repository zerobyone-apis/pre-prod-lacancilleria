import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  poster?: string;
  span?: string;
}

const VideoItem = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm cursor-pointer group',
        item.span
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Play icon - only on hover */}
      <div className="absolute top-3 left-3 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Play className="w-4 h-4 fill-current" />
      </div>
      <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  );
};

const ImageItem = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm cursor-pointer group',
        item.span
      )}
      onClick={onClick}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Image icon - only on hover */}
      <div className="absolute top-3 left-3 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ImageIcon className="w-4 h-4" />
      </div>
      <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  );
};

export const LocationMasonryGallery = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  // Grid layout: 4 columns, items positioned to fill all gaps
  const items: GalleryItem[] = [
    // Row 1-2: Large image spanning 2x2
    { src: '/images/location-aerial.jpg', alt: 'Vista aérea', type: 'image', span: 'col-span-2 row-span-2' },
    // Row 1: Two single items
    { src: '/images/nearby-beach.jpg', alt: 'Playa', type: 'image' },
    { src: '/images/nearby-marina.jpg', alt: 'Marina', type: 'video', poster: '/images/nearby-marina.jpg' },
    // Row 2: Two single items (fills beside the 2x2)
    { src: '/images/nearby-golf.jpg', alt: 'Golf', type: 'video', poster: '/images/nearby-golf.jpg' },
    { src: '/images/nearby-restaurants.jpg', alt: 'Restaurantes', type: 'image' },
    // Row 3: Four single items
    { src: '/images/location-hero.jpg', alt: 'Ubicación', type: 'image' },
    { src: '/images/estate-gallery-1.jpg', alt: 'Estate vista', type: 'video', poster: '/images/estate-gallery-1.jpg' },
    { src: '/images/estate-gallery-2.jpg', alt: 'Estate jardín', type: 'image' },
    { src: '/images/estate-gallery-3.jpg', alt: 'Estate piscina', type: 'image' },
    // Row 4: Wide image + two singles
    { src: '/images/house-hero.jpg', alt: 'Casa principal', type: 'image', span: 'col-span-2' },
    { src: '/images/house-gallery-1.jpg', alt: 'Interior', type: 'video', poster: '/images/house-gallery-1.jpg' },
    { src: '/images/house-gallery-2.jpg', alt: 'Terraza', type: 'image' },
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
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  };

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-center">
            {t('location.gallery.title')}
          </h2>
        </div>
        
        <div className="w-full px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[200px] gap-2 md:gap-3">
            {items.map((item, index) => (
              item.type === 'video' ? (
                <VideoItem
                  key={index}
                  item={item}
                  onClick={() => openLightbox(index)}
                />
              ) : (
                <ImageItem
                  key={index}
                  item={item}
                  onClick={() => openLightbox(index)}
                />
              )
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && selectedItem && (
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

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <video
                ref={lightboxVideoRef}
                src={selectedItem.src}
                poster={selectedItem.poster}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-w-full max-h-full object-contain"
              />
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 hover:bg-background"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 hover:bg-background"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 px-4 py-2 rounded-full flex items-center gap-2">
              {selectedItem.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};