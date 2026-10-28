import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Blocks,
  Gauge,
  GitBranch,
  Layers,
  Rocket,
  ShieldCheck,
  Smartphone,
  TestTube2,
} from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageBanner } from '@/components/PageBanner'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/ui/card'
import { CtaBand } from '@/components/CtaBand'
import { categories, projects, type ProjectCategory } from '@/data/projects'
import { cn } from '@/lib/utils'

const principles = [
  { icon: Smartphone, title: 'Responsive by default', text: 'Mobile-first layouts that adapt cleanly from phones to ultra-wide screens.' },
  { icon: Gauge, title: 'Performance minded', text: 'Code-splitting, lazy loading and optimised assets for fast first paint.' },
  { icon: ShieldCheck, title: 'Secure & reliable', text: 'Validated input, protected routes and safe authentication patterns.' },
  { icon: Blocks, title: 'Clean architecture', text: 'Typed, modular and reusable components that scale with the product.' },
  { icon: TestTube2, title: 'Quality focused', text: 'Careful debugging, edge-case handling and accessibility checks.' },
  { icon: GitBranch, title: 'Git workflow', text: 'Meaningful commits, branches and pull requests, ready for team work.' },
]

const codeLines = [
  { t: 'const engineer = {', c: 'text-foreground' },
  { t: "  name: 'Kyachingprue Marma',", c: 'text-emerald-500' },
  { t: "  roles: ['Web', 'Software', 'AI'],", c: 'text-sky-500' },
  { t: "  stack: ['React', 'Next.js', 'TypeScript', 'Node'],", c: 'text-violet-500' },
  { t: '  shipsFast: true,', c: 'text-amber-500' },
  { t: '  alwaysLearning: true,', c: 'text-amber-500' },
  { t: '}', c: 'text-foreground' },
]

export default function Projects() {
  const [active, setActive] = useState<'all' | ProjectCategory>('all')

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  const count = (value: 'all' | ProjectCategory) =>
    value === 'all' ? projects.length : projects.filter((p) => p.category === value).length

  return (
    <>
      <Seo
        title="Projects"
        description="Browse landing pages, frontend apps and full-stack / SaaS projects built by Kyachingprue Marma."
      />
      <PageBanner
        eyebrow="My work"
        title="Projects that show"
        highlight="how I build"
        description="Landing pages, frontend apps and full-stack products. Filter by category to explore."
      />

      <section className="py-14 sm:py-20">
        <div className="section-container">
          <div role="tablist" aria-label="Project categories" className="mb-10 flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => {
              const selected = active === c.value
              return (
                <button
                  key={c.value}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(c.value)}
                  className={cn(
                    'relative cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors',
                    selected
                      ? 'border-transparent text-white'
                      : 'border-border bg-card/60 text-muted-foreground backdrop-blur hover:border-primary/50 hover:text-foreground',
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="filter-pill"
                      className="gradient-bg absolute inset-0 rounded-full shadow-lg shadow-indigo-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {c.label}
                    <span className={cn('rounded-full px-1.5 text-xs', selected ? 'bg-white/25' : 'bg-secondary')}>
                      {count(c.value)}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Showing sample projects. Real case studies are being added.
          </p>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="section-container">
          <SectionHeading
            eyebrow="Engineering approach"
            title="How I turn ideas into"
            highlight="reliable software"
            description="Every project follows the same principles, so what I ship is fast, maintainable and ready to grow."
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <Card className="group h-full p-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-indigo-500/10">
                    <span className="gradient-bg mb-3 grid size-10 place-items-center rounded-xl text-white transition-transform group-hover:rotate-6 group-hover:scale-110">
                      <p.icon className="size-5" />
                    </span>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal x={30} y={0}>
              <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-indigo-500/10">
                <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
                  <span className="size-3 rounded-full bg-rose-500" />
                  <span className="size-3 rounded-full bg-amber-500" />
                  <span className="size-3 rounded-full bg-emerald-500" />
                  <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Layers className="size-3.5" /> engineer.ts
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
                  {codeLines.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className={l.c}
                    >
                      {l.t}
                    </motion.div>
                  ))}
                  <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
                </pre>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Rocket className="size-4 text-primary" /> Always shipping, always learning
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
