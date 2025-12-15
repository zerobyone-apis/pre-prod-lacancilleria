/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trans, useTranslation } from 'react-i18next';
import { IntroImageSlider } from './IntroImageSlider';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
interface PropertiesSliderSectionProps {
  propertyFilter?: 'cancilleria' | 'griega';
}

export const PropertiesSliderSection = ({
  propertyFilter,
}: PropertiesSliderSectionProps = {}) => {
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

  let LIST_IMAGES: string[] = [];
  let LIST_CAPTIONS: any[] = [];

  if (propertyFilter == 'griega') {
    LIST_IMAGES = [
      '/images/home/slider/suit-guess-edited-ai.jpg',
      '/images/home/slider/pool.webp',
      '/images/home/slider/suit-bed.webp',
      '/images/home/slider/sec-room.webp',
      '/images/home/slider/coctails-in-pool.webp',
    ];
    LIST_CAPTIONS = [
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_1',
      },
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_2',
      },
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_3',
      },
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_4',
      },
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_5',
      },
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_6',
      },
      {
        title: 'estate.griega.features.title',
        subtitle: 'estate.griega.features.griega_feat_7',
      },
    ];
  } else {
    // La cancilleria
    LIST_IMAGES = [
      '/images/home/slider/suit-guess-edited-ai.jpg',
      '/images/home/slider/pool.webp',
      '/images/home/slider/suit-bed.webp',
      '/images/home/slider/sec-room.webp', // TODO: QUEDA COLOCAR LAS FOTOS QUE VAN.
      '/images/home/slider/coctails-in-pool.webp',
    ];

    LIST_CAPTIONS = [
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_1',
      },
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_2',
      },
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_3',
      },
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_4',
      },
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_5',
      },
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_6',
      },
      {
        title: 'estate.cancilleria.features.title',
        subtitle: 'estate.cancilleria.features.feat_7',
      },
    ];
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-mar px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-28 md:pt-48 bg-[#f3e7da]"
    >
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
        className="hidden md:block absolute inset-x-0 pointer-events-none z-[25]"
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

      <div className="relative z-30">
        {/* SECOND BLOCK */}
        <div className="max-w-6xl mx-auto text-center fade-block">
          {/* LABEL */}
          <p className="uppercase tracking-[3px] text-[12px] sm:text-[13px] md:text-[14px] text-piel/70 mb-3 sm:mb-4">
            <Trans
              i18nKey={
                propertyFilter === 'cancilleria'
                  ? 'estate.cancilleria.intro.label'
                  : 'estate.griega.intro.label'
              }
            />
          </p>

          {/* TITLE */}
          <h2 className="text-h1-sm md:text-h1-md lg:text-h1-lg leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-h1 md:leading-[54px] text-mar/80 mb-5 sm:mb-6">
            <Trans
              i18nKey={
                propertyFilter === 'cancilleria'
                  ? 'estate.cancilleria.intro.title'
                  : 'estate.griega.intro.title'
              }
            />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[16px] leading-[26px] sm:text-body sm:leading-[28px] md:leading-[30px] text-mar/80 max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <Trans i18nKey={propertyFilter === 'cancilleria'
                  ? 'estate.cancilleria.intro.description'
                  : 'estate.griega.intro.description'} />
          </p>

          {/* IMAGE */}
          <div className="relative w-full overflow-hidden fade-block shadow-lg">
            <IntroImageSlider
              images={LIST_IMAGES}
              showTextOverlay={true}
              captions={LIST_CAPTIONS}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
