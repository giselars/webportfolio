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
    <div className="max-w-4xl mx-auto px-4 py-20">
      <SectionTitle subtitle="Learning and building every day">
        About Me
      </SectionTitle>

      <Card className="p-8 mb-12">
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

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} hover className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{skill.icon}</div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-2">
                  {skill.title}
                </p>
                <span className="inline-block px-3 py-1 bg-lavender-100 text-primary-600 rounded-full text-xs font-medium">
                  {skill.category}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-12 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Let's Build Something Amazing Together! ✨
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm always excited to work on new projects and collaborate with
          creative minds. Whether you have a project in mind or just want to
          chat about tech, feel free to reach out!
        </p>
      </Card>
    </div>
  );
};
