import { useGsapParallax } from '@/hooks/useGsapAnimation';

export const LifestyleImageSection = () => {
  const parallaxRef = useGsapParallax(0.3);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src="/images/lifestyle-experience.jpg"
          alt="La Barra, Punta del Este, and José Ignacio area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground drop-shadow-lg">
            Lifestyle & Experience
          </h2>
        </div>
      </div>
    </section>
  );
};
