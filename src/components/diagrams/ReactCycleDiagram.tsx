export function ReactCycleDiagram({ className }: { className?: string }) {
  const steps = [
    { name: "RAZONAR", detail: "Analizar y planificar", color: "hsl(var(--chart-1))" },
    { name: "ACTUAR", detail: "Ejecutar tools", color: "hsl(var(--chart-2))" },
    { name: "OBSERVAR", detail: "Integrar resultados", color: "hsl(var(--chart-3))" },
  ];

  return (
    <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arrowhead_react"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
        <filter id="shadow_react" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.1" />
        </filter>
      </defs>
      
      <g className="text-center font-body" filter="url(#shadow_react)">
        {steps.map((step, i) => (
          <g key={step.name}>
            {/* Box */}
            <rect x={50 + i * 200} y="50" width="180" height="110" rx="12" className="fill-card stroke-border" />
            <rect x={50 + i * 200} y="50" width="180" height="8" rx="0" fill={step.color} style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} />
            
            {/* Texts */}
            <text x={140 + i * 200} y="100" fontSize="20" fontWeight="bold" fill={step.color} textAnchor="middle">{step.name}</text>
            <text x={140 + i * 200} y="130" fontSize="14" className="fill-secondary-foreground" textAnchor="middle">{step.detail}</text>
            
            {/* Arrow */}
            {i < steps.length - 1 && (
              <path d={`M ${230 + i * 200} 105 L ${250 + i * 200} 105`} className="stroke-muted-foreground" strokeWidth="2" markerEnd="url(#arrowhead_react)" />
            )}
          </g>
        ))}
        
        {/* Loop back arrow */}
        <path d="M 540 160 C 540 220, 140 220, 140 160" className="stroke-muted-foreground" strokeWidth="2" fill="none" markerEnd="url(#arrowhead_react)" strokeDasharray="5 5" />
        <text x="340" y="240" fontSize="14" className="fill-muted-foreground" textAnchor="middle" fontStyle="italic">
          ↻ Iterar hasta completar el objetivo
        </text>
      </g>
    </svg>
  );
}
