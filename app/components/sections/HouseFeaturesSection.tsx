import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const HouseFeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = ['design', 'materials', 'outdoor', 'smart'];

  return (
    <Section className="bg-secondary/30">
      <SectionHeader
        title={t('house.features.title')}
        align="center"
        className="mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature} className="space-y-4">
            <h3 className="text-2xl font-serif">
              {t(`house.features.items.${feature}.title`)}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(`house.features.items.${feature}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
