export function Slide26c() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Ejemplo Práctico: Agente DevOps (Paso a Paso)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Step 1 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 1: Detección de Alerta</p>
          <p className="text-sm text-secondary-foreground mt-2">
            Cloud Monitoring dispara una alerta: la latencia de la API ha superado los 500ms.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramienta:</strong> Webhook de Pub/Sub conectado a Cloud Monitoring.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Interpreta la carga útil de la alerta. Identifica el servicio afectado: `api-gateway`.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Inicia el protocolo de "incidencia de latencia". Crea un canal de Slack `#incidencia-api-latencia`.</li>
          </ul>
        </div>
        {/* Step 2 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 2: Análisis de Causa Raíz</p>
          <p className="text-sm text-secondary-foreground mt-2">
            El agente busca la causa del aumento de la latencia.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramientas:</strong> API de Cloud Logging, API de Cloud Trace.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Correla los logs y trazas. Descubre un aumento en queries lentas a la base de datos `users-db`.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Publica en el canal de Slack: "Causa probable: queries lentas a `users-db`. Analizando el último deploy..."</li>
          </ul>
        </div>
        {/* Step 3 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 3: Mitigación y Rollback</p>
          <p className="text-sm text-secondary-foreground mt-2">
            El agente identifica el commit problemático y actúa.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramientas:</strong> API de GitHub, API de Cloud Deploy.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Confirma que el último deploy en `api-gateway` introdujo una nueva query sin indexar.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Ejecuta el workflow de `rollback` en Cloud Deploy a la versión anterior. Publica: "Rollback iniciado. Monitoreando la latencia."</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
