import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export const HomeIntroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapStagger('.intro-block');
  
  return (
    <Section className="py-16 md:py-24 lg:py-32">
      <div ref={sectionRef} className="max-w-4xl mx-auto space-y-10 md:space-y-16">
        <div className="intro-block text-center space-y-4 md:space-y-6 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            {t('home.intro.title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('home.intro.description')}
          </p>
        </div>

        {/* Divider */}
        <div className="intro-block w-px h-16 md:h-24 mx-auto bg-border" />
      </div>
    </Section>
  );
};