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
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl space-y-6 md:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
          {t('cta.title')}
        </h2>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="px-8 md:px-12 py-5 md:py-6 text-base md:text-lg transition-all duration-500 hover:bg-primary/80 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
        >
          {t('cta.button')}
        </Button>
      </div>
    </section>
  );
};
