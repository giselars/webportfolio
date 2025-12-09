import { Card } from '@/components/ui/Card';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';

import type { ProjectCardProps } from '@/types/index';

export const ProjectCard = ({
  image,
  title,
  category,
  description,
  tags = [],
  link,
  github,
  demo,
}: ProjectCardProps) => {
  const { t } = useTranslatedContent();
  return (
    <Card hover className="overflow-hidden group cursor-pointer">
      <div className="aspect-video overflow-hidden bg-gradient-purple-blue">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            💻
          </div>
        )}
      </div>
      <div className="p-6 text-left">
        <div className="flex flex-wrap mb-2">
          <span className="px-3 py-1 capitalize bg-lavender-100 text-primary-600 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-lavender-100 text-primary-600 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              {t('projects.projectCard.github')}
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              {t('projects.projectCard.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
