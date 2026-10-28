import { Bot, Code2, Cpu, type LucideIcon } from 'lucide-react'

export interface SkillGroup {
  role: string
  icon: LucideIcon
  gradient: string
  blurb: string
  categories: { name: string; items: string[] }[]
}

export const skillGroups: SkillGroup[] = [
  {
    role: 'Web Developer',
    icon: Code2,
    gradient: 'from-indigo-500 to-cyan-500',
    blurb: 'Pixel-perfect, responsive and accessible interfaces with a modern React toolchain.',
    categories: [
      { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'] },
      { name: 'Animation', items: ['GSAP', 'Motion', 'Responsive Design'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth'] },
      { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'SQL', 'NoSQL'] },
    ],
  },
  {
    role: 'Software Engineer',
    icon: Cpu,
    gradient: 'from-violet-500 to-fuchsia-500',
    blurb: 'Strong fundamentals in problem solving, data structures and clean engineering practice.',
    categories: [
      { name: 'Languages', items: ['C++', 'Python', 'JavaScript', 'TypeScript'] },
      { name: 'Fundamentals', items: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving'] },
      { name: 'Tooling', items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Postman'] },
      { name: 'Practices', items: ['Clean Code', 'Code Review', 'Debugging', 'Agile'] },
    ],
  },
  {
    role: 'AI Engineer',
    icon: Bot,
    gradient: 'from-rose-500 to-orange-500',
    blurb: 'Learning to turn models into useful products: prompts, APIs, data pipelines and apps.',
    categories: [
      { name: 'Foundations', items: ['Python', 'NumPy', 'Pandas', 'Machine Learning Basics'] },
      { name: 'LLM Apps', items: ['LLM APIs', 'Prompt Engineering', 'RAG Concepts', 'Document Analysis'] },
      { name: 'Integration', items: ['REST / JSON', 'Next.js AI Apps', 'Streaming UI'] },
      { name: 'Learning', items: ['Neural Networks', 'Model Evaluation', 'AI Engineering'] },
    ],
  },
]

export const marqueeTech = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB',
  'PostgreSQL', 'Python', 'C++', 'GSAP', 'Motion', 'Git', 'GitHub', 'shadcn/ui', 'REST APIs',
]
