import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TwoColumnProps {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
  className?: string;
}

export const TwoColumn = ({ left, right, reverse = false, className }: TwoColumnProps) => {
  return (
    <div className={cn(
      'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center',
      className
    )}>
      <div className={reverse ? 'lg:order-2' : ''}>
        {left}
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        {right}
      </div>
    </div>
  );
};
