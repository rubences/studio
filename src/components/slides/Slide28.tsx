export function Slide28() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Checklist: Antes de Producción
      </h2>
      <div className="text-base text-secondary-foreground leading-loose space-y-2">
        <p>☐ Arquitectura de datos (memoria corto/largo plazo)</p>
        <p>☐ Herramientas testeadas y validadas</p>
        <p>☐ RAG con base de conocimiento actualizada</p>
        <p>☐ Pruebas del ciclo ReAct (cada paso)</p>
        <p>☐ Métricas de evaluación definidas (4 capas)</p>
        <p>☐ Monitoreo y alertas configuradas</p>
        <p>☐ Auditoría y compliance (datos sensibles)</p>
        <p>☐ Plan de rollback en caso de fallo</p>
      </div>
    </section>
  );
}
