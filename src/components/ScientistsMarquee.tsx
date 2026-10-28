import { motion } from 'motion/react'
import { initials, scientists, type Scientist } from '@/data/scientists'

function Card({ s }: { s: Scientist }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="glass w-60 shrink-0 rounded-3xl p-5 text-center"
    >
      <div className="relative mx-auto size-24">
        <div className={`absolute inset-0 animate-spin rounded-full bg-gradient-to-br ${s.gradient} opacity-70 blur-md [animation-duration:8s]`} />
        <div className={`relative grid size-24 place-items-center rounded-full bg-gradient-to-br ${s.gradient} font-display text-3xl font-bold text-white shadow-xl ring-4 ring-background`}>
          <img src={s.image} className="w-[96px] h-[96px] rounded-full object-cover" alt={s.name} />
        </div>
      </div>
      <h4 className="mt-4 font-display text-lg font-semibold">{s.name}</h4>
      <p className="mt-1 text-xs text-muted-foreground">{s.known}</p>
    </motion.div>
  )
}

function Row({ items, reverse }: { items: Scientist[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-pause overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className={`${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} flex w-max gap-4`}>
        {doubled.map((s, i) => (
          <Card key={`${s.name}-${i}`} s={s} />
        ))}
      </div>
    </div>
  )
}

export function ScientistsMarquee() {
  const half = Math.ceil(scientists.length / 2)
  return (
    <div>
      <Row items={scientists.slice(0, half)} />
      <Row items={scientists.slice(half)} reverse />
    </div>
  )
}
