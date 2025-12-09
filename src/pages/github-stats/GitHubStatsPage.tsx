import { SectionTitle } from '@/components/ui/SectionTitle';
import { StatCard } from '@/components/ui/StatCard';
import { ContributionGraph } from '@/components/ui/ContributionGraph';
import { ActivityCard } from '@/components/ui/ActivityCard';
import { AchievementBadge } from '@/components/ui/AchievementBadge';
import { FunFactCard } from '@/components/ui/FunFactCard';
import type { ActivityItem, Achievement, FunFact } from '@/types/github';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';

export const GitHubStatsPage = () => {
  const { t } = useTranslatedContent();
  const activities: ActivityItem[] = [
    { period: 'This Week', commits: 12 },
    { period: 'This Month', commits: 47 },
    { period: 'This Year', commits: 321 },
  ];

  const achievements: Achievement[] = [
    {
      icon: '🔥',
      title: 'Consistency',
      description: '5 day streak',
      color: 'honey',
    },
    {
      icon: '💻',
      title: 'Active Coder',
      description: '323 contributions',
      color: 'accent',
    },
  ];

  const funFacts: FunFact[] = [
    { icon: '☕', text: 'Code with coffee' },
    { icon: '🌙', text: 'Night owl coder' },
    { icon: '🚀', text: 'Always learning' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle subtitle={t('github-stats.subtitle')}>
        {t('github-stats.title')}
      </SectionTitle>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard
          icon="🔢"
          label="Total Contributions"
          value="323"
          color="lavender"
        />
        <StatCard icon="⚡" label="Current Streak" value="1 day" color="sky" />
        <StatCard
          icon="🎯"
          label="Longest Streak"
          value="5 days"
          color="honey"
        />
      </div>

      {/* GitHub Activity Section */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <h2 className="text-xl font-bold text-gray-800">GitHub Activity</h2>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-mint-100 text-mint-700 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-mint-500 rounded-full animate-pulse"></span>
            Active
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <ActivityCard activities={activities} />

          {/* Achievements */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🏆</span>
              <h3 className="text-lg font-bold text-gray-800">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge
                  key={index}
                  icon={achievement.icon}
                  title={achievement.title}
                  description={achievement.description}
                  color={achievement.color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <ContributionGraph />
      </div>

      {/* Fun Facts */}
      <div className="bg-gradient-to-r from-honey-100/50 to-accent-100/50 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50 p-8">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <span className="text-xl">⚡</span>
          <h2 className="text-xl font-bold text-gray-800">Fun Facts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <FunFactCard key={index} icon={fact.icon} text={fact.text} />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/giselars"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-button text-white px-8 py-4 rounded-full shadow-button hover:shadow-glow transition-all duration-300 font-medium"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View Full GitHub Profile
        </a>
      </div>
    </div>
  );
};
