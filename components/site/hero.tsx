"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-foreground text-background"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80"
          alt="Obra en construcción"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Tints */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/65 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/20" />
        <div className="grid-bg-soft absolute inset-0 opacity-60 mix-blend-overlay" />
      </div>

      
      <div className="container-page relative grid min-h-[90vh] grid-cols-1 items-center gap-10 py-40 md:py-38 lg:grid-cols-12 lg:gap-12 lg:py-45">
        {/* Headline column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-flex items-center gap-2 border border-background/30 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-background/85">
              <span className="size-1.5 bg-[color:var(--gold)]" />
              Constructora certificada · México
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-6 font-heading text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-background"
          >
            Construimos espacios
            <br />
            <span className="text-background">que </span>
            <span className="relative inline-block text-[color:var(--gold)]">
              perduran
              <span className="absolute -bottom-1 left-0 h-px w-full bg-[color:var(--gold)]/60" />
            </span>
            <span className="text-background">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-background/80 sm:text-base"
          >
            Obra residencial, comercial y remodelación llave en mano. Equipos
            propios, supervisión técnica y control de calidad en cada etapa —
            con entregas a tiempo y dentro de presupuesto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-none border-background bg-transparent px-6 text-[15px] font-medium text-background hover:bg-background/10 hover:text-background"

            >
              <Link href="#contacto">
                Cotizar proyecto
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-none border-background/40 bg-transparent px-6 text-[15px] font-medium text-background hover:bg-background/10 hover:text-background"
            >
              <Link href="#proyectos">Ver proyectos</Link>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden border border-background/15 bg-background/5"
          >
            {[
              { k: "+180", v: "Obras entregadas" },
              { k: "16", v: "Estados de México" },
              { k: "100%", v: "Supervisión propia" },
            ].map((s) => (
              <div
                key={s.v}
                className="bg-foreground/30 px-4 py-4 text-background"
              >
                <p className="text-2xl font-semibold tracking-tight">
                  {s.k}
                </p>
                <p className="mt-0.5 text-[11px] tracking-wide text-background/70">
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="relative"
          >
            <span className="absolute -left-3 top-0 hidden h-full w-px bg-[color:var(--gold)]/70 lg:block" />
            <div className="relative bg-background text-foreground shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
              <div className="absolute -right-2 -top-2 size-2 bg-[color:var(--gold)]" />
              <div className="absolute -left-2 -bottom-2 size-2 bg-[color:var(--gold)]" />
              <ContactForm />
            </div>
            <p className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-background/70">
              <ShieldCheck className="size-3" />
              Información protegida · sin spam
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll affordance */}
      <div className="container-page relative pb-8">
        <motion.a
          href="#servicios"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-background/70 hover:text-background"
        >
          Scroll
          <ArrowDown className="size-3 transition-transform group-hover:translate-y-0.5" />
        </motion.a>
      </div>
    </section>
  );
}
