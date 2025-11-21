import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { projects } from '@/features/projects/data';
import { ProjectCard } from '@/features/projects/components/ProjectCard';

export const ProjectsPage = () => {
  return (
    <PageContainer>
      <Section className="space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300/70">
            Work
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-50">
            Projects
          </h1>
          <p className="max-w-xl text-xs text-slate-400">
            A more detailed view of the things I have been building, exploring
            and learning from.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </PageContainer>
  );
};
