import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Slide01() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-center p-16 bg-card text-foreground">
      <h1 className="font-headline text-6xl font-extrabold tracking-tight mb-4 text-primary">
        Agentes de IA
      </h1>
      <p className="text-2xl text-secondary-foreground max-w-2xl">
        El Nuevo Paradigma de Automatización Inteligente para Empresas
      </p>
      <p className="text-lg mt-8 text-muted-foreground">
        Guía Técnica de Google Cloud para Startups
      </p>
      <div className="mt-12">
        <Link
          href="https://cloud.google.com/vertex-ai?hl=es-419"
          target="_blank"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-base hover:bg-primary/90 transition-colors"
        >
          Explorar Vertex AI <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}
