import Link from "next/link";
import { Pin } from "lucide-react";

export function Slide01() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-center p-16 bg-popover text-foreground">
      <h1 className="font-headline text-5xl mb-4 text-primary">
        Agentes de IA
      </h1>
      <p className="text-2xl text-secondary-foreground">
        Paradigma de Automatización Empresarial
      </p>
      <p className="text-lg mt-8 text-muted-foreground">
        Guía Técnica Google Cloud para Startups
      </p>
      <div className="mt-8 p-4 bg-card rounded-md">
        <p className="text-secondary-foreground text-sm flex items-center gap-2">
          <Pin className="text-primary" />
          <Link
            href="https://cloud.google.com/vertex-ai?hl=es-419"
            target="_blank"
            className="text-primary font-bold hover:underline"
          >
            Acceder a Vertex AI →
          </Link>
        </p>
      </div>
    </section>
  );
}
