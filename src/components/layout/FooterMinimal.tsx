import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook } from 'lucide-react';

export const FooterMinimal = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">La Cancillería</h3>
            <p className="text-sm text-muted-foreground">© 2025 La Cancillería. {t('footer.rights')}</p>
          </div>
          
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-sm hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/location" className="text-sm hover:text-primary transition-colors">
              {t('nav.location')}
            </Link>
            <Link to="/estate" className="text-sm hover:text-primary transition-colors">
              {t('nav.estate')}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
