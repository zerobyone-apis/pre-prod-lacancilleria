import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({ 
  label, 
  title, 
  description, 
  align = 'left',
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      'space-y-4',
      align === 'center' ? 'text-center mx-auto max-w-3xl' : '',
      className
    )}>
      {label && (
        <p className="text-sm font-medium tracking-widest uppercase text-accent">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
