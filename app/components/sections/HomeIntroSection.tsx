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
      className="relative w-full overflow-hidden text-mar px-6 md:px-12 lg:px-24 py-32 md:pt-48 bg-[#f3e7da]"
    >
      {/* SHADOWS ABOVE GRADIENT */}
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible z-[20]">
        {/* MOBILE — más pequeño, más centrado */}
        <Image
          src="/images/home/shadows/Recursos/Re_3.png"
          alt=""
          width={600}
          height={400}
          className="absolute opacity-60 md:hidden"
          style={{
            top: '50px',
            left: '10px',
            transform: 'scale(1.4)',
            objectFit: 'contain',
          }}
        />

        <Image
          src="/images/home/shadows/Recursos/Re_4.png"
          alt=""
          width={600}
          height={400}
          className="absolute opacity-90 md:hidden"
          style={{
            top: '400px',
            right: '30px',
            transform: 'scale(1.4)',
            objectFit: 'contain',
          }}
        />

        {/* DESKTOP — tus valores actuales */}
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

      {/* GRADIENT BELOW THE SHADOWS */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-[10]"
        style={{
          height: '850px',
          background:
            'linear-gradient(180deg, rgba(247,245,241,0) 0%, #f7f5f1 45%, #f3e7da 100%)',
        }}
      />
      {/* FADE PARA BORRAR LA LÍNEA DEL CORTE DE LA SOMBRA */}
      <div
        className="hidden md:block absolute inset-x-0 top-[730px] h-[80px] pointer-events-none z-[30]"
        style={{
          background: `
      linear-gradient(
        to bottom,
        rgba(243,231,218,0) 0%,
        rgba(243,231,218,0.6) 40%,
        rgba(243,231,218,1) 100%
      )
    `,
        }}
      ></div>

      <div className="relative z-10">
        {/* TOP BLOCK */}
        <div className="max-w-4xl mx-auto text-center fade-block">
          {/* LABEL */}
          <p className="uppercase tracking-[3px] text-[14px] text-piel/70 mb-4">
            <Trans i18nKey={'home.intro.label'} />
          </p>

          {/* TITLE */}
          <h2 className="text-h1 leading-[54px] mb-6">
            <Trans i18nKey={'home.intro.title'} />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-body text-mar/80 leading-[30px] max-w-2xl mx-auto">
            <Trans i18nKey={'home.intro.description'} />
          </p>

          {/* DIVIDER */}
          <div className="w-[1px] h-36 bg-piel/20 mx-auto mt-16 mb-32"></div>
        </div>

        {/* SECOND BLOCK */}
        <div className="max-w-6xl mx-auto text-center fade-block">
          {/* TITLE */}
          <h2 className="text-h1  text-mar/80 leading-[54px] mb-6">
            <Trans i18nKey={'home.introSecond.title'} />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-body text-mar/80 leading-[30px] max-w-4xl mx-auto mb-16">
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
                '/images/home/slider/coctails-in-pool.webp'
              ]}
            />
          </div>
        </div>
      </div>

      {/* LOWER TRANSITION — DIFUMINA LA SOMBRA Y CONECTA LA SECCIÓN */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-[1] h-[1000px] md:h-[1480px]"
        style={{
          height: '1480px',
          background: `
      linear-gradient(
            180deg,
            rgba(243,231,218,0) 0%,
            rgba(243,231,218,0.65) 25%,
            rgba(247,245,241,1) 65%,
            #F7F5F1 100%
          )
    `,
        }}
      ></div>
    </section>
  );
};
