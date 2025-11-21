import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
export const HomeIntroSection = () => {
  const {
    t
  } = useTranslation();
  const sectionRef = useGsapStagger('.intro-block');
  return <Section className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-4xl mx-auto space-y-16">
        <div className="intro-block text-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            A Luxury Gated Estate in the Heart of La Barra
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The property combines first-class general outdoor areas: relaxation, living and activity zones with absolute privacy and the best conditions for enjoying an unforgettable holiday
          </p>
        </div>

        {/* Divider */}
        <div className="intro-block w-px h-24 mx-auto bg-border" />
      </div>
    </Section>;
};