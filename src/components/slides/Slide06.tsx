import { CheckCircle } from "lucide-react";

export function Slide06() {
  const toolExamples = [
    "APIs internas (ej: `getUserData(id)`) y lógica propietaria.",
    "Servicios de terceros (ej: enviar un email con SendGrid, crear un evento en Calendar).",
    "Bases de datos SQL y vectoriales para consultas y RAG.",
    "Otros agentes para delegar tareas (sistemas multi-agente).",
    "Funciones de código para transformaciones complejas (ej: generar un PDF)."
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-6 text-primary">
        Las Manos: Herramientas en Acción
      </h2>
      <p className="text-lg mb-8 text-secondary-foreground">
        Las herramientas son las que conectan el razonamiento del agente con el mundo real, permitiéndole ejecutar acciones concretas.
      </p>
      <div className="space-y-3">
        {toolExamples.map((example, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="size-5 text-green-500 mt-1 flex-shrink-0" />
            <p className="text-secondary-foreground text-base">{example}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
