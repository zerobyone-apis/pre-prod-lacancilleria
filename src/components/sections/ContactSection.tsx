import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/layout/ContactForm';

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
            {t('contact.info.email.value')}
          </p>
        </div>

        {/* Form centered */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
