'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useGsapParallax } from '@/hooks/useGsapAnimation';

interface NavCta {
  label: string;
  href: string;
}

interface Props {
  imageSource: string;
  alt?: string;
  navCtas?: NavCta[];
  navCtasMode?: 'auto' | 'hover' | 'always';
}

export const ImageDeviderSection = ({
  imageSource,
  alt = 'La Barra, Punta del Este, and José Ignacio area',
  navCtas,
  navCtasMode = 'auto',
}: Props) => {
  const parallaxRef = useGsapParallax(0.5);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);

    return () => mq.removeEventListener('change', handler);
  }, []);

  const hasNav = !!navCtas?.length;

  // auto: desktop -> hover + inView; mobile -> always (pero sutil)
  const shouldShow = useMemo(() => {
    if (!hasNav) return false;

    if (isMobile) return true;

    if (navCtasMode === 'always') return true;
    if (navCtasMode === 'hover') return isHover;

    // auto desktop
    return isHover || isInView;
  }, [hasNav, isMobile, navCtasMode, isHover, isInView]);
  useEffect(() => {
    if (!hasNav || !sectionRef.current) return;

    const el = sectionRef.current;
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hasNav]);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="
        relative w-full overflow-hidden
        h-[260px] sm:h-[340px] md:h-screen
      "
    >
      <div className="absolute inset-0 w-full h-[120%]">
        <div ref={parallaxRef} className="w-full h-full">
          <img
            src={imageSource}
            alt={alt}
            className="w-full h-full object-cover object-top md:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
        </div>
      </div>

      {/* NAV CTAs overlay */}
      {hasNav && (
        <div
          className={[
            'absolute inset-x-0 bottom-4 md:bottom-10',
            'flex justify-center px-4 md:px-6',
            'transition-all duration-300',
            shouldShow
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 pointer-events-none',
          ].join(' ')}
        >
          <div
            className="
        w-full max-w-[460px] md:max-w-[520px]
        rounded-[22px] md:rounded-[28px]
        bg-white/18 md:bg-white/22
        backdrop-blur-2xl
        border border-white/30
        shadow-[0_12px_30px_rgba(0,0,0,0.14)]
        ring-1 ring-black/5
        px-4 py-4 md:px-8 md:py-6
      "
          >
            <div className="text-center">
              <p
                className="
            font-serif
            text-[11px] md:text-sm
            uppercase tracking-[0.30em] md:tracking-[0.35em]
            text-white/80
          "
              >
                Explore more
              </p>
              <div className="mx-auto mt-2 md:mt-3 h-px w-16 md:w-24 bg-white/30" />
            </div>

            <div className="mt-3 md:mt-4 flex flex-col gap-2.5 md:flex-row md:justify-center md:gap-6">
              {navCtas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="
                  w-full md:w-auto
                  inline-flex items-center justify-center
                  rounded-full
                  px-5 py-2.5 md:px-6 md:py-2.5
                  text-[15px] md:text-base
                  text-white
                  bg-white/15
                  border border-white/35
                  shadow-sm
                  backdrop-blur-xl
                  transition
                 hover:bg-white/25 hover:border-white/50
                  active:scale-[0.99]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                "
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
