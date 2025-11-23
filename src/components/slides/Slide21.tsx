import { GeminiComparisonDiagram } from "../diagrams/GeminiComparisonDiagram";

export function Slide21() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Elige el Cerebro Correcto: Gemini
      </h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">
        No todos los modelos son iguales. La elección del modelo Gemini adecuado es clave para optimizar el rendimiento y el costo de tu agente.
      </p>
      <GeminiComparisonDiagram className="w-full h-auto" />
    </section>
  );
}
