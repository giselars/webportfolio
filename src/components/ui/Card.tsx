import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
};

export const Card = ({ children, className, as = 'div' }: CardProps) => {
  const Component = as;

  return (
    <Component
      className={cn(
        'rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4',
        'shadow-sm shadow-black/40 backdrop-blur-sm',
        className
      )}
    >
      {children}
    </Component>
  );
};
