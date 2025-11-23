import { Stethoscope, CalendarDays, Pill, MessageSquare } from 'lucide-react';

function Step({ icon: Icon, title, description, color }: any) {
  return (
    <div className="bg-card border rounded-xl p-5 flex flex-col items-start h-full">
        <div className={`p-3 rounded-full bg-${color}/10 text-${color}`}>
          <Icon className="size-7" />
        </div>
        <h3 className={`font-semibold text-lg mt-4 text-${color}`}>{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

export function Slide38() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Asistente de Citas (Salud)</h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">Gestión inteligente de la agenda y comunicación con pacientes para optimizar el tiempo del personal administrativo.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Step
          icon={MessageSquare}
          title="1. Petición del Paciente"
          description="Paciente pide cita por WhatsApp: 'Necesito ver al Dr. García la próxima semana por la tarde'."
          color="primary"
        />
        <Step
          icon={CalendarDays}
          title="2. Búsqueda y Propuesta"
          description="El agente consulta la agenda del Dr. (Google Calendar API), encuentra 3 huecos disponibles y los ofrece al paciente por WhatsApp para su elección."
          color="accent"
        />
        <Step
          icon={Pill}
          title="3. Confirmación y Recordatorio"
          description="Paciente elige un horario. El agente confirma, bloquea la cita en el calendario y agenda un recordatorio automático 24 horas antes."
          color="green-500"
        />
      </div>
    </section>
  );
}

    