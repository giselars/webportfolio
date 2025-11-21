import type { Project } from '../types';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
            {project.year ?? 'Project'}
          </p>
          <h3 className="text-base font-semibold text-slate-50">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs text-slate-400">{project.subtitle}</p>
          )}
        </div>

        {project.highlight && (
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Highlight
          </span>
        )}
      </div>

      <p className="text-xs text-slate-300">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-[11px]">
        {project.technologies.map((tech) => (
          <Tag key={tech} label={tech} variant="outline" />
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-2 text-xs">
        {project.githubUrl && (
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
          >
            GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="sm"
          >
            Live demo
          </Button>
        )}
      </div>
    </Card>
  );
};
