import { AdkCycleDiagram } from "../diagrams/AdkCycleDiagram";

export function Slide22() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary">
        El Ciclo de Vida del Desarrollo de Agentes
      </h2>
      <p className="text-secondary-foreground mb-8 text-center max-w-3xl">
        Construir un agente robusto es un proceso iterativo que abarca desde la idea inicial hasta el monitoreo en producción.
      </p>
      <AdkCycleDiagram className="w-full max-w-5xl h-auto" />
    </section>
  );
}
