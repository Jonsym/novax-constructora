"use client";

import * as React from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projectTypes } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

export function ContactForm({
  variant = "card",
  className,
}: {
  variant?: "card" | "panel";
  className?: string;
}) {
  const [status, setStatus] = React.useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  const labelCls =
    "block text-[10px] font-medium tracking-[0.18em] uppercase text-muted-foreground";
  const fieldCls =
    "h-11 rounded-none border-border bg-transparent px-3 text-sm placeholder:text-muted-foreground/70 focus-visible:border-foreground focus-visible:ring-0";

  return (
    <div
      className={cn(
        "relative w-full",
        variant === "card"
          ? "border border-border bg-background/95 p-6 supports-backdrop-filter:backdrop-blur sm:p-7"
          : "p-0",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold)]">
            Cotización
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
            Cuéntanos sobre tu proyecto
          </h3>
        </div>
        <span className="text-[10px] tracking-[0.18em] text-muted-foreground">
          24 H · RESPUESTA
        </span>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-4 border border-foreground/10 bg-muted/40 p-6"
          >
            <div className="flex size-10 items-center justify-center border border-foreground bg-foreground text-background">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-semibold text-foreground">
                Solicitud recibida.
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Un asesor técnico se pondrá en contacto contigo en menos de 24
                horas hábiles para coordinar la visita y los entregables.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-xs font-medium text-foreground underline-offset-4 hover:underline"
            >
              Enviar otra solicitud
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label htmlFor="cf-nombre" className={labelCls}>
                Nombre
              </label>
              <Input
                id="cf-nombre"
                name="nombre"
                autoComplete="name"
                required
                placeholder="Tu nombre"
                className={cn(fieldCls, "mt-1.5")}
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="cf-telefono" className={labelCls}>
                Teléfono
              </label>
              <Input
                id="cf-telefono"
                name="telefono"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                placeholder="55 0000 0000"
                className={cn(fieldCls, "mt-1.5")}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-tipo" className={labelCls}>
                Tipo de proyecto
              </label>
              <div className="relative mt-1.5">
                <select
                  id="cf-tipo"
                  name="tipo"
                  required
                  defaultValue=""
                  className={cn(
                    fieldCls,
                    "w-full appearance-none pr-9 text-foreground",
                    "[&>option]:bg-background",
                  )}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden
                  viewBox="0 0 12 12"
                  className="pointer-events-none absolute right-3 top-1/2 size-3 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M2 4 L6 8 L10 4" />
                </svg>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="cf-mensaje" className={labelCls}>
                Mensaje breve
              </label>
              <Textarea
                id="cf-mensaje"
                name="mensaje"
                required
                rows={3}
                placeholder="Ubicación, metros cuadrados, fecha estimada…"
                className={cn(
                  "mt-1.5 min-h-[88px] rounded-none border-border bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground/70 focus-visible:border-foreground focus-visible:ring-0",
                )}
              />
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-muted-foreground">
                Al enviar aceptas el contacto comercial de Novax.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-11 rounded-none bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/85"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Solicitar cotización
                    <ArrowUpRight className="size-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
