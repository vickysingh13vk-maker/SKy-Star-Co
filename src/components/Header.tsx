"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";
import { Button } from "./ui/Button";
import { track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/contact";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Over the dark hero the header is transparent with light type; once the
  // page scrolls it settles onto bone with ink type.
  const solid = scrolled || menuOpen;
  const textColour = solid ? "text-ink" : "text-bone";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,height] duration-400 ease-editorial ${
          solid ? "border-bone-300 bg-bone/95 backdrop-blur-sm" : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`shell flex items-center justify-between transition-[height] duration-400 ease-editorial ${
            solid ? "h-16" : "h-20 md:h-[88px]"
          }`}
        >
          <a
            href="#top"
            className={`font-display text-[1.0625rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-400 sm:text-lg ${textColour}`}
          >
            Sky
            <span className={solid ? "text-brass-ink" : "text-brass-light"}>&#8202;·&#8202;</span>
            Star
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group relative block py-2 font-mono text-meta-sm uppercase transition-colors duration-250 ${
                      solid ? "text-steel hover:text-ink" : "text-bone/75 hover:text-bone"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-250 ease-editorial group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href="#contact"
              variant={solid ? "solid" : "outline-light"}
              arrow
              className="hidden min-h-[44px] px-5 sm:inline-flex"
              onClick={() => track("quote_cta_click", { location: "header" })}
            >
              Request a Quote
            </Button>

            <button
              ref={toggleRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center border transition-colors duration-250 lg:hidden ${
                solid ? "border-ink/20 text-ink" : "border-bone/30 text-bone"
              }`}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span aria-hidden="true" className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-250 ${
                    menuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-250 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-250 ${
                    menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="on-ink fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink lg:hidden"
        >
          <nav aria-label="Mobile" className="shell flex min-h-full flex-col py-10">
            <p className="font-mono text-meta-sm uppercase text-mist/70">Navigation</p>
            <ul className="mt-6 flex flex-col">
              {nav.map((item, index) => (
                <li key={item.href} className="rule-dark border-b">
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[64px] items-baseline gap-5 py-4 text-display-sm text-bone"
                  >
                    <span className="font-mono text-meta-sm text-brass-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <Button
                as="a"
                href="#contact"
                variant="solid-light"
                arrow
                onClick={() => {
                  track("quote_cta_click", { location: "mobile_menu" });
                  setMenuOpen(false);
                }}
              >
                Request a Quote
              </Button>
              <Button
                as="a"
                href={whatsappHref()}
                target={whatsappHref() === "#contact" ? undefined : "_blank"}
                rel={whatsappHref() === "#contact" ? undefined : "noopener noreferrer"}
                variant="outline-light"
                onClick={() => {
                  track("whatsapp_click", { location: "mobile_menu" });
                  setMenuOpen(false);
                }}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
