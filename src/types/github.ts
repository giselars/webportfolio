export interface ActivityItem {
  period: string;
  commits: number;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  color: 'honey' | 'accent';
}

export interface FunFact {
  icon: string;
  text: string;
}

export interface GitHubStats {
  totalContributions: number;
  currentStreak: string;
  longestStreak: string;
}

export interface ContributionDay {
  level: number; // 0-4
  date: string;
  count: number;
}
