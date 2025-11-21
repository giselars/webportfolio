import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';

import { Button } from '@/components/ui/Button';

export const ContactPage = () => {
  return (
    <PageContainer>
      <Section id="contact">
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            The best way to reach me is by email. I am also active on GitHub and
            LinkedIn.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="mailto:youremail@example.com">Email me</a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
};
