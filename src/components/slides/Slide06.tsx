export function Slide06() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Herramientas en Acción
      </h2>
      <p className="text-xl mb-8 text-secondary-foreground italic">
        Las herramientas permiten al agente interactuar con el mundo:
      </p>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>Funciones internas y lógica propietaria</li>
        <li>APIs externas y servicios de terceros</li>
        <li>Bases de datos y almacenes vectoriales</li>
        <li>Otros agentes (sistemas multiagente)</li>
      </ul>
    </section>
  );
}
