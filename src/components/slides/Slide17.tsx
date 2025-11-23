export function Slide17() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Ejemplos en la Práctica
      </h2>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>Soporte técnico: Agente RAG sobre documentación interna</li>
        <li>
          Gestión de proyectos: Desglose de tareas → Agentes especializados
        </li>
        <li>Triage de errores: Clasificación automática y asignación</li>
        <li>
          Búsqueda empresarial: Síntesis multimodal de datos dispersos
        </li>
      </ul>
    </section>
  );
}
