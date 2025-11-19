import { ImageCard } from './ImageCard';
import { cn } from '@/lib/utils';

interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const ImageGrid = ({ images, columns = 3, className }: ImageGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <div className={cn('grid grid-cols-1 gap-4', gridCols[columns], className)}>
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
  );
};
