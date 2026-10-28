export type ProjectCategory = 'landing' | 'frontend' | 'fullstack'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  stack: string[]
  gradient: string
  liveUrl?: string
  repoUrl?: string
}

export const categories: { value: 'all' | ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'landing', label: 'Landing Projects' },
  { value: 'frontend', label: 'Frontend Projects' },
  { value: 'fullstack', label: 'Full-Stack / SaaS' },
]

export const categoryLabel: Record<ProjectCategory, string> = {
  landing: 'Landing',
  frontend: 'Frontend',
  fullstack: 'Full-Stack / SaaS',
}

/**
 * PLACEHOLDER DATA: swap these with your real projects.
 * Add `liveUrl` / `repoUrl` and the buttons appear automatically.
 */
export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Nova Startup Landing',
    category: 'landing',
    description:
      'Conversion-focused SaaS landing page with animated hero, pricing table and testimonials.',
    stack: ['React', 'Tailwind', 'GSAP'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'p2',
    title: 'Pixel Agency Website',
    category: 'landing',
    description:
      'Creative agency one-pager with scroll-triggered sections and smooth page transitions.',
    stack: ['Next.js', 'Motion', 'Tailwind'],
    gradient: 'from-fuchsia-500 to-rose-500',
  },
  {
    id: 'p3',
    title: 'Product Launch Page',
    category: 'landing',
    description:
      'Waitlist landing page for a mobile app launch, with email capture and countdown.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'p4',
    title: 'Weather Dashboard',
    category: 'frontend',
    description:
      'Live weather app with search, 7-day forecast, unit toggle and dark mode.',
    stack: ['React', 'TypeScript', 'REST API'],
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    id: 'p5',
    title: 'Movie Explorer',
    category: 'frontend',
    description:
      'Browse, search and save movies with infinite scroll, skeleton loaders and watchlist.',
    stack: ['React', 'Tailwind', 'TMDB API'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 'p6',
    title: 'Kanban Task Board',
    category: 'frontend',
    description:
      'Drag-and-drop task board with columns, labels and persistent local storage.',
    stack: ['React', 'dnd-kit', 'Zustand'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'p7',
    title: 'Portfolio Builder SaaS',
    category: 'fullstack',
    description:
      'Subscription SaaS that lets users build and publish portfolios, with auth, billing and analytics.',
    stack: ['Next.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'p8',
    title: 'Admin Analytics Dashboard',
    category: 'fullstack',
    description:
      'Role-based admin dashboard with charts, tables, CSV export and real-time metrics.',
    stack: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'p9',
    title: 'Team Chat Platform',
    category: 'fullstack',
    description:
      'Real-time team messaging with channels, presence indicators and file sharing.',
    stack: ['React', 'Socket.io', 'Express'],
    gradient: 'from-pink-500 to-fuchsia-500',
  },
]
