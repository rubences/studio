import Link from 'next/link';
import { HealthAppointmentDiagram } from '../diagrams/HealthAppointmentDiagram';

export function Slide38() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 bg-background text-foreground">
      <div className="text-center w-full">
        <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Asistente de Citas (Salud)</h2>
        <p className="text-secondary-foreground mb-6 max-w-3xl mx-auto">
          Gestión inteligente de la agenda y comunicación con pacientes para optimizar el tiempo del personal.
        </p>
      </div>
      <HealthAppointmentDiagram className="w-full h-auto max-h-[60%] mt-4" />
       <div className="mt-4 text-center">
        <Link href="https://codelabs.developers.google.com/devsite/codelabs/building-ai-agents-vertexai?hl=es-419" target="_blank" className="text-sm text-primary font-semibold hover:underline">
          Aprende a construirlo (Codelab) →
        </Link>
      </div>
    </section>
  );
}