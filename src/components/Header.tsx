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
      setScrolled(window.scrollY > 24);
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
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-250 ${
          scrolled || menuOpen
            ? "border-navy-900/10 bg-white/95 shadow-subtle backdrop-blur"
            : "border-transparent bg-white/0"
        }`}
      >
        <div
          className={`container-wide flex items-center justify-between transition-[height] duration-250 ${
            scrolled || menuOpen ? "h-16" : "h-20 md:h-[84px]"
          }`}
        >
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tightest text-navy-900 sm:text-xl"
          >
            SKY STAR
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-navy-900/80 transition-colors duration-150 hover:text-navy-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              className="hidden sm:inline-flex"
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
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded border border-navy-900/15 lg:hidden"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span aria-hidden="true" className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full bg-navy-900 transition-transform duration-200 ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-navy-900 transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-navy-900 transition-transform duration-200 ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
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
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-content flex min-h-full flex-col py-10">
            <ul className="flex flex-col gap-1">
              {nav.map((item, index) => (
                <li key={item.href} className="border-b border-navy-900/10">
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-[56px] items-center text-lg font-medium text-navy-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <Button
                as="a"
                href="#contact"
                variant="primary"
                onClick={() => {
                  track("quote_cta_click", { location: "mobile_menu" });
                  closeMenu();
                }}
              >
                Request a Quote
              </Button>
              <Button
                as="a"
                href={whatsappHref()}
                target={whatsappHref() === "#contact" ? undefined : "_blank"}
                rel={whatsappHref() === "#contact" ? undefined : "noopener noreferrer"}
                variant="secondary"
                onClick={() => {
                  track("whatsapp_click", { location: "mobile_menu" });
                  closeMenu();
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
