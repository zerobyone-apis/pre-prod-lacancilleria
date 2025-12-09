'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGsapStagger } from '@/app/hooks/useGsapAnimation';
import { Trans, useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeCTASection } from './HomeCTASection';

interface TimelineItem {
  text: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export const TimelineSection = () => {
  const { t } = useTranslation();

  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const timelineItems: TimelineItem[] = [
    {
      text: t('home.timeline.oceanBreezes'),
      image: '/images/home/timeline/room.jpg',
      imagePosition: 'right',
    },
    {
      text: t('home.timeline.alfrescoLunches'),
      image: '/images/home/timeline/familly.jpg',
      imagePosition: 'left',
    },
    {
      text: t('home.timeline.vibrantScene'),
      image: '/images/home/timeline/punta_pic.webp',
      imagePosition: 'right',
    },
    {
      text: t('home.timeline.laBarraJoseIgnacio'),
      image: '/images/nearby-restaurants.jpg',
      imagePosition: 'left',
    },
  ];

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top center',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 85%', // empieza ANTES = mucho más fluido
          end: 'bottom 100%', // acompaña TODO el scroll del timeline
          scrub: 0.5, // súper suave sin delay
        },
      }
    );
  }, []);

  return (
    <section
      className="
    relative overflow-hidden text-mar px-4 md:px-8 lg:px-12 pt-28 pb-12 md:pb-12 md:pt-60
    bg-gradient-to-b 
    from-[#E6DCCF] 
    to-[#F7F5F1]
  "
    >
      {/* PALM SHADOWS — versión editable */}
      <div className="pointer-events-none absolute inset-x-0 top-0 w-full h-[500px] overflow-visible">
        {/* Palma derecha */}
        <div
          className="absolute"
          style={{
            top: '150px', // mueve arriba/abajo
            left: '-60px', // mueve hacia la derecha
            transform: 'scale(1.5)', // escala más grande
            opacity: 0.9, // suavizado elegante
          }}
        >
          <Image
            src="/images/home/shadows/Recursos/Re_2.png"
            alt=""
            width={1200}
            height={700}
            className="object-contain"
            priority
          />
        </div>

        {/* Palma Izquierda */}
        <div
          className="absolute"
          style={{
            top: '140px',
            right: '-0px',
            transform: 'scale(1.5) scaleX(-1)', // espejado + escala
            opacity: 0.9,
          }}
        >
          <Image
            src="/images/home/shadows/Recursos/Re_2.png"
            alt=""
            width={1200}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* SOFT BOTTOM GRADIENT */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(243,231,218,0) 0%, #f7f5f1 100%)',
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-h1 font-serif text-center mb-28 leading-[1.2]">
          <Trans i18nKey="home.timeline.title" />
        </h2>

        {/* TIMELINE CONTAINER (REAL) */}
        <div ref={timelineRef} className="relative pb-[150px]">
          {/* VERTICAL LINE */}
          <div
            ref={lineRef}
            className="
              hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px]
              bg-gradient-to-b
              from-[#b7865f20]
              via-piel
              to-[#b7865f20]
            "
          />

          {/* ITEMS WRAPPER */}
          <div ref={itemsRef} className="space-y-36 md:space-y-44">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item relative">
                {/* DOT */}
                <div
                  className="
                    hidden md:block absolute left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-5 h-5 rounded-full 
                    bg-[#b7865f]
                    shadow-[0_10px_25px_-8px_rgba(0,0,0,0.35)]
                    border-[8px] border-[#f3e7da]
                  "
                />

                {/* GRID */}
                <div
                  className={`
                    grid md:grid-cols-2 gap-14 md:gap-24 items-center
                    ${
                      item.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
                    }
                  `}
                >
                  {/* TEXT */}
                  <div
                    className={`
                      ${
                        item.imagePosition === 'right'
                          ? 'md:text-center md:pr-14'
                          : 'md:pl-14 md:text-center md:order-2'
                      }
                    `}
                  >
                    <p className="text-h2 text-mar/90 leading-[1.35] md:max-w-[380px]">
                      <Trans i18nKey={item.text} />
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`${
                      item.imagePosition === 'left' ? 'md:order-1' : ''
                    }`}
                  >
                    <div
                      className="
                        relative w-[220px] h-[220px]
                        md:w-[280px] md:h-[280px]
                        lg:w-[320px] lg:h-[320px]
                        mx-auto rounded-[8px]
                        overflow-hidden
                        shadow-[0_40px_70px_-40px_rgba(0,0,0,0.50)]
                        transition-all duration-500
                        group
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.text}
                        fill
                        className="object-cover duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BACKGROUND SHADOW DECORATION */}
        <div
          className="absolute"
          style={{
            top: '1900px',
            right: '-420px',
            transform: 'rotate(-270deg) scale(1.1) scaleX(-1)',
            opacity: 0.8,
          }}
        >
          <Image
            src="/images/home/shadows/Recursos/Re_3.png"
            alt=""
            width={1200}
            height={600}
            className="object-contain"
            priority
          />
        </div>
        {/* CTA BELOW LINE */}
        <HomeCTASection />
      </div>
    </section>
  );
};
