import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

interface Props {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: Props) {
  return (
    <Reveal className={cn('mb-12 max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-medium uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
