import { RagDiagram } from "../diagrams/RagDiagram";

export function Slide08() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary text-center">
        RAG: Respuestas Basadas en Hechos
      </h2>
       <p className="text-secondary-foreground mb-6 text-center max-w-2xl">
        La Aumentación por Generación Recuperada (RAG) conecta el LLM a tu base de conocimiento para eliminar alucinaciones y dar respuestas precisas.
      </p>
      <RagDiagram className="w-full h-auto max-h-[70%]" />
    </section>
  );
}
