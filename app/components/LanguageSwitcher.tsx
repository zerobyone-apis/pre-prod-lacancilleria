'use client';

import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        `
        flex items-center gap-1
        text-[14px] tracking-wide
        text-[#6f6a63]
        transition-colors duration-200
        hover:text-[#243140]
        `,
        className 
      )}
    >
      {i18n.language === 'en' ? 'Esp' : 'Eng'}
      <ChevronDown className="w-3 h-3 mt-[1px] opacity-70" />
    </button>
  );
};
