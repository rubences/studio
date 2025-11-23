export function Slide26d() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Roadmap por Etapa de Startup
      </h2>
      <div className="space-y-4 w-full">
        <div className="bg-card p-5">
          <p className="font-headline font-bold text-base text-primary">🚀 Pre-seed / Seed</p>
          <p className="text-secondary-foreground text-sm mt-2"><strong>Uso:</strong> Agente de investigación + Gemini Enterprise</p>
          <p className="text-muted-foreground text-sm">Validar mercado, automatizar comunicaciones iniciales, análisis competencia</p>
        </div>
        <div className="bg-card p-5">
          <p className="font-headline font-bold text-base text-accent">📈 Series A</p>
          <p className="text-secondary-foreground text-sm mt-2"><strong>Uso:</strong> ADK para agentes core + multi-agente</p>
          <p className="text-muted-foreground text-sm">Soporte cliente 24/7, automatización operacional, pipeline de ventas</p>
        </div>
        <div className="bg-card p-5">
          <p className="font-headline font-bold text-base text-green-500">🔝 Series B+</p>
          <p className="text-secondary-foreground text-sm mt-2"><strong>Uso:</strong> Ecosistema completo (A2A + MCP)</p>
          <p className="text-muted-foreground text-sm">Agentes integrados en producto, optimización financiera, toma decisiones autónoma</p>
        </div>
      </div>
    </section>
  );
}
