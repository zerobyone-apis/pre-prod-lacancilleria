import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const FooterMinimal = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-[#F7F5F1]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* ================= ROW 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* LEFT — Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logos/dark_logo.png"
              alt="La Cancillería logo"
              width={200}
              height={56}
              priority
            />
          </div>

          {/* CENTER — Navigation */}
          <nav className="flex justify-center gap-10 text-sm tracking-wide">
            <Link href="/" className="hover:text-primary transition">
              {t('nav.home')}
            </Link>
            <Link href="/location" className="hover:text-primary transition">
              {t('nav.location')}
            </Link>
            <Link href="/estate" className="hover:text-primary transition">
              {t('nav.estate')}
            </Link>
          </nav>

          {/* RIGHT — Language + Social */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <LanguageSwitcher />

            {/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 rounded-full
                border border-border
                flex items-center justify-center
                hover:border-primary hover:text-primary
                transition
              "
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 rounded-full
                border border-border
                flex items-center justify-center
                hover:border-primary hover:text-primary
                transition
              "
            > 
              <Facebook className="w-5 h-5" />
            </a>*/}
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-5 h-px bg-border" />

        {/* ================= ROW 2 ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-mar/50">
          <p>© 2025 La Cancillería. {t('footer.rights')}</p>

          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition">
              {t('footer.links.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              {t('footer.links.terms')}
            </Link>
            <Link
              href="https://www.wmedia.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              {t('footer.links.creative')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
