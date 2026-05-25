"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full supports-backdrop-filter:backdrop-blur-md",
        "transition-[background-color,border-color,color,height,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-border/70 bg-background/85 text-foreground shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "border-b border-white/10 bg-foreground/25 text-background shadow-none",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-8 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24",
        )}
      >
        {/* Wordmark */}
        <Link
          href="#top"
          className="group flex flex-col leading-none"
          aria-label={site.name}
        >
          <span className="font-heading text-2xl font-extrabold tracking-tight md:text-[28px]">
            NOVAX
          </span>
          <span
            className={cn(
              "mt-1 text-[10px] tracking-[0.32em] transition-colors duration-300",
              scrolled ? "text-muted-foreground" : "text-background/75",
            )}
          >
            CONSTRUCTORA
          </span>
        </Link>

        {/* Nav + CTA */}
        <div className="flex items-center gap-2 md:gap-8 lg:gap-12">
          <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors duration-200",
                  scrolled
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-background/90 hover:text-background",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            asChild
            size="lg"
            className="hidden h-12 rounded-none bg-[color:var(--gold)] px-6 text-[13px] font-semibold tracking-[0.12em] text-foreground uppercase shadow-none hover:bg-[color:var(--gold)]/90 md:inline-flex"
          >
            <Link href="#contacto">Cotizar proyecto</Link>
          </Button>

          {/* Mobile trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "size-11 rounded-none md:hidden",
                  scrolled
                    ? "border-border bg-background text-foreground"
                    : "border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background",
                )}
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm rounded-none border-l border-border bg-background p-0"
              showCloseButton
            >
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

function MobileMenu() {
  return (
    <div className="flex h-full flex-col">
      <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
      <div className="flex flex-col border-b border-border px-6 py-6 leading-none">
        <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
          NOVAX
        </span>
        <span className="mt-1 text-[10px] tracking-[0.32em] text-muted-foreground">
          CONSTRUCTORA
        </span>
      </div>

      <nav className="flex flex-col px-2 py-4">
        <AnimatePresence>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.04 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className="flex items-center border-b border-border/60 px-4 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted/60"
                >
                  {link.label}
                </Link>
              </SheetClose>
            </motion.div>
          ))}
        </AnimatePresence>
      </nav>

      <div className="mt-auto border-t border-border bg-muted/40 px-6 py-6">
        <SheetClose asChild>
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-none bg-[color:var(--gold)] text-[13px] font-semibold tracking-[0.12em] text-foreground uppercase hover:bg-[color:var(--gold)]/90"
          >
            <Link href="#contacto">Cotizar proyecto</Link>
          </Button>
        </SheetClose>
      </div>
    </div>
  );
}
