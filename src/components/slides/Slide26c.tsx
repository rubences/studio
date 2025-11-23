export function Slide26c() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl mb-6 text-primary">
        ADK: Casos Técnicos Avanzados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
        <div className="bg-card p-4 border-l-4 border-indigo-500">
          <h3 className="font-headline text-base text-indigo-500 mb-2">🔧 DevOps/Infra</h3>
          <p className="text-xs text-secondary-foreground"><strong>Multiagente:</strong> Orquestación</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Monitoreo logs distribuido</li>
            <li>Auto-scaling deployment</li>
            <li>Rollback automático</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>Impacto:</strong> MTTR -70%</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-purple-500">
          <h3 className="font-headline text-base text-purple-500 mb-2">📊 Data Engineering</h3>
          <p className="text-xs text-secondary-foreground"><strong>Multiagente:</strong> Pipelines</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Ingesta datos paralela</li>
            <li>Validación calidad</li>
            <li>Alertas anomalías data</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>Impacto:</strong> 5x más rápido</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-fuchsia-500">
          <h3 className="font-headline text-base text-fuchsia-500 mb-2">🧪 QA Automation</h3>
          <p className="text-xs text-secondary-foreground"><strong>Multiagente:</strong> Tests</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Tests generados automático</li>
            <li>Ejecución paralela</li>
            <li>Reportes inteligentes</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>Impacto:</strong> 80% cobertura</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-rose-500">
          <h3 className="font-headline text-base text-rose-500 mb-2">👀 Code Review</h3>
          <p className="text-xs text-secondary-foreground"><strong>Flujo:</strong> PR automático</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Análisis seguridad</li>
            <li>Style + performance</li>
            <li>Sugerencias mejora</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>Impacto:</strong> -50% defectos</p>
        </div>
      </div>
    </section>
  );
}
