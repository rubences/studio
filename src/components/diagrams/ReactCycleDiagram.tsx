export function ReactCycleDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arrowhead_react"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" className="fill-secondary-foreground" />
        </marker>
      </defs>
      <g className="text-center">
        <rect x="30" y="50" width="120" height="90" rx="6" className="fill-primary" />
        <text x="90" y="85" fontSize="16" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
          RAZONAR
        </text>
        <text x="90" y="108" fontSize="11" className="fill-primary-foreground" textAnchor="middle">
          Analizar plan
        </text>
        <path d="M 150 95 L 195 95" className="stroke-secondary-foreground" strokeWidth="3" fill="none" markerEnd="url(#arrowhead_react)" />
        
        <rect x="195" y="50" width="120" height="90" rx="6" fill="#10b981" />
        <text x="255" y="85" fontSize="16" fontWeight="bold" className="fill-foreground" textAnchor="middle">
          ACTUAR
        </text>
        <text x="255" y="108" fontSize="11" className="fill-foreground" textAnchor="middle">
          Llamar tools
        </text>
        <path d="M 315 95 L 360 95" className="stroke-secondary-foreground" strokeWidth="3" fill="none" markerEnd="url(#arrowhead_react)" />
        
        <rect x="360" y="50" width="120" height="90" rx="6" fill="#f59e0b" />
        <text x="420" y="85" fontSize="16" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
          OBSERVAR
        </text>
        <text x="420" y="108" fontSize="11" className="fill-primary-foreground" textAnchor="middle">
          Integrar datos
        </text>
        
        <path d="M 420 140 Q 420 190 90 190 Q 90 150 90 140" className="stroke-secondary-foreground" strokeWidth="3" fill="none" markerEnd="url(#arrowhead_react)" />
        <text x="255" y="210" fontSize="12" className="fill-muted-foreground" textAnchor="middle" fontStyle="italic">
          ↻ Iterar hasta completar
        </text>
      </g>
    </svg>
  );
}
