export function Slide23() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Framework AgentOps: 4 Capas de Evaluación
      </h2>
      <div className="space-y-3">
        <div className="bg-card p-4 border-l-4 border-primary">
          <p className="text-primary font-bold text-base">1️⃣ Componentes</p>
          <p className="text-secondary-foreground text-sm">
            Pruebas unitarias de herramientas individuales
          </p>
        </div>
        <div className="bg-card p-4 border-l-4 border-accent">
          <p className="text-accent font-bold text-base">2️⃣ Trayectoria</p>
          <p className="text-secondary-foreground text-sm">
            Ciclo ReAct paso a paso correcto (razonar→actuar→observar)
          </p>
        </div>
        <div className="bg-card p-4 border-l-4 border-green-500">
          <p className="text-green-500 font-bold text-base">3️⃣ Resultados</p>
          <p className="text-secondary-foreground text-sm">
            Exactitud fáctica y utilidad final de la respuesta
          </p>
        </div>
        <div className="bg-card p-4 border-l-4 border-yellow-500">
          <p className="text-yellow-500 font-bold text-base">4️⃣ Sistema</p>
          <p className="text-secondary-foreground text-sm">
            Monitoreo en producción real, latencia, tasa de error
          </p>
        </div>
      </div>
    </section>
  );
}
