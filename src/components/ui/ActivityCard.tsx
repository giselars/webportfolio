import { ActivityItem } from '@/types/github';

interface ActivityCardProps {
  activities: ActivityItem[];
}

export const ActivityCard = ({ activities }: ActivityCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📅</span>
        <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{activity.period}</span>
            <span className="text-accent-500 font-semibold text-sm">
              {activity.commits} commits
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
