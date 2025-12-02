import { useTranslation } from 'react-i18next';
import { Section } from '@/app/components/layout/Section';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useGsapStagger } from '@/app/hooks/useGsapAnimation';

export const EstateContactSection = () => {
  const { t } = useTranslation();
  const containerRef = useGsapStagger('.contact-card');

  const contacts = [
    {
      key: 'email',
      icon: Mail,
      value: 'info@lacancilleria.com',
      label: 'estate.contact.email'
    },
    {
      key: 'phone',
      icon: Phone,
      value: '+598 42 123 456',
      label: 'estate.contact.phone'
    },
    {
      key: 'address',
      icon: MapPin,
      value: 'La Cancillería, Punta del Este',
      label: 'estate.contact.address'
    },
    {
      key: 'hours',
      icon: Clock,
      value: '9:00 - 18:00',
      label: 'estate.contact.hours'
    }
  ];

  return (
    <Section className="bg-secondary/30">
      <SectionHeader
        title={t('estate.contact.title')}
        description={t('estate.contact.description')}
        align="center"
        className="mb-12"
      />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map(({ key, icon: Icon, value, label }) => (
          <div
            key={key}
            className="contact-card bg-card p-8 rounded-sm border border-border hover:border-accent transition-colors text-center space-y-4"
          >
            <Icon className="w-8 h-8 mx-auto text-accent" />
            <h4 className="text-sm uppercase tracking-wider text-muted-foreground">
              {t(label)}
            </h4>
            <p className="text-lg font-medium">{value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
