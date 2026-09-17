import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "outline" | "quiet" | "icon";
  children: ReactNode;
};

export function Button({ asChild, variant = "primary", className = "", ...props }: Props) {
  const Component = asChild ? Slot : "button";
  return <Component className={`button button-${variant} ${className}`} {...props} />;
}
