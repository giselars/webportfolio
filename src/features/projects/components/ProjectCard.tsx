import type { Project } from '../types';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex h-full flex-col gap-4 border-white/70 bg-linear-to-br from-white via-rose-50/80 to-sky-50/80 shadow-lg shadow-rose-100/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-rose-400/80">
            {project.year ?? 'Project'}
          </p>
          <h3 className="text-base font-semibold text-slate-900">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs text-slate-600">{project.subtitle}</p>
          )}
        </div>

        {project.highlight && (
          <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 shadow-sm shadow-emerald-100/80">
            Highlight
          </span>
        )}
      </div>

      <p className="text-xs text-slate-600">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-[11px]">
        {project.technologies.map((tech) => (
          <Tag
            key={tech}
            label={tech}
            variant="outline"
            className="border-rose-200! bg-rose-50/70! text-rose-500!"
          />
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
            className="text-sky-600! !hover:bg-sky-50/80 !hover:text-sky-700"
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
            className="border-violet-200! text-violet-600! !hover:bg-violet-50/80"
          >
            Live demo
          </Button>
        )}
      </div>
    </Card>
  );
};
