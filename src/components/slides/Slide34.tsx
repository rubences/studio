import { ArchitectureTemplateDiagram } from "../diagrams/ArchitectureTemplateDiagram";

export function Slide34() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Plantilla: Tu Agente Personalizado
      </h2>
      <ArchitectureTemplateDiagram className="w-full max-w-4xl h-auto" />
    </section>
  );
}
