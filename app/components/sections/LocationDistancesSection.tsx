'use client';

import { Trans } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import { LocationDistancesMobileProps } from '../../location/ILocationDistance';

export const LocationDistancesSection = ({
  title,
  description,
  items,
}: LocationDistancesMobileProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Primer item activo por defecto
  useEffect(() => {
    if (items.length > 0) setHoveredId(items[0].key);
  }, [items]);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [imagePosition, setImagePosition] = useState(0);

  useLayoutEffect(() => {
    if (!hoveredId || !containerRef.current) return;

    const item = itemRefs.current[hoveredId];
    if (!item) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    let targetY = itemRect.top + itemRect.height / 2 - containerRect.top;

    // límites
    const imageSize = 360;
    const maxY = containerRect.height - imageSize;
    const minY = 20;

    targetY = Math.max(minY, Math.min(targetY - imageSize / 2, maxY));

    setImagePosition(targetY);
  }, [hoveredId]);

  return (
    <Section className="relative overflow-hidden bg-[#F7F5F1] pb-32">
      <div>
        {/* TÍTULO */}
        <h2 className="text-center font-serif text-mar text-h1-sm md:text-h1-md lg:text-h1-lg leading-tight">
          <Trans i18nKey={title} />
        </h2>
        {/* Description */}
        <h2 className="text-center font-serif text-mar text-[14px] md:text-[22px] lg:text-[22px] leading-tight">
          <Trans i18nKey={description} />
        </h2>
      </div>

      <div
        ref={containerRef}
        className="
          relative z-30 grid grid-cols-1 
          lg:grid-cols-[1fr_0.9fr]
          gap-30 lg:gap-24 mt-20
          pr-10
        "
      >
        {/* LISTADO */}
        <div className="relative space-y-32 pl-20 md:pl-32 lg:pl-40">
          {items.map((item, index) => (
            <div
              key={item.key}
              ref={(el) => {
                itemRefs.current[item.key] = el;
              }}
              className={`group cursor-pointer ${
                index === 0 ? 'mt-20' : ''
              } relative`}
              onMouseEnter={() => setHoveredId(item.key)}
            >
              {/* HIT AREA EXPANDIDA — EXACTAMENTE COMO TU VERSIÓN ORIGINAL */}
              <div
                className="absolute inset-y-0 left-0 right-[-600px] z-20"
                onMouseEnter={() => setHoveredId(item.key)}
                style={{ pointerEvents: 'auto' }}
              />

              {/* TEXTO */}
              <p
                className={`
          text-h2-sm md:text-h2-md transition-colors duration-300
          ${hoveredId === item.key ? 'text-piel' : 'text-mar/70'}
          group-hover:text-piel
        `}
              >
                <Trans i18nKey={item.label} />
              </p>

              {/* LÍNEA */}
              <div className="relative mt-4 h-px w-full max-w-xl">
                <div
                  className={`
            absolute left-0 top-0 h-px bg-piel
            transition-all duration-700
            ${hoveredId === item.key ? 'w-full' : 'w-0'}
          `}
                />
                <span
                  className={`
            absolute right-0 top-1/2 -translate-y-1/2
            w-3 h-3 rounded-full bg-piel
            transition-opacity duration-300
            ${hoveredId === item.key ? 'opacity-100' : 'opacity-0'}
          `}
                />
              </div>
            </div>
          ))}
        </div>

        {/* IMAGEN FLOTANTE */}
        <div className="relative h-full min-h-[900px]">
          {items.map((item) => (
            <img
              key={item.key}
              src={item.image}
              alt=""
              className={`
                absolute left-0 w-[500px] h-[400px] object-cover rounded-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                transition-opacity duration-500
                ${hoveredId === item.key ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ top: imagePosition }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
