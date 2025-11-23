export function Slide30() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        ROI: Cómo Medir el Éxito
      </h2>
      <div className="space-y-4 w-full mt-6">
        <div className="bg-card p-4">
          <p className="font-bold text-green-500">📊 Métrica de Velocidad</p>
          <p className="text-secondary-foreground text-sm">
            Tiempo promedio para resolver tarea (de horas a minutos)
          </p>
        </div>
        <div className="bg-card p-4">
          <p className="font-bold text-green-500">👥 Métrica de Escala</p>
          <p className="text-secondary-foreground text-sm">
            Un agente = 5-10x productividad por trabajador
          </p>
        </div>
        <div className="bg-card p-4">
          <p className="font-bold text-green-500">💵 Métrica Financiera</p>
          <p className="text-secondary-foreground text-sm">
            Costo por tarea vs valor generado
          </p>
        </div>
        <div className="bg-card p-4">
          <p className="font-bold text-green-500">✅ Métrica de Calidad</p>
          <p className="text-secondary-foreground text-sm">
            Exactitud, confiabilidad, satisfacción del usuario
          </p>
        </div>
      </div>
    </section>
  );
}
