import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type CommonButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsLink = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    as = 'button',
    ...rest
  } = props as ButtonProps & { as: 'button' | 'a' };

  const Component = as === 'a' ? 'a' : 'button';

  const baseClasses =
    'inline-flex items-center justify-center rounded-xl text-sm font-medium transition';
  const stateClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300',
    secondary: 'bg-slate-800 text-slate-50 hover:bg-slate-700',
    outline:
      'border border-emerald-400 text-emerald-300 hover:bg-emerald-500/10',
    ghost: 'text-slate-200 hover:bg-slate-800/80',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'h-8 px-3',
    md: 'h-10 px-4',
    lg: 'h-11 px-5',
    icon: 'h-9 w-9',
  };

  return (
    <Component
      className={cn(
        baseClasses,
        stateClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
