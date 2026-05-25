import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navLinks, site } from "@/lib/site-data";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function LinkedinGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7" />
      <circle cx="8" cy="7.2" r="0.7" fill="currentColor" />
      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M12 10v7" />
    </svg>
  );
}

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Residencial", href: "#servicios" },
      { label: "Comercial", href: "#servicios" },
      { label: "Industrial", href: "#servicios" },
      { label: "Remodelación", href: "#servicios" },
      { label: "Supervisión", href: "#servicios" },
      { label: "Project Management", href: "#servicios" },
      { label: "Mantenimiento", href: "#servicios" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Proceso", href: "#proceso" },
      { label: "Certificaciones", href: "#nosotros" },
      { label: "Aviso de privacidad", href: "#contacto" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-5">
          <Link href="#top" className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground md:text-[28px]">
              NOVAX
            </span>
            <span className="mt-1 text-[10px] tracking-[0.32em] text-muted-foreground">
              CONSTRUCTORA
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Construimos espacios residenciales, comerciales e industriales en
            toda la República Mexicana, con calidad técnica y entregas a
            tiempo desde 2009.
          </p>

          <div className="mt-7 flex flex-col gap-1.5 text-xs text-foreground/80">
            <a href={site.phoneHref} className="hover:text-foreground">
              {site.phone}
            </a>
            <a href={site.emailHref} className="hover:text-foreground">
              {site.email}
            </a>
            <p className="text-muted-foreground">{site.address}</p>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <SocialLink icon={InstagramGlyph} label="Instagram" />
            <SocialLink icon={LinkedinGlyph} label="LinkedIn" />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-3">
            <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              {col.title}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1 md:justify-self-end">
          <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            Nav
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-sm text-foreground/80 hover:text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-[11px] tracking-wide text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Novax Constructora S.A. de C.V. ·
            Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-3">
            <span>{site.established}</span>
            <span className="text-foreground/30">·</span>
            <span>{site.license}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex size-9 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
    >
      <Icon className="size-4" />
    </a>
  );
}
