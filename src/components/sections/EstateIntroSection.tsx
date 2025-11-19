import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TwoColumn } from '@/components/ui/TwoColumn';
import { ImageCard } from '@/components/ui/ImageCard';

export const EstateIntroSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TwoColumn
        left={
          <ImageCard 
            src="/images/estate-entrance.jpg" 
            alt="Estate entrance"
            aspectRatio="portrait"
          />
        }
        right={
          <SectionHeader
            label={t('estate.intro.label')}
            title={t('estate.intro.title')}
            description={t('estate.intro.description')}
          />
        }
        reverse
      />
    </Section>
  );
};
