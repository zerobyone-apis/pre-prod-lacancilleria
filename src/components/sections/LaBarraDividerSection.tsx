import { useGsapParallax } from '@/hooks/useGsapAnimation';

export const LaBarraDividerSection = () => {
  const parallaxRef = useGsapParallax(0.3);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src="/images/la-barra-landscape.jpg"
          alt="La Barra coastal landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
      </div>
    </section>
  );
};
