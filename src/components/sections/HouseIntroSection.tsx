import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TwoColumn } from '@/components/ui/TwoColumn';
import { ImageCard } from '@/components/ui/ImageCard';

export const HouseIntroSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <TwoColumn
        left={
          <div className="space-y-8">
            <SectionHeader
              label={t('house.intro.label')}
              title={t('house.intro.title')}
              description={t('house.intro.description')}
            />
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-serif">{t('house.intro.specs.bedrooms').split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{t('house.intro.specs.bedrooms').split(' ').slice(1).join(' ')}</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-serif">{t('house.intro.specs.bathrooms').split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{t('house.intro.specs.bathrooms').split(' ').slice(1).join(' ')}</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-serif">{t('house.intro.specs.area').split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{t('house.intro.specs.area').split(' ').slice(1).join(' ')}</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-serif">{t('house.intro.specs.lot').split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{t('house.intro.specs.lot').split(' ').slice(1).join(' ')}</p>
              </div>
            </div>
          </div>
        }
        right={
          <ImageCard 
            src="/images/house-intro.jpg" 
            alt="House exterior view"
            aspectRatio="portrait"
          />
        }
      />
    </Section>
  );
};
