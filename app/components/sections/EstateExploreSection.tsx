import { useTranslation } from 'react-i18next';
import { Section } from '@/app/components/layout/Section';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { useState, useEffect } from 'react';

const LEFT_IMAGES = [
  '/images/estate-gallery-1.jpg',
  '/images/estate-gallery-2.jpg',
  '/images/estate-gallery-3.jpg',
];

const RIGHT_IMAGES = [
  '/images/estate-gallery-4.jpg',
  '/images/estate-gallery-5.jpg',
  '/images/estate-gallery-6.jpg',
];

export const EstateExploreSection = () => {
  const { t } = useTranslation();
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % LEFT_IMAGES.length);
    }, 4000);

    const rightInterval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % RIGHT_IMAGES.length);
    }, 5000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <Section>
      <SectionHeader
        title={t('estate.explore.title')}
        align="center"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
        {/* Left sliding images - square */}
        <div className="relative overflow-hidden rounded-lg aspect-square group">
          {LEFT_IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Estate view ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                index === leftIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Slide indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {LEFT_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setLeftIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === leftIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Center video/main content - larger rectangle */}
        <div className="md:col-span-2 relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[16/10] group">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/house-hero.jpg"
          >
            <source src="/videos/estate-tour.mp4" type="video/mp4" />
          </video>
          {/* Fallback image shown when video fails */}
          <img
            src="/images/house-hero.jpg"
            alt="Estate tour"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          
          {/* Play indicator overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1" />
            </div>
          </div>
        </div>

        {/* Right sliding images - square */}
        <div className="relative overflow-hidden rounded-lg aspect-square group">
          {RIGHT_IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Estate view ${index + 4}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                index === rightIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Slide indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {RIGHT_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setRightIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === rightIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
