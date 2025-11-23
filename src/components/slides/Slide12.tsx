import { ReactCycleDiagram } from "../diagrams/ReactCycleDiagram";

export function Slide12() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary text-center">
        El Ciclo ReAct (Razonar-Actuar-Observar)
      </h2>
      <ReactCycleDiagram className="w-full max-w-2xl h-auto" />
    </section>
  );
}
