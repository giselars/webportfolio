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
import { Linkedin, Github } from 'lucide-react';

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
    url: 'https://github.com/giselars',
    styles:
      'bg-gradient-to-br from-pink-300 via-purple-300 to-sky-300 text-purple-900 shadow-lg',
    hoverColor: 'hover:text-pink-500',
    icon: <Github size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/giselascarpin/',
    styles:
      'bg-gradient-to-br from-sky-300 via-cyan-300 to-emerald-300 text-sky-900 shadow-lg',
    hoverColor: 'hover:text-cyan-700',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Email',
    url: 'mailto:g@gmail.com',
    styles:
      'bg-gradient-to-br from-amber-200 via-amber-300 to-orange-300 text-orange-900 shadow-lg',
    hoverColor: 'hover:text-orange-500',
    icon: <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

export const HomePage = () => {
  return (
    <div className="flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6 text-left order-2 md:order-1">
            <Badge color="primary" className="inline-flex">
              <div className="flex items-center gap-2">
                <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
                <span className="text-sm sm:text-base">Frontend Developer</span>
              </div>
            </Badge>

            <div className="text-left">
              <p className="text-gray-700 font-mono font-bold text-xs sm:text-sm mb-2">
                const developer =
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                <span className="font-extrabold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto justify-center"
                >
                  <FolderOpenIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  See Projects
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto justify-center"
                >
                  Contact me 💌
                </Button>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 sm:gap-3 pt-2 sm:pt-4 justify-center sm:justify-start">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${social.styles} backdrop-blur-sm flex items-center justify-center ${social.hoverColor} hover:scale-110 transition-all duration-300 shadow-glass`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Avatar/Illustration */}
          <div className="relative flex items-center justify-center order-1 md:order-2 py-8 md:py-0">
            {/* Floating decorative circles */}
            <div className="absolute top-0 right-0 sm:right-5 w-12 h-12 sm:w-16 sm:h-16 bg-honey-300 rounded-full animate-bounce-slow shadow-glow flex items-center justify-center">
              <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-honey-500 hover:text-honey-600 transition-colors" />
            </div>
            <div className="absolute bottom-8 sm:bottom-10 left-0 sm:left-5 w-10 h-10 sm:w-12 sm:h-12 bg-accent-300 rounded-full animate-float shadow-glow-pink flex items-center justify-center">
              <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 hover:text-pink-500 transition-colors" />
            </div>
            <div className="absolute top-20 left-10 w-6 h-6 bg-mint-300 rounded-full animate-pulse-slow flex items-center justify-center">
              <CodeBracketIcon className="w-3 h-3 sm:w-4 sm:h-4 text-mint-500 hover:text-mint-600 transition-colors" />
            </div>

            {/* Main avatar */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-orb-purple rounded-full shadow-glow flex items-center justify-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl animate-float">
                👩‍💻
              </div>
            </div>

            {/* Decorative star */}
            <div className="absolute top-70 right-16 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-sky-300 rounded-full text-3xl sm:text-4xl animate-pulse-slow flex items-center justify-center">
              <CodeBracketIcon className="w-6 h-6 sm:w-8 sm:h-8 text-sky-100 hover:text-sky-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
