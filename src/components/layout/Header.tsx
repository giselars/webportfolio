import { NavLink } from 'react-router-dom';

const navLinkBaseClass =
  'text-sm font-medium transition hover:text-emerald-300';
const navLinkActiveClass = 'text-emerald-300';

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <NavLink to="/" className="text-sm font-semibold tracking-tight">
          yourname.dev
        </NavLink>

        <nav className="flex items-center gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBaseClass} ${isActive ? navLinkActiveClass : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
