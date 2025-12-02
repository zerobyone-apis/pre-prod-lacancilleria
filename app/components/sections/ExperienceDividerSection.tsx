import { useTranslation } from 'react-i18next';
import { useGsapParallax } from '@/hooks/useGsapAnimation';
export const ExperienceDividerSection = () => {
  const {
    t
  } = useTranslation();
  const parallaxRef = useGsapParallax(0.5);
  return <section className="relative h-[50vh] w-full overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[130%]">
        <img src="/images/lifestyle-experience.jpg" alt="Punta del Este lifestyle and experiences" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/40" />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        
      </div>
    </section>;
};