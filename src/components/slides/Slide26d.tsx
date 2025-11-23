export function Slide26d() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Roadmap de Agentes por Etapa de Startup
      </h2>
      <div className="space-y-4 w-full">
        {/* Pre-seed / Seed */}
        <div className="bg-card p-5 rounded-xl border transition-all hover:shadow-lg hover:border-primary">
          <p className="font-headline font-bold text-lg text-primary">🚀 Pre-seed / Seed: Foco en Validación</p>
          <p className="text-secondary-foreground text-sm mt-2">
            <strong>Objetivo:</strong> Maximizar el aprendizaje y la velocidad con recursos limitados.
          </p>
          <ul className="text-sm text-muted-foreground mt-3 list-disc list-inside space-y-1">
            <li><strong>Agente de Investigación de Mercado:</strong> Analiza competidores, tendencias y sentimiento en redes sociales.</li>
            <li><strong>Agente de "Primer Contacto":</strong> Automatiza emails iniciales y califica leads básicos para validar interés.</li>
            <li><strong>Stack tecnológico:</strong> Vertex AI Agent Builder (no-code), Zapier/Make, Firestore.</li>
          </ul>
        </div>
        {/* Series A */}
        <div className="bg-card p-5 rounded-xl border transition-all hover:shadow-lg hover:border-accent">
          <p className="font-headline font-bold text-lg text-accent">📈 Series A: Foco en Escalabilidad</p>
          <p className="text-secondary-foreground text-sm mt-2">
            <strong>Objetivo:</strong> Construir sistemas robustos que soporten el crecimiento rápido.
          </p>
          <ul className="text-sm text-muted-foreground mt-3 list-disc list-inside space-y-1">
            <li><strong>Agente de Soporte Nivel 1 (con RAG):</strong> Responde 70% de las consultas con la documentación.</li>
            <li><strong>Agente de Onboarding de Clientes:</strong> Guía a los nuevos usuarios a través de los pasos iniciales, personalizando la experiencia.</li>
            <li><strong>Stack tecnológico:</strong> ADK (Agent Development Kit), Vertex AI Search, Cloud Run.</li>
          </ul>
        </div>
        {/* Series B+ */}
        <div className="bg-card p-5 rounded-xl border transition-all hover:shadow-lg hover:border-green-500">
          <p className="font-headline font-bold text-lg text-green-500">🔝 Series B+: Foco en Eficiencia y Foso Competitivo</p>
          <p className="text-secondary-foreground text-sm mt-2">
            <strong>Objetivo:</strong> Optimización profunda y creación de ventajas competitivas únicas.
          </p>
          <ul className="text-sm text-muted-foreground mt-3 list-disc list-inside space-y-1">
            <li><strong>Sistema Multi-Agente para Operaciones:</strong> Agentes especializados (finanzas, HR, legal) que colaboran usando A2A.</li>
            <li><strong>Agente de Optimización de Pricing:</strong> Analiza uso, mercado y coste para sugerir ajustes de precios dinámicos.</li>
            <li><strong>Stack tecnológico:</strong> Ecosistema completo (ADK, A2A, MCP), GKE, BigQuery.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}