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
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const cards = gsap.utils.toArray<HTMLElement>('.qf-card');

    const updateScales = () => {
      const mid = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.left + rect.width / 2;

        const dist = Math.abs(center - mid);
        const maxDist = window.innerWidth * 0.55;

        const scale = gsap.utils.mapRange(0, maxDist, 1.15, 0.88)(dist);

        gsap.to(card, {
          scale,
          duration: 0.3,
          overwrite: true,
        });
      });
    };

    const tween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top+=40 top', // 👉 solo activa cuando el componente ya está bien abajo
        end: () => '+=' + (track.scrollWidth - window.innerWidth),
        pin: true,
        scrub: 1,
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
  }, []);

  return (
    <section
      ref={containerRef}
      className="
    relative 
    min-h-[120vh]     // 👉 permite aire arriba/abajo para que luzca como en Figma
    w-full 
    bg-nieve 
    overflow-hidden 
    pt-32 pb-32
  "
    >
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-17">
        <p className="uppercase tracking-[3px] text-[13px] text-piel/70 mb-4">
          {t('home.quickFacts.label')}
        </p>
        <h1 className="text-h1 text-mar leading-[54px]">
          <Trans i18nKey={'home.quickFacts.title'} />
        </h1>
      </div>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="
      flex items-center 
      gap-10 md:gap-14 lg:gap-20
      px-[10vw]
      pt-3
    "
        style={{ width: 'max-content' }}
      >
        {items.map((fact) => (
          <div
            key={fact.key}
            className="
          qf-card
          relative 
          w-[340px] h-[340px]
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
              <h3 className="text-white text-2xl md:text-3xl font-serif drop-shadow-lg">
                <Trans i18nKey={`home.quickFacts.items.${fact.key}.title`} />
              </h3>
              <p className="text-white/85 text-sm mt-2 drop-shadow">
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
        w-[340px] h-[340px]
        md:w-[380px] md:h-[380px]
        lg:w-[420px] lg:h-[420px]
        rounded-[32px]
        bg-none shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
        flex-shrink-0
      "
        >
          <div className="text-center space-y-6 px-6">
            <h3 className="text-2xl md:text-3xl font-serif text-mar mb-3">
              {t('home.quickFacts.cta.title')}
            </h3>
            <NavLink to="/estate">
              <Button className="bg-piel text-white hover:bg-piel/90 px-8 py-4 rounded-4">
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
