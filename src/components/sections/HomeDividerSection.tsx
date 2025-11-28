import { useGsapParallax } from '@/hooks/useGsapAnimation';

export const HomeDividerSection = () => {
  const parallaxRef = useGsapParallax(0.5);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[130%]"
      >
        <img
          src="/images/home-divider.jpg"
          alt="Punta del Este aerial view at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      </div>
    </section>
  );
};
