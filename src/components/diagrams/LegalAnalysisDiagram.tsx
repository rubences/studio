export function LegalAnalysisDiagram({ className }: { className?: string }) {
  const boxStyle = (color: string) => `fill-card stroke-border stroke-1.5`;

  const steps = [
    { title: "1. Ingesta Segura", description: "Abogado sube un contrato de 50 páginas en PDF para una revisión urgente.", icon: "FileText", color: "primary" },
    { title: "2. Análisis con IA", description: "El agente procesa el documento, identifica y extrae cláusulas de riesgo (penalizaciones, exclusividad, etc.).", icon: "Scale", color: "accent" },
    { title: "3. Resumen Ejecutivo", description: "Genera un informe de 1 página resumiendo desviaciones, riesgos y sugiriendo modificaciones.", icon: "Bot", color: "green-500" }
  ];

  return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_legal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground/60" />
        </marker>
        <filter id="shadow_legal" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.07" />
        </filter>
      </defs>

      {steps.map((step, i) => (
        <g key={i}>
          {/* Arrow */}
          {i < steps.length - 1 && (
            <path
              d={`M ${180 + i * 220} 140 L ${280 + i * 220} 140`}
              className="stroke-muted-foreground/60"
              strokeWidth="2"
              markerEnd="url(#arrow_legal)"
            />
          )}

          <g transform={`translate(${50 + i * 220}, 40)`} filter="url(#shadow_legal)">
            <rect x="20" y="20" width="180" height="180" rx="12" className={boxStyle(step.color)} />
            
            <foreignObject x="30" y="35" width="160" height="150">
                <div xmlns="http://www.w3.org/1999/xhtml" className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full bg-${step.color}/10 text-${step.color}`}>
                       { step.icon === 'FileText' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg> }
                       { step.icon === 'Scale' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg> }
                       { step.icon === 'Bot' && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg> }
                    </div>
                    <h3 className={`font-semibold text-foreground text-lg mt-3 text-${step.color}`}>{step.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                </div>
            </foreignObject>
          </g>
        </g>
      ))}
    </svg>
  );
}