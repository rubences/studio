import Link from "next/link";

export function Slide09() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Construir Agentes: Tres Vías
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex-1 bg-card text-foreground p-6 shadow-lg border-t-4 border-accent">
          <h3 className="font-headline text-xl text-primary">ADK</h3>
          <p className="text-secondary-foreground text-base mt-2">
            Desarrollo personalizado basado en código. Control máximo.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            <Link
              href="https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/quickstart?hl=es"
              target="_blank"
              className="text-primary hover:underline"
            >
              📖 Ver documentación →
            </Link>
          </p>
        </div>
        <div className="flex-1 bg-card text-foreground p-6 shadow-lg border-t-4 border-primary">
          <h3 className="font-headline text-xl text-primary">Gemini Enterprise</h3>
          <p className="text-secondary-foreground text-base mt-2">
            Sin código. Equipos no-técnicos pueden crear agentes.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            <Link
              href="https://cloud.google.com/products/agent-builder?hl=es-419"
              target="_blank"
              className="text-primary hover:underline"
            >
              🎨 Acceder Builder →
            </Link>
          </p>
        </div>
        <div className="flex-1 bg-card text-foreground p-6 shadow-lg border-t-4 border-green-500">
          <h3 className="font-headline text-xl text-primary">Agentes Asociados</h3>
          <p className="text-secondary-foreground text-base mt-2">
            Integrar soluciones de terceros preexistentes.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            <Link
              href="https://cloud.google.com/vertex-ai?hl=es-419"
              target="_blank"
              className="text-primary hover:underline"
            >
              🔗 Explorar Agentes →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
