import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const LocationMapSection = () => {
  const { t } = useTranslation();

  return (
    <Section className="bg-secondary/30">
      <SectionHeader
        title={t('location.map.title')}
        align="center"
        className="mb-16"
      />
      <div className="aspect-video w-full rounded-sm overflow-hidden bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.64447907935!2d-54.96701868359375!3d-34.95066480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575705e8f0c1a4b%3A0x1e0c8e1e9c8d8f8e!2sPunta%20del%20Este%2C%20Maldonado%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
};
