import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-coral-gradient text-white shadow-soft hover:shadow-soft-lg hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:shadow-soft-lg hover:scale-105",
        outline:
          "border border-coral/20 bg-background/50 backdrop-blur-sm hover:bg-accent/50 hover:text-accent-foreground hover:border-coral/30 shadow-soft hover:shadow-soft-lg",
        secondary:
          "bg-sage-gradient text-white shadow-soft hover:shadow-soft-lg hover:scale-105",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground transition-all duration-300",
        link: "text-coral underline-offset-4 hover:underline hover:text-coral/80",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-8 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full text-lg px-8 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
