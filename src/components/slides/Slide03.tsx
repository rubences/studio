import { Zap, Scaling, ShieldCheck } from "lucide-react";

export function Slide03() {
  const impacts = [
    {
      icon: Zap,
      title: "Automatización Exponencial",
      description: "Ejecuta flujos de trabajo de principio a fin, no solo tareas. Un agente puede orquestar ventas, soporte y operaciones."
    },
    {
      icon: Scaling,
      title: "Escala Asimétrica",
      description: "Permite que un equipo pequeño genere el impacto de una organización 10 veces mayor, operando 24/7."
    },
    {
      icon: ShieldCheck,
      title: "Foso Competitivo Único",
      description: "Crea una barrera de entrada al integrar tus APIs y datos privados. Tu agente es inimitable."
    }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">Impacto Estratégico para Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
        {impacts.map((item, index) => (
           <div key={index} className="bg-card text-card-foreground p-6 rounded-xl border border-transparent hover:border-primary hover:shadow-xl transition-all duration-300">
            <item.icon className="size-9 text-primary mb-4" />
            <h3 className="font-headline text-xl text-foreground font-semibold">{item.title}</h3>
            <p className="text-secondary-foreground mt-2 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
