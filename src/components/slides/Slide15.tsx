export function Slide15() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Protocolos Abiertos
      </h2>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>
          <strong>MCP:</strong> Modelo Context Protocol. Herramientas
          estandarizadas.
        </li>
        <li>
          <strong>A2A:</strong> Agent-to-Agent. Comunicación entre agentes.
        </li>
        <li>Los agentes pueden descubrir y colaborar entre sí</li>
        <li>Interoperabilidad: ADK + LangChain + CrewAI + terceros</li>
      </ul>
    </section>
  );
}
