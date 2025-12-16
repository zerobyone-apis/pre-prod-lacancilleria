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

      // 🔥 SOLO ANIMACIONES, SIN SNAP
      blocks.forEach((block) => {
        const img = block.querySelector('.tl-img');
        const dot = block.querySelector('.tl-dot');

        ScrollTrigger.create({
          trigger: block,
          start: 'top 75%', // cuando entra al viewport
          end: 'top 25%', // cuando está centrado
          scrub: true, // animación ligada al scroll
          onUpdate: (self) => {
            const p = self.progress;

            // suavizar fade (0–1)
            const eased = gsap.utils.clamp(0, 1, (p - 0.1) / 0.8);

            gsap.to(img, {
              opacity: eased,
              scale: 0.9 + eased * 0.1,
              y: 20 - eased * 20,
              ease: 'none',
            });

            gsap.to(dot, {
              scale: 1 + eased * 0.3,
              opacity: 0.6 + eased * 0.4,
              ease: 'none',
            });
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className={`px-6 pb-32  ${backgroundColor}
       `}
    >
      <h2 className="text-h1-sm font-serif text-center text-mar mb-20 mt-20">
        <Trans i18nKey={title} />
      </h2>

      <div className="relative border-l border-piel/40 ml-4">
        {items.map((item: any, i: number) => (
          <div
            key={i}
            className="
              tl-block
              min-h-[70vh]
              flex flex-col justify-center gap-6
              relative pl-10
            "
          >
            {/* DOT */}
            <div className="absolute -left-2.5 top-0 h-full flex items-center">
              <div
                className="
                  tl-dot
                  w-5 h-5 rounded-full bg-piel
                  border-[6px] border-[#f3e7da]
                  shadow-[0_10px_25px_-8px_rgba(0,0,0,0.35)]
                "
              />
            </div>

            {/* TEXT */}
            <p className="text-h2 text-center font-sans leading-tight text-mar/80 max-w-[90%] mx-auto">
              <Trans i18nKey={item.mobileText} />
            </p>

            {/* IMAGE */}
            <div
              className="
                tl-img relative
                w-full h-[380px]
                rounded-[16px] overflow-hidden
                opacity-0 scale-90 translate-y-6
              "
            >
              <Image src={item.image} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        <HomeCTASection textCta={t('home.cta.mobileTitle')} />
      </div>
    </div>
  );
};
