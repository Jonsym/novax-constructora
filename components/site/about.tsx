import Image from "next/image";
import { Award, CircleCheck } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const bullets = [
  "Equipo propio de arquitectos, ingenieros y residentes",
  "Bitácora digital y reportes semanales al cliente",
  "Cumplimiento normativo NOM, NMX y reglamentos locales",
  "Garantía estructural por escrito en cada proyecto",
];

export function About() {
  return (
    <section
      id="nosotros"
      className="relative bg-[color:var(--concrete)] py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Image column */}
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-background">
                <Image
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=80"
                  alt="Ingeniero residente revisando planos en obra"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Membership badge — inline on mobile, floating on lg+ */}
              <div className="mt-5 flex max-w-md gap-4 bg-foreground p-5 text-background sm:p-6 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:max-w-[300px] lg:translate-x-6 lg:translate-y-6">
                <Award
                  className="size-5 shrink-0 text-[color:var(--gold)]"
                  strokeWidth={1.75}
                />
                <p className="text-sm leading-relaxed">
                  Miembros de la{" "}
                  <strong className="font-semibold text-background">
                    Cámara Mexicana de la Industria de la Construcción.
                  </strong>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="eyebrow text-[color:var(--gold)]">Nosotros</p>

            <h2 className="mt-5 font-heading text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-foreground">
              Una constructora{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
                mexicana
              </span>{" "}
              con visión técnica y disciplina de obra.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              En Novax Constructora hemos ejecutado proyectos para familias,
              desarrolladores y empresas durante más de dos décadas. Nuestra
              forma de trabajar combina ingeniería seria, comunicación clara y
              respeto absoluto por los tiempos y el presupuesto del cliente.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground"
                >
                  <CircleCheck
                    className="mt-0.5 size-5 shrink-0 text-[color:var(--gold)]"
                    strokeWidth={1.75}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
