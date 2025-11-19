import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';

export const HomeIntroSection = () => {
  const { t } = useTranslation();

  return (
    <Section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {t('home.intro.label')}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
          {t('home.intro.title')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {t('home.intro.description')}
        </p>
      </div>
    </Section>
  );
};
