import { GeminiComparisonDiagram } from "../diagrams/GeminiComparisonDiagram";

export function Slide05() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-4 text-primary">
        El Cerebro: Eligiendo el Modelo Gemini Adecuado
      </h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">
        La elección del modelo es una decisión estratégica. No se trata solo de potencia, sino de adecuar la capacidad al coste y a la complejidad de la tarea.
      </p>
      <GeminiComparisonDiagram className="w-full h-auto" />
    </section>
  );
}
