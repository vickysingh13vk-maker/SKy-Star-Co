"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/contact";

type Variant = "solid" | "solid-light" | "outline" | "outline-light";

interface WhatsAppButtonProps {
  location: string;
  variant?: Variant;
  className?: string;
  children?: string;
}

export function WhatsAppButton({
  location,
  variant = "outline",
  className,
  children = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
  const href = whatsappHref();
  const external = href !== "#contact";

  return (
    <Button
      as="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      variant={variant}
      className={className}
      onClick={() => track("whatsapp_click", { location })}
    >
      {children}
    </Button>
  );
}
