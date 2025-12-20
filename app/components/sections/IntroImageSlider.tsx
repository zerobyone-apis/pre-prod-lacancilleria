'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Trans } from 'react-i18next';

interface SlideCaption {
  title?: string;
  subtitle?: string;
}

interface IntroImageSliderProps {
  images: string[];
  showTextOverlay?: boolean;
  captions?: SlideCaption[];
}

export const IntroImageSlider = ({
  images,
  showTextOverlay = false,
  captions = [],
}: IntroImageSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full rounded-[6px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] bg-nieve">
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 sm:gap-6">
          {images.map((src, i) => {
            const caption = captions[i];

            return (
              <div key={i} className="flex-[0_0_100%]">
                {/* SLIDE WRAPPER */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-[6px]">
                  <Image
                    src={src}
                    alt={`Slide ${i}`}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                  />

                  {/* === LUXURY BOTTOM GRADIENT OVERLAY === */}
                  {showTextOverlay && caption && (
                    <>
                      <div
                        className="
                          hidden md:block
                          absolute bottom-0 inset-x-0 
                          h-[45%] 
                          bg-gradient-to-t 
                          from-black/60 via-black/20 to-transparent
                          pointer-events-none
                          z-10
                        "
                      />

                      {/* TEXT OVER GRADIENT */}
                      <div
                        className="
                          hidden md:block
                          absolute bottom-10 left-1/2 -translate-x-1/2 
                          z-20 text-center text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]
                        "
                      >
                        {caption.title && (
                          <h3 className="text-[22px] sm:text-[26px] font-serif font-light tracking-wide">
                            <Trans i18nKey={caption.title} />
                          </h3>
                        )}

                        {caption.subtitle && (
                          <p className="text-sm sm:text-[15px] opacity-90 mt-1 mb-5">
                            <Trans i18nKey={caption.subtitle} />
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* MOBILE CAPTION (fuera del slide) */}
                {showTextOverlay && caption && (
                  <div className="block md:hidden w-full px-4 py-5 text-center">
                    {caption.title && (
                      <h3 className="text-[18px] font-serif text-mar">
                        <Trans i18nKey={caption.title} />
                      </h3>
                    )}

                    {caption.subtitle && (
                      <p className="text-[14px] text-mar/80 mt-1 ">
                        <Trans i18nKey={caption.subtitle} />
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="
          absolute left-3 sm:left-6 top-1/2 -translate-y-1/2
          flex items-center justify-center
          h-8 w-8 sm:h-10 sm:w-10
          rounded-full
          bg-nieve/70 backdrop-blur-sm
          border border-[#E8E2D9]
          shadow-[0_3px_10px_rgba(0,0,0,0.12)]
          hover:bg-nieve hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]
          transition-all duration-300
        "
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-mar/70" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="
          absolute right-3 sm:right-6 top-1/2 -translate-y-1/2
          flex items-center justify-center
          h-8 w-8 sm:h-10 sm:w-10
          rounded-full
          bg-nieve/70 backdrop-blur-sm
          border border-[#E8E2D9]
          shadow-[0_3px_10px_rgba(0,0,0,0.12)]
          hover:bg-nieve hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]
          transition-all duration-300
        "
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-mar/70" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`
              rounded-full border border-[#E8E2D9] transition-all
              ${
                selectedIndex === i
                  ? 'bg-[#E8E2D9] shadow-[0_0_6px_rgba(0,0,0,0.20)] scale-110'
                  : 'bg-transparent opacity-60'
              }
              h-2 w-2 sm:h-2.5 sm:w-2.5
            `}
          />
        ))}
      </div>
    </div>
  );
};
