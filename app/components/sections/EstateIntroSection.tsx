import { useTranslation } from 'react-i18next';
import { Section } from '@/app/components/layout/Section';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { TwoColumn } from '@/app/components/ui/TwoColumn';
import { ImageCard } from '@/app/components/ui/ImageCard';

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
            title={t('estate.intro.title')}
            description={t('estate.intro.description')}
          />
        }
        reverse
      />
    </Section>
  );
};
