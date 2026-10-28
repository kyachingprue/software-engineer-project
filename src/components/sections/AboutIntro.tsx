import { Link } from 'react-router-dom'
import { ArrowUpRight, Code2, GraduationCap, MapPin, Rocket } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '2024', label: 'Started coding' },
  { value: 'MERN', label: 'Full-stack foundation' },
  { value: '7+', label: 'Production projects' },
  { value: 'AI', label: 'Current focus' },
]

const facts = [
  {
    icon: MapPin,
    title: 'Based in Bangladesh',
    text: 'From the Chattogram Hill Tracts, building for a global audience.',
  },
  {
    icon: Code2,
    title: 'Self-driven learner',
    text: 'HTML, CSS, JavaScript, then MERN, Next.js, TypeScript, Python, C++ and DSA.',
  },
  {
    icon: GraduationCap,
    title: 'Always growing',
    text: 'Studying B.B.S at National University while focusing on software engineering.',
  },
  {
    icon: Rocket,
    title: 'Ready to ship',
    text: 'Looking for a strong team where I can contribute and keep learning.',
  },
]

export function AboutIntro() {
  return (
    <section id="about-intro" className="scroll-mt-20 py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About me"
          title="Turning curiosity into"
          highlight="working software"
          description="I started from zero in 2024 and have been building ever since, moving from the web basics to full-stack products and now AI engineering."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal x={-30} y={0} className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I'm <strong className="text-foreground">Kyachingprue Marma</strong>, a developer from the
              Chattogram Hill Tracts in Bangladesh. What began as curiosity about computers turned into a
              daily habit of building, breaking and fixing things.
            </p>
            <p>
              After learning the web fundamentals, I completed the MERN stack course at Programming Hero,
              then went deeper with Next.js, TypeScript, PostgreSQL, Git and GitHub, and SQL / NoSQL
              design. I'm now strengthening my engineering foundations with Python, C++ and data
              structures and algorithms, while learning how to build real AI-powered products.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline">
                <Link to="/about">
                  Read my full story <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <Card className="h-full p-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-indigo-500/10">
                  <span className="gradient-bg mb-3 grid size-10 place-items-center rounded-xl text-white">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <Card className="p-6 text-center">
                <div className="gradient-text font-display text-3xl font-bold sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
