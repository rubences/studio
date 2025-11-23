import { Layers } from "lucide-react";

export function Slide01() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-center p-8 md:p-16 bg-card text-foreground">
      <div className="mb-6 bg-primary/10 p-4 rounded-full">
        <Layers className="size-10 text-primary" />
      </div>
      <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
        Agentes de IA
      </h1>
      <p className="text-xl md:text-2xl text-secondary-foreground max-w-3xl leading-relaxed">
        El Nuevo Paradigma de Automatización Inteligente para Empresas
      </p>
      <p className="text-base md:text-lg mt-8 text-muted-foreground">
        Guía de Arquitectura y Estrategia con Google Cloud
      </p>
    </section>
  );
}
