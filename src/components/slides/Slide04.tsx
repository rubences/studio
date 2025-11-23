import { AgentComponentsDiagram } from "../diagrams/AgentComponentsDiagram";

export function Slide04() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary text-center">
        Anatomía de un Agente de IA
      </h2>
      <p className="text-secondary-foreground mb-6 text-center max-w-2xl">
        Un agente es un sistema con cuatro componentes clave que trabajan en conjunto bajo la dirección de un orquestador.
      </p>
      <AgentComponentsDiagram className="w-full h-auto max-h-[75%]" />
    </section>
  );
}
