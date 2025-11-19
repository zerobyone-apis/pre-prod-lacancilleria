import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TwoColumn } from '@/components/ui/TwoColumn';
import { useGsapStagger } from '@/hooks/useGsapAnimation';

export const EstateLogisticsSection = () => {
  const { t } = useTranslation();
  const leftRef = useGsapStagger('.logistics-item');
  const rightRef = useGsapStagger('.logistics-item');

  const services = ['maintenance', 'cleaning', 'concierge', 'security'];
  const access = ['gate', 'parking', 'reception', 'delivery'];

  return (
    <Section>
      <SectionHeader
        title={t('estate.logistics.title')}
        description={t('estate.logistics.description')}
        align="center"
        className="mb-16"
      />
      <TwoColumn
        left={
          <div ref={leftRef} className="space-y-6">
            <h3 className="text-2xl font-serif mb-8">
              {t('estate.logistics.services.title')}
            </h3>
            {services.map((service) => (
              <div key={service} className="logistics-item space-y-2">
                <h4 className="text-lg font-medium flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  {t(`estate.logistics.services.items.${service}.title`)}
                </h4>
                <p className="text-muted-foreground pl-6">
                  {t(`estate.logistics.services.items.${service}.description`)}
                </p>
              </div>
            ))}
          </div>
        }
        right={
          <div ref={rightRef} className="space-y-6">
            <h3 className="text-2xl font-serif mb-8">
              {t('estate.logistics.access.title')}
            </h3>
            {access.map((item) => (
              <div key={item} className="logistics-item space-y-2">
                <h4 className="text-lg font-medium flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  {t(`estate.logistics.access.items.${item}.title`)}
                </h4>
                <p className="text-muted-foreground pl-6">
                  {t(`estate.logistics.access.items.${item}.description`)}
                </p>
              </div>
            ))}
          </div>
        }
      />
    </Section>
  );
};
