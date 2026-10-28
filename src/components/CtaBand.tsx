import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-container">
        <Reveal>
          <div
            className="
              cta-gradient relative isolate overflow-hidden
              rounded-[2rem] border border-white/40
              px-6 py-14 text-center
              shadow-xl shadow-indigo-500/10
              transition-all duration-500
              hover:shadow-2xl hover:shadow-indigo-500/15
              dark:border-white/10
              dark:shadow-indigo-950/30
              sm:px-12 sm:py-16
            "
          >
            {/* Decorative gradient orbs */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -left-20 -top-24
                size-72 rounded-full bg-cyan-400/30
                blur-[90px] transition-opacity duration-500
                dark:bg-cyan-400/15
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-16 -top-10
                size-72 rounded-full bg-violet-400/30
                blur-[100px] dark:bg-violet-500/25
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -bottom-32 left-1/3
                size-80 rounded-full bg-blue-400/25
                blur-[100px] dark:bg-blue-500/20
              "
            />

            {/* Subtle decorative grid */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)]
                bg-[size:32px_32px]
                opacity-50 dark:opacity-20
              "
            />

            <div className="relative z-10 mx-auto max-w-3xl">
              {/* Badge */}
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full border border-indigo-300/50
                  bg-white/60 px-4 py-2
                  text-sm font-semibold text-indigo-700
                  shadow-sm backdrop-blur-xl
                  dark:border-white/15 dark:bg-white/5
                  dark:text-indigo-200
                "
              >
                <Sparkles className="size-4 text-violet-500 dark:text-cyan-300" />
                Let's create something amazing
              </div>

              {/* Heading */}
              <h2
                className="
                  mx-auto max-w-2xl text-3xl font-bold
                  leading-tight tracking-tight
                  text-slate-900 dark:text-white
                  sm:text-4xl lg:text-5xl
                "
              >
                Have a role or project in mind?{' '}
                <span className="cta-gradient-text">
                  Let's build something great.
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mx-auto mt-5 max-w-xl text-base
                  leading-7 text-slate-600
                  dark:text-slate-300
                  sm:text-lg
                "
              >
                I'm open to full-time roles, internships and freelance work.
                Let's turn your ideas into something meaningful.
              </p>

              {/* Action buttons */}
              <div
                className="
                  mt-9 flex flex-col items-center
                  justify-center gap-3 sm:flex-row
                "
              >
                <Button
                  asChild
                  size="lg"
                  className="
                    group min-h-12 rounded-xl
                    border-0 bg-gradient-to-r
                    from-indigo-600 via-violet-600 to-blue-600
                    px-6 font-semibold text-white
                    shadow-lg shadow-indigo-500/25
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:from-indigo-500 hover:via-violet-500
                    hover:to-blue-500 hover:shadow-xl
                    hover:shadow-indigo-500/30
                    dark:from-indigo-500 dark:via-violet-500
                    dark:to-cyan-500
                    dark:hover:from-indigo-400
                    dark:hover:via-violet-400
                    dark:hover:to-cyan-400
                  "
                >
                  <Link to="/contact">
                    <Mail className="mr-2 size-4" />
                    Get in touch
                    <ArrowRight
                      className="
                        ml-1 size-4 transition-transform
                        duration-300 group-hover:translate-x-1
                      "
                    />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="
                    min-h-12 rounded-xl border-indigo-300/70
                    bg-white/50 px-6 font-semibold
                    text-indigo-700 backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-white/80
                    dark:border-white/20 dark:bg-white/5
                    dark:text-white dark:hover:bg-white/10
                  "
                >
                  <Link to="/projects">
                    See all projects
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>

              {/* Bottom decorative line */}
              <div
                aria-hidden="true"
                className="
                  mx-auto mt-10 h-1 w-20 rounded-full
                  bg-gradient-to-r from-indigo-500
                  via-violet-500 to-cyan-400
                  opacity-80
                "
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

