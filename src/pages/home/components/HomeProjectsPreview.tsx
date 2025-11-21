import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/features/projects/data';
import { ProjectCard } from '@/features/projects/components/ProjectCard';

export const HomeProjectsPreview = () => {
  const highlightedProjects = projects.filter((project) => project.highlight);

  return (
    <Section id="projects" className="mt-12 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300/70">
            Selected work
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">
            Projects
          </h2>
          <p className="max-w-xl text-xs text-slate-400">
            A quick look at some things I have been building recently.
          </p>
        </div>

        <Button as="a" href="#/projects" variant="ghost" size="sm">
          View all projects
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlightedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {highlightedProjects.length === 0 && (
          <Card className="flex items-center justify-center text-xs text-slate-400">
            No highlighted projects yet. Mark one with{' '}
            <span className="ml-1 font-mono text-[11px]">highlight: true</span>{' '}
            in your data.
          </Card>
        )}
      </div>
    </Section>
  );
};
