export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <p>© {year} Gisela Scarpin. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/giselars"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/giselascarpin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contactwithgisela@gmail.com"
            className="hover:text-emerald-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
