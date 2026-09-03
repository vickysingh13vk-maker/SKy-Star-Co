"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

interface QuoteButtonProps {
  location: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children?: string;
}

export function QuoteButton({
  location,
  variant = "primary",
  className,
  children = "Request a Quote",
}: QuoteButtonProps) {
  return (
    <Button
      as="a"
      href="#contact"
      variant={variant}
      className={className}
      onClick={() => track("quote_cta_click", { location })}
    >
      {children}
    </Button>
  );
}
