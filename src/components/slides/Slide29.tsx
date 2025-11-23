export function Slide29() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Desafíos Reales y Limitaciones
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex-1">
          <h3 className="font-headline text-lg text-yellow-500 mb-3">⚠️ Técnicos</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-disc list-inside">
            <li>Latencia variable</li>
            <li>Comportamiento no determinista</li>
            <li>Alucinaciones ocasionales</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-headline text-lg text-yellow-500 mb-3">💰 Económicos</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-disc list-inside">
            <li>Costos tokens incrementales</li>
            <li>Overhead de orquestación</li>
            <li>Infraestructura vs DIY</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-headline text-lg text-yellow-500 mb-3">⚙️ Operacionales</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-disc list-inside">
            <li>Curva de aprendizaje</li>
            <li>Debugging complejo</li>
            <li>Cambios rápidos en ecosistema</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
