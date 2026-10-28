import { useLayoutEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, ChevronsDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTypewriter } from '@/hooks/useTypewriter'
import { site, socials } from '@/data/site'

export function Hero({ onExplore }: { onExplore: () => void }) {
  const root = useRef<HTMLElement>(null)
  const navigate = useNavigate()
  const typed = useTypewriter(site.roles)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero="badge"]', { y: 20, opacity: 0, duration: 0.6 })
        .from('[data-hero="hello"]', { y: 24, opacity: 0, duration: 0.6 }, '-=0.35')
        .from(
          '[data-hero="char"]',
          { yPercent: 110, opacity: 0, rotateX: -60, duration: 0.8, stagger: 0.035 },
          '-=0.3',
        )
        .from('[data-hero="role"]', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('[data-hero="desc"]', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(
          '[data-hero="social"]',
          { scale: 0, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(2)' },
          '-=0.3',
        )
        .from('[data-hero="cta"]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from(
          '[data-hero="photo"]',
          { scale: 0.85, opacity: 0, rotate: -4, duration: 1, ease: 'power4.out' },
          0.2,
        )
        .from('[data-hero="chip"]', { scale: 0, opacity: 0, stagger: 0.15, ease: 'back.out(2)' }, '-=0.5')

      gsap.to('[data-hero="orb"]', {
        x: 'random(-30, 30)',
        y: 'random(-30, 30)',
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 1, from: 'random' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // Subtle pointer parallax on the portrait card.
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to('[data-hero="photo"]', {
      rotateY: px * 10,
      rotateX: -py * 10,
      transformPerspective: 900,
      duration: 0.6,
      ease: 'power2.out',
    })
  }
  const onLeave = () =>
    gsap.to('[data-hero="photo"]', { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'power3.out' })

  return (
    <section
      ref={root}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-dvh items-center overflow-hidden pb-16 pt-28"
    >
      <div className="grid-bg absolute inset-0 -z-10" />
      <div data-hero="orb" className="absolute -left-24 top-24 -z-10 size-80 rounded-full bg-indigo-500/25 blur-3xl" />
      <div data-hero="orb" className="absolute right-0 top-1/3 -z-10 size-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div data-hero="orb" className="absolute bottom-0 left-1/3 -z-10 size-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <div data-hero="badge" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Open to opportunities
          </div>

          <p data-hero="hello" className="mt-6 font-mono text-sm text-muted-foreground sm:text-base">
            Hi there, my name is
          </p>

          <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] sm:text-6xl xl:text-7xl" aria-label={site.name}>
            {site.name.split(' ').map((word, wi) => (
              <span key={wi} className="block overflow-hidden pb-1" aria-hidden>
                {wi === 1 ? (
                  // Gradient text-clip can't paint through per-letter transforms,
                  // so the gradient word animates as one unit.
                  <span data-hero="char" className="gradient-text inline-block">
                    {word}
                  </span>
                ) : (
                  word.split('').map((ch, i) => (
                    <span key={i} data-hero="char" className="inline-block">
                      {ch}
                    </span>
                  ))
                )}
              </span>
            ))}
          </h1>

          <div data-hero="role" className="mt-5 flex min-h-10 items-center justify-center gap-2 text-xl font-semibold sm:text-3xl lg:justify-start">
            <span className="text-muted-foreground">I'm a</span>
            <span className="gradient-text">{typed}</span>
            <span className="animate-blink inline-block h-7 w-0.5 bg-primary sm:h-9" aria-hidden />
          </div>

          <p data-hero="desc" className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            {site.tagline}
          </p>

          <ul className="mt-7 flex justify-center gap-3 lg:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label} data-hero="social">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid size-12 place-items-center rounded-full border border-border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
            <div data-hero="cta" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/projects')}>
                View Projects <ArrowRight />
              </Button>
            </div>
            <div data-hero="cta" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={onExplore}>
                Explore More <ChevronsDown />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div data-hero="photo" className="relative will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
            <div className="gradient-bg absolute -inset-1 rounded-[2rem] opacity-70 blur-xl" />
            <div className="gradient-bg relative rounded-[2rem] p-[3px]">
              <img
                src="/profile.png"
                alt={`Portrait of ${site.name}`}
                className="aspect-[4/5] w-full rounded-[calc(2rem-3px)] object-cover object-top"
                width={921}
                height={997}
                fetchPriority="high"
              />
            </div>
          </div>

          <div data-hero="chip" className="animate-float glass absolute -left-3 top-10 rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-xl sm:-left-8">
            <span className="mr-2 inline-block size-2 rounded-full bg-emerald-500" />
            MERN Stack
          </div>
          <div data-hero="chip" className="animate-float glass absolute -right-3 top-1/2 rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-xl [animation-delay:1.5s] sm:-right-8">
            ⚡ Next.js · TypeScript
          </div>
          <div data-hero="chip" className="animate-float glass absolute -bottom-4 left-6 rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-xl [animation-delay:3s]">
            🤖 AI Engineering
          </div>
        </div>
      </div>
    </section>
  )
}
