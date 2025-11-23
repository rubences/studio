export function Slide25() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Casos de Uso: Del Básico al Avanzado
      </h2>
      <div className="text-base text-secondary-foreground leading-loose space-y-4 mt-6">
        <p>
          <strong className="text-primary">▸ Básico:</strong> Chatbot con FAQ
          (sin herramientas complejas)
        </p>
        <p>
          <strong className="text-accent">▸ Intermedio:</strong> Agente con
          búsqueda RAG + APIs externas
        </p>
        <p>
          <strong className="text-green-500">▸ Avanzado:</strong> Multiagente
          orquestado (agentes que coordinan otros agentes)
        </p>
        <p>
          <strong className="text-yellow-500">▸ Experto:</strong> Agentes
          autonomos con toma de decisiones financieras/operativas
        </p>
      </div>
    </section>
  );
}
