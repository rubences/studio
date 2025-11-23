import { Stethoscope, CalendarDays, Pill, ArrowRight } from 'lucide-react';

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

export function Slide38() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Asistente de Citas (Salud)</h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">Gestión inteligente de la agenda y comunicación con pacientes.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Step
          icon={Stethoscope}
          title="1. Petición del Paciente"
          description="Paciente pide cita por WhatsApp: 'Necesito ver al Dr. García la próxima semana por la tarde'."
          color="primary"
          isFirst={true}
        />
        <Step
          icon={CalendarDays}
          title="2. Búsqueda y Propuesta"
          description="Agente consulta la agenda del Dr. (Google Calendar API), encuentra 3 huecos y los ofrece al paciente por WhatsApp."
          color="accent"
        />
        <Step
          icon={Pill}
          title="3. Confirmación y Recordatorio"
          description="Paciente elige un horario. El agente confirma la cita, la bloquea en el calendario y agenda un recordatorio automático 24h antes."
          color="green-500"
          isLast={true}
        />
      </div>
    </section>
  );
}
