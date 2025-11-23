export function ReactCycleDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" className={className}>
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
      </defs>
      <g className="text-center font-body">
        {/* Step 1 */}
        <rect x="30" y="50" width="150" height="100" rx="12" className="fill-card stroke-border" />
        <text x="105" y="90" fontSize="18" fontWeight="600" className="fill-primary" textAnchor="middle">RAZONAR</text>
        <text x="105" y="115" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">Analizar y planificar</text>
        
        <path d="M 180 100 L 220 100" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrowhead_react)" />
        
        {/* Step 2 */}
        <rect x="225" y="50" width="150" height="100" rx="12" className="fill-card stroke-border" />
        <text x="300" y="90" fontSize="18" fontWeight="600" className="fill-primary" textAnchor="middle">ACTUAR</text>
        <text x="300" y="115" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">Ejecutar tools</text>
        
        <path d="M 375 100 L 415 100" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrowhead_react)" />
        
        {/* Step 3 */}
        <rect x="420" y="50" width="150" height="100" rx="12" className="fill-card stroke-border" />
        <text x="495" y="90" fontSize="18" fontWeight="600" className="fill-primary" textAnchor="middle">OBSERVAR</text>
        <text x="495" y="115" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">Integrar resultados</text>
        
        {/* Loop back arrow */}
        <path d="M 495 150 C 495 200, 105 200, 105 150" className="stroke-muted-foreground" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead_react)" strokeDasharray="4 4" />
        <text x="300" y="220" fontSize="12" className="fill-muted-foreground" textAnchor="middle" fontStyle="italic">
          ↻ Iterar hasta completar el objetivo
        </text>
      </g>
    </svg>
  );
}