import { AgentComponentsDiagram } from "../diagrams/AgentComponentsDiagram";

export function Slide04() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary text-center">
        Anatomía de un Agente de IA
      </h2>
      <AgentComponentsDiagram className="w-full h-auto max-h-[80%]" />
    </section>
  );
}
