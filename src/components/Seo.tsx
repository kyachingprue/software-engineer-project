import { Helmet } from 'react-helmet-async'
import { site } from '@/data/site'

interface SeoProps {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  const fullTitle = `${title} | ${site.name}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={site.name} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
