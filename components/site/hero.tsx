"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { HeroCarousel } from "@/components/site/hero-carousel";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-foreground text-background pt-28 md:pt-32 lg:pt-36"
    >
      {/* Backdrop texture */}
      <div className="grid-bg-soft pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-background/10" />

      <div className="container-page relative">
        {/* Intro / headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 gap-6 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-14"
        >
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 border border-background/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-background/85">
              <span className="size-1.5 bg-[color:var(--gold)]" />
              Constructora certificada · México
            </span>

            <h1 className="mt-6 font-heading text-[clamp(2.25rem,5.6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-background">
              Construimos espacios{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal text-[color:var(--gold)]">
                que perduran
              </span>
              .
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-[15px] leading-relaxed text-background/75 md:text-base">
              Obra residencial, comercial e industrial llave en mano. Equipos
              propios, supervisión técnica y control de calidad en cada etapa —
              con entregas a tiempo y dentro de presupuesto.
            </p>
          </div>
        </motion.div>

        {/* Carousel + form */}
        <div className="grid grid-cols-1 gap-6 pb-16 md:pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative h-[480px] sm:h-[560px] md:h-[600px] lg:h-[640px] xl:h-[700px]">
              <HeroCarousel />
              {/* Gold corner accents */}
              <div className="pointer-events-none absolute -right-1.5 -top-1.5 size-3 bg-[color:var(--gold)]" />
              <div className="pointer-events-none absolute -left-1.5 -bottom-1.5 size-3 bg-[color:var(--gold)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="flex flex-col lg:col-span-5"
          >
            <div className="relative bg-background text-foreground shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]">
              <ContactForm />
            </div>
            <p className="mt-4 flex items-center gap-2 text-[11px] tracking-wide text-background/65">
              <ShieldCheck className="size-3.5 text-[color:var(--gold)]" />
              Información protegida · respuesta en menos de 24 h hábiles
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
