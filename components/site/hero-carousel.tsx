"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { projects } from "@/lib/site-data";

const SLIDE_DURATION = 6500;
const ease = [0.22, 1, 0.36, 1] as const;

const slides = projects.slice(0, 4);

export function HeroCarousel() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const reduce = useReducedMotion();

  const total = slides.length;
  const current = slides[i];

  React.useEffect(() => {
    if (paused || reduce) return;
    const t = window.setTimeout(() => {
      setI((prev) => (prev + 1) % total);
    }, SLIDE_DURATION);
    return () => window.clearTimeout(t);
  }, [i, paused, reduce, total]);

  const next = () => setI((prev) => (prev + 1) % total);
  const prev = () => setI((prev) => (prev - 1 + total) % total);
  const goTo = (target: number) => setI(target);

  return (
    <div
      className="group relative h-full w-full overflow-hidden bg-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      aria-roledescription="carousel"
      aria-label="Proyectos destacados"
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={current.slug}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/55 to-foreground/10" />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/30 via-transparent to-foreground/0" />
        </motion.div>
      </AnimatePresence>

      {/* Top meta strip */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 p-5 sm:p-6 md:p-8">
        <span className="inline-flex items-center bg-[color:var(--gold)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground">
          {current.category}
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-background/70">
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5 pb-7 text-background sm:p-7 md:p-9 lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug + "-content"}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-background/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[color:var(--gold)]" />
                {current.location}
              </span>
              <span className="size-1 rounded-full bg-background/40" />
              <span>{current.year}</span>
              <span className="size-1 rounded-full bg-background/40" />
              <span>{current.scope}</span>
            </div>

            <h3 className="mt-4 font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              {current.title}
            </h3>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-background/85 sm:text-[15px]">
              {current.shortDescription}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls row */}
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-background/15 pt-5 sm:mt-7">
          {/* Slide indicators */}
          <div className="flex items-end gap-3 sm:gap-4">
            {slides.map((s, idx) => (
              <button
                key={s.slug}
                onClick={() => goTo(idx)}
                aria-label={`Ver proyecto ${idx + 1}: ${s.title}`}
                aria-current={idx === i ? "true" : undefined}
                className={cn(
                  "flex flex-col items-start gap-1.5 text-left text-[10px] tracking-[0.18em] transition-colors duration-300",
                  idx === i
                    ? "text-background"
                    : "text-background/45 hover:text-background/85",
                )}
              >
                <span className="font-semibold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "h-[2px] w-8 origin-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-10",
                    idx === i
                      ? "bg-[color:var(--gold)]"
                      : "bg-background/25",
                  )}
                />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Proyecto anterior"
              className="flex size-11 items-center justify-center border border-background/30 text-background transition-all duration-200 hover:border-background hover:bg-background hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Proyecto siguiente"
              className="flex size-11 items-center justify-center border border-background/30 text-background transition-all duration-200 hover:border-background hover:bg-background hover:text-foreground"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-[2px] bg-background/10">
        <motion.div
          key={`${current.slug}-${paused ? "p" : "r"}`}
          initial={{ width: "0%" }}
          animate={{ width: paused || reduce ? "0%" : "100%" }}
          transition={{
            duration: paused || reduce ? 0 : SLIDE_DURATION / 1000,
            ease: "linear",
          }}
          className="h-full bg-[color:var(--gold)]"
        />
      </div>
    </div>
  );
}
