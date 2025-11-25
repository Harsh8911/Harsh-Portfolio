import { IconType } from 'react-icons';

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: IconType;
}

export interface Achievement {
  id: number;
  title: string;
  metric: string;
  icon: IconType;
}