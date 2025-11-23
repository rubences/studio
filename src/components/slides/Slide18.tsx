export function Slide18() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Ciclo de Desarrollo (ADK)
      </h2>
      <div className="space-y-4 text-lg text-secondary-foreground">
        <p>
          <strong>1. Bootstrap:</strong> Agent Starter Pack genera estructura
        </p>
        <p>
          <strong>2. Desarrollar:</strong> Escribe lógica con ADK
        </p>
        <p>
          <strong>3. Automatizar:</strong> Cloud Build CICD en commits
        </p>
        <p>
          <strong>4. Evaluar:</strong> Pruebas integradas y retroalimentación
        </p>
        <p>
          <strong>5. Monitorear:</strong> Observabilidad en producción
        </p>
      </div>
    </section>
  );
}
