"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold leading-none whitespace-nowrap cursor-pointer tracking-[-0.005em] transition-[transform,box-shadow,background,color] duration-[var(--duration-1)] ease-[var(--ease-out)] active:translate-y-px focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "text-[var(--button-primary-text)] border border-transparent bg-origin-border [background-clip:padding-box,border-box] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] shadow-[var(--shadow-button-primary)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)] focus-visible:shadow-[var(--shadow-button-primary-focus)] [text-shadow:var(--button-primary-text-shadow)]",
        secondary:
          "text-foreground bg-[image:var(--gradient-button-secondary)] shadow-[var(--shadow-button-secondary)] hover:-translate-y-px hover:shadow-[var(--shadow-button-secondary-hover)] focus-visible:shadow-[var(--shadow-button-secondary-focus)]",
        ghost:
          "bg-transparent text-muted hover:text-foreground hover:bg-ghost-hover focus-visible:shadow-[var(--shadow-button-ghost-focus)]",
      },
      size: {
        sm: "h-8 px-3.5 text-[13px] rounded-[8px]",
        md: "h-10 px-5 text-sm rounded-[10px]",
        lg: "h-12 px-6 text-[15px] rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
