"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "How I Work" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function onChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        href="#main-content"
        className="absolute left-4 top-3 z-[60] -translate-y-[calc(100%+2rem)] bg-background px-3 py-2 text-sm font-medium text-foreground transition-transform duration-200 focus:translate-y-0"
      >
        Skip to content
      </a>

      <Container>
        <nav
          className="flex items-center justify-between gap-6 py-4 md:py-5"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="shrink-0 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-accent"
            onClick={closeMenu}
          >
            Promise Adeleye
          </a>

          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-end text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-accent md:hidden"
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </Container>

      <div
        id={menuId}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        inert={!isOpen}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <Container>
            <ul className="flex flex-col gap-1 border-t border-border py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center text-base font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-accent"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </header>
  );
}
