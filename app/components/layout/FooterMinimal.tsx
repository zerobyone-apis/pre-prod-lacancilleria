import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export const FooterMinimal = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo and copyright - Left */}
          <div className="text-center md:text-left">
            <Image src="/logos/dark_logo.png" alt="La Cancillería logo" width={120} height={36} priority className="mx-auto md:mx-0" />
            <p className="text-xs md:text-sm text-muted-foreground">© 2025 La Cancillería. {t('footer.rights')}</p>
          </div>
          
          {/* Navigation - Center */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="text-xs md:text-sm hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/location" className="text-xs md:text-sm hover:text-primary transition-colors">
              {t('nav.location')}
            </Link>
            <Link href="/estate" className="text-xs md:text-sm hover:text-primary transition-colors">
              {t('nav.estate')}
            </Link>
          </nav>

          {/* Social icons - Right */}
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
