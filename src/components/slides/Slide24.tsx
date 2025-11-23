export function Slide24() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-8 text-primary">
        Seguridad: Del Desarrollo a Producción
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-1 bg-card p-5">
          <h3 className="font-headline text-base text-pink-500 mb-2">🛡️ En Desarrollo</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-disc list-inside">
            <li>Inyección prompt</li>
            <li>Validación entrada</li>
            <li>Tests seguridad</li>
          </ul>
        </div>
        <div className="flex-1 bg-card p-5">
          <h3 className="font-headline text-base text-primary mb-2">🔒 En CI/CD</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-disc list-inside">
            <li>Escaneo automático</li>
            <li>Auditoría código</li>
            <li>Firmas verificadas</li>
          </ul>
        </div>
        <div className="flex-1 bg-card p-5">
          <h3 className="font-headline text-base text-green-500 mb-2">🔐 En Producción</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-disc list-inside">
            <li>Filtrado salidas</li>
            <li>Rate limiting</li>
            <li>Auditoría ACID</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
