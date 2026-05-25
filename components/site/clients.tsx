import { clients } from "@/lib/site-data";

export function Clients() {
  return (
    <section
      aria-label="Clientes y aliados"
      className="relative border-y border-border bg-background"
    >
      <div className="container-page grid grid-cols-1 gap-8 py-10 md:py-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--gold)]">
            Han confiado en Novax
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Desarrolladores, corporativos y familias en toda la República.
          </p>
        </div>

        <div className="lg:col-span-9">
          <ul
            role="list"
            className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
          >
            {clients.map((c) => (
              <li
                key={c}
                className="flex h-16 items-center justify-center bg-background px-4 text-center font-heading text-[13px] font-semibold tracking-tight text-foreground/75 transition-colors duration-300 hover:bg-muted/40 hover:text-foreground sm:h-20 sm:text-[14px]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
