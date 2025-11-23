import { AdkCycleDiagram } from "../diagrams/AdkCycleDiagram";

export function Slide22() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Ciclo de Vida de Desarrollo (ADK)
      </h2>
      <AdkCycleDiagram className="w-full max-w-4xl h-auto" />
    </section>
  );
}
