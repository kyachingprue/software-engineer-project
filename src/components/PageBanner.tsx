import { motion } from 'motion/react'

interface Props {
  eyebrow: string
  title: string
  highlight: string
  description: string
}

export function PageBanner({ eyebrow, title, highlight, description }: Props) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-cyan-500/20 dark:from-indigo-600/30 dark:via-violet-700/15 dark:to-cyan-500/25" />
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -left-20 top-10 -z-10 size-72 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute -right-20 bottom-0 -z-10 size-72 rounded-full bg-cyan-500/25 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-medium uppercase tracking-widest text-primary"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl md:text-6xl"
        >
          {title} <span className="gradient-text">{highlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
