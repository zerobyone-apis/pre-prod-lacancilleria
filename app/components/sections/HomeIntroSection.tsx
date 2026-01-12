'use client';

import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { IntroImageSlider } from './IntroImageSlider';

export const HomeIntroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

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
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible z-[10]">
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
              xl:top-[50px] xl:left-[50px] xl:scale-[1.3]
            `}
          style={{ objectFit: 'contain' }}
        />

        {/* SHADOW RIGHT */}
        <Image
          src="/images/home/shadows/Recursos/Re_4.png"
          alt=""
          width={900}
          height={600}
          className={`
            absolute opacity-90
            hidden md:block
            md:top-[220px] md:right-[-100px] md:scale-[0.9]
            lg:top-[100px] lg:right-[200px] lg:scale-[1.6]
            xl:top-[120px] xl:right-[260px] xl:scale-[1.8]
  
          `}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* FIX SHADOW CUT — Ajustado para borrar el borde de la sombra */}
      <div
        className="hidden md:block absolute inset-x-0 pointer-events-none z-[0]"
        style={{
          top: '660px',
          height: '140px',
          background: `
                bg-gradient-to-b from-[#f3e7da] to-[#f7f5f1]
            `,
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* GRADIENT BELOW THE SHADOWS */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-[0]"
        style={{
          height: '850px',
          background:
            'linear-gradient(180deg, rgba(247,245,241,0) 0%, #f7f5f1 45%, #f3e7da 100%)',
        }}
      />
      {/* FADE DOWN (de sombra → color suave) */}
      <div
        className="hidden md:block absolute inset-x-0 top-[730px] h-[80px] pointer-events-none z-[10]"
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
        className="md:block absolute inset-x-0 bottom-0 pointer-events-none z-0"
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
          <h2 className="text-h1-sm leading-[38px] sm:text-h1-sm sm:leading-[42px] md:text-h1-md md:leading-[54px] lg:text-h1-lg mb-5 sm:mb-6">
            <Trans i18nKey={'home.intro.title'} />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[16px] leading-[26px] sm:text-body sm:leading-[28px] md:leading-[30px] text-mar/80 max-w-2xl mx-auto">
            <Trans i18nKey={'home.intro.description'} />
          </p>

          <div className="flex flex-col items-center gap-6 sm:gap-8 mt-12 sm:mt-14 md:mt-16 mb-20 sm:mb-24 md:mb-32 z-35">
            <div className="w-[1px] h-12 sm:h-14 md:h-16 bg-piel/20" />

            <div
              className={`relative w-full${
                expanded ? 'max-w-6xl' : 'max-w-3xl'
              } transition-all duration-300 ease-out drop-shadow-2xl`}
            >
              <div className="absolute top-3 right-3 z-40 flex gap-2">
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-mar/90 text-[#f7f5f1] 
                              backdrop-blur shadow-md hover:bg-mar transition"
                >
                  {expanded
                    ? t('home.intro.video.collapse', {
                        defaultValue: 'Expandir',
                      })
                    : t('home.intro.video.expand', {
                        defaultValue: 'Reducir',
                      })}
                </button>
              </div>

              <div
                className={[
                  'overflow-hidden rounded-2xl sm:rounded-3xl bg-black',
                  'transition-all duration-300',
                  // Normal: más “cuadrado”
                  !expanded ? 'aspect-[13/8]' : '',
                  // Expanded: más “cinema” (rectangular)
                  expanded ? 'aspect-video md:aspect-[19/9]' : '',
                ].join(' ')}
              >
                <video
                  controls
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                  preload="metadata"
                  className="h-full w-full object-cover"
                  controlsList="nodownload" // noplaybackrate noremoteplayback :_esto -> saca estas funciones para que no aparezcan
                  //disablePictureInPicture
                >
                  <source
                    src="/video/home/lc_oct_web_720p.mp4"
                    type="video/mp4"
                  />
                  {t('home.intro.video.unsupported', {
                    defaultValue: 'Tu navegador no soporta video HTML5.',
                  })}
                </video>
              </div>
            </div>

            <div className="w-[1px] h-12 sm:h-14 md:h-16 bg-piel/20" />
          </div>
        </div>

        {/* SECOND BLOCK */}
        <div className="max-w-6xl mx-auto text-center fade-block">
          {/* TITLE */}
          <h2 className="text-h1-sm leading-[36px] sm:text-h1-sm sm:leading-[40px] md:text-h1-md md:leading-[54px] lg:text-h1-lg text-mar/80 mb-5 sm:mb-6">
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
                '/images/the_estate/la_cancilleria/galery_slider/lc_entrada.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_entrada_2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/AutoEntrando.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_entrada_3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.3.webp',

                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.4.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.5.webp',

                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_4.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_4.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_internal_4.2.webp',

                '/images/the_estate/la_cancilleria/galery_slider/modified/lc_back_external_1.webp',

                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.4.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.webp',

                '/images/the_estate/la_cancilleria/galery_slider/modified/palmeras_1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/modified/palmeras_2.webp',

                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.1.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.2.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.3.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.4.webp',
                '/images/the_estate/la_cancilleria/galery_slider/lc_end_tour.webp',
                '/images/the_estate/la_cancilleria/galery_slider/vista_aerea.webp',

                '/images/the_estate/la_cancilleria/galery_slider/modified/bikini.jpg',
                '/images/the_estate/la_cancilleria/galery_slider/modified/Cactus.webp',
                '/images/the_estate/la_cancilleria/galery_slider/modified/Montoya.webp',
              ]}
              showTextOverlay={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
