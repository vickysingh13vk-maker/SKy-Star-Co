import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "solid" | "solid-light" | "outline" | "outline-light";

const base =
  "group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-sm px-7 font-mono text-meta-sm uppercase transition-colors duration-250 ease-editorial disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  // On light surfaces
  solid: "bg-ink text-bone hover:bg-ink-800",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  // On ink surfaces
  "solid-light": "bg-bone text-ink hover:bg-brass-light",
  "outline-light": "border border-bone/30 text-bone hover:border-brass-light hover:text-brass-light",
};

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  variant?: Variant;
  arrow?: boolean;
}

interface ButtonAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  variant?: Variant;
  arrow?: boolean;
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Small chevron that nudges on hover — the page's only button motion. */
function Arrow() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className="translate-x-0 transition-transform duration-250 ease-editorial group-hover:translate-x-1"
    >
      <path d="M0 5h12M8.5 1L12.5 5L8.5 9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "solid", arrow = false, className = "", as, children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
