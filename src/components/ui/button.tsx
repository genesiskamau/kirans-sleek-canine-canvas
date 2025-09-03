import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-luxury transition-all duration-500 hover-luxury",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "glass-luxury border-2 metallic-border text-primary hover:bg-primary/10 backdrop-blur-2xl shadow-platinum hover-luxury",
        secondary:
          "bg-gradient-gold text-primary hover:opacity-90 shadow-gold hover-luxury",
        ghost: "hover:bg-accent hover:text-accent-foreground hover-luxury",
        link: "text-primary underline-offset-4 hover:underline",
        luxury: "bg-gradient-luxury text-white hover:opacity-90 shadow-royal border metallic-border hover-luxury",
        royal: "bg-gradient-royal text-white hover:opacity-90 shadow-luxury hover-luxury",
        premium: "glass-luxury backdrop-blur-3xl border-2 metallic-border text-gold hover:bg-gold/10 shadow-glass-luxury hover-luxury"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        premium: "h-14 px-10 py-4 text-lg rounded-2xl",
        luxury: "h-16 px-12 py-6 text-xl rounded-3xl"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
