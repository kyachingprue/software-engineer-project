import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." />
      <section className="grid min-h-dvh place-items-center px-6 text-center">
        <div>
          <p className="gradient-text font-display text-8xl font-extrabold">404</p>
          <h1 className="mt-4 text-2xl font-bold sm:text-3xl">This page took a wrong turn</h1>
          <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist.</p>
          <Button asChild className="mt-8">
            <Link to="/">
              <Home /> Back home
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
