import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const EstateAmenitiesSection = () => {
  const { t } = useTranslation();
  
  const amenities = ['clubhouse', 'fitness', 'tennis', 'pool', 'security', 'concierge'];

  return (
    <Section className="bg-secondary/30">
      <SectionHeader
        title={t('estate.amenities.title')}
        align="center"
        className="mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((amenity) => (
          <div key={amenity} className="space-y-3">
            <h3 className="text-xl font-serif">
              {t(`estate.amenities.items.${amenity}.title`)}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(`estate.amenities.items.${amenity}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
