import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'portfolio-2025',
    title: 'Personal Portfolio',
    subtitle: 'React · TypeScript · Tailwind · Vite',
    description:
      'Minimal, pastel-inspired portfolio focused on clear information architecture and smooth navigation.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    tags: ['frontend', 'ui'],
    githubUrl: 'https://github.com/portfolio-2025',
    liveUrl: 'https://your-username.github.io/webportfolio',
    highlight: true,
    year: '2025',
  },
  {
    id: 'design-system-lab',
    title: 'Design System Lab',
    subtitle: 'Component library playground',
    description:
      'A small design system experiment with reusable UI primitives and tokens for spacing, colors and typography.',
    technologies: ['React', 'TypeScript', 'Storybook'],
    tags: ['frontend', 'ui', 'experiment'],
    githubUrl: 'https://github.com/design-system-lab',
    year: '2025',
  },
  {
    id: 'dashboard-demo',
    title: 'Analytics Dashboard Demo',
    subtitle: 'Interactive charts and filters',
    description:
      'Dashboard concept with responsive layout, cards and filters, focused on data readability.',
    technologies: ['React', 'TypeScript'],
    tags: ['frontend', 'experiment'],
  },
];
