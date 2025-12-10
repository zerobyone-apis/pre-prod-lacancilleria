'use client';

import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { IntroImageSlider } from './IntroImageSlider';

export const HomeIntroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fade-in animation
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.fade-block'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-mar px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-28 md:pt-48 bg-[#f3e7da]"
    >
      {/* SHADOWS ABOVE GRADIENT */}
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible z-[20]">
        {/* DESKTOP */}
        <Image
          src="/images/home/shadows/Recursos/Re_3.png"
          alt=""
          width={900}
          height={600}
          className="absolute opacity-[1] hidden md:block"
          style={{
            top: '40px',
            left: '50px',
            transform: 'scale(1.2)',
            objectFit: 'contain',
          }}
        />

        <Image
          src="/images/home/shadows/Recursos/Re_4.png"
          alt=""
          width={900}
          height={600}
          className="absolute opacity-[1] hidden md:block"
          style={{
            top: '100px',
            right: '200px',
            transform: 'scale(1.8)',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* FIX SHADOW CUT — Ajustado para borrar el borde de la sombra */}
      <div
        className="hidden md:block absolute inset-x-0 pointer-events-none z-[25]"
        style={{
          top: '660px',
          height: '140px',
          background: `
      linear-gradient(
        to bottom,
        rgba(247,245,241,0) 40%,
        #f7f5f1 60%,
        #f3e7da 80%,
        #f3e7da 100%
      )
    `,
          backdropFilter: 'blur(4px)',
        }}
      />
      {/* GRADIENT BELOW THE SHADOWS */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-[10]"
        style={{
          height: '850px',
          background:
            'linear-gradient(180deg, rgba(247,245,241,0) 0%, #f7f5f1 45%, #f3e7da 100%)',
        }}
      />
      {/* FADE DOWN (de sombra → color suave) */}
      <div
        className="hidden md:block absolute inset-x-0 top-[730px] h-[80px] pointer-events-none z-[30]"
        style={{
          background: `
      linear-gradient(
        to bottom,
        rgba(243,231,218,0) 0%,
        rgba(243,231,218,0.45) 45%,
        rgba(243,231,218,0.9) 100%
      )
    `,
        }}
      />

      <div
        className="md:block absolute inset-x-0 bottom-0 pointer-events-none z-[0]"
        style={{
          height: '260px',
          background: `
      linear-gradient(
        to bottom,
        rgba(247,245,241,0) 0%,
        rgba(247,245,241,0.25) 25%,
        rgba(247,245,241,0.55) 55%,
        rgba(247,245,241,0.85) 85%,
        rgba(247,245,241,1) 100%
      )
    `,
        }}
      />

      <div className="relative z-10">
        {/* TOP BLOCK */}
        <div className="max-w-4xl mx-auto text-center fade-block">
          {/* LABEL */}
          <p className="uppercase tracking-[3px] text-[12px] sm:text-[13px] md:text-[14px] text-piel/70 mb-3 sm:mb-4">
            <Trans i18nKey={'home.intro.label'} />
          </p>

          {/* TITLE */}
          <h2 className="text-[32px] leading-[38px] sm:text-[36px] sm:leading-[42px] md:text-h1 md:leading-[54px] mb-5 sm:mb-6">
            <Trans i18nKey={'home.intro.title'} />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[16px] leading-[26px] sm:text-body sm:leading-[28px] md:leading-[30px] text-mar/80 max-w-2xl mx-auto">
            <Trans i18nKey={'home.intro.description'} />
          </p>

          {/* DIVIDER */}
          <div className="w-[1px] h-28 sm:h-32 md:h-36 bg-piel/20 mx-auto mt-12 sm:mt-14 md:mt-16 mb-20 sm:mb-24 md:mb-32"></div>
        </div>

        {/* SECOND BLOCK */}
        <div className="max-w-6xl mx-auto text-center fade-block">
          {/* TITLE */}
          <h2 className="text-[30px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-h1 md:leading-[54px] text-mar/80 mb-5 sm:mb-6">
            <Trans i18nKey={'home.introSecond.title'} />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[16px] leading-[26px] sm:text-body sm:leading-[28px] md:leading-[30px] text-mar/80 max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <Trans i18nKey="home.introSecond.description" />
          </p>

          {/* IMAGE */}
          <div className="relative w-full overflow-hidden fade-block shadow-lg">
            <IntroImageSlider
              images={[
                '/images/home/slider/pool.webp',
                '/images/home/slider/suit-bed.webp',
                '/images/home/slider/suit-gess-not-edited-ai.webp',
                '/images/home/slider/sec-room.webp',
                '/images/home/slider/coctails-in-pool.webp',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
