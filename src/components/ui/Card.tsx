import type { CardProps } from '../../types';

export const Card = ({
  children,
  className = '',
  hover = false,
}: CardProps) => {
  return (
    <div
      className={`
        bg-white/95 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50
        ${hover ? 'hover:shadow-card-hover transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
