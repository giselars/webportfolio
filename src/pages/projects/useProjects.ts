import { Project } from '@/types/index';
import { projects } from '@/data/projects';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';
import { useMemo } from 'react';

export const useProjects = (): Project[] => {
  const { t } = useTranslatedContent();

  return useMemo(
    () =>
      projects.map((project) => ({
        id: project.id,
        title: t(`projects.featuredProjects.${project.id}.title`),
        description: t(`projects.featuredProjects.${project.id}.description`),
        tags: project.tags,
        category: project.category,
        image: project.image,
        link: project.link,
        github: project.github,
        demo: project.demo,
      })),
    [t]
  );
};
