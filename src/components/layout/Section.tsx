import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  animate?: boolean;
  id?: string;
}

export const Section = ({ children, className, fullWidth = false, animate = true, id }: SectionProps) => {
  const animationRef = useGsapAnimation();

  return (
    <section
      id={id}
      ref={animate ? animationRef : null}
      className={cn(
        'py-12 md:py-24 lg:py-32',
        className
      )}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6 lg:px-8'}>
        {children}
      </div>
    </section>
  );
};
