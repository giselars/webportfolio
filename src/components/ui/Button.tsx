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
      'text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
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
