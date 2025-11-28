import { NavLink } from 'react-router-dom';

const navLinkBaseClass = 'text-sm font-medium transition hover:text-pink-600';
const navLinkActiveClass = 'text-pink-500';

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-linear-to-r from-pink-50 to-purple-50 border-b border-pink-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-semibold text-sm">
              ~/portfolio
            </span>
            <span className="text-gray-500 text-xs">@giselars</span>
          </div>
        </NavLink>

        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : 'text-gray-600'}`
            }
          >
            {({ isActive }) => <>{isActive ? '> home' : 'home'}</>}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : 'text-gray-600'}`
            }
          >
            {({ isActive }) => <>{isActive ? '> about' : 'about'}</>}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : 'text-gray-600'}`
            }
          >
            {({ isActive }) => <>{isActive ? '> projects' : 'projects'}</>}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : 'text-gray-600'}`
            }
          >
            {({ isActive }) => <>{isActive ? '> contact' : 'contact'}</>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
