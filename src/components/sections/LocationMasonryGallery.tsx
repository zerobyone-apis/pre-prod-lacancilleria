import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Image as ImageIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  poster?: string;
  span?: string;
}

interface ItemProps {
  item: GalleryItem;
  index: number;
  isExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
}

const VideoItem = ({ item, index, isExpanded, onClick, onClose }: ItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current && !isExpanded) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isExpanded) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExpanded) {
      onClose();
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      onClick();
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm cursor-pointer group transition-all duration-500 ease-out',
        item.span,
        isExpanded && 'col-span-2 row-span-2 z-20'
      )}
      onClick={handleClick}
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
        controls={isExpanded}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      {/* Play icon - bottom right on hover */}
      <div className={cn(
        "absolute bottom-3 right-3 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm transition-opacity duration-300",
        isExpanded ? "opacity-0" : "opacity-0 group-hover:opacity-100"
      )}>
        <Play className="w-4 h-4 fill-current" />
      </div>
      {/* Close button when expanded */}
      {isExpanded && (
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      <div className={cn(
        "absolute inset-0 transition-colors duration-300",
        isExpanded ? "bg-transparent" : "bg-background/10 group-hover:bg-transparent"
      )} />
    </div>
  );
};

const ImageItem = ({ item, index, isExpanded, onClick, onClose }: ItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExpanded) {
      onClose();
    } else {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm cursor-pointer group transition-all duration-500 ease-out',
        item.span,
        isExpanded && 'col-span-2 row-span-2 z-20'
      )}
      onClick={handleClick}
    >
      <img
        src={item.src}
        alt={item.alt}
        className={cn(
          "w-full h-full object-cover transition-transform duration-500",
          !isExpanded && "group-hover:scale-110"
        )}
      />
      {/* Image icon - bottom right on hover */}
      <div className={cn(
        "absolute bottom-3 right-3 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm transition-opacity duration-300",
        isExpanded ? "opacity-0" : "opacity-0 group-hover:opacity-100"
      )}>
        <ImageIcon className="w-4 h-4" />
      </div>
      {/* Close button when expanded */}
      {isExpanded && (
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      <div className={cn(
        "absolute inset-0 transition-colors duration-300",
        isExpanded ? "bg-transparent" : "bg-background/10 group-hover:bg-transparent"
      )} />
    </div>
  );
};

export const LocationMasonryGallery = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Mix of vertical (row-span-2), horizontal (col-span-2), and square items
  const items: GalleryItem[] = [
    // Vertical tall image
    { src: '/images/location-aerial.jpg', alt: 'Vista aérea', type: 'image', span: 'row-span-2' },
    // Horizontal wide
    { src: '/images/nearby-beach.jpg', alt: 'Playa', type: 'image', span: 'col-span-2' },
    // Square
    { src: '/images/nearby-marina.jpg', alt: 'Marina', type: 'video', poster: '/images/nearby-marina.jpg' },
    // Vertical tall video
    { src: '/images/nearby-golf.jpg', alt: 'Golf', type: 'video', poster: '/images/nearby-golf.jpg', span: 'row-span-2' },
    // Square
    { src: '/images/nearby-restaurants.jpg', alt: 'Restaurantes', type: 'image' },
    // Square
    { src: '/images/location-hero.jpg', alt: 'Ubicación', type: 'image' },
    // Horizontal wide video
    { src: '/images/estate-gallery-1.jpg', alt: 'Estate vista', type: 'video', poster: '/images/estate-gallery-1.jpg', span: 'col-span-2' },
    // Vertical tall
    { src: '/images/estate-gallery-2.jpg', alt: 'Estate jardín', type: 'image', span: 'row-span-2' },
    // Square
    { src: '/images/estate-gallery-3.jpg', alt: 'Estate piscina', type: 'image' },
    // Horizontal wide
    { src: '/images/house-hero.jpg', alt: 'Casa principal', type: 'image', span: 'col-span-2' },
    // Square video
    { src: '/images/house-gallery-1.jpg', alt: 'Interior', type: 'video', poster: '/images/house-gallery-1.jpg' },
    // Square
    { src: '/images/house-gallery-2.jpg', alt: 'Terraza', type: 'image' },
  ];

  const handleExpand = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-center">
          {t('location.gallery.title')}
        </h2>
      </div>
      
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[100px] md:auto-rows-[180px] gap-2 md:gap-3">
          {items.map((item, index) => (
            item.type === 'video' ? (
              <VideoItem
                key={index}
                item={item}
                index={index}
                isExpanded={expandedIndex === index}
                onClick={() => handleExpand(index)}
                onClose={handleClose}
              />
            ) : (
              <ImageItem
                key={index}
                item={item}
                index={index}
                isExpanded={expandedIndex === index}
                onClick={() => handleExpand(index)}
                onClose={handleClose}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
};
