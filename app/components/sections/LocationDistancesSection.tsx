'use client';

import { Trans, useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';

const DISTANCE_KEYS = [
  'pde-airport',
  'carrasco',
  'montoya',
  'bikini',
  'labarra',
] as const;

const DISTANCE_IMAGES: Record<string, string> = {
  'pde-airport': '/images/location/easy_access/pde_airport.webp',
  carrasco: '/images/location/easy_access/carrasco_airport.jpg',
  montoya: '/images/location/easy_access/montoya.webp',
  bikini: '/images/location/easy_access/bikini_beach.jpg', 
  labarra: '/images/location/easy_access/labarra.webp',
};

export const LocationDistancesSection = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Primer item activo por defecto
  useEffect(() => {
    setHoveredId(DISTANCE_KEYS[0]);
  }, []);

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

    // Límites para no salir del área
    const imageSize = 360; // ahora cuadrada
    const maxY = containerRect.height - imageSize;
    const minY = 20;

    targetY = Math.max(minY, Math.min(targetY - imageSize / 2, maxY));

    setImagePosition(targetY);
  }, [hoveredId]);

  useEffect(() => {
    setHoveredId(DISTANCE_KEYS[0]);
  }, []);

  return (
    <Section className="relative overflow-hidden bg-[#F7F5F1] pb-32">
      {/* FONDO SOMBRA */}

      {/* SHADOWS ABOVE GRADIENT */}
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible z-[20]">
        {/* SHADOW LEFT */}
        <Image
          src="/images/home/shadows/Recursos/Re_3.png"
          alt=""
          width={900}
          height={600}
          className={`
              absolute opacity-90
              hidden md:block
              md:top-[-40px] md:left-[-130px] md:scale-[0.9]
              lg:top-[40px] lg:left-[50px] lg:scale-[1.2]
              xl:top-[40px] xl:left-[10px] xl:scale-[1.3]
            `}
          style={{ objectFit: 'contain' }}
        />

        {/* SHADOW RIGHT */}
        <Image
          src="/images/location/shadows/Re_4_edited.png"
          alt=""
          width={900}
          height={600}
          className={`
            absolute opacity-90
            hidden md:block
            md:top-[220px] md:right-[-100px] md:scale-[0.5]
            lg:top-[100px] lg:right-[200px] lg:scale-[1.6]
            xl:top-[120px] xl:right-[60px] xl:scale-[1.8]
          `}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* TÍTULO */}
      <h2 className="mt-16 text-center font-serif text-mar text-[32px] md:text-[48px] lg:text-[54px] leading-tight">
        <Trans i18nKey="location.distances.title" />
      </h2>

      {/* GRID AJUSTADO PARA CENTRAR LISTADO */}
      <div
        ref={containerRef}
        className="
          relative z-30 grid grid-cols-1 
          lg:grid-cols-[1fr_0.9fr] 
          gap-30 lg:gap-24 mt-20
          pr-10
        "
      >
        {/* LISTADO IZQUIERDA (más centrado ahora) */}
        <div className="relative space-y-32 pl-20 md:pl-32 lg:pl-40">
          {DISTANCE_KEYS.map((key, index) => (
            <div
              key={key}
              ref={(el) => {
                itemRefs.current[key] = el;
              }}
              className={`group cursor-pointer ${
                index === 0 ? 'mt-20' : ''
              } relative`}
              onMouseEnter={() => setHoveredId(key)}
          
            >
              {/* HIT AREA EXPANDIDA */}
              <div
                className="absolute inset-y-0 left-0 right-[-600px] z-20"
                onMouseEnter={() => setHoveredId(key)}
               
                style={{ pointerEvents: 'auto' }}
              />

              <p
                className={`
                  text-[26px] md:text-[30px] leading-snug transition-colors duration-300
                  ${hoveredId === key ? 'text-piel' : 'text-mar/70'}
                  group-hover:text-piel
                `}
              >
                <Trans i18nKey={`location.distances.items.${key}`} />
              </p>

              {/* LINEA */}
              <div className="relative mt-4 h-px w-full max-w-xl">
                <div
                  className={`
                    absolute left-0 top-0 h-px bg-piel
                    transition-all duration-700
                    ${hoveredId === key ? 'w-full' : 'w-0'}
                  `}
                />
                <span
                  className={`
                    absolute right-0 top-1/2 -translate-y-1/2
                    w-3 h-3 rounded-full bg-piel
                    transition-opacity duration-300
                    ${hoveredId === key ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              </div>
            </div>
          ))}
        </div>

        {/* IMAGEN CUADRADA CON SOMBRA FLOTANTE */}
        <div className="relative h-full min-h-[900px]">
          {DISTANCE_KEYS.map((key) => (
            <img
              key={key}
              src={DISTANCE_IMAGES[key]}
              alt=""
              className={`
                absolute left-0 w-[500px] h-[400px] object-cover rounded-xl
                transition-opacity duration-500
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                ${hoveredId === key ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                top: imagePosition,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
