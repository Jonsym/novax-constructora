import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/site-data";

export function Projects() {
  const [featured, ...rest] = projects;
  const secondary = rest.slice(0, 2);
  const tertiary = rest.slice(2, 5);

  return (
    <section
      id="proyectos"
      className="relative bg-[color:var(--concrete)] py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p className="eyebrow text-[color:var(--gold)]">Proyectos</p>
              <h2 className="mt-5 font-heading text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-foreground">
                Obra construida.{" "}
                <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                  Resultados visibles.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                Una selección de proyectos recientes en construcción
                residencial, comercial, industrial y remodelación. Cada obra
                con su alcance, plazos y resultados verificables.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end lg:pb-3">
              <Link
                href="#contacto"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                Ver portafolio completo
                <span className="flex size-9 items-center justify-center border border-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="size-4" strokeWidth={1.75} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Featured project */}
        <Reveal delay={0.1} className="mt-12 md:mt-14">
          <FeaturedCard project={featured} />
        </Reveal>

        {/* 2-up grid */}
        <Stagger className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2">
          {secondary.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} aspect="landscape" />
            </StaggerItem>
          ))}
        </Stagger>

        {/* 3-up grid */}
        <Stagger className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
          {tertiary.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} aspect="portrait" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeaturedCard({ project: p }: { project: Project }) {
  return (
    <article className="group relative isolate overflow-hidden bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-8 lg:aspect-auto lg:min-h-[520px]">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-5 top-5 inline-flex items-center bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground sm:left-7 sm:top-7">
            <span className="mr-2 size-1.5 bg-[color:var(--gold)]" />
            Proyecto destacado · {p.category}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:col-span-4 lg:p-10">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-background/65">
              <MapPin className="size-3.5 text-[color:var(--gold)]" />
              {p.location} · {p.year}
            </div>

            <h3 className="mt-4 font-heading text-[clamp(1.75rem,2.6vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              {p.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-background/80 sm:text-[15px]">
              {p.description}
            </p>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden border border-background/15 bg-background/10">
              <SpecItem label="Superficie" value={p.scope} />
              <SpecItem label="Duración" value={p.duration} />
            </dl>

            <p className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed text-background/85">
              <Sparkles
                className="mt-0.5 size-4 shrink-0 text-[color:var(--gold)]"
                strokeWidth={1.75}
              />
              {p.keyResult}
            </p>

            <Link
              href="#contacto"
              className="mt-6 inline-flex items-center gap-3 border-b border-background pb-1 text-sm font-semibold text-background transition-colors hover:text-[color:var(--gold)]"
            >
              Solicitar ficha técnica
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 bg-foreground px-4 py-3 sm:px-5 sm:py-4">
      <span className="text-[10px] uppercase tracking-[0.22em] text-background/55">
        {label}
      </span>
      <span className="font-heading text-base font-semibold tracking-tight text-background sm:text-lg">
        {value}
      </span>
    </div>
  );
}

function ProjectCard({
  project: p,
  aspect,
}: {
  project: Project;
  aspect: "portrait" | "landscape";
}) {
  return (
    <Link
      href="#contacto"
      className="group relative block overflow-hidden bg-foreground"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
        )}
      >
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes={
            aspect === "portrait"
              ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

        {/* Top-left category pill */}
        <span className="absolute left-5 top-5 inline-flex items-center bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
          {p.category}
        </span>

        {/* Bottom content */}
        <div className="absolute inset-x-5 bottom-5 text-background">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-background/75">
            <MapPin className="size-3 text-[color:var(--gold)]" />
            {p.location}
            <span className="size-1 rounded-full bg-background/40" />
            {p.year}
          </div>

          <h3 className="mt-2 font-heading text-[20px] font-semibold leading-[1.15] tracking-tight md:text-[22px]">
            {p.title}
          </h3>

          {/* Hover reveal */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-2 text-[12px] leading-relaxed text-background/80">
                {p.shortDescription}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 border-t border-background/20 pt-3">
            <div className="flex items-center gap-3 text-[11px] tracking-wide text-background/75">
              <span>{p.scope}</span>
              <span className="size-1 rounded-full bg-background/30" />
              <span>{p.duration}</span>
            </div>
            <span className="flex size-9 items-center justify-center bg-background text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
