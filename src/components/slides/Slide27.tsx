import { ProtocolDiagram } from "../diagrams/ProtocolDiagram";

export function Slide27() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary">
        Hacia un Ecosistema Abierto: Protocolos
      </h2>
       <p className="text-secondary-foreground mb-8 text-center max-w-3xl">
        Los protocolos como A2A (Agent-to-Agent) y MCP estandarizan la comunicación, permitiendo que agentes de diferentes tecnologías colaboren en un mismo objetivo.
      </p>
      <ProtocolDiagram className="w-full max-w-4xl h-auto" />
    </section>
  );
}
