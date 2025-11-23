export function Slide07() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Capas de Memoria
      </h2>
      <div className="space-y-4 text-lg text-secondary-foreground">
        <p>
          <strong>1. Corto Plazo:</strong> Contexto conversacional inmediato
          (Memorystore)
        </p>
        <p>
          <strong>2. Largo Plazo:</strong> Base de conocimiento persistente con
          RAG (Vertex AI Search)
        </p>
        <p>
          <strong>3. Transaccional:</strong> Registro de auditoría (Cloud SQL,
          Cloud Spanner)
        </p>
        <p>
          <strong>4. Analítica:</strong> Datos para aprendizaje y análisis
          (BigQuery)
        </p>
      </div>
    </section>
  );
}
