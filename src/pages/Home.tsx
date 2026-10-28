import { useRef } from 'react'
import { Seo } from '@/components/Seo'
import { Hero } from '@/components/sections/Hero'
import { AboutIntro } from '@/components/sections/AboutIntro'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Expertise } from '@/components/sections/Expertise'
import { CtaBand } from '@/components/CtaBand'

export default function Home() {
  const below = useRef<HTMLDivElement>(null)

  return (
    <>
      <Seo
        title="Software Engineer"
        description="Portfolio of Kyachingprue Marma, a Web Developer, Software Engineer and AI Engineer from Bangladesh building modern full-stack and AI-powered products."
      />
      <Hero onExplore={() => below.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      <div ref={below} className="scroll-mt-4">
        <AboutIntro />
        <FeaturedProjects />
        <Expertise />
        <CtaBand />
      </div>
    </>
  )
}
