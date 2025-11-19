import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const HomeCTASection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 md:px-8 text-center max-w-4xl space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
          {t('cta.title')}
        </h2>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="px-12 py-6 text-lg transition-all duration-500 hover:bg-primary/80 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
        >
          {t('cta.button')}
        </Button>
      </div>
    </section>
  );
};
