/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Trans } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeCTASection } from './HomeCTASection';
import { t } from 'i18next';

gsap.registerPlugin(ScrollTrigger);

export const DesktopTimeline = ({
  timelineItems,
  backgroundColor,
  title,
  showCTA,
  fromHome,
}: any) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  console.log('It contact from Home', fromHome)

  useLayoutEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      const line = lineRef.current!;
      const items = gsap.utils.toArray<HTMLElement>(
        '.timeline-item',
        timelineRef.current!
      );

      // Línea
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: timelineRef.current!,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      // Items
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true,
            },
          }
        );

        const image = item.querySelector('.timeline-image');
        const text = item.querySelector('.timeline-text');

        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, y: 30, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                invalidateOnRefresh: true,
              },
            }
          );
        }

        if (text) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              delay: 0.15,
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, timelineRef);

    return () => ctx.revert(); // mata animaciones y triggers del scope
  }, []);

  return (
    <section
      className={`
    relative overflow-hidden text-mar px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-28 md:pt-60 pb-12 sm:pb-14 md:pb-12
   ${backgroundColor}
    `}
    >
      {/* PALM SHADOWS — misma versión, refinada para XL */}
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible z-[20]">
        {/* SHADOW LEFT */}
        <div className="scale-x-[-1]">
          <Image
            src="/images/home/shadows/Recursos/Re_2.png"
            alt=""
            width={1200}
            height={900}
            className={`
            absolute opacity-90
            hidden md:block
          
            md:top-[220px] md:right-[-100px] md:scale-[0.9]
            lg:top-[100px] lg:right-[100px] lg:scale-[1.6]
            xl:top-[330px] xl:right-[350px] xl:scale-[1.9]
          `}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* SHADOW RIGHT */}
        <div className="scale-x-[1]">
          <Image
            src="/images/home/shadows/Recursos/Re_2.png"
            alt=""
            width={1200}
            height={900}
            className={`
            absolute opacity-90
            hidden md:block
          
            md:top-[220px] md:right-[-100px] md:scale-[0.9]
            lg:top-[100px] lg:right-[100px] lg:scale-[1.6]
            xl:top-[330px] xl:right-[350px] xl:scale-[1.9]
          `}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* SOFT BOTTOM GRADIENT */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(247,245,241,0) 0%, rgba(247,245,241,0) 100%)',
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-h1-sm leading-[38px] sm:text-h1-sm sm:leading-[42px] md:text-h1-md lg:text-h1-lg font-serif text-center mb-16 sm:mb-20 md:mb-28">
          <Trans i18nKey={title} />
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
                    <p className="text-h2-sm font-serif leading-[1.45] sm:text-[20px] sm:leading-[1.45] md:leading-[1.5] md:text-h2-md text-mar/90 md:max-w-[420px]">
                      <Trans i18nKey={item.text} />
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`${
                      item.imagePosition === 'left'
                        ? 'md:order-1 mr-20'
                        : ' ml-20'
                    }`}
                  >
                    <div
                      className="
                        timeline-image relative w-[200px] h-[200px]
                        sm:w-[220px] sm:h-[220px]
                        md:w-[300px] md:h-[300px]
                        lg:w-[450px] lg:h-[380px]
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

        {showCTA ? (
          <>
            {/* BACKGROUND SHADOW DECORATION */}
            <div
              className="pointer-events-none absolute"
              style={{
                bottom: '0px',
                right: '-280px',
                transform: 'rotate(-270deg) scale(1) scaleX(-1)',
                opacity: 0.8,
              }}
            >
              <Image
                src="/images/home/shadows/Recursos/Re_3.png"
                alt=""
                width={1200}
                height={600}
                className="
                      object-contain     
                      scale-[1]
                      translate-x-0
                      translate-y-0

                      /* antes lg: ...  ahora xl: ... */
                      xl:scale-[1.3]
                      xl:translate-x-[140px]
                      xl:translate-y-[-110px]
                    "
                priority
              />
            </div>

            <div className="">
              {/* CTA BELOW LINE */}
              <HomeCTASection textCta={t('home.cta.title')} fromHome={fromHome} />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};
