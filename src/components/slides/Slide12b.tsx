import { ReactInActionDiagram } from "../diagrams/ReactInActionDiagram";

export function Slide12b() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary">
        Caso Práctico: Agente de Soporte Técnico
      </h2>
      <p className="text-secondary-foreground mb-6 max-w-3xl">
        Un usuario reporta un problema. El agente usa el ciclo ReAct para diagnosticar, proponer soluciones y verificar el resultado.
      </p>
      <ReactInActionDiagram className="w-full h-auto mt-4" />
    </section>
  );
}
