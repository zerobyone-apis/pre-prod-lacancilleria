import { NavLink } from '@/app/components/NavLink';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { cn } from '@/app/lib/utils';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink
            to="/"
            className={cn(
              'transition-colors',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
          >
            <span className="sr-only">La Cancillería</span>
            <Image
              src={
                isScrolled ? '/logos/dark_logo.png' : '/logos/light_logo.png'
              }
              alt="La Cancillería logo"
              width={183}
              height={48}
              priority
            />
          </NavLink>

          <div className="flex items-center gap-2 md:gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'text-navbar_text font-medium tracking-wider transition-colors',
                    // 🎨 Si el link está activo → siempre piel
                    pathname === link.to && 'text-piel',
                    // 🎨 Si NO está activo, aplicar estilos según scroll:
                    pathname !== link.to &&
                      (isScrolled ? 'text-foreground' : 'text-white'),
                    // 🧈 Hover en cualquier estado
                    'hover:text-piel'
                  )}
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
                    'h-9 w-9 transition-colors',
                    isScrolled
                      ? 'text-foreground hover:bg-muted'
                      : 'text-white hover:bg-white/10'
                  )}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] bg-background/95 backdrop-blur-md"
              >
                <div className="flex flex-col gap-8 mt-8">
                  <NavLink
                    to="/"
                    className={cn('transition-colors text-foreground')}
                  >
                    <Image
                      src="/logos/dark_logo.png"
                      alt="La Cancillería logo"
                      width={183}
                      height={48}
                      priority
                    />
                  </NavLink>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium tracking-wider text-foreground hover:text-accent transition-colors py-2"
                        activeClassName="text-piel"
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
