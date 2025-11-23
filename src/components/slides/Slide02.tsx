export function Slide02() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        ¿Qué es un Agente de IA?
      </h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
          <p className="text-base md:text-lg text-secondary-foreground">
            Sistema que <strong>combina un cerebro (LLM) con herramientas (APIs, funciones)</strong> para realizar acciones.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
          <p className="text-base md:text-lg text-secondary-foreground">
            Toma decisiones <strong>autónomas y de múltiples pasos</strong> para resolver problemas complejos.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
          <p className="text-base md:text-lg text-secondary-foreground">
            Sigue un patrón cíclico: <strong>Razonar → Actuar → Observar (ReAct)</strong> hasta cumplir su objetivo.
          </p>
        </div>
      </div>
    </section>
  );
}
