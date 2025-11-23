export function Slide02() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        ¿Qué es un Agente de IA?
      </h2>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>
          Sistema de IA que{" "}
          <strong>combina modelos de lenguaje con herramientas</strong>
        </li>
        <li>
          Toma decisiones{" "}
          <strong>complejas de múltiples pasos</strong> de forma autónoma
        </li>
        <li>
          Patrón ReAct: <strong>Razonar → Actuar → Observar</strong>
        </li>
        <li>Integración con APIs, datos y sistemas externos</li>
        <li>
          Automatiza flujos de trabajo, <strong>no solo conversaciones</strong>
        </li>
      </ul>
    </section>
  );
}
