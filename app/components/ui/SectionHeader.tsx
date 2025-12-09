import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import { Trans } from 'react-i18next';

interface SectionHeaderProps {
  to?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({
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
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
        <Trans i18nKey={title} />
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          <Trans i18nKey={description} />
          <Trans i18nKey={to} />
        </p>
      )}
    </div>
  );
};
