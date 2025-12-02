import { HeartIcon } from '@heroicons/react/24/outline';
import { Coffee, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-linear-to-r from-pink-50 to-purple-50 border-t border-pink-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/giselars"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 border border-violet-500 text-violet-500 flex items-center justify-center hover:bg-gradient-button hover:text-white hover:bg-violet-500 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/giselascarpin/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 border border-blue-400 text-blue-400 flex items-center justify-center hover:bg-gradient-button hover:text-white hover:bg-blue-400 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:tu@email.com"
              className="w-10 h-10 rounded-full bg-white/80 border border-slate-500 text-slate-500 flex items-center justify-center hover:bg-gradient-button hover:text-white hover:bg-slate-500 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-gray-600 text-sm">Made with </span>
            <HeartIcon className="w-4 h-4 text-accent-500 hover:text-white" />
            <span className="text-gray-600 text-sm">by and lot of</span>
            <Coffee size={16} className="text-gray-600" />
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Gisela Scarpin. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
