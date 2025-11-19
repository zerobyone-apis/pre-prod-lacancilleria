import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/components/layout/ContactForm';
import { TwoColumn } from '@/components/ui/TwoColumn';

interface CTASectionProps {
  titleKey: string;
  descriptionKey: string;
}

export const CTASection = ({ titleKey, descriptionKey }: CTASectionProps) => {
  const { t } = useTranslation();

  return (
    <Section className="bg-secondary/30">
      <TwoColumn
        left={
          <div className="flex items-center h-full">
            <SectionHeader
              title={t(titleKey)}
              description={t(descriptionKey)}
            />
          </div>
        }
        right={<ContactForm />}
      />
    </Section>
  );
};
