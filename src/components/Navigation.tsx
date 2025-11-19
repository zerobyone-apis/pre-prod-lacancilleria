import { NavLink } from '@/components/NavLink';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-serif">
            La Cancillería
          </NavLink>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <NavLink 
                to="/house" 
                className="text-sm font-medium tracking-wider hover:text-accent transition-colors"
                activeClassName="text-accent"
              >
                {t('nav.house')}
              </NavLink>
              <NavLink 
                to="/location" 
                className="text-sm font-medium tracking-wider hover:text-accent transition-colors"
                activeClassName="text-accent"
              >
                {t('nav.location')}
              </NavLink>
              <NavLink 
                to="/estate" 
                className="text-sm font-medium tracking-wider hover:text-accent transition-colors"
                activeClassName="text-accent"
              >
                {t('nav.estate')}
              </NavLink>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
