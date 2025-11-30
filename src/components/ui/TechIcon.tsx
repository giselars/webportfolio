import type { TechIconProps } from '../../types';

export const TechIcon = ({ icon, name, color = 'primary' }: TechIconProps) => {
  const colors: Record<NonNullable<typeof color>, string> = {
    primary: 'bg-gradient-orb-purple',
    pink: 'bg-gradient-orb-pink',
    green: 'bg-gradient-tech',
    blue: 'bg-sky-200',
    yellow: 'bg-honey-200',
    orange: 'bg-coral-200',
  };

  return (
    <div className="flex flex-col items-center gap-3 group">
      <div
        className={`
        w-16 h-16 rounded-2xl ${colors[color]} 
        flex items-center justify-center text-2xl
        shadow-glass group-hover:shadow-glow group-hover:scale-110 
        transition-all duration-300
      `}
      >
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};
