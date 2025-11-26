export type ViewState = 'home' | 'work' | 'about' | 'contact' | 'project';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  stack: string[];
  image: string;
  gallery: string[];
  challenge: string;
  outcome: string;
  link?: string;
}

export interface NavItem {
  label: string;
  view: ViewState;
}