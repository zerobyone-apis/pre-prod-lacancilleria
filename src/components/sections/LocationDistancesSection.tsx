import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export const LocationDistancesSection = () => {
  const { t } = useTranslation();
  const containerRef = useGsapStagger('.distance-row');

  const distances = ['airport', 'downtown', 'beach', 'marina', 'golf', 'shopping'];

  return (
    <Section>
      <SectionHeader
        title={t('location.distances.title')}
        description={t('location.distances.description')}
        align="center"
        className="mb-12"
      />
      <div className="max-w-4xl mx-auto">
        <div ref={containerRef} className="space-y-4">
          {distances.map((place) => (
            <div
              key={place}
              className="distance-row flex items-center justify-between p-6 bg-card rounded-sm border border-border hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{t(`location.distances.items.${place}.icon`)}</span>
                <div>
                  <h4 className="text-lg font-serif">
                    {t(`location.distances.items.${place}.name`)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(`location.distances.items.${place}.description`)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-serif text-accent">
                  {t(`location.distances.items.${place}.distance`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`location.distances.items.${place}.time`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
