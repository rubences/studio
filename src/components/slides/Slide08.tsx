import { RagDiagram } from "../diagrams/RagDiagram";

export function Slide08() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary text-center">
        RAG: Precisión Fáctica Garantizada
      </h2>
      <RagDiagram className="w-full h-auto max-h-[70%]" />
    </section>
  );
}
