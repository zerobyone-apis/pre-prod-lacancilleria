import { NavLink } from '@/components/NavLink';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink 
            to="/" 
            className={cn(
              "text-2xl font-serif transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            La Cancillería
          </NavLink>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <NavLink 
                to="/" 
                className={cn(
                  "text-sm font-medium tracking-wider hover:text-accent transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
                activeClassName="text-accent"
              >
                {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/location" 
                className={cn(
                  "text-sm font-medium tracking-wider hover:text-accent transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
                activeClassName="text-accent"
              >
                {t('nav.location')}
              </NavLink>
              <NavLink 
                to="/estate" 
                className={cn(
                  "text-sm font-medium tracking-wider hover:text-accent transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
                activeClassName="text-accent"
              >
                {t('nav.estate')}
              </NavLink>
            </div>
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
};
