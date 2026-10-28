import type { IconType } from 'react-icons'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

/**
 * Single source of truth for personal details.
 * Replace the placeholder social URLs with your real profile links.
 */
export const site = {
  name: 'Kyachingprue Marma',
  shortName: 'Kyachingprue',
  email: 'Kyachingpruemarma.info@gmail.com',
  location: 'Chattogram Hill Tracts, Bangladesh',
  resumeUrl: '/resume.pdf',
  roles: ['Web Developer', 'Software Engineer', 'AI Engineer'],
  tagline:
    'I build fast, accessible and scalable web products, from polished React interfaces to full-stack systems and AI-powered features. Self-driven, MERN-trained, and now deepening my skills in TypeScript, Python, C++, data structures and AI engineering. I am looking for a team where I can ship real products and keep growing.',
}

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}

// TODO: replace with your real profile URLs.
export const socials: SocialLink[] = [
  { label: 'GitHub', href:'https://github.com/kyachingprue', icon: FaGithub },
  { label: 'LinkedIn', href:'https://www.linkedin.com/in/kyachingpruemarma/', icon: FaLinkedinIn },
  { label: 'Facebook', href:'https://www.facebook.com/kyaching.prue.marma.2025', icon: FaFacebookF },
  { label: 'Twitter / X', href:'https://x.com/Kyachingprue369', icon: FaXTwitter },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]
