import Image from "next/image";
import { Quote } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonios"
      className="relative bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">Clientes</p>
            <h2
              id="testimonios"
              className="mt-5 font-heading text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground"
            >
              Lo que dicen quienes ya{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                construyeron con nosotros.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Más de 180 obras entregadas a familias, despachos de arquitectura
              y corporativos en toda la República. Cero litigios activos.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:mt-14 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <article className="flex h-full flex-col gap-6 bg-background p-7 md:p-8 lg:p-9">
                <Quote
                  className="size-7 text-[color:var(--gold)]"
                  strokeWidth={1.5}
                />
                <p className="flex-1 text-[15px] leading-relaxed text-foreground">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {t.author}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
