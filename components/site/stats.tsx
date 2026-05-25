"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  {
    n: 180,
    suffix: "+",
    label: "Obras entregadas",
    sub: "Residencial · Comercial · Industrial",
  },
  {
    n: 16,
    suffix: "",
    label: "Estados de la República",
    sub: "Cobertura nacional con residentes locales",
  },
  {
    n: 98,
    suffix: "%",
    label: "Entregas a tiempo",
    sub: "Promedio últimos 5 ejercicios",
  },
  {
    n: 15,
    suffix: " años",
    label: "Operación continua",
    sub: "Sin litigios activos de obra",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [val, setVal] = React.useState(reduce ? to : 0);

  React.useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      aria-label="Indicadores de operación"
      className="relative overflow-hidden bg-foreground py-20 text-background md:py-28 lg:py-32"
    >
      <div className="grid-bg-soft pointer-events-none absolute inset-0 opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-background/10" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--gold)]">
              Indicadores · cierre 2025
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Cifras de operación auditadas,{" "}
              <span className="font-serif text-[1.06em] font-normal italic tracking-normal text-background">
                reportadas a cliente.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-background/65">
              Lo que medimos es lo que mejoramos. Estos indicadores se reportan
              trimestralmente a clientes corporativos.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-background/10 bg-background/10 md:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-3 bg-foreground p-7 md:p-8"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-none tracking-[-0.04em]">
                <Counter to={s.n} suffix={s.suffix} />
              </p>
              <p className="mt-1 font-heading text-base font-medium text-background">
                {s.label}
              </p>
              <p className="text-xs leading-relaxed text-background/65">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
