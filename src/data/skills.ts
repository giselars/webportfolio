import type { Skill } from '@/types';

export const skillsConfig: Array<
  Omit<Skill, 'title' | 'category'> & {
    titleKey: string;
    categoryKey: string;
  }
> = [
  {
    icon: '💻',
    titleKey: 'about.skills.development.title',
    categoryKey: 'about.skills.development.category',
  },
  {
    icon: '🤖',
    titleKey: 'about.skills.ai.title',
    categoryKey: 'about.skills.ai.category',
  },
  {
    icon: '📊',
    titleKey: 'about.skills.projects.title',
    categoryKey: 'about.skills.projects.category',
  },
  {
    icon: '🌍',
    titleKey: 'about.skills.collaboration.title',
    categoryKey: 'about.skills.collaboration.category',
  },
  {
    icon: '📚',
    titleKey: 'about.skills.learning.title',
    categoryKey: 'about.skills.learning.category',
  },
  {
    icon: '🤝',
    titleKey: 'about.skills.availability.title',
    categoryKey: 'about.skills.availability.category',
  },
];
