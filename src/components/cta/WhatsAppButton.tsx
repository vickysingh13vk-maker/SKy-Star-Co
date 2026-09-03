"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/contact";

interface WhatsAppButtonProps {
  location: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children?: string;
}

export function WhatsAppButton({
  location,
  variant = "secondary",
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
