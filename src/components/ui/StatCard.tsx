import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: 'lavender' | 'sky' | 'honey';
}

export const StatCard = ({
  icon,
  label,
  value,
  color = 'lavender',
}: StatCardProps) => {
  const colorClasses: Record<string, string> = {
    lavender: 'bg-lavender-100/50',
    sky: 'bg-sky-100/50',
    honey: 'bg-honey-100/50',
  };

  return (
    <div
      className={`${colorClasses[color]} backdrop-blur-sm rounded-2xl p-6 text-center relative overflow-hidden`}
    >
      {/* Decorative star */}
      <div className="absolute top-2 right-2 text-honey-400 text-xl">✨</div>

      {/* Icono */}
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 bg-white rounded-xl shadow-glass flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>

      {/* Label */}
      <p className="text-gray-600 text-sm mb-1">{label}</p>

      {/* Value */}
      <p className="text-gray-900 text-2xl font-bold">{value}</p>
    </div>
  );
};
