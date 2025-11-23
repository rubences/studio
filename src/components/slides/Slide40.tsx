import { FileText, Scale, Bot, ArrowRight } from 'lucide-react';


export function Slide40() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary text-center">Caso Práctico: Analista de Contratos (Legaltech)</h2>
      <p className="text-secondary-foreground mb-10 max-w-3xl text-center">Acelera la revisión de documentos legales identificando cláusulas clave y riesgos potenciales en minutos en lugar de horas.</p>

      <div className="w-full max-w-5xl grid md:grid-cols-11 gap-6 items-center font-sans">
        {/* Step 1 */}
        <div className="col-span-3 text-center flex flex-col items-center">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-3"><FileText size={32}/></div>
            <h3 className="font-semibold text-primary text-lg">1. Ingesta</h3>
            <p className="text-muted-foreground text-sm">Un abogado sube un contrato de 50 páginas en PDF para su revisión urgente.</p>
        </div>

        <div className="col-span-1 text-center hidden md:block">
            <ArrowRight className="text-muted-foreground/50" size={32}/>
        </div>

        {/* Step 2 */}
        <div className="col-span-3 text-center flex flex-col items-center">
            <div className="p-4 rounded-full bg-accent/10 text-accent mb-3"><Scale size={32}/></div>
            <h3 className="font-semibold text-accent text-lg">2. Análisis</h3>
            <p className="text-muted-foreground text-sm">El agente procesa el documento, identifica y extrae cláusulas de riesgo (penalizaciones, exclusividad, etc.).</p>
        </div>

        <div className="col-span-1 text-center hidden md:block">
            <ArrowRight className="text-muted-foreground/50" size={32}/>
        </div>

        {/* Step 3 */}
        <div className="col-span-3 text-center flex flex-col items-center">
            <div className="p-4 rounded-full bg-green-500/10 text-green-500 mb-3"><Bot size={32}/></div>
            <h3 className="font-semibold text-green-500 text-lg">3. Resumen</h3>
            <p className="text-muted-foreground text-sm">Genera un informe de una página resumiendo las desviaciones, los riesgos y sugiriendo modificaciones.</p>
        </div>
      </div>
    </section>
  );
}

    