import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/layout/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact-section" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              {t('contact.header.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('contact.header.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {t('contact.info.phone.label')}
                </h3>
                <p className="text-lg">{t('contact.info.phone.value')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {t('contact.info.email.label')}
                </h3>
                <p className="text-lg">{t('contact.info.email.value')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {t('contact.info.address.label')}
                </h3>
                <p className="text-lg">{t('contact.info.address.value')}</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
};
