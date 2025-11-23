import { ProtocolDiagram } from "../diagrams/ProtocolDiagram";

export function Slide27() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Protocolos Abiertos: MCP y A2A
      </h2>
      <ProtocolDiagram className="w-full max-w-3xl h-auto" />
    </section>
  );
}
