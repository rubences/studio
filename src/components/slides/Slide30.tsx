import { Zap, Users, Euro, CheckCircle2 } from "lucide-react";

export function Slide30() {

  const roiMetrics = [
    {
      icon: Zap,
      title: "Métrica de Velocidad",
      description: "Tiempo promedio para resolver una tarea.",
      example: "Ej: Un agente de onboarding reduce el alta de 24h a 5 minutos.",
      value: "98% de Reducción"
    },
    {
      icon: Users,
      title: "Métrica de Escala (Productividad)",
      description: "Capacidad de trabajo de un agente vs. un humano.",
      example: "Ej: Un agente de soporte maneja 500 tickets/mes, el trabajo de 4 agentes humanos.",
      value: "4x Productividad"
    },
    {
      icon: Euro,
      title: "Métrica Financiera (Coste/Valor)",
      description: "Coste de ejecución del agente vs. el valor que genera.",
      example: "Ej: Coste de $0.05 por devolución gestionada, ahorrando $5 en tiempo de personal.",
      value: "100x Retorno"
    },
    {
      icon: CheckCircle2,
      title: "Métrica de Calidad y Fiabilidad",
      description: "Tasa de éxito y precisión del agente.",
      example: "Ej: 95% de los análisis de contratos son correctos sin intervención humana.",
      value: "95% Precisión"
    }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        ROI: Cómo Medir el Éxito de un Agente
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roiMetrics.map((metric, index) => (
          <div key={index} className="bg-card p-5 rounded-xl border border-transparent transition-all hover:border-primary hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <metric.icon className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{metric.value}</p>
              </div>
            </div>
            <div className="mt-3 pl-16">
              <p className="text-xs text-primary/80 bg-primary/5 p-2 rounded-md">{metric.example}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
