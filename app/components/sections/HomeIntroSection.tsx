import { useTranslation, Trans } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export const HomeIntroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapStagger('.intro-block');

  return (
    <Section className="py-16 md:py-24 lg:py-32">
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto space-y-10 md:space-y-16"
      >
        <div className="intro-block text-center space-y-4 md:space-y-6 px-2">
          <p className="text-h2 md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <Trans i18nKey="home.intro.label" />
          </p>
          <h1 className="text-h1 sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            <Trans i18nKey="home.intro.title" />
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <Trans i18nKey="home.intro.description" />
          </p>
        </div>

        {/* Divider */}
        <div className="intro-block w-px h-16 md:h-40 mx-auto bg-border" />
      </div>
    </Section>
  );
};
