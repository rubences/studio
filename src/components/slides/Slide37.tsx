import { Banknote, FileSearch, CheckCircle, ArrowRight } from 'lucide-react';

function Step({ icon: Icon, title, description, color, isLast = false }: any) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`p-3 rounded-full bg-${color}/20 text-${color}`}>
        <Icon className="size-8" />
      </div>
      <h3 className={`font-semibold text-lg mt-4 text-${color}`}>{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-xs">{description}</p>
      {!isLast && <ArrowRight className={`size-8 text-border mt-4 hidden md:block`} />}
    </div>
  );
}

export function Slide37() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Onboarding (Fintech)</h2>
      <p className="text-secondary-foreground mb-12 max-w-3xl text-center">Automatización del proceso de alta y verificación de nuevos clientes para reducir el fraude y acelerar la activación.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 items-start justify-center gap-6">
        <div className="col-span-1 md:col-start-1">
          <Step
            icon={Banknote}
            title="1. Captura"
            description="Usuario sube DNI y un selfie a través de la app. El agente recibe las imágenes de forma segura."
            color="primary"
          />
        </div>
        <div className="col-span-1">
          <Step
            icon={FileSearch}
            title="2. Verificación"
            description="Usa Google Vision API para extraer datos del DNI y verificar la identidad contra el selfie."
            color="accent"
          />
        </div>
        <div className="col-span-1">
            <Step
            icon={FileSearch}
            title="3. Cruce de Datos"
            description="Consulta APIs externas de riesgo crediticio y listas de sanciones para validar al cliente."
            color="accent"
            />
        </div>
        <div className="col-span-1">
          <Step
            icon={CheckCircle}
            title="4. Decisión"
            description="Si todo es correcto, aprueba al cliente, crea la cuenta en el sistema y envía un email de bienvenida."
            color="green-500"
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}

    