'use client';

import { Button } from '@/app/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Trans } from 'react-i18next';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: string;
  backgroundVideo: string; // ruta dentro de /public, ej: "/images/hero.webp"
}

export const HeroSection = ({
  title,
  subtitle,
  cta,
  backgroundVideo,
}: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !bgRef.current) return;

    // Animación de entrada del contenido
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );

    // Parallax del fondo
    gsap.to(bgRef.current, {
      y: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      data-music-contrast="dark"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo + imagen + gradiente */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
          className="absolute inset-0 w-full h-full object-cover"          
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Contenido */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-fit px-4 md:px-6 mx-auto"
      >
        <h1 className="text-h1-sm md:text-h1-md lg:text-h1-lg font-serif leading-tight mb-4 text-primary-foreground drop-shadow-lg">
          <Trans i18nKey={title} />
        </h1>
        <h2 className="text-body sm:text-xl md:text-2xl lg:text-1xl xl:text-1xl mb-8 md:mb-12 text-primary-foreground/90 font-light tracking-wide drop-shadow px-2">
          <Trans i18nKey={subtitle} />
        </h2>
        {cta && (
          <Button className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
            {cta}
          </Button>
        )}
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </section>
  );
};
