import { useTranslation } from 'react-i18next';
import { Skill } from '@/types/index';
import { skillsConfig } from '@/data/skills';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';
import { useMemo } from 'react';

export const useAboutSkills = (): Skill[] => {
  const { t } = useTranslatedContent();

  return useMemo(
    () =>
      skillsConfig.map((skill) => ({
        icon: skill.icon,
        title: t(skill.titleKey),
        category: t(skill.categoryKey),
      })),
    [t]
  );
};
