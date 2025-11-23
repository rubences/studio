import Link from "next/link";

export function Slide10() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        ADK: Framework de Referencia
      </h2>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>Código abierto. +1 millón descargas en 4 meses</li>
        <li>Implementa patrón ReAct de forma estructurada</li>
        <li>Tipos de agentes: LLM, Secuencial, Paralelo, Loop, Personalizado</li>
        <li>Sistema flexible de herramientas y composición multiagente</li>
        <li>Evaluación y observabilidad integradas</li>
      </ul>
      <div className="mt-6 p-4 bg-card border-l-4 border-accent">
        <p className="text-secondary-foreground text-base">
          <Link
            href="https://github.com/google-cloud/agents"
            target="_blank"
            className="text-primary font-bold hover:underline"
          >
            🔗 Descargar ADK en GitHub →
          </Link>
        </p>
      </div>
    </section>
  );
}
