import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  animate?: boolean;
}

export const Section = ({ children, className, fullWidth = false, animate = true }: SectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      ref={ref}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        animate && inView && 'animate-fade-in',
        className
      )}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6 md:px-8'}>
        {children}
      </div>
    </section>
  );
};
