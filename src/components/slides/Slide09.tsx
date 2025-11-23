import Link from "next/link";
import { Code, AppWindow, Puzzle } from "lucide-react";

export function Slide09() {
  const buildPaths = [
    { 
      icon: Code, 
      title: "ADK (Código)", 
      description: "Desarrollo a medida con código. Máximo control, flexibilidad y personalización. Ideal para productos tecnológicos.",
      link: "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/quickstart?hl=es",
      linkText: "Ver documentación"
    },
    { 
      icon: AppWindow, 
      title: "Agent Builder (Sin Código)", 
      description: "Plataforma visual para que equipos no-técnicos creen agentes conectando datos y APIs. Ideal para operaciones internas.",
      link: "https://cloud.google.com/products/agent-builder?hl=es-419",
      linkText: "Acceder a Builder"
    },
    { 
      icon: Puzzle, 
      title: "Agentes de Terceros", 
      description: "Integrar soluciones de agentes pre-construidas de partners del ecosistema de Google Cloud.",
      link: "https://cloud.google.com/vertex-ai?hl=es-419",
      linkText: "Explorar Agentes"
    }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        Construyendo Agentes: Tres Caminos Estratégicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {buildPaths.map((path, index) => (
          <div key={index} className="bg-card text-foreground p-6 rounded-xl border flex flex-col hover:border-primary transition-colors">
            <path.icon className="size-8 text-primary mb-3" />
            <h3 className="font-headline text-xl text-foreground font-semibold">{path.title}</h3>
            <p className="text-secondary-foreground text-sm mt-2 flex-grow">{path.description}</p>
            <Link href={path.link} target="_blank" className="text-sm text-primary font-semibold mt-4 hover:underline">
              {path.linkText} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
