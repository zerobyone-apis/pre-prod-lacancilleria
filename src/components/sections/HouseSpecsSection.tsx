import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export const HouseSpecsSection = () => {
  const { t } = useTranslation();
  const containerRef = useGsapStagger('.spec-item');

  const specs = [
    { key: 'bedrooms', icon: '🛏️' },
    { key: 'bathrooms', icon: '🚿' },
    { key: 'area', icon: '📐' },
    { key: 'lot', icon: '🏞️' },
    { key: 'floors', icon: '🏢' },
    { key: 'parking', icon: '🚗' },
    { key: 'pool', icon: '🏊' },
    { key: 'year', icon: '📅' }
  ];

  return (
    <Section className="bg-secondary/30">
      <SectionHeader
        title={t('house.specs.title')}
        description={t('house.specs.description')}
        align="center"
        className="mb-16"
      />
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {specs.map((spec) => (
          <div key={spec.key} className="spec-item text-center space-y-3">
            <div className="text-5xl mb-2">{spec.icon}</div>
            <h3 className="text-3xl font-serif text-accent">
              {t(`house.specs.items.${spec.key}.value`)}
            </h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              {t(`house.specs.items.${spec.key}.label`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
