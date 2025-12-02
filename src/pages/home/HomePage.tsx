import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Component, JSX } from 'react';
import {
  StarIcon,
  CodeBracketIcon,
  FolderOpenIcon,
  EnvelopeIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

interface SocialIcon {
  name: string;
  url: string;
  styles: string;
  hoverColor: string;
  icon: JSX.Element | Component;
}

const socialIcons: SocialIcon[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    styles:
      'bg-gradient-to-br from-pink-300 via-purple-300 to-sky-300 text-purple-900 shadow-lg',
    hoverColor: 'hover:text-pink-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    styles:
      'bg-gradient-to-br from-sky-300 via-cyan-300 to-emerald-300 text-sky-900 shadow-lg',
    hoverColor: 'hover:text-cyan-700',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:tu@email.com',
    styles:
      'bg-gradient-to-br from-amber-200 via-amber-300 to-orange-300 text-orange-900 shadow-lg',
    hoverColor: 'hover:text-orange-500',
    icon: <EnvelopeIcon className="w-6 h-6" />,
  },
];

export const HomePage = () => {
  return (
    <div className="flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 text-left">
            <Badge color="primary">
              <div className="flex items-center gap-2">
                <CodeBracketIcon className="w-6 h-6 text-accent-500" />
                <span>Frontend Developer</span>
              </div>
            </Badge>

            <div className="text-left">
              <p className="text-gray-700 font-mono font-bold text-sm mb-2">
                const developer =
              </p>
              <h1 className="text-5xl md:text-6xl">
                <span
                  className="font-extrabold
         bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
         bg-clip-text text-transparent"
                >
                  Gisela Scarpin
                </span>
              </h1>
            </div>

            <CodeBlock>
              {`// Exploring full-stack & AI 🚀
  function buildAmazingThings() {
      return creativity + code ✨
  }`}
            </CodeBlock>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg" className="cursor-pointer">
                  <FolderOpenIcon className="w-6 h-6 text-white-500" />
                  Ver Proyectos
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="cursor-pointer"
                >
                  Contáctame 💌
                </Button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full ${social.styles} backdrop-blur-sm flex items-center justify-center ${social.hoverColor} transition-all duration-300 shadow-glass`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Avatar/Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Floating decorative circles */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-honey-300 rounded-full animate-bounce-slow shadow-glow flex items-center justify-center">
              <StarIcon className="w-8 h-8 text-honey-500 hover:text-honey-600 transition-colors" />
            </div>
            <div className="absolute bottom-10 left-0 w-12 h-12 bg-accent-300 rounded-full animate-float shadow-glow-pink flex items-center justify-center">
              <HeartIcon className="w-6 h-6 text-pink-400 hover:text-pink-500 transition-colors" />
            </div>
            <div className="absolute top-20 left-10 w-8 h-8 bg-mint-300 rounded-full animate-pulse-slow flex items-center justify-center">
              <CodeBracketIcon className="w-4 h-4 text-mint-500 hover:text-mint-600 transition-colors" />
            </div>

            {/* Main avatar */}
            <div className="relative w-80 h-80 bg-gradient-orb-purple rounded-full shadow-glow flex items-center justify-center">
              <div className="text-8xl animate-float">👩‍💻</div>
            </div>

            {/* Decorative star */}
            <div className="absolute top-70 right-20 w-16 h-16 bg-sky-300 rounded-full text-4xl animate-pulse-slow flex items-center justify-center">
              <CodeBracketIcon className="w-8 h-8 text-sky-100 hover:text-sky-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
