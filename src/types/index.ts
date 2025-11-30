export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  tags: string[];
  category: ProjectCategory;
  link: string;
  github?: string;
  demo?: string;
}

export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'ai';

export interface Category {
  id: ProjectCategory;
  name: string;
  emoji: string;
}

export interface Skill {
  icon: string;
  title: string;
  category: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

// Props types for components
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'pink' | 'green' | 'blue' | 'yellow';
  className?: string;
}

export interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  color?: 'primary' | 'pink' | 'green' | 'blue' | 'yellow' | 'orange';
}

export interface ProjectCardProps {
  image?: string | null;
  title: string;
  description: string;
  tags?: string[];
  link: string;
  github?: string;
  demo?: string;
}
