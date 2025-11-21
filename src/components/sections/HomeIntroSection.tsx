import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export const HomeIntroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapStagger('.intro-block');

  return (
    <Section className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-3xl mx-auto space-y-24">
        {/* First Block */}
        <div className="intro-block text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            Nestled among lush gardens and sweeping ocean views
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            La Cancillería offers the privacy of a gated estate while being perfectly positioned near the vibrant energy of La Barra and the refined charm of José Ignacio
          </p>
        </div>

        {/* Divider */}
        <div className="intro-block w-px h-24 mx-auto bg-border" />

        {/* Second Block */}
        <div className="intro-block text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            A Luxury Gated Estate in the Heart of La Barra
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The property combines first-class general outdoor areas: relaxation, living and activity zones with absolute privacy and the best conditions for enjoying an unforgettable holiday
          </p>
        </div>

        {/* Divider */}
        <div className="intro-block w-px h-24 mx-auto bg-border" />

        {/* Third Block */}
        <div className="intro-block text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            Exclusive Amenities and Facilities
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Sleeps up to 10 guests
          </p>
        </div>
      </div>
    </Section>
  );
};
