import { ReactInActionDiagram } from "../diagrams/ReactInActionDiagram";

export function Slide12b() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Caso Práctico: Agente de Soporte Técnico
      </h2>
      <ReactInActionDiagram className="w-full h-auto mt-4" />
    </section>
  );
}
