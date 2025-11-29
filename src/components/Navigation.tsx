import { NavLink } from '@/components/NavLink';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/location', label: t('nav.location') },
    { to: '/estate', label: t('nav.estate') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink 
            to="/" 
            className={cn(
              "text-xl md:text-2xl font-serif transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            La Cancillería
          </NavLink>
          
          <div className="flex items-center gap-2 md:gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to} 
                  className={cn(
                    "text-sm font-medium tracking-wider hover:text-accent transition-colors",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                  activeClassName="text-accent"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            
            <LanguageSwitcher isScrolled={isScrolled} />
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-9 w-9 transition-colors",
                    isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                  )}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md">
                <div className="flex flex-col gap-8 mt-8">
                  <div className="text-2xl font-serif text-foreground">
                    La Cancillería
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink 
                        key={link.to}
                        to={link.to} 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium tracking-wider text-foreground hover:text-accent transition-colors py-2"
                        activeClassName="text-accent"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
