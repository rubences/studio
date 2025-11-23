export function Slide05() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Selección de Modelos Gemini
      </h2>
      <div className="space-y-6 text-lg text-secondary-foreground">
        <p>
          <strong>Gemini 1.5 Flash-Lite:</strong> Bajo costo, alta latencia.
          Tareas rutinarias.
        </p>
        <p>
          <strong>Gemini 1.5 Flash:</strong> Equilibrio. Producción con
          calidad-costo óptimo.
        </p>
        <p>
          <strong>Gemini 1.5 Pro:</strong> Máxima capacidad. Razonamiento
          complejo y código.
        </p>
      </div>
    </section>
  );
}
