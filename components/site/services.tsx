import {
  Building2,
  ClipboardCheck,
  Compass,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const services = [
  {
    icon: Home,
    title: "Construcción residencial",
    desc: "Casas habitación, residencias y desarrollos de vivienda con acabados de primer nivel y planeación arquitectónica profesional.",
  },
  {
    icon: Building2,
    title: "Construcción comercial",
    desc: "Oficinas corporativas, locales, naves industriales y edificios institucionales construidos bajo normativa vigente.",
  },
  {
    icon: Wrench,
    title: "Remodelación integral",
    desc: "Renovación completa de espacios habitables y comerciales: instalaciones, acabados, estructura y diseño funcional.",
  },
  {
    icon: ClipboardCheck,
    title: "Supervisión de obra",
    desc: "Gestión técnica y administrativa de tu proyecto con bitácoras, reportes semanales y control presupuestal estricto.",
  },
  {
    icon: Compass,
    title: "Proyecto ejecutivo",
    desc: "Planos arquitectónicos, estructurales, hidrosanitarios y eléctricos listos para gestionar permisos y construir.",
  },
  {
    icon: ShieldCheck,
    title: "Control de calidad",
    desc: "Pruebas de materiales, verificación normativa y certificación de procesos en cada etapa de la obra.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative bg-background py-24 md:py-32">
      <div className="container-page">
        {/* Header */}
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">Servicios</p>
            <h2 className="mt-5 font-heading text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-foreground">
              Sistemas completos para
              <br />
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                cada etapa
              </span>{" "}
              de tu obra.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              Desde el levantamiento y el proyecto ejecutivo hasta la entrega
              final, cubrimos todas las disciplinas necesarias para que tu obra
              se ejecute con orden, transparencia y bajo los más altos
              estándares técnicos.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="group relative flex h-full flex-col gap-5 bg-background p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-7 md:p-8 lg:min-h-[320px] lg:gap-6 lg:p-9">
                <div className="flex size-11 items-center justify-center bg-foreground text-background transition-transform duration-300 group-hover:-translate-y-0.5">
                  <s.icon className="size-5" strokeWidth={1.75} />
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-heading text-[18px] font-semibold tracking-tight text-foreground sm:text-[19px]">
                    {s.title}
                  </h3>
                  <p className="max-w-[36ch] text-[14px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
