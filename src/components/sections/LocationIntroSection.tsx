import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TwoColumn } from '@/components/ui/TwoColumn';
import { ImageCard } from '@/components/ui/ImageCard';

export const LocationIntroSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TwoColumn
        left={
          <SectionHeader
            label={t('location.intro.label')}
            title={t('location.intro.title')}
            description={t('location.intro.description')}
          />
        }
        right={
          <ImageCard 
            src="/images/location-aerial.jpg" 
            alt="Aerial view of location"
            aspectRatio="video"
          />
        }
      />
    </Section>
  );
};
