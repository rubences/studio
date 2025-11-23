export function Slide11() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Arquitecturas de Agentes (ADK)
      </h2>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>
          <strong>LLMAgent:</strong> Razonamiento flexible con LLM (no
          determinista)
        </li>
        <li>
          <strong>SequentialAgent:</strong> Tareas en orden fijo
        </li>
        <li>
          <strong>ParallelAgent:</strong> Subtareas simultáneas
        </li>
        <li>
          <strong>LoopAgent:</strong> Iteración hasta cumplir condición
        </li>
        <li>
          <strong>Agente Personalizado:</strong> Lógica Python custom
        </li>
      </ul>
    </section>
  );
}
