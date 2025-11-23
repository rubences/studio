export function Slide26b() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl mb-6 text-primary">
        Casos de Uso: Otras Industrias
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
        <div className="bg-card p-4 border-l-4 border-pink-500">
          <h3 className="font-headline text-base text-pink-500 mb-2">🏦 Fintech</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> Transacciones + docs KYC</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Detección fraude real-time</li>
            <li>Análisis riesgo crediticio</li>
            <li>Compliance AML automático</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> -40% fraude</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-cyan-500">
          <h3 className="font-headline text-base text-cyan-500 mb-2">⚕️ Healthcare</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> EHR + protocolos</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Triaje pacientes automático</li>
            <li>Recordatorios medicinas</li>
            <li>Alertas anomalías vitales</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> +25% eficiencia</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-orange-500">
          <h3 className="font-headline text-base text-orange-500 mb-2">🛍️ E-commerce</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> Compra + historial</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Recomendaciones personalizadas</li>
            <li>Carrito abandonado recovery</li>
            <li>Análisis churn predictivo</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> +18% AOV</p>
        </div>
        <div className="bg-card p-4 border-l-4 border-teal-500">
          <h3 className="font-headline text-base text-teal-500 mb-2">⚖️ Legal/Compliance</h3>
          <p className="text-xs text-secondary-foreground"><strong>Input:</strong> Contratos + leyes</p>
          <ul className="text-xs text-secondary-foreground list-disc list-inside pl-2 mt-1">
            <li>Análisis contratos automático</li>
            <li>Alertas riesgos legales</li>
            <li>Due diligence acelerada</li>
          </ul>
          <p className="text-xs text-green-500 mt-1"><strong>ROI:</strong> -60% revisión</p>
        </div>
      </div>
    </section>
  );
}
