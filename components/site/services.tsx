import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Hammer,
  Home,
  Ruler,
  Wrench,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const services = [
  {
    code: "S01",
    icon: Home,
    title: "Construcción residencial",
    desc: "Casa habitación, residencias y desarrollos boutique con acabados arquitectónicos de primer nivel.",
    capabilities: ["Casas en obra negra", "Llave en mano", "Residencias premium"],
  },
  {
    code: "S02",
    icon: Building2,
    title: "Construcción comercial",
    desc: "Oficinas corporativas, locales, naves industriales y edificios institucionales bajo normativa vigente.",
    capabilities: ["Corporativos", "Naves industriales", "Retail y franquicias"],
  },
  {
    code: "S03",
    icon: Hammer,
    title: "Remodelación integral",
    desc: "Reestructuración de inmuebles existentes — interior, exterior y reforzamientos estructurales.",
    capabilities: ["Demolición controlada", "Reforzamiento", "Acabados premium"],
  },
  {
    code: "S04",
    icon: ClipboardCheck,
    title: "Supervisión de obra",
    desc: "Dirección residente, control de avance, calidad y bitácora digital con reportes para inversionistas.",
    capabilities: ["Residente certificado", "Auditoría técnica", "Reportes ejecutivos"],
  },
  {
    code: "S05",
    icon: Ruler,
    title: "Project Management",
    desc: "Coordinación general entre arquitectura, ingenierías, proveedores y autoridades hasta la entrega final.",
    capabilities: ["Cronograma maestro", "Compras y logística", "Gestión normativa"],
  },
  {
    code: "S06",
    icon: Wrench,
    title: "Mantenimiento",
    desc: "Servicio preventivo y correctivo para inmuebles residenciales y comerciales bajo contrato anual.",
    capabilities: ["Plan preventivo", "Atención 24/7", "Inspección estructural"],
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">Servicios</p>
            <h2 className="mt-5 font-heading text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-foreground">
              Sistemas completos para{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                cada etapa
              </span>{" "}
              de tu obra.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Desde el levantamiento y el proyecto ejecutivo hasta la entrega
              final y el mantenimiento posterior, cubrimos todas las
              disciplinas necesarias para que tu obra se ejecute con orden y
              transparencia.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.code}>
              <article className="group relative flex h-full flex-col gap-6 bg-background p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-7 md:p-8 lg:min-h-[360px] lg:p-9">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--gold)]">
                    {s.code}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>

                <div className="flex size-12 items-center justify-center bg-foreground text-background transition-all duration-300 group-hover:bg-[color:var(--gold)] group-hover:text-foreground">
                  <s.icon className="size-5" strokeWidth={1.75} />
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-heading text-[19px] font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="max-w-[36ch] text-[14px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>

                <ul className="mt-auto flex flex-col gap-1.5 border-t border-border pt-4">
                  {s.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 text-[12px] tracking-wide text-foreground/75"
                    >
                      <span className="size-1 bg-[color:var(--gold)]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:items-center md:mt-12">
          <p className="text-sm text-muted-foreground">
            ¿Tu proyecto combina varios servicios?
          </p>
          <Link
            href="#contacto"
            className="group inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-sm font-semibold text-foreground"
          >
            Hablar con un ingeniero
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
