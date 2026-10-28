import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Badge } from '@/components/ui/badge'
import { categoryLabel, type Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group glass flex flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/15"
    >
      <div className={`relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%),radial-gradient(circle_at_80%_80%,#fff_0,transparent_35%)]" />
        <span className="font-display text-5xl font-extrabold text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-125">
          {initials}
        </span>
        <Badge className="absolute left-4 top-4 border-white/30 bg-black/25 text-white backdrop-blur">
          {categoryLabel[project.category]}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-sm font-medium">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 hover:text-primary">
              <ExternalLink className="size-4" /> Live demo
            </a>
          ) : (
            <span className="text-muted-foreground">Demo coming soon</span>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer noopener" className="ml-auto inline-flex items-center gap-1.5 hover:text-primary">
              <FaGithub className="size-4" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
