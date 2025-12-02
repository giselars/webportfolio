import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { CodeBlock } from '@/components/ui/CodeBlock';
import type { Skill } from '@/types';

const skills: Skill[] = [
  {
    icon: '🎨',
    title: 'Working mainly with React, Vue and TypeScript',
    category: 'Frontend',
  },
  {
    icon: '🔧',
    title: 'Exploring AI tools and how to integrate them into web apps',
    category: 'AI Integration',
  },
  {
    icon: '📱',
    title: 'I enjoy building landing pages, dashboards and web apps',
    category: 'Projects',
  },
  {
    icon: '🌐',
    title: 'Open to remote full-stack development opportunities.',
    category: 'Full-stack',
  },
  {
    icon: '🎓',
    title: 'Continuous learner, always improving my craft',
    category: 'Learning',
  },
  {
    icon: '💼',
    title: 'Available for freelance projects and collaborations',
    category: 'Availability',
  },
];

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <SectionTitle subtitle="Learning and building every day">
        About Me
      </SectionTitle>

      <Card className="p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
        <CodeBlock>
          {`const aboutMe = {
  role: "Frontend Developer",
  focus: "Full-stack development with React & Vue",
  passion: "Building beautiful and user-friendly web experiences",
  currently: "Expanding into full-stack development and exploring 
            the exciting world of AI tools and automation",
  languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
  interests: ["Web Development", "UI/UX", "AI Tools", "Automation"]
}`}
        </CodeBlock>
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
          Let's Build Something Amazing Together! ✨
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I'm always excited to work on new projects and collaborate with
          creative minds. Whether you have a project in mind or just want to
          chat about tech, feel free to reach out!
        </p>
      </Card>
    </div>
  );
};
