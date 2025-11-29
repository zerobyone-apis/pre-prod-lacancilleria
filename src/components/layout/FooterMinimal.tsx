import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook } from 'lucide-react';

export const FooterMinimal = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Logo and copyright */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-serif mb-2">La Cancillería</h3>
            <p className="text-xs md:text-sm text-muted-foreground">© 2025 La Cancillería. {t('footer.rights')}</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="text-xs md:text-sm hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/location" className="text-xs md:text-sm hover:text-primary transition-colors">
              {t('nav.location')}
            </Link>
            <Link to="/estate" className="text-xs md:text-sm hover:text-primary transition-colors">
              {t('nav.estate')}
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
