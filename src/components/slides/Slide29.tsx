import { AlertTriangle } from "lucide-react";

export function Slide29() {
  const challenges = {
    technical: [
      {
        title: "Latencia Variable",
        description: "Un agente de ventas puede tardar 2-5s en generar un email, afectando la experiencia en tiempo real."
      },
      {
        title: "Comportamiento No Determinista",
        description: "El mismo prompt puede generar dos resúmenes de contrato ligeramente distintos, requiriendo validación."
      },
    ],
    economic: [
      {
        title: "Coste por Ejecución",
        description: "Un agente de análisis de logs que se ejecuta 1000 veces/día puede generar un coste inesperado si no se optimiza."
      },
      {
        title: "Overhead de Orquestación",
        description: "Mantener y versionar 50 herramientas (`tools`) distintas añade una carga de trabajo de ingeniería."
      },
    ],
    operational: [
      {
        title: "Debugging Complejo",
        description: "Rastrear un error a través de 5 ciclos ReAct y 3 llamadas a `tools` requiere observabilidad avanzada."
      },
      {
        title: "Evolución Rápida del Ecosistema",
        description: "Un nuevo modelo o versión de framework (ADK) puede requerir refactorizar parte del agente."
      },
    ]
  };

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        Desafíos Reales y Limitaciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Technical */}
        <div>
          <h3 className="font-headline text-lg text-accent mb-4">⚠️ Técnicos</h3>
          <div className="space-y-4">
            {challenges.technical.map((item, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border">
                <p className="font-semibold text-card-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Economic */}
        <div>
          <h3 className="font-headline text-lg text-accent mb-4">💰 Económicos</h3>
          <div className="space-y-4">
            {challenges.economic.map((item, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border">
                <p className="font-semibold text-card-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Operational */}
        <div>
          <h3 className="font-headline text-lg text-accent mb-4">⚙️ Operacionales</h3>
          <div className="space-y-4">
            {challenges.operational.map((item, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border">
                <p className="font-semibold text-card-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
