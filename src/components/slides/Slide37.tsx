import { Banknote, FileSearch, CheckCircle, ArrowRight } from 'lucide-react';

function Step({ icon: Icon, title, description, color, isFirst = false, isLast = false }: any) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className={`p-3 rounded-full ${color}/20 text-${color}`}>
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

export function Slide37() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Agente de Onboarding (Fintech)</h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">Automatización del proceso de alta y verificación de nuevos clientes.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Step
          icon={Banknote}
          title="1. Captura de Datos"
          description="Usuario sube DNI y un selfie a través de la app. El agente recibe las imágenes."
          color="primary"
          isFirst={true}
        />
        <Step
          icon={FileSearch}
          title="2. Verificación y Cruce"
          description="Usa Google Vision API para extraer datos del DNI y verificar la identidad contra el selfie. Cruza datos con APIs de riesgo crediticio."
          color="accent"
        />
        <Step
          icon={CheckCircle}
          title="3. Decisión y Activación"
          description="Si todo es correcto, aprueba al cliente, crea la cuenta en el sistema y envía un email de bienvenida personalizado."
          color="green-500"
          isLast={true}
        />
      </div>
    </section>
  );
}
