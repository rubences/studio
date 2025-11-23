import { Hourglass, GitMerge, Combine, Video } from "lucide-react";

export function Slide31() {
  const futureTrends = [
    {
      icon: Hourglass,
      title: "Razonamiento Extendido (Self-Correction)",
      description: "Agentes que pueden 'pensar' durante minutos/horas, refinando su propio plan y corrigiendo sus errores intermedios antes de actuar. Ideal para tareas de análisis de mercado o auditorías de código complejas."
    },
    {
      icon: GitMerge,
      title: "Planificación Dinámica y Adaptativa",
      description: "En lugar de seguir un ciclo ReAct rígido, los agentes podrán re-evaluar su estrategia completa si una herramienta falla o el contexto cambia drásticamente, mostrando una verdadera autonomía."
    },
    {
      icon: Video,
      title: "Agentes Nativamente Multimodales",
      description: "Los agentes podrán procesar y generar no solo texto, sino también audio, video e imágenes como parte de su ciclo de razonamiento, permitiendo casos de uso como la supervisión de seguridad en tiempo real."
    },
    {
      icon: Combine,
      title: "Composición Jerárquica de Agentes",
      description: "Un 'agente mánager' podrá descomponer un objetivo complejo ('lanzar campaña de marketing') en subtareas y delegarlas a agentes especializados (redactor, analista de datos, diseñador gráfico)."
    }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        El Futuro de los Agentes (2025-2026)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {futureTrends.map((trend, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border border-transparent hover:border-accent transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-accent/10 text-accent p-3 rounded-lg">
                <trend.icon className="size-6" />
              </div>
              <h3 className="font-headline text-lg text-foreground font-semibold">{trend.title}</h3>
            </div>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {trend.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
