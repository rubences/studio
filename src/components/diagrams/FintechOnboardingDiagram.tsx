export function FintechOnboardingDiagram({ className }: { className?: string }) {
  const boxStyle = (color: string) => `fill-card stroke-border stroke-1.5`;
  const iconBgStyle = (color: string) => `rounded-lg bg-${color}/10 text-${color}`;

  const steps = [
    { title: "1. Captura de Datos", description: "Usuario sube DNI y selfie a través de la app móvil.", icon: "User", color: "primary" },
    { title: "2. Verificación IA", description: "Agente usa Vision API para extraer datos y comparar DNI con selfie.", icon: "Cpu", color: "accent" },
    { title: "3. Cruce de Información", description: "Consulta APIs externas (riesgo crediticio, listas de sanciones).", icon: "Database", color: "accent" },
    { title: "4. Decisión Final", description: "Si es válido, aprueba, crea cuenta y envía email de bienvenida.", icon: "CheckCircle", color: "green-500" }
  ];

  return (
    <svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_fintech" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground/60" />
        </marker>
        <filter id="shadow_fintech" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.07" />
        </filter>
      </defs>

      {steps.map((step, i) => (
        <g key={i}>
          {/* Arrow */}
          {i < steps.length - 1 && (
            <path
              d={`M ${130 + i * 200} 125 L ${270 + i * 200} 125`}
              className="stroke-muted-foreground/60"
              strokeWidth="2"
              markerEnd="url(#arrow_fintech)"
            />
          )}

          <g transform={`translate(${i * 200}, 40)`} filter="url(#shadow_fintech)">
            <rect x="20" y="20" width="160" height="170" rx="12" className={boxStyle(step.color)} />
            
            <foreignObject x="30" y="35" width="140" height="140">
                <div xmlns="http://www.w3.org/1999/xhtml" className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-lg bg-${step.color}/10 text-${step.color}`}>
                        { step.icon === 'User' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> }
                        { step.icon === 'Cpu' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3"/></svg> }
                        { step.icon === 'Database' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> }
                        { step.icon === 'CheckCircle' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
                    </div>
                    <h3 className="font-semibold text-foreground text-base mt-3">{step.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{step.description}</p>
                </div>
            </foreignObject>
          </g>
        </g>
      ))}
    </svg>
  );
}