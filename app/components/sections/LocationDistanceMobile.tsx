'use client';

import { Trans } from 'react-i18next';
import { useCenteredCard } from '../../hooks/useCenteredCard';
import { MobileListComponentProps } from '../../types/IMobileListItem';
import { useEffect } from 'react';
import { SwipeHint } from '../SwipeHint';

export const LocationDistancesMobile = ({
  title,
  description,
  items,
}: MobileListComponentProps) => {
  const { containerRef, centerIndex } = useCenteredCard(items.length);

  // Fade-in delays
  useEffect(() => {
    const cards = document.querySelectorAll('.overlay-card');
    cards.forEach((card, i) => {
      (card as HTMLElement).style.animationDelay = `${i * 0.12}s`;
    });
  }, []);

  return (
    <div className="md:hidden px-6 py-14 space-y-14">
      {/* HEADER */}
      <div className="text-center space-y-4">
        <h2 className="font-serif text-mar text-h1-sm leading-tight">
          <Trans i18nKey={title} />
        </h2>
      
        {description && (
          <p className="text-mar/70 font-serif text-body leading-relaxed">
            <Trans i18nKey={description} />
          </p>
        )}
          <SwipeHint />
      </div>
      {/* HORIZONTAL SCROLLER */}
      <div
        ref={containerRef}
        className="
          pt-5 flex gap-6 overflow-x-auto scroll-smooth pb-6
          snap-x snap-mandatory
          touch-pan-y
          [-webkit-overflow-scrolling:touch]
        "
      >
        {items.map((item, index) => {
          const isCenter = index === centerIndex;

          return (
            <div
              key={item.key}
              className={`
                overlay-card relative shrink-0 snap-center pt-10
                w-[78%] h-[320px] rounded-[8px] overflow-hidden
                transition-all duration-500 
                ${
                  isCenter
                    ? 'scale-[1.05]'
                    : 'scale-[0.92] opacity-80 blur-[1px]'
                }
              `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.key}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-all duration-500
                  ${isCenter ? 'brightness-100' : 'brightness-75'}
                `}
              />

              {/* OVERLAY */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  transition-opacity duration-500
                  ${isCenter ? 'opacity-100' : 'opacity-60'}
                `}
              />

              {/* TEXT */}
              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center px-4">
                <p
                  className={`
                    font-serif text-white text-[20px] text-nowrap leading-snug transition-opacity
                    ${isCenter ? 'opacity-100 drop-shadow-xl' : 'opacity-40'}
                  `}
                >
                  <Trans i18nKey={item.label} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
