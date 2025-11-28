import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/components/layout/ContactForm';
import { Mail } from 'lucide-react';

interface CTASectionProps {
  titleKey: string;
  descriptionKey: string;
}

export const CTASection = ({ titleKey, descriptionKey }: CTASectionProps) => {
  const { t } = useTranslation();

  return (
    <Section className="bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        {/* Header centered at top */}
        <div className="text-center mb-12">
          <SectionHeader
            title={t(titleKey)}
            description={t(descriptionKey)}
            align="center"
          />
          
          {/* Email contact option */}
          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="text-sm">
              {t('contact.emailAlternative', { defaultValue: 'Or reach us at' })}
            </span>
            <a 
              href="mailto:info@lacancilleria.com" 
              className="text-sm text-foreground hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              info@lacancilleria.com
            </a>
          </div>
        </div>

        {/* Contact form below */}
        <ContactForm />
      </div>
    </Section>
  );
};
