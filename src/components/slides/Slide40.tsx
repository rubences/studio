import { FileText, Scale, Bot, ArrowRight } from 'lucide-react';

function Step({ icon: Icon, title, description, color, isFirst = false, isLast = false }: any) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className={`p-3 rounded-full bg-${color}/20 text-${color}`}>
          <Icon className="size-6" />
        </div>
        {!isLast && <div className="w-0.5 h-16 bg-border mt-2"></div>}
      </div>
      <div className="bg-card border rounded-lg p-4 flex-1">
        <h3 className={`font-semibold text-${color}`}>{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function Slide40() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Analista de Contratos (Legaltech)</h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">Acelera la revisión de documentos legales identificando cláusulas clave.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Step
          icon={FileText}
          title="1. Ingesta de Documento"
          description="Un abogado sube un contrato de 50 páginas en PDF para su revisión."
          color="primary"
          isFirst={true}
        />
        <Step
          icon={Scale}
          title="2. Análisis y Extracción"
          description="El agente procesa el documento, identifica y extrae cláusulas de riesgo (penalizaciones, exclusividad) y las compara con la plantilla estándar de la firma."
          color="accent"
        />
        <Step
          icon={Bot}
          title="3. Generación de Resumen"
          description="Genera un informe de una página resumiendo las desviaciones, los riesgos potenciales y sugiriendo modificaciones, ahorrando horas de trabajo."
          color="green-500"
          isLast={true}
        />
      </div>
    </section>
  );
}
