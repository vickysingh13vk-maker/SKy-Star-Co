"use client";

import { useEffect, useState } from "react";
import { QuoteButton } from "@/components/cta/QuoteButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const [overContactForm, setOverContactForm] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverContactForm(Boolean(entry?.isIntersecting)),
      { rootMargin: "0px 0px -50% 0px" },
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const show = visible && !overContactForm;

  return (
    <div
      hidden={!show}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 px-4 py-3">
        <QuoteButton location="sticky_mobile" className="flex-[2] px-3 text-xs" />
        <WhatsAppButton location="sticky_mobile" className="flex-1 px-3 text-xs">
          WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
