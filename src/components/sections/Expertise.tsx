import { motion } from 'motion/react'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { marqueeTech, skillGroups } from '@/data/skills'

function Marquee() {
  const items = [...marqueeTech, ...marqueeTech]
  return (
    <div
      className="marquee-pause relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      aria-hidden
    >
      <div className="animate-marquee flex w-max gap-4">
        {items.map((t, i) => (
          <span
            key={i}
            className="glass whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-sm text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Expertise() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Expertise"
          title="Three disciplines,"
          highlight="one engineer"
          description="From interfaces users love, to systems that scale, to AI features that make products smarter."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.role} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="h-full">
                <Card className="group relative h-full overflow-hidden p-6 sm:p-7">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${g.gradient}`} />
                  <div
                    className={`pointer-events-none absolute -bottom-20 -right-20 size-52 rounded-full bg-gradient-to-br ${g.gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                  />
                  <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${g.gradient} text-white shadow-lg`}>
                    <g.icon className="size-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">{g.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>

                  <div className="mt-6 space-y-5">
                    {g.categories.map((c) => (
                      <div key={c.name}>
                        <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-primary">
                          {c.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {c.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Marquee />
      </div>
    </section>
  )
}
