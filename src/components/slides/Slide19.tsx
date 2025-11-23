export function Slide19() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Producción: Seguridad y Control
      </h2>
      <ul className="text-lg text-secondary-foreground list-disc pl-6 space-y-3 leading-relaxed">
        <li>Validación de indicaciones y detección de inyecciones</li>
        <li>Filtrado de salidas para contenido dañino</li>
        <li>Pruebas de seguridad automatizadas en CICD</li>
        <li>Auditoría transaccional con integridad ACID</li>
        <li>Gemini Enterprise: Control de acceso a datos</li>
      </ul>
    </section>
  );
}
