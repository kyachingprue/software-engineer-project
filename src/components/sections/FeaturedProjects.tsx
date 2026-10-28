import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { featuredProjects } from '@/data/featured'

gsap.registerPlugin(ScrollTrigger)

export function FeaturedProjects() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-featured="card"]').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.96,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        })
        gsap.from(card.querySelectorAll('[data-featured="feature"]'), {
          opacity: 0,
          x: -16,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 75%', once: true },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured work"
          title="My strongest"
          highlight="projects"
          description="Real products I designed and built end to end. Here is what each one does and the engineering behind it."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => {
            const isLastOdd =
              i === featuredProjects.length - 1 && featuredProjects.length % 2 === 1
            return (
              <motion.article
                key={p.title}
                data-featured="card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`group glass relative overflow-hidden rounded-3xl p-6 sm:p-8 ${
                  isLastOdd ? 'md:col-span-2' : ''
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <p.icon className="size-7" />
                    </span>
                    <Badge>{p.category}</Badge>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{p.summary}</p>

                  <ul className={`mt-5 grid gap-2.5 ${isLastOdd ? 'sm:grid-cols-2' : ''}`}>
                    {p.features.map((f) => (
                      <li
                        key={f}
                        data-featured="feature"
                        className="flex items-start gap-2.5 text-sm text-foreground/85"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
