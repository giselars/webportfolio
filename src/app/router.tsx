// src/app/router.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from '@/pages/home/HomePage';
import { ProjectsPage } from '@/pages/projects/ProjectsPage';
import { AboutPage } from '@/pages/about/AboutPage';
import { ContactPage } from '@/pages/contact/ContactPage';

export const AppRouter = () => {
  return (
    <HashRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </RootLayout>
    </HashRouter>
  );
};
