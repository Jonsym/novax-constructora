import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-foreground py-20 text-background md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/85 to-foreground/95" />
        <div className="grid-bg-soft absolute inset-0 opacity-20 mix-blend-overlay" />
      </div>

      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--gold)]">
            Cotiza tu proyecto
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1] tracking-[-0.03em]">
            Conversemos sobre lo que{" "}
            <span className="font-serif text-[1.06em] font-normal italic tracking-normal">
              quieres construir.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-background/75">
            Agenda una visita técnica sin costo. En menos de 24 horas hábiles
            recibirás el contacto de un asesor con experiencia en proyectos
            similares al tuyo.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-background/15 bg-background/10 sm:grid-cols-2">
            <ContactPill
              icon={Phone}
              label="Teléfono directo"
              value={site.phone}
              href={site.phoneHref}
            />
            <ContactPill
              icon={MessageCircle}
              label="WhatsApp"
              value={site.whatsapp}
              href={site.whatsappHref}
            />
            <ContactPill
              icon={Mail}
              label="Correo comercial"
              value={site.email}
              href={site.emailHref}
            />
            <ContactPill
              icon={MapPin}
              label="Oficinas centrales"
              value="CDMX · Polanco"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Residencial",
              "Comercial",
              "Industrial",
              "Remodelación",
              "Supervisión",
              "Mantenimiento",
            ].map((t) => (
              <span
                key={t}
                className="border border-background/20 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-background/70"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative bg-background text-foreground shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]">
            <div className="absolute -right-2 -top-2 size-2 bg-[color:var(--gold)]" />
            <div className="absolute -left-2 -bottom-2 size-2 bg-[color:var(--gold)]" />
            <ContactForm className="p-7 sm:p-8" variant="panel" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactPill({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex h-full flex-col gap-2 bg-foreground px-5 py-5">
      <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-background/60">
        <Icon className="size-3.5 text-[color:var(--gold)]" />
        {label}
      </div>
      <p className="font-heading text-sm font-medium text-background">{value}</p>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block transition-colors hover:bg-background/5"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
