import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

export const HomePage = () => {
  return (
    <PageContainer>
      <Section className="gap-10 md:grid md:grid-cols-[2fr,1.4fr] md:items-start">
        {/* Left - Hero */}
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/70">
            Frontend developer
          </p>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Hi, I am Gisela. I build clean, thoughtful web experiences.
            </h1>

            <p className="max-w-xl text-sm text-slate-300">
              Frontend developer focused on React, TypeScript and modern
              tooling. I enjoy creating interfaces that feel polished,
              accessible and easy to use.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button as="a" href="#projects">
              View projects
            </Button>
            <Button as="a" href="#contact" variant="outline">
              Get in touch
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
            <span>Currently exploring</span>
            <Tag label="TypeScript" variant="soft" />
            <Tag label="React patterns" variant="outline" />
            <Tag label="Design systems" variant="outline" />
          </div>
        </div>

        {/* Right - Summary card */}
        <Card className="space-y-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Snapshot
            </p>
            <h2 className="text-lg font-semibold tracking-tight">
              Quick overview
            </h2>
          </div>

          <p className="text-sm text-slate-300">
            I like to work end-to-end on the frontend: from UI design decisions
            to clean, type-safe implementations with React and modern tooling.
          </p>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Main stack</span>
              <span className="font-medium text-slate-100">
                React · TypeScript · Tailwind
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Experience</span>
              <span className="font-medium text-slate-100">+X years</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Based in</span>
              <span className="font-medium text-slate-100">[Your city]</span>
            </div>
          </div>
        </Card>
      </Section>
    </PageContainer>
  );
};
