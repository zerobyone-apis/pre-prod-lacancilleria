'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useGsapParallax } from '@/hooks/useGsapAnimation';

interface Props {
  imageSource: string;
  alt?: string;
}

export const ImageDeviderSection = ({
  imageSource,
  alt = 'La Barra, Punta del Este, and José Ignacio area',
}: Props) => {
  const parallaxRef = useGsapParallax(0.5);
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
  }, []);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
      }}
      className="
        relative w-full overflow-hidden
        h-[260px] sm:h-[340px] md:h-screen
      "
    >
      <div className="absolute inset-0 w-full h-[120%]">
        <div ref={parallaxRef} className="w-full h-full">
          <img
            src={imageSource}
            alt={alt}
            className="w-full h-full object-cover object-top md:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
        </div>
      </div>
    </section>
  );
};
