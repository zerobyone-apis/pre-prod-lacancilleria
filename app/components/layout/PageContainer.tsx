import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn('min-h-screen', className)}>
      {children}
    </div>
  );
};
