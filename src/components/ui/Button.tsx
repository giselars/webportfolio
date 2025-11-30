import type { ButtonProps } from '../../types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'font-medium transition-all duration-300 rounded-full inline-flex items-center justify-center gap-2';

  const variants: Record<NonNullable<typeof variant>, string> = {
    primary:
      'bg-gradient-button text-primary-700 shadow-button hover:shadow-glow hover:scale-105',
    secondary:
      'border-2 border-primary-400 text-primary-600 hover:bg-primary-50',
    outline:
      'border-2 border-white/30 text-gray-700 hover:border-primary-300 hover:bg-white/50',
  };

  const sizes: Record<NonNullable<typeof size>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
