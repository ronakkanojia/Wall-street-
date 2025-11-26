import { Project, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fintech-dash',
    title: 'Nova Finance',
    category: 'Fintech Dashboard',
    year: '2024',
    description: 'A comprehensive financial dashboard designed for high-frequency traders, featuring real-time WebGL data visualization and ultra-low latency updates.',
    role: 'Lead Frontend Engineer',
    stack: ['React', 'D3.js', 'WebGL', 'TypeScript'],
    image: 'https://picsum.photos/seed/finance/1200/800',
    gallery: [
      'https://picsum.photos/seed/finance2/800/600',
      'https://picsum.photos/seed/finance3/800/600'
    ],
    challenge: 'Rendering 50,000+ data points in real-time without compromising the 60fps UI thread.',
    outcome: 'Achieved sub-10ms render times using a custom WebGL layer, increasing user retention by 40%.'
  },
  {
    id: 'luxury-fashion',
    title: 'Aethel Mode',
    category: 'E-Commerce Experience',
    year: '2023',
    description: 'An immersive e-commerce experience for a luxury avant-garde fashion brand, focusing on storytelling through motion and minimalist UI.',
    role: 'Creative Developer',
    stack: ['Next.js', 'Framer Motion', 'Shopify API'],
    image: 'https://picsum.photos/seed/fashion/1200/800',
    gallery: [
      'https://picsum.photos/seed/fashion2/800/600',
      'https://picsum.photos/seed/fashion3/800/600'
    ],
    challenge: 'Balancing high-resolution assets with fast load times on mobile networks.',
    outcome: 'Created a progressive loading system that maintains visual fidelity, resulting in a Lighthouse performance score of 98.'
  },
  {
    id: 'arch-viz',
    title: 'Structure 09',
    category: 'Architecture Portfolio',
    year: '2023',
    description: 'A portfolio site for an award-winning architectural firm. The design mimics the structural integrity and negative space found in their physical work.',
    role: 'Frontend Developer & UX Designer',
    stack: ['React', 'GSAP', 'Three.js'],
    image: 'https://picsum.photos/seed/arch/1200/800',
    gallery: [
      'https://picsum.photos/seed/arch2/800/600',
      'https://picsum.photos/seed/arch3/800/600'
    ],
    challenge: 'Implementing a non-linear navigation system that feels intuitive rather than confusing.',
    outcome: 'Won "Site of the Day" on Awwwards for its unique spatial navigation system.'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', view: 'work' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'Twitter', url: '#' },
  { label: 'Email', url: 'mailto:hello@ronakkanojia.dev' },
];