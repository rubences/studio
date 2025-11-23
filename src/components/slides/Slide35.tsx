export function Slide35() {
  const points = [
    "Agentes combinan LLMs + herramientas para automatización compleja",
    "ReAct (Razonar-Actuar-Observar) es el patrón fundamental",
    "RAG garantiza precisión fáctica sin alucinaciones",
    "ADK (código) o Gemini Enterprise (sin código) para construir",
    "Evaluación en 4 capas asegura confiabilidad en producción",
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Resumen: 5 Puntos Clave
      </h2>
      <div className="space-y-4 mt-4">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <p className="text-secondary-foreground text-base">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
