import { GeminiComparisonDiagram } from "../diagrams/GeminiComparisonDiagram";

export function Slide21() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Comparativa de Modelos Gemini
      </h2>
      <GeminiComparisonDiagram className="w-full h-auto" />
    </section>
  );
}
