import type { BadgeProps } from '../../types';

export const Badge = ({
  children,
  color = 'primary',
  className = '',
}: BadgeProps) => {
  const colors: Record<NonNullable<typeof color>, string> = {
    primary: 'bg-lavender-200 text-primary-700',
    pink: 'bg-accent-100 text-accent-700',
    green: 'bg-mint-100 text-mint-700',
    blue: 'bg-sky-100 text-sky-700',
    yellow: 'bg-honey-100 text-honey-700',
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
};
