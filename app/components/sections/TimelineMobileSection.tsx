/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trans } from 'react-i18next';
import { HomeCTASection } from './HomeCTASection';
import { t } from 'i18next';

gsap.registerPlugin(ScrollTrigger);

export const TimelineMobile = ({ items, backgroundColor, title }: any) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.tl-block');
      const progressLine = document.querySelector<HTMLElement>('.tl-line-progress');

      // Línea vertical que “avanza” con el scroll
      if (progressLine && container.current) {
        gsap.fromTo(
          progressLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: container.current,
              start: 'top 72%',
              end: 'bottom bottom',
              scrub: 0.6,
            },
          }
        );
      }

      // Cards: fade-up + slide con leve delay escalonado
      blocks.forEach((block, index) => {
        const img = block.querySelector('.tl-img');
        const dot = block.querySelector('.tl-dot');

        gsap.from(block, {
          opacity: 0,
          y: 28,
          duration: 0.75,
          ease: 'power2.out',
          delay: index * 0.06,
          scrollTrigger: {
            trigger: block,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        });

        if (img) {
          gsap.from(img, {
            opacity: 0,
            y: 22,
            scale: 0.96,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.1 + index * 0.05,
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (dot) {
          gsap.from(dot, {
            scale: 0.6,
            opacity: 0.4,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.02 + index * 0.04,
            scrollTrigger: {
              trigger: block,
              start: 'top 86%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className={`px-5 pt-10 pb-24 ${backgroundColor}`}
    >
      <h2 className="text-h1-sm font-serif text-center text-mar mb-10">
        <Trans i18nKey={title} />
      </h2>

      <div className="relative ml-5">
        {/* Línea base con forma de aguja (punta fina en ambos extremos) */}
        <div
          className="absolute left-0 top-1 bottom-4 w-[1.5px] rounded-full opacity-80"
          style={{
            background:
              'linear-gradient(to bottom, rgba(227,210,192,0), rgba(227,210,192,0.9), rgba(227,210,192,0))',
          }}
        />

        {/* Línea de progreso, ligeramente más gruesa y con glow suave */}
        <div
          className="tl-line-progress absolute left-0 top-1 bottom-4 w-[2px] rounded-full origin-top scale-y-0 shadow-[0_0_12px_rgba(196,154,108,0.45)]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(196,154,108,0), rgba(196,154,108,0.95), rgba(196,154,108,0))',
          }}
        />

        <div className="pl-7 space-y-8">
        {items.map((item: any, i: number) => (
          <div
            key={i}
            className="
              tl-block
              relative
              flex flex-col gap-6
              py-10
            "
          >
            {/* DOT */}
            <div className="absolute -left-7 top-24 h-full flex items-start -translate-x-1/2">
              <div
                className="
                  tl-dot
                  w-3.5 h-3.5 rounded-full bg-piel
                  border-[5px] border-[#f7f1ea]
                  shadow-[0_10px_25px_-10px_rgba(0,0,0,0.40)]
                "
              />
            </div>

            {/* CARD */}
            <div
              className="
                rounded-2xl border border-[#e3d5c4]/80 bg-[#f7f3ed]/80
                shadow-[0_14px_35px_-24px_rgba(0,0,0,0.55)]
                px-4 py-6
              "
            >
              {/* Número + etiqueta */}
              <div className="flex items-center justify-start gap-3 mb-4">
                <div className="flex items-center justify-center w-7 h-7 rounded-full border border-[#d0bba3] bg-[#f9f5f0] text-[11px] font-medium tracking-[0.16em] text-mar/70">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[16px] leading-relaxed font-sans text-mar/85">
                <Trans i18nKey={item.mobileText} />
              </p>

              {/* IMAGE */}
              <div
                className="
                  tl-img relative
                  mt-6
                  w-full
                  h-[220px] sm:h-[250px]
                  rounded-2xl overflow-hidden
                "
              >
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
            </div>

          </div>
        ))}
        </div>
      </div>

      <div className=''>
        <HomeCTASection textCta={t('home.cta.mobileTitle')} />
      </div>
    </div>
  );
};
