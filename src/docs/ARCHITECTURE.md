# Frontend Architecture

## Overview

This project is a personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.  
The goal is to keep the structure modular, predictable, and easy to extend.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Folder Structure

```txt
src/
  main.tsx
  app/
    App.tsx
    router.tsx
    layout/
      RootLayout.tsx
  pages/
    home/
      HomePage.tsx
      components/
        HomeHeroSection.tsx
        HomeSummaryCard.tsx
        HomeStatsStrip.tsx
        HomeProjectsPreview.tsx
        HomeTechStackSection.tsx
        HomeContactSection.tsx
  features/
    projects/
      components/
        ProjectCard.tsx
        ProjectTag.tsx
        ProjectList.tsx
        ProjectFilterBar.tsx
      hooks/
        useProjectFilter.ts
      types.ts
      data.ts
    skills/
      components/
        SkillCategory.tsx
        SkillBadge.tsx
        SkillsGrid.tsx
      types.ts
      data.ts
    experience/
      components/
        ExperienceTimeline.tsx
        ExperienceItem.tsx
      types.ts
      data.ts
  components/
    layout/
      PageContainer.tsx
      Section.tsx
      Header.tsx
      Footer.tsx
      Sidebar.tsx
    ui/
      Button.tsx
      IconButton.tsx
      Card.tsx
      Badge.tsx
      Chip.tsx
      Avatar.tsx
      Tag.tsx
      Divider.tsx
      SectionTitle.tsx
  lib/
    theme.ts
    routes.ts
    constants.ts
    hooks/
      useScrollToSection.ts
      useIsMobile.ts
  data/
    socialLinks.ts
  styles/
    globals.css
    tailwind.css
```
