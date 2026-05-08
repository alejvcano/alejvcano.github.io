/**
 * Core TypeScript interfaces for Research Portfolio
 */

export type ProjectCategory =
  | 'mechanistic-modeling'
  | 'phenomenological-modeling'
  | 'epidemiology'
  | 'climate-systems'
  | 'systems-biology'
  | 'network-science';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  institution?: string;
  methodology?: string;
  location?: string;
  slug: string;
}

export interface ResearcherInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  institutions: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    googleScholar?: string;
    github?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'collaboration' | 'speaking' | 'consulting' | 'general';
  message: string;
  timestamp: Date;
}
