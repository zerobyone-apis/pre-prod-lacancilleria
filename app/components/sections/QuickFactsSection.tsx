'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NavLink } from '@/app/components/NavLink';

gsap.registerPlugin(ScrollTrigger);

export const QuickFactsSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = [
    { key: 'garden', image: '/images/home/quick-facts/garden.webp' },
    { key: 'pool', image: '/images/home/quick-facts/heated-pool.webp' },
    {
      key: 'pergola',
      image: '/images/home/quick-facts/outdor-pergola-area.webp',
    },
    {
      key: 'staff-house',
      image: '/images/home/quick-facts/staff-house-lagriega.webp',
    },
    { key: 'parrillero', image: '/images/home/quick-facts/parrillero.webp' },
    {
      key: 'services',
      image: '/images/home/quick-facts/optional-services.webp',
    },
    { key: 'office', image: '/images/home/quick-facts/office-workspace.webp' },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();
    const cards = gsap.utils.toArray<HTMLElement>('.qf-card');

    const updateScales = () => {
      const mid = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const dist = Math.abs(center - mid);
        const maxDist = window.innerWidth * 0.55;

        const scale = gsap.utils.mapRange(0, maxDist, 1.15, 0.88)(dist);

        gsap.to(card, { scale, duration: 0.3, overwrite: true });
      });
    };

    // 📱 MOBILE — efecto activado, sin PIN, sin margen extra
    mm.add('(max-width: 767px)', () => {
      const tween = gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth * 0.75),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => '+=' + (trackRef.current.scrollWidth - window.innerWidth),
          scrub: 1.2,
          pin: true,
          pinSpacing: 'margin',
          onUpdate: updateScales,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.addEventListener('refresh', updateScales);
      updateScales();

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        ScrollTrigger.removeEventListener('refresh', updateScales);
      };
    });

    // 📌 2) TABLET — pin + scroll suave
    mm.add('(min-width: 768px) and (max-width: 1279px)', () => {
      const tween = gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=80 top',
          end: () => '+=' + (trackRef.current.scrollWidth - window.innerWidth),
          pin: true,
          scrub: 1.2,
          onUpdate: updateScales,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.addEventListener('refresh', updateScales);
      updateScales();

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        ScrollTrigger.removeEventListener('refresh', updateScales);
      };
    });

    // 📌 3) DESKTOP GRANDE — pin + scroll + escalado más intenso
    mm.add('(min-width: 1280px)', () => {
      const tween = gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=40 top',
          end: () => '+=' + (trackRef.current.scrollWidth - window.innerWidth),
          pin: true,
          scrub: 1.2, // animación más lenta
          onUpdate: updateScales,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.addEventListener('refresh', updateScales);
      updateScales();

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        ScrollTrigger.removeEventListener('refresh', updateScales);
      };
    });

    return () => mm.revert(); // 🔥 Limpia TODO al desmontar
  }, []);

  return (
    <section
      ref={containerRef}
      className="
    relative
    min-h-[70vh]
    sm:min-h-[80vh]
    md:min-h-[105vh]
    lg:min-h-[120vh]
    w-full
    bg-nieve
    overflow-hidden
    pt-16 pb-12
    "
    >
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-14 md:mb-17 mt-20">
        <p className="uppercase tracking-[3px] text-[12px] sm:text-[13px] text-piel/70 mb-3 sm:mb-4">
          {t('home.quickFacts.label')}
        </p>
        <h1 className="text-h1-sm leading-[38px] md:text-h1-md lg:text-h1-lg sm:leading-[42px] text-mar">
          <Trans i18nKey={'home.quickFacts.title'} />
        </h1>
      </div>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="
      flex items-center 
      gap-6 sm:gap-8 md:gap-12 lg:gap-16
      px-[6vw] sm:px-[8vw] md:px-[10vw]
      mt-10 pb-0
    "
        style={{ width: 'max-content' }}
      >
        {items.map((fact) => (
          <div
            key={fact.key}
            className="
          qf-card
          relative 
          w-[280px] h-[280px]
          sm:w-[320px] sm:h-[320px]
          md:w-[320px] md:h-[320px]
          lg:w-[350px] lg:h-[350px]
          rounded-[8px]
          overflow-hidden
          shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
          bg-black
          flex-shrink-0
          transition-transform
        "
          >
            <Image
              src={fact.image}
              alt={fact.key}
              fill
              className="object-cover"
            />

            {/* {<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent" />} */}
            <div
              className="
              qf-overlay
              absolute inset-0 pointer-events-none
              bg-gradient-to-t 
              from-black/40 
              via-black/20 
              to-transparent
            "
              style={{
                maskImage:
                  'linear-gradient(to top, black 0%, black 35%, transparent 85%)',
                WebkitMaskImage:
                  'linear-gradient(to top, black 0%, black 35%, transparent 85%)',
              }}
            />

            <div className="absolute bottom-10 w-full text-center px-6">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-serif drop-shadow-lg">
                <Trans i18nKey={`home.quickFacts.items.${fact.key}.title`} />
              </h3>
              <p className="text-white/85 text-xs sm:text-sm mt-2 drop-shadow">
                <Trans
                  i18nKey={`home.quickFacts.items.${fact.key}.description`}
                />
              </p>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          className="
        qf-card flex items-center justify-center
        w-[280px] h-[280px]
        sm:w-[320px] sm:h-[320px]
        md:w-[360px] md:h-[360px]
        lg:w-[400px] lg:h-[400px]
        rounded-[8px]
        bg-none shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
        flex-shrink-0
      "
        >
          <div className="text-center space-y-6 px-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-mar mb-3">
              {t('home.quickFacts.cta.title')}
            </h3>
            <NavLink to="/estate">
              <Button className="bg-piel text-white hover:bg-piel/90 px-6 sm:px-7 md:px-8 py-3 sm:py-4 rounded-4 text-sm sm:text-base">
                {t('home.quickFacts.cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
