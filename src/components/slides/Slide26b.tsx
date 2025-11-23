export function Slide26b() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Ejemplo Práctico: Agente de Soporte (Paso a Paso)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Step 1 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 1: Recepción y Triaje</p>
          <p className="text-sm text-secondary-foreground mt-2">
            Un usuario reporta un problema a través de un chat en la web.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Input:</strong> "No puedo exportar mi reporte, aparece un error 500".</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Identifica palabras clave: "exportar", "reporte", "error 500". Lo clasifica como "Técnico - Urgente".</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Crea un ticket en Jira con prioridad alta y asigna al equipo de backend.</li>
          </ul>
        </div>
        {/* Step 2 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 2: Diagnóstico con RAG</p>
          <p className="text-sm text-secondary-foreground mt-2">
            El agente intenta resolverlo de inmediato con su base de conocimiento.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramienta:</strong> Vertex AI Search (RAG) sobre la documentación técnica.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Encuentra 3 posibles causas para el error 500 en exportaciones.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Responde al usuario con la solución más probable (ej: "Verifica que el rango de fechas no exceda 90 días") y pide confirmación.</li>
          </ul>
        </div>
        {/* Step 3 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 3: Escalado y Resolución</p>
          <p className="text-sm text-secondary-foreground mt-2">
            El usuario confirma que el problema persiste.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Input:</strong> "Ya lo intenté, sigue sin funcionar".</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Entiende que la solución automática falló.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Actualiza el ticket de Jira con la información, @menciona al ingeniero de guardia en Slack y notifica al usuario que un humano tomará el caso en ~15 min.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
