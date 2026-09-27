import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "icon";
};

export function Button({
  asChild,
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        variant === "outline" &&
          "border border-current bg-transparent text-current hover:bg-foreground hover:text-background",
        variant === "ghost" && "bg-transparent text-current hover:bg-accent",
        size === "default" && "min-h-11 px-5 py-2.5 text-sm",
        size === "icon" && "size-11 shrink-0",
        className,
      )}
      {...props}
    />
  );
}