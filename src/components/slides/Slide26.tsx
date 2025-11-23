export function Slide26() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl mb-6 text-primary">
        Gemini Enterprise: Ejemplos Prácticos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
        <div className="bg-card p-4 border-l-4 border-primary">
          <h3 className="font-headline text-base text-primary mb-2">📊 Producto</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> Jira + feedback</p>
          <p className="text-xs text-secondary-foreground"><strong>Agente:</strong></p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2">
            <li>Clasifica bugs/features</li>
            <li>Priorización automática</li>
            <li>Roadmap trimestral</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> 8h → 1h</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-accent">
          <h3 className="font-headline text-base text-accent mb-2">📈 Marketing</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> Analytics + Ads</p>
          <p className="text-xs text-secondary-foreground"><strong>Agente:</strong></p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2">
            <li>Monitoreo CPA real-time</li>
            <li>Recomendaciones budget</li>
            <li>Alertas anomalías</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> +15% ROAS</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-yellow-500">
          <h3 className="font-headline text-base text-yellow-500 mb-2">⚙️ Operaciones</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> HR + Finanzas</p>
          <p className="text-xs text-secondary-foreground"><strong>Agente:</strong></p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2">
            <li>Aprobación gastos &lt;$5k</li>
            <li>Onboarding 3-pasos</li>
            <li>Alertas compliance</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> -200h/año</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-green-500">
          <h3 className="font-headline text-base text-green-500 mb-2">💰 Ventas</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> Salesforce</p>
          <p className="text-xs text-secondary-foreground"><strong>Agente:</strong></p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2">
            <li>Scoring leads ML</li>
            <li>Propuestas generadas</li>
            <li>Follow-up automático</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> +32% cierre</p>
        </div>
      </div>
    </section>
  );
}
