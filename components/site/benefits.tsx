import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const projects = [
  {
    category: "Residencial",
    title: "Residencia Bosques",
    meta: "Monterrey · 620 m² · 2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Comercial",
    title: "Edificio Corporativo Lumen",
    meta: "CDMX · 4,200 m² · 2024",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Remodelación",
    title: "Departamento Polanco",
    meta: "CDMX · 180 m² · 2023",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative bg-[color:var(--concrete)] py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal>
          <p className="eyebrow text-[color:var(--gold)]">Proyectos</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-heading text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-foreground">
              Obra construida.{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                Resultados visibles.
              </span>
            </h2>
            <Link
              href="#contacto"
              className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-foreground lg:self-end lg:pb-3"
            >
              Ver portafolio completo
              <span className="inline-flex size-5 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Cards */}
        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <ProjectCard {...p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProjectCard({
  category,
  title,
  meta,
  image,
}: {
  category: string;
  title: string;
  meta: string;
  image: string;
}) {
  return (
    <Link
      href="#contacto"
      className="group relative block aspect-[3/4] overflow-hidden rounded-[6px] bg-foreground"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />

      {/* Bottom gradient for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent" />

      {/* Top-left category pill */}
      <span className="absolute left-5 top-5 inline-flex items-center bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground">
        {category}
      </span>

      {/* Bottom content */}
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
        <div className="min-w-0 flex-1 text-background">
          <h3 className="font-heading text-[22px] font-semibold leading-[1.15] tracking-tight md:text-[24px]">
            {title}
          </h3>
          <p className="mt-1.5 text-[11px] tracking-wide text-background/75">
            {meta}
          </p>
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center bg-background text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight className="size-5" strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
