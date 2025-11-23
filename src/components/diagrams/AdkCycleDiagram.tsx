export function AdkCycleDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arrow_adk"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--chart-1))" />
          <stop offset="100%" stopColor="hsl(var(--chart-2))" />
        </linearGradient>
      </defs>
      
      <g className="text-center font-body">
        {/* Step 1 */}
        <circle cx="100" cy="150" r="40" fill="hsl(var(--chart-1))" />
        <text x="100" y="145" fontSize="14" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">1</text>
        <text x="100" y="162" fontSize="10" className="fill-primary-foreground" textAnchor="middle">Bootstrap</text>
        <text x="100" y="210" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">Starter Pack</text>
        
        {/* Step 2 */}
        <circle cx="220" cy="150" r="40" fill="hsl(var(--chart-2))" />
        <text x="220" y="145" fontSize="14" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">2</text>
        <text x="220" y="162" fontSize="10" className="fill-accent-foreground" textAnchor="middle">Desarrollar</text>
        <text x="220" y="210" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">Escribir código</text>
        
        {/* Step 3 */}
        <circle cx="340" cy="150" r="40" fill="hsl(var(--chart-3))" />
        <text x="340" y="145" fontSize="14" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">3</text>
        <text x="340" y="162" fontSize="10" className="fill-primary-foreground" textAnchor="middle">Automatizar</text>
        <text x="340" y="210" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">CI/CD</text>

        {/* Step 4 */}
        <circle cx="460" cy="150" r="40" fill="hsl(var(--chart-4))" />
        <text x="460" y="145" fontSize="14" fontWeight="bold" className="fill-foreground" textAnchor="middle">4</text>
        <text x="460" y="162" fontSize="10" className="fill-foreground" textAnchor="middle">Evaluar</text>
        <text x="460" y="210" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">Pruebas + Tests</text>
        
        {/* Step 5 */}
        <circle cx="580" cy="150" r="40" fill="hsl(var(--chart-5))" />
        <text x="580" y="145" fontSize="14" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">5</text>
        <text x="580" y="162" fontSize="10" className="fill-primary-foreground" textAnchor="middle">Monitorear</text>
        <text x="580" y="210" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">Producción</text>

        {/* Arrows */}
        <path d="M 140 150 L 180 150" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrow_adk)" />
        <path d="M 260 150 L 300 150" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrow_adk)" />
        <path d="M 380 150 L 420 150" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrow_adk)" />
        <path d="M 500 150 L 540 150" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arrow_adk)" />
        
        {/* Loop back */}
        <path d="M 580 190 C 580 250, 100 250, 100 190" className="stroke-muted-foreground" strokeWidth="1.5" fill="none" markerEnd="url(#arrow_adk)" strokeDasharray="4 4" />
        <text x="340" y="270" fontSize="11" className="fill-muted-foreground" textAnchor="middle" fontStyle="italic">
          Iteración y Mejora Continua
        </text>
      </g>
    </svg>
  );
}
