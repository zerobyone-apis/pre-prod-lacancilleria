import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Trans } from 'react-i18next';

interface SectionHeaderProps {
  label?: string;
  to?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({
  label,
  to,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : '',
        className
      )}
    >
      <h2 className="text-h1-sm md:text-h1-md lg:text-h1-lg font-serif leading-tight">
        <Trans i18nKey={title} />
      </h2>
      <p className="text-body md:text-body lg:text-body font-serif leading-tight">
        <Trans i18nKey={label} />
      </p>
      {description && (
        <p className="text-body md:text-body text-muted-foreground leading-tight">
          <Trans i18nKey={description} />
          <span className="pt-3 text-[14px] md:text-body text-muted-foreground leading-tight"><Trans i18nKey={to} /></span>
        </p>
      )}
    </div>
  );
};
