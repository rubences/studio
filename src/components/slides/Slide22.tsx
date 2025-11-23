import { AdkCycleDiagram } from "../diagrams/AdkCycleDiagram";

export function Slide22() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Ciclo de Desarrollo ADK
      </h2>
      <AdkCycleDiagram className="w-full max-w-3xl h-auto" />
    </section>
  );
}
