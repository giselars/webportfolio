export type ProjectTag =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'ui'
  | 'experiment'
  | 'open-source';

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  tags: ProjectTag[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
  year?: string;
};
