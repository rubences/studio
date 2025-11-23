import { ReactCycleDiagram } from "../diagrams/ReactCycleDiagram";

export function Slide12() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary text-center">
        ReAct: El Motor de la Autonomía
      </h2>
      <p className="text-secondary-foreground mb-8 text-center max-w-3xl">
        Este ciclo de Razonar, Actuar y Observar es el bucle fundamental que permite a un agente enfrentarse a tareas complejas y resolverlas paso a paso.
      </p>
      <ReactCycleDiagram className="w-full max-w-4xl h-auto mt-4" />
    </section>
  );
}
