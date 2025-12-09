import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { useTranslatedContent } from '@/hooks/useTranslatedContent';
import { useAboutSkills } from './hooks/useAboutSkills';

export const AboutPage = () => {
  const { t } = useTranslatedContent();
  const skills = useAboutSkills();
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <SectionTitle subtitle={t('about.subtitle')}>
        {t('about.title')}
      </SectionTitle>

      <Card className="p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
        <CodeBlock>{t('about.codeConst')}</CodeBlock>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {skills.map((skill, index) => (
          <Card key={index} hover className="p-4 sm:p-5 lg:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl flex-shrink-0">
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  {skill.title}
                </p>
                <span className="inline-block px-2.5 sm:px-3 py-1 bg-lavender-100 text-primary-600 rounded-full text-xs font-medium">
                  {skill.category}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8 sm:mt-10 lg:mt-12 p-6 sm:p-7 lg:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
          {t('about.cta.title')}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t('about.cta.description')}
        </p>
      </Card>
    </div>
  );
};
