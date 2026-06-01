/**
 * Centralized TypeScript interfaces for all data models.
 * Import from here instead of re-defining inline in component props.
 */

export interface Skill {
  name: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certificate {
  url: string;
  label?: string;
}

export interface EducationItem {
  id: number;
  img: string;
  school: string;
  date: string;
  degree: string;
  description: string;
  highlights: string[];
  certificate?: Certificate;
}

export interface ExperienceItem {
  id: number;
  image: string;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  links: string;
  technologies: string[];
  demo: string;
}
