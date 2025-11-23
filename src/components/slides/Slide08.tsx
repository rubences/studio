import { RagDiagram } from "../diagrams/RagDiagram";

export function Slide08() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary text-center">
        RAG: Respuestas Ancladas en la Realidad
      </h2>
       <p className="text-secondary-foreground mb-6 text-center max-w-3xl">
        La Aumentación por Generación Recuperada (RAG) conecta al LLM con tus datos para eliminar alucinaciones, citar fuentes y dar respuestas fiables.
      </p>
      <RagDiagram className="w-full h-auto max-h-[75%]" />
    </section>
  );
}
