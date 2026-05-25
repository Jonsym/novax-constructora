import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const steps = [
  {
    n: "01",
    title: "Diagnóstico y visita",
    desc: "Levantamiento físico, análisis de factibilidad y alineación de objetivos con el cliente. Sin costo.",
    deliverables: ["Memoria de visita", "Pre-diagnóstico técnico"],
  },
  {
    n: "02",
    title: "Anteproyecto y cotización",
    desc: "Programa arquitectónico, partidas presupuestales, alternativas de sistemas constructivos y cronograma maestro.",
    deliverables: ["Catálogo de conceptos", "Cronograma Gantt"],
  },
  {
    n: "03",
    title: "Contratación y permisos",
    desc: "Cierre de alcance, contrato a precio fijo, gestión de licencias municipales y manifestaciones.",
    deliverables: ["Contrato y fianzas", "Licencias vigentes"],
  },
  {
    n: "04",
    title: "Ejecución de obra",
    desc: "Movilización de equipo, suministros, supervisión residente y controles semanales de calidad y avance.",
    deliverables: ["Bitácora digital", "Reportes ejecutivos"],
  },
  {
    n: "05",
    title: "Pruebas y acabados",
    desc: "Pruebas de instalaciones, acabados finos, limpieza profunda y walkthrough con cliente.",
    deliverables: ["Pruebas MEP", "Lista de pendientes"],
  },
  {
    n: "06",
    title: "Entrega y garantía",
    desc: "Acta de cierre, planos as-built, manuales de operación y póliza de garantía a 24 meses.",
    deliverables: ["Planos as-built", "Garantía 24 m"],
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal className="grid grid-cols-1 items-end gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow text-[color:var(--gold)]">Proceso</p>
            <h2 className="mt-5 font-heading text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-foreground">
              Seis etapas.{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                Cero improvisaciones.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Una metodología probada en más de 180 obras. Cada etapa se cierra
            con entregables firmados antes de pasar a la siguiente.
          </p>
        </Reveal>

        <Stagger className="mt-10 flex flex-col md:mt-12">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative grid grid-cols-[auto_1fr] gap-6 border-b border-border py-8 pl-5 transition-colors hover:bg-muted/40 sm:pl-7 md:grid-cols-[120px_1fr_auto] md:gap-10 md:py-10 md:pl-9">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xs tracking-[0.22em] text-[color:var(--gold)]">
                    ETAPA
                  </span>
                  <span className="font-heading text-4xl font-semibold leading-none tracking-[-0.04em] text-foreground md:text-5xl">
                    {s.n}
                  </span>
                </div>

                <div className="md:max-w-xl">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {s.desc}
                  </p>
                </div>

                <div className="col-span-2 flex flex-wrap gap-2 md:col-span-1 md:flex-col md:items-end md:justify-center md:gap-2">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 border border-border bg-background px-2.5 py-1 text-[10px] tracking-wide text-foreground/80"
                    >
                      <span className="size-1 bg-[color:var(--gold)]" />
                      {d}
                    </span>
                  ))}
                </div>

                <span
                  className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-foreground transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Tiempo promedio del primer contacto a la entrega: 8 a 14 meses
          </p>
          <span className="font-heading text-sm font-medium text-foreground">
            Operación 100% transparente
          </span>
        </Reveal>
      </div>
    </section>
  );
}
