import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded px-6 text-sm font-semibold uppercase tracking-wideish transition-colors duration-150 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-700 active:bg-navy-800 border border-navy-900",
  secondary:
    "bg-transparent text-navy-900 border border-navy-900/30 hover:border-navy-900 hover:bg-white",
  ghost:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
};

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
}

interface ButtonAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", as, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "a") {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
