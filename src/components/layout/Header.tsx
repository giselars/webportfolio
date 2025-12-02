import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import { ChevronRight } from 'lucide-react';

interface NavLinkItem {
  to: string;
  label: string;
  end?: boolean;
}

const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const navLinkBaseClass = 'text-sm font-medium transition hover:text-pink-600';
const navLinkActiveClass = 'text-pink-500';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-linear-to-r from-pink-50 to-purple-50 border-b border-pink-200 backdrop-blur-sm bg-opacity-95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo - Responsive */}
        <NavLink
          to="/"
          className="flex items-center gap-2 sm:gap-3 z-30"
          onClick={closeMenu}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              <CommandLineIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-semibold text-xs sm:text-sm">
              ~/portfolio
            </span>
            <span className="text-gray-500 text-[10px] sm:text-xs">
              @giselars
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${navLinkBaseClass} ${isActive ? navLinkActiveClass : 'text-gray-600'}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <span className="flex items-center">
                      <ChevronRight size={20} className="text-pink-500" />{' '}
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-30 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/50 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>

        {/* Mobile menu - Responsive */}
        <div
          className={`
            fixed inset-0  
            md:hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          `}
          style={{ top: '0' }}
        >
          <nav className="flex flex-col items-center justify-center min-h-screen gap-6 sm:gap-8 px-6 sm:px-8 bg-linear-to-br from-pink-50 via-purple-50 to-sky-50">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-xl sm:text-2xl font-medium transition-all duration-300 hover:scale-110
                   ${isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-600'}`
                }
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen
                    ? 'slideIn 0.3s ease-out forwards'
                    : 'none',
                }}
              >
                {({ isActive }) => (
                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <div className="flex items-center justify-center">
                        <ChevronRight
                          size={24}
                          className="text-pink-500 sm:w-7 sm:h-7"
                        />
                        <span>{link.label}</span>
                      </div>
                    ) : (
                      <span>{link.label}</span>
                    )}
                  </div>
                )}
              </NavLink>
            ))}

            {/* Menú mobile decoration - Responsive */}
            <div className="absolute top-20 sm:top-30 right-8 sm:right-10 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-orb-pink rounded-full opacity-50 animate-pulse-slow" />
            <div className="absolute bottom-20 sm:top-70 left-12 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-orb-purple rounded-full opacity-50 animate-float" />
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};
