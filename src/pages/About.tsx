import { motion } from 'motion/react'
import { Compass, GraduationCap, Heart, MapPin, Milestone, Target, User } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageBanner } from '@/components/PageBanner'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/ui/card'
import { CtaBand } from '@/components/CtaBand'
import { site } from '@/data/site'

const timeline = [
  {
    when: '2024',
    title: 'The journey begins',
    text: 'I started programming and learned the basics of HTML, CSS and JavaScript.',
  },
  {
    when: 'June 2024',
    title: 'Joined Programming Hero',
    text: 'I enrolled in the MERN Stack course and learned with Jhankar Mahbub, building a real full-stack foundation.',
  },
  {
    when: '2025',
    title: 'Course completed, skills deepened',
    text: 'I finished the course, then revised the topics I had missed and filled every gap. I also learned Next.js, TypeScript, PostgreSQL, Git and GitHub, and both SQL and NoSQL systems.',
  },
  {
    when: '2026',
    title: 'Expanding into AI & core CS',
    text: 'I learned Python, C++ and DSA with C++, took an AI Engineering course, and picked up many more technologies.',
  },
]

const cards = [
  {
    icon: User,
    title: 'Who I am',
    text: `My name is ${site.name}, and I am from Bangladesh.`,
  },
  {
    icon: MapPin,
    title: 'Where I live',
    text: 'I live in the Chattogram Hill Tracts. My village is Singinala Muhamoni Para.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'I did not have many opportunities growing up, but I have always had a deep interest in computers, technology and programming. I am currently studying B.B.S at National University, and my main focus is software engineering and programming.',
  },
  {
    icon: Target,
    title: 'My future',
    text: 'I want to work in a good company, take on real challenges and keep exploring many technologies.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Kyachingprue Marma's programming journey, education and goals as a software engineer from the Chattogram Hill Tracts, Bangladesh."
      />
      <PageBanner
        eyebrow="About me"
        title="The story behind"
        highlight="the code"
        description="A self-driven developer from the hills of Bangladesh, building a career in software engineering one project at a time."
      />

      <section className="py-20">
        <div className="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal x={-30} y={0} className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div className="relative">
              <div className="gradient-bg absolute -inset-1 rounded-[2rem] opacity-60 blur-xl" />
              <div className="gradient-bg relative rounded-[2rem] p-[3px]">
                <img
                  src="/profile.png"
                  alt={`Portrait of ${site.name}`}
                  className="aspect-[4/5] w-full rounded-[calc(2rem-3px)] object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold shadow-xl">
                <Heart className="size-4 fill-rose-500 text-rose-500" /> Code. Learn. Repeat.
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className={i === 2 ? 'sm:col-span-2' : ''}>
                <Card className="h-full p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-indigo-500/10">
                  <span className="gradient-bg mb-4 grid size-11 place-items-center rounded-xl text-white">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{c.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Programming journey"
            title="From first line of code to"
            highlight="AI engineering"
            description="Every year added a new layer of skill."
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 md:left-1/2" />
            {timeline.map((t, i) => {
              const left = i % 2 === 0
              return (
                <motion.div
                  key={t.when}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative mb-10 pl-14 md:w-1/2 md:pl-0 ${
                    left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <span
                    className={`gradient-bg absolute left-0 top-1 grid size-10 place-items-center rounded-full text-white shadow-lg shadow-indigo-500/30 ring-4 ring-background ${
                      left ? 'md:left-auto md:-right-5' : 'md:-left-5'
                    }`}
                  >
                    <Milestone className="size-4" />
                  </span>
                  <Card className="p-5 hover:border-primary/40">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                      {t.when}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="section-container">
          <Reveal>
            <Card className="relative overflow-hidden p-8 text-center sm:p-12">
              <div className="gradient-bg absolute inset-x-0 top-0 h-1" />
              <Compass className="mx-auto size-10 text-primary" />
              <p className="mx-auto mt-5 max-w-2xl font-display text-xl font-semibold leading-relaxed sm:text-2xl">
                "I may not have had many opportunities growing up, but I have a
                <span className="gradient-text"> burning interest in technology</span> and the discipline to keep learning."
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{site.name}</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
