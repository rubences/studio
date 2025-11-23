import { ArchitectureTemplateDiagram } from "../diagrams/ArchitectureTemplateDiagram";

export function Slide34() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary">
        Plantilla de Arquitectura de Agente
      </h2>
      <p className="text-secondary-foreground mb-8 text-center max-w-3xl">
        Esta arquitectura de referencia muestra el flujo de datos y decisiones desde la entrada del usuario hasta la respuesta final, pasando por el LLM y las herramientas.
      </p>
      <ArchitectureTemplateDiagram className="w-full max-w-5xl h-auto" />
    </section>
  );
}
