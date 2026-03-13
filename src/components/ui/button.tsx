"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--signal)] px-6 py-3 text-[var(--ink)] shadow-[0_18px_50px_-22px_rgba(190,246,128,0.85)] hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-24px_rgba(190,246,128,1)]",
        outline:
          "border border-[var(--line-strong)] bg-white/70 px-6 py-3 text-[var(--ink)] hover:-translate-y-0.5 hover:bg-white",
        ghost:
          "px-4 py-3 text-[var(--ink)] hover:bg-white/70",
        link: "px-0 py-0 text-[var(--ink)] underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-4 py-2.5 text-xs",
        lg: "px-7 py-4 text-sm",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
