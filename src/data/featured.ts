import {
  Box,
  BriefcaseBusiness,
  FileSearch,
  GraduationCap,
  MessagesSquare,
  Plane,
  ShoppingBasket,
  type LucideIcon,
} from 'lucide-react'

export interface FeaturedProject {
  title: string
  category: string
  icon: LucideIcon
  gradient: string
  summary: string
  features: string[]
  stack: string[]
}

/**
 * Featured work: explanation only, no external links (as requested).
 * Edit the copy freely so it matches exactly what you built.
 */
export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Freelance Job Marketplace',
    category: 'Full-Stack Platform',
    icon: BriefcaseBusiness,
    gradient: 'from-indigo-500 to-blue-500',
    summary:
      'A two-sided marketplace where clients post jobs and freelancers browse, filter and apply, with role-based dashboards for both sides.',
    features: [
      'Role-based access for clients and freelancers',
      'Job posting, search, filters and applications',
      'Secure authentication and protected routes',
      'Responsive dashboards with clean data tables',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Coding Campus',
    category: 'EdTech Platform',
    icon: GraduationCap,
    gradient: 'from-violet-500 to-fuchsia-500',
    summary:
      'A programming course platform with a polished course catalogue, learner dashboard and a smooth learning experience on every device.',
    features: [
      'Course catalogue with categories and details',
      'Student dashboard and progress overview',
      'Instructor and course management views',
      'Fast, accessible and mobile-first UI',
    ],
    stack: ['React', 'Tailwind', 'Express', 'MongoDB'],
  },
  {
    title: 'Mini Book: Social Media',
    category: 'Social Application',
    icon: MessagesSquare,
    gradient: 'from-sky-500 to-cyan-500',
    summary:
      'A social network where people share posts, react, comment and follow others, built around a fast, real-feeling feed.',
    features: [
      'Create, edit and delete posts with media',
      'Likes, comments and an engaging feed',
      'User profiles and secure sign-in',
      'Optimistic UI updates for instant feedback',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Green Basket E-commerce',
    category: 'E-commerce',
    icon: ShoppingBasket,
    gradient: 'from-emerald-500 to-green-500',
    summary:
      'A fresh grocery storefront with product browsing, cart management and a streamlined checkout flow.',
    features: [
      'Product listing with search, filter and sort',
      'Persistent cart and quantity management',
      'Smooth checkout and order summary',
      'Admin-ready product management structure',
    ],
    stack: ['React', 'Redux', 'Stripe', 'MongoDB'],
  },
  {
    title: 'Go Explore Travel Studio',
    category: 'Travel & Booking',
    icon: Plane,
    gradient: 'from-orange-500 to-amber-500',
    summary:
      'A travel studio website for discovering destinations and tour packages, with rich imagery and a booking-focused layout.',
    features: [
      'Destination and package showcase',
      'Detail pages with itineraries and highlights',
      'Booking and enquiry flow',
      'Image-rich responsive design',
    ],
    stack: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
  },
  {
    title: 'AI Document Analysis',
    category: 'AI Application',
    icon: FileSearch,
    gradient: 'from-rose-500 to-pink-500',
    summary:
      'An AI-powered tool that reads uploaded documents, summarises them and lets users ask questions about the content.',
    features: [
      'Document upload and text extraction',
      'AI-generated summaries and key points',
      'Question answering over document content',
      'Clean, distraction-free results view',
    ],
    stack: ['Next.js', 'TypeScript', 'LLM API', 'Python'],
  },
  {
    title: 'Aether AI: 3D Experience',
    category: '3D & Animation',
    icon: Box,
    gradient: 'from-cyan-500 to-indigo-500',
    summary:
      'An immersive landing experience that blends 3D visuals with scroll-driven animation to present an AI product.',
    features: [
      '3D scenes that react to scroll and pointer',
      'Timeline-based GSAP animation sequences',
      'Performance-minded rendering on mobile',
      'Cinematic, brand-focused storytelling',
    ],
    stack: ['React', 'Three.js', 'GSAP', 'Tailwind'],
  },
]
