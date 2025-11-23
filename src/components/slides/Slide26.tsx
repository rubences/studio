export function Slide26() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Ejemplo Práctico: Agente de Ventas (Paso a Paso)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Step 1 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 1: Captura y Calificación</p>
          <p className="text-sm text-secondary-foreground mt-2">
            Un nuevo lead entra por un formulario web y se guarda en Firestore.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramienta:</strong> `onNewLead` Cloud Function.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Analiza el lead (tamaño de empresa, rol, industria).</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Asigna un puntaje (ej. 85/100) y lo califica como "Hot".</li>
          </ul>
        </div>
        {/* Step 2 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 2: Enriquecimiento y Personalización</p>
          <p className="text-sm text-secondary-foreground mt-2">
            El agente busca información pública sobre la empresa del lead.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramienta:</strong> Búsqueda en Google, API de LinkedIn.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Redacta un borrador de email personalizado mencionando un proyecto reciente de la empresa.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Guarda el borrador en Firestore para aprobación.</li>
          </ul>
        </div>
        {/* Step 3 */}
        <div className="bg-card p-5 rounded-lg border flex flex-col">
          <p className="text-primary font-bold">Paso 3: Interacción y Seguimiento</p>
          <p className="text-sm text-secondary-foreground mt-2">
            El email se envía. El agente monitorea la respuesta.
          </p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1 mt-3 flex-grow">
            <li><strong className="text-secondary-foreground">Herramienta:</strong> API de Gmail, Google Calendar.</li>
            <li><strong className="text-secondary-foreground">Cerebro (Gemini):</strong> Si el lead responde positivamente, propone 3 horarios para una demo.</li>
            <li><strong className="text-secondary-foreground">Acción:</strong> Agenda la reunión automáticamente en Google Calendar y actualiza el estado en Salesforce/CRM.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
