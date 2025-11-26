import { useGsapParallax } from '@/hooks/useGsapAnimation';

export const EstateDividerSection = () => {
  const parallaxRef = useGsapParallax(0.3);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src="/images/estate-entrance.jpg"
          alt="La Cancillería Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      </div>
    </section>
  );
};
