import { Zap, Scaling, ShieldCheck } from "lucide-react";

export function Slide03() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">Impacto Exponencial para Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
        <div className="bg-card text-card-foreground p-6 rounded-lg border border-transparent hover:border-primary transition-all">
          <Zap className="size-8 text-primary mb-3" />
          <h3 className="font-headline text-xl text-foreground font-semibold">Automatización Total</h3>
          <p className="text-secondary-foreground mt-2 text-sm">
            Automatiza flujos de trabajo complejos de principio a fin, no solo tareas aisladas.
          </p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg border border-transparent hover:border-primary transition-all">
          <Scaling className="size-8 text-primary mb-3" />
          <h3 className="font-headline text-xl text-foreground font-semibold">Escala Asimétrica</h3>
          <p className="text-secondary-foreground mt-2 text-sm">
            Permite que equipos pequeños generen el impacto de organizaciones mucho más grandes.
          </p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg border border-transparent hover:border-primary transition-all">
          <ShieldCheck className="size-8 text-primary mb-3" />
          <h3 className="font-headline text-xl text-foreground font-semibold">Ventaja Competitiva</h3>
          <p className="text-secondary-foreground mt-2 text-sm">
            Crea una barrera de entrada al integrar tus APIs y datos privados en el núcleo del agente.
          </p>
        </div>
      </div>
    </section>
  );
}
