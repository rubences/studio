import { BrainCircuit, Wrench, Repeat } from "lucide-react";

export function Slide02() {
  const points = [
    {
      icon: BrainCircuit,
      text: "Combina un cerebro (LLM) con herramientas (APIs, código) para ejecutar acciones complejas."
    },
    {
      icon: Wrench,
      text: "Toma decisiones autónomas y de múltiples pasos para resolver problemas de negocio."
    },
    {
      icon: Repeat,
      text: "Sigue un patrón cíclico: Razonar → Actuar → Observar (ReAct) hasta cumplir su objetivo."
    }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-10 text-primary">
        ¿Qué es un Agente de IA?
      </h2>
      <div className="space-y-6">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
              <point.icon className="size-6" />
            </div>
            <p className="text-base md:text-lg text-secondary-foreground pt-2">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
