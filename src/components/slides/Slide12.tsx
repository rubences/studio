import { ReactCycleDiagram } from "../diagrams/ReactCycleDiagram";

export function Slide12() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary text-center">
        El Ciclo ReAct: El Motor de la Autonomía
      </h2>
      <ReactCycleDiagram className="w-full max-w-3xl h-auto mt-4" />
    </section>
  );
}
