"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

type Variant = "solid" | "solid-light" | "outline" | "outline-light";

interface QuoteButtonProps {
  location: string;
  variant?: Variant;
  className?: string;
  children?: string;
  arrow?: boolean;
}

export function QuoteButton({
  location,
  variant = "solid",
  className,
  children = "Request a Quote",
  arrow = true,
}: QuoteButtonProps) {
  return (
    <Button
      as="a"
      href="#contact"
      variant={variant}
      arrow={arrow}
      className={className}
      onClick={() => track("quote_cta_click", { location })}
    >
      {children}
    </Button>
  );
}
