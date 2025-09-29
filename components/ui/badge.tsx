import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-1",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-coral-gradient text-white shadow-soft hover:shadow-soft-lg",
        secondary:
          "border-transparent bg-sage-gradient text-white shadow-soft hover:shadow-soft-lg",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-soft hover:shadow-soft-lg",
        outline: "text-foreground border-border/50 bg-background/50 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
