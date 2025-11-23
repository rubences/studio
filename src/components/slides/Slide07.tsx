import { History, Database, ShieldAlert, LineChart } from "lucide-react";

export function Slide07() {
  const memoryLayers = [
    { icon: History, title: "Memoria a Corto Plazo", description: "Contexto conversacional inmediato para seguir el hilo. (Memorystore)" },
    { icon: Database, title: "Memoria a Largo Plazo (RAG)", description: "Base de conocimiento persistente para respuestas basadas en hechos. (Vertex AI Search)" },
    { icon: ShieldAlert, title: "Memoria Transaccional", description: "Registro de auditoría inmutable de todas las acciones. (Cloud SQL, Spanner)" },
    { icon: LineChart, title: "Memoria Analítica", description: "Datos agregados para análisis de rendimiento y mejora continua. (BigQuery)" }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        La Memoria: 4 Capas de Persistencia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {memoryLayers.map((layer, index) => (
          <div key={index} className="bg-card p-4 rounded-lg border flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
              <layer.icon className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{layer.title}</h3>
              <p className="text-sm text-muted-foreground">{layer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
