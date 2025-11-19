import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  animate?: boolean;
}

export const Section = ({ children, className, fullWidth = false, animate = true }: SectionProps) => {
  const animationRef = useGsapAnimation();

  return (
    <section
      ref={animate ? animationRef : null}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        className
      )}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6 md:px-8'}>
        {children}
      </div>
    </section>
  );
};
