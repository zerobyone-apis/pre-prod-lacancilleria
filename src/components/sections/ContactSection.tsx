import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/layout/ContactForm';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Mail } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact-section" className="bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header centered at top */}
        <div className="text-center mb-12">
          <SectionHeader
            title={t('contact.header.title')}
            description={t('contact.header.subtitle')}
            align="center"
          />
          
          {/* Email contact option */}
          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="text-sm">
              {t('contact.emailAlternative', { defaultValue: 'Or reach us at' })}
            </span>
            <a 
              href="mailto:lacancilleria@email.com" 
              className="text-sm text-foreground hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              lacancilleria@email.com
            </a>
          </div>
        </div>

        {/* Contact form below */}
        <ContactForm />
      </div>
    </Section>
  );
};
