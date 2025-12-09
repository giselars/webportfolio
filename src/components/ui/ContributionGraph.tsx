interface ContributionGraphProps {
  data?: number[][];
}

export const ContributionGraph = ({ data }: ContributionGraphProps) => {
  // Generate sample data if not provided
  const generateMockData = (): number[][] => {
    const weeks = 52;
    const days = 7;
    return Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => Math.floor(Math.random() * 5))
    );
  };

  const contributions = data || generateMockData();

  const getColorClass = (level: number): string => {
    switch (level) {
      case 0:
        return 'bg-gray-100';
      case 1:
        return 'bg-lavender-200';
      case 2:
        return 'bg-lavender-300';
      case 3:
        return 'bg-lavender-400';
      case 4:
        return 'bg-lavender-500';
      default:
        return 'bg-lavender-600';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📊</span>
        <h3 className="text-lg font-bold text-gray-800">Contribution Graph</h3>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex gap-1 min-w-full">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${getColorClass(day)} hover:ring-2 hover:ring-primary-400 transition-all cursor-pointer`}
                  title={`${day} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
        <span>Less</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-100 rounded-sm" />
          <div className="w-3 h-3 bg-lavender-200 rounded-sm" />
          <div className="w-3 h-3 bg-lavender-300 rounded-sm" />
          <div className="w-3 h-3 bg-lavender-400 rounded-sm" />
          <div className="w-3 h-3 bg-lavender-500 rounded-sm" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
};
