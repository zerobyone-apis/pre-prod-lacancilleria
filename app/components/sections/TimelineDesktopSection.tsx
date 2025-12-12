/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGsapStagger } from '@/app/hooks/useGsapAnimation';
import { Trans, useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeCTASection } from './HomeCTASection';



export const DesktopTimeline = ({ timelineItems }: any) => {
  const { t } = useTranslation();

  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  /*
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
*/
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const line = lineRef.current;
    const items = gsap.utils.toArray<HTMLElement>('.timeline-item');

    if (!timelineRef.current || !line) return;

    // ─────────────────────────────────────────────
    // 1) LÍNEA QUE CRECE SINCRONIZADA CON EL SCROLL
    // ─────────────────────────────────────────────
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top center',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: 1,
        },
      }
    );

    // ─────────────────────────────────────────────
    // 2) ITEMS APARECEN SUAVES + SINCRONIZADOS
    // ─────────────────────────────────────────────
    items.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // ─────────────────────────────────────────────
    // 3) IMAGEN + TEXTO SE ANIMAN POR SEPARADO Y ELEVAN LA EXPERIENCIA
    // ─────────────────────────────────────────────
    items.forEach((item) => {
      const image = item.querySelector('.timeline-image');
      const text = item.querySelector('.timeline-text');

      if (!image || !text) return;

      // Imagen fade + slight scale
      gsap.from(image, {
        opacity: 0,
        y: 30,
        scale: 0.94,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Texto aparece después → más elegante
      gsap.from(text, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power2.out',
        delay: 0.15,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section
      className="
    relative overflow-hidden text-mar px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-28 md:pt-60 pb-12 sm:pb-14 md:pb-12
    bg-gradient-to-b 
    from-[#E6DCCF]
    to-[#F7F5F1]
    "
      // from-[#E6DCCF] 70%
      // via-[#E6DCCF] 50%
      // to-[#F7F5F1] 0%
    >
      {/* PALM SHADOWS — versión editable */}
      <div className="pointer-events-none absolute inset-x-0 top-0 w-full h-[320px] sm:h-[420px] md:h-[500px] overflow-visible">
        {/* Palma derecha */}
        <div
          className="absolute opacity-0 sm:opacity-80 md:opacity-90"
          style={{
            top: '120px',
            left: '30px',
            transform: 'scale(1.35)',
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
          className="absolute opacity-0 sm:opacity-75 md:opacity-90"
          style={{
            top: '110px',
            right: '30px',
            transform: 'scale(1.35) scaleX(-1)',
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
        <h2 className="text-[32px] leading-[38px] sm:text-[36px] sm:leading-[42px] md:text-h1 font-serif text-center mb-16 sm:mb-20 md:mb-28">
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
          <div
            ref={itemsRef}
            className="space-y-18 sm:space-y-28 md:space-y-44"
          >
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
                    grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-24 items-center
                    ${
                      item.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
                    }
                  `}
                >
                  {/* TEXT */}
                  <div
                    className={`timeline-text
                      text-center ${
                        item.imagePosition === 'right'
                          ? 'md:text-center md:pr-14'
                          : 'md:pl-14 md:text-center md:order-2'
                      }
                    `}
                  >
                    <p className="text-[18px] leading-[1.45] sm:text-[20px] sm:leading-[1.45] md:text-h2-md text-mar/90 md:max-w-[420px]">
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
                        timeline-image relative w-[200px] h-[200px]
                        sm:w-[220px] sm:h-[220px]
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
        <HomeCTASection textCta={t('home.cta.title')}/>
      </div>
    </section>
  );
};
