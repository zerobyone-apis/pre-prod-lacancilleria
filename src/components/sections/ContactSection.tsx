import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/layout/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact-section" className="bg-background">
      <div className="space-y-16">
        {/* Title centered */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            {t('contact.header.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('contact.header.subtitle')}
          </p>
        </div>

        {/* Two columns: info left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8 flex flex-col items-start justify-center lg:pr-12 lg:border-r border-border">
            <div className="flex items-start gap-4 max-w-xs">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {t('contact.info.phone.label')}
                </h3>
                <p className="text-lg">{t('contact.info.phone.value')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-xs">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {t('contact.info.email.label')}
                </h3>
                <p className="text-lg">{t('contact.info.email.value')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-xs">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {t('contact.info.address.label')}
                </h3>
                <p className="text-lg">{t('contact.info.address.value')}</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
