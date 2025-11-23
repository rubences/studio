export function Slide13() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Opciones de Despliegue
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-1 bg-card p-6 border-l-4 border-primary">
          <h3 className="font-headline text-lg text-primary mb-2">Vertex AI Agent Engine</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-inside">
            <li>✓ Serverless</li>
            <li>✓ Escalado automático</li>
            <li>✓ Gestión completa</li>
            <li>✓ Ideal: Equipos pequeños</li>
          </ul>
        </div>
        <div className="flex-1 bg-card p-6 border-l-4 border-green-500">
          <h3 className="font-headline text-lg text-green-500 mb-2">Cloud Run</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-inside">
            <li>✓ Contenedores</li>
            <li>✓ Serverless flexible</li>
            <li>✓ Control código</li>
            <li>✓ Ideal: Microservicios</li>
          </ul>
        </div>
        <div className="flex-1 bg-card p-6 border-l-4 border-yellow-500">
          <h3 className="font-headline text-lg text-yellow-500 mb-2">GKE</h3>
          <ul className="text-sm text-secondary-foreground space-y-1 list-inside">
            <li>✓ Kubernetes</li>
            <li>✓ Control total</li>
            <li>✓ Multi-cloud</li>
            <li>✓ Ideal: Empresas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
