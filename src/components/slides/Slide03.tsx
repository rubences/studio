export function Slide03() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">Impacto para Startups</h2>
      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <div className="flex-1 bg-card text-foreground p-8 shadow-lg">
          <h3 className="font-headline text-2xl text-primary">Automatización</h3>
          <p className="text-secondary-foreground mt-2">
            Procesos multitarea sin intervención humana
          </p>
        </div>
        <div className="flex-1 bg-card text-foreground p-8 shadow-lg">
          <h3 className="font-headline text-2xl text-primary">Escala</h3>
          <p className="text-secondary-foreground mt-2">
            Equipos pequeños con impacto empresarial
          </p>
        </div>
        <div className="flex-1 bg-card text-foreground p-8 shadow-lg">
          <h3 className="font-headline text-2xl text-primary">Ventaja</h3>
          <p className="text-secondary-foreground mt-2">
            APIs propias y datos privados integrados
          </p>
        </div>
      </div>
    </section>
  );
}
