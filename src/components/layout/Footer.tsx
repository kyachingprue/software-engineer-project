import { Link } from 'react-router-dom'
import { ArrowUp, Heart, Mail, MapPin } from 'lucide-react'
import { navLinks, site, socials } from '@/data/site'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-cyan-500/15 dark:from-indigo-600/25 dark:via-violet-700/15 dark:to-cyan-500/20" />
      <div className="absolute -top-32 left-1/2 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="section-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="gradient-bg grid size-10 place-items-center rounded-xl font-display font-bold text-white">
              KM
            </span>
            <span className="font-display text-xl font-semibold">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Web Developer, Software Engineer and AI Engineer building clean,
            fast and scalable products for the modern web.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
            Navigate
          </h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-primary"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <p className="flex items-center gap-1.5">
            © {currentYear} {site.name}. Built with
            <Heart className="size-3.5 fill-rose-500 text-rose-500" />
            using React, TypeScript &amp; Tailwind.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-2 transition-colors hover:text-primary cursor-pointer"
          >
            Back to top <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
