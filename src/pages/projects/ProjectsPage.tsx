import { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/pages/projects/components/ProjectCard';
import type { Project, Category, ProjectCategory } from '@/types';
import { Sparkles, Code, Layers, BrainCircuit } from 'lucide-react';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';

const categories: Category[] = [
  { id: 'all', name: 'All Projects', emoji: <Sparkles size={20} /> },
  { id: 'frontend', name: 'Frontend', emoji: <Code size={20} /> },
  { id: 'full-stack', name: 'Full Stack', emoji: <Layers size={20} /> },
  { id: 'ai', name: 'AI Projects', emoji: <BrainCircuit size={20} /> },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'full-stack',
    link: '#',
    //github: 'https://github.com',
    //demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'Real-time weather application with beautiful UI and location-based forecasts.',
    image: null,
    tags: ['React', 'API', 'Tailwind', 'Charts'],
    category: 'frontend',
    link: '#',
    //github: 'https://github.com',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'AI-powered tool to generate content using GPT-4 API with custom prompts.',
    image: null,
    tags: ['React', 'OpenAI', 'TypeScript'],
    category: 'ai',
    link: '#',
    //demo: 'https://demo.com',
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Interactive dashboard with real-time data visualisation',
    image: null,
    tags: ['React', 'Tailwind', 'Recharts'],
    category: 'frontend',
    link: '#',
    //github: 'https://github.com',
    //demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time updates and team features.',
    image: null,
    tags: ['Vue', 'Firebase', 'Vuetify'],
    category: 'full-stack',
    link: '#',
    //github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Expense Tracker',
    description:
      'Personal finance tracker with data visualization and budget planning.',
    image: null,
    tags: ['React', 'Chart.js', 'LocalStorage'],
    category: 'frontend',
    link: '#',
    //demo: 'https://demo.com',
  },
];

export const ProjectsPage = () => {
  const { t } = useTranslatedContent();
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle subtitle={t('projects.subtitle')}>
        {t('projects.title')}
      </SectionTitle>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`
              px-6 py-3 cursor-pointer rounded-full font-medium transition-all duration-300
              ${
                filter === cat.id
                  ? 'bg-gradient-button text-white shadow-button'
                  : 'bg-white/80 text-gray-700 hover:bg-white shadow-glass'
              }
            `}
          >
            <span className="flex items-center">
              <span className="mr-2">{cat.emoji}</span>
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-white/80 backdrop-blur-lg rounded-2xl shadow-glass border border-white/50 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {t('projects.cta.title')}
          </h3>
          <p className="text-gray-600 mb-6">{t('projects.cta.description')}</p>
          <a
            href="https://github.com/giselars"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-button text-white px-6 py-3 rounded-full shadow-button hover:shadow-glow transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t('projects.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};
