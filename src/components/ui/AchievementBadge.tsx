interface AchievementBadgeProps {
  icon: string;
  title: string;
  description: string;
  color?: 'honey' | 'accent';
}

export const AchievementBadge = ({
  icon,
  title,
  description,
  color = 'honey',
}: AchievementBadgeProps) => {
  const colorClasses: Record<string, string> = {
    honey: 'bg-honey-100',
    accent: 'bg-accent-100',
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 ${colorClasses[color]} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};
