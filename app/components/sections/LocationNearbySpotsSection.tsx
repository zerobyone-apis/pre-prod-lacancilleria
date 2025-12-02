import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImageCard } from '@/components/ui/ImageCard';

export const LocationNearbySpotsSection = () => {
  const { t } = useTranslation();
  
  const spots = ['beach', 'marina', 'golf', 'restaurants'];

  return (
    <Section>
      <SectionHeader
        title={t('location.nearby.title')}
        align="center"
        className="mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {spots.map((spot) => (
          <div key={spot} className="space-y-4">
            <ImageCard 
              src={`/images/nearby-${spot}.jpg`}
              alt={t(`location.nearby.items.${spot}.title`)}
              aspectRatio="video"
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif">
                  {t(`location.nearby.items.${spot}.title`)}
                </h3>
                <span className="text-sm text-accent font-medium">
                  {t(`location.nearby.items.${spot}.distance`)}
                </span>
              </div>
              <p className="text-muted-foreground">
                {t(`location.nearby.items.${spot}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
