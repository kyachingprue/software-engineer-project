import * as React from 'react'
import { cn } from '@/lib/utils'

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'glass rounded-2xl text-card-foreground shadow-sm transition-all duration-300',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'
