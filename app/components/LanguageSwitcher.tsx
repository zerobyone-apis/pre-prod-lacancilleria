import { useTranslation } from 'react-i18next';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "text-sm font-medium uppercase tracking-wider transition-colors",
        isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-white/80"
      )}
    >
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
};
