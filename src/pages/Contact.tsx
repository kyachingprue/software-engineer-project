import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Download, Mail, MapPin, Send } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { PageBanner } from '@/components/PageBanner'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { ScientistsMarquee } from '@/components/ScientistsMarquee'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input, Textarea } from '@/components/ui/input'
import { site, socials } from '@/data/site'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({})
  const [sent, setSent] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: typeof errors = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!emailRe.test(form.email)) next.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return

    // No backend: open the visitor's mail app with the message pre-filled.
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Kyachingprue Marma for software engineering roles, freelance work or collaborations."
      />
      <PageBanner
        eyebrow="Contact"
        title="Let's build something"
        highlight="together"
        description="Open to full-time roles, internships and freelance projects. Send a message and I'll reply as soon as I can."
      />

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <Card className="h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                <span className="gradient-bg mb-3 grid size-12 place-items-center rounded-xl text-white">
                  <Mail className="size-5" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</h3>
                <a href={`mailto:${site.email}`} className="mt-1 block break-all font-medium hover:text-primary">
                  {site.email}
                </a>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                <span className="gradient-bg mb-3 grid size-12 place-items-center rounded-xl text-white">
                  <MapPin className="size-5" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Location</h3>
                <p className="mt-1 font-medium">{site.location}</p>
              </Card>
            </Reveal>
            {socials.map((s, i) => (
              <Reveal key={s.label} delay={0.16 + i * 0.06}>
                <a href={s.href} target="_blank" rel="noreferrer noopener" className="block h-full">
                  <Card className="group h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                    <span className="mb-3 grid size-12 place-items-center rounded-xl border border-border bg-background/60 transition-colors group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 group-hover:text-white">
                      <s.icon className="size-5" />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</h3>
                    <p className="mt-1 font-medium transition-colors group-hover:text-primary">Visit profile →</p>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <Button asChild size="lg" className="px-10">
              <a href={site.resumeUrl} download="Kyachingprue-Marma-CV.pdf">
                <Download /> Download CV
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="section-container">
          <SectionHeading
            eyebrow="Inspiration"
            title="Standing on the shoulders of"
            highlight="computing legends"
            description="The pioneers whose ideas power everything I build."
          />
        </div>
        <ScientistsMarquee />
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Send a message"
            title="Write to me"
            highlight="directly"
            description="Fill in the form and your email app will open with the message ready to send."
          />

          <Reveal>
            <Card className="relative mx-auto max-w-3xl overflow-hidden p-6 sm:p-10">
              <div className="gradient-bg absolute inset-x-0 top-0 h-1" />
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" error={errors.name}>
                    <Input id="name" value={form.name} onChange={set('name')} placeholder="Jane Doe" autoComplete="name" aria-invalid={!!errors.name} />
                  </Field>
                  <Field label="Your email" error={errors.email}>
                    <Input id="email" type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" autoComplete="email" aria-invalid={!!errors.email} />
                  </Field>
                </div>
                <Field label="Subject">
                  <Input id="subject" value={form.subject} onChange={set('subject')} placeholder="Job opportunity, project enquiry…" />
                </Field>
                <Field label="Message" error={errors.message}>
                  <Textarea id="message" value={form.message} onChange={set('message')} placeholder="Tell me about the role or project…" rows={6} aria-invalid={!!errors.message} />
                </Field>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send /> Send message
                </Button>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm font-medium text-emerald-500"
                      role="status"
                    >
                      <CheckCircle2 className="size-4" /> Opening your email app…
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-rose-500">{error}</p>}
    </div>
  )
}
