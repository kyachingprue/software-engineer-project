import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Download, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { navLinks, site, socials } from '@/data/site'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Home">
      <span className="gradient-bg grid size-9 place-items-center rounded-xl font-display text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform group-hover:rotate-6">
        KM
      </span>
      <span className="hidden font-display text-lg font-semibold tracking-tight sm:block">
        {site.shortName}
        <span className="gradient-text">.dev</span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-background/70 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav className="section-container flex h-[72px] items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {l.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={site.resumeUrl} download="Kyachingprue-Marma-Resume.pdf">
                <Download /> Resume
              </a>
            </Button>
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:bg-accent md:hidden cursor-pointer"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed inset-y-0 left-0 z-[60] flex h-dvh w-full flex-col bg-background md:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            >
              <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-cyan-500/20 blur-3xl" />

              <div className="relative flex h-[72px] items-center justify-between px-5">
                <Logo />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 transition-colors hover:bg-accent cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>

              <ul className="relative flex flex-1 flex-col items-center justify-center gap-3 px-6">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.to}
                    className="w-full max-w-xs"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-2xl px-6 py-4 text-center font-display text-2xl font-semibold transition-colors',
                          isActive
                            ? 'gradient-bg text-white shadow-lg shadow-indigo-500/30'
                            : 'text-foreground/80 hover:bg-accent',
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  className="mt-3 w-full max-w-xs"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + navLinks.length * 0.07 }}
                >
                  <Button asChild size="lg" className="w-full">
                    <a href={site.resumeUrl} download="Kyachingprue-Marma-Resume.pdf">
                      <Download /> Download Resume
                    </a>
                  </Button>
                </motion.li>
              </ul>

              <div className="relative flex justify-center gap-3 pb-10">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-border bg-card/60 transition-colors hover:bg-accent"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
