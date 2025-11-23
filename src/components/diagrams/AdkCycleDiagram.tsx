export function AdkCycleDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arrow_adk"
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
        {/* Step 1 */}
        <circle cx="80" cy="150" r="35" className="fill-primary stroke-secondary-foreground" strokeWidth="2" />
        <text x="80" y="145" fontSize="12" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">1</text>
        <text x="80" y="160" fontSize="9" className="fill-primary-foreground" textAnchor="middle">Bootstrap</text>
        <text x="80" y="210" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">Starter Pack</text>
        <path d="M 115 150 L 155 150" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_adk)" />

        {/* Step 2 */}
        <circle cx="200" cy="150" r="35" className="fill-accent stroke-secondary-foreground" strokeWidth="2" />
        <text x="200" y="145" fontSize="12" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">2</text>
        <text x="200" y="160" fontSize="9" className="fill-accent-foreground" textAnchor="middle">Desarrollar</text>
        <text x="200" y="210" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">Escribir código</text>
        <path d="M 235 150 L 275 150" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_adk)" />

        {/* Step 3 */}
        <circle cx="320" cy="150" r="35" fill="#10b981" className="stroke-secondary-foreground" strokeWidth="2" />
        <text x="320" y="145" fontSize="12" fontWeight="bold" className="fill-foreground" textAnchor="middle">3</text>
        <text x="320" y="160" fontSize="9" className="fill-foreground" textAnchor="middle">Automatizar</text>
        <text x="320" y="210" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">Cloud Build CICD</text>
        <path d="M 355 150 L 395 150" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_adk)" />

        {/* Step 4 */}
        <circle cx="440" cy="150" r="35" fill="#f59e0b" className="stroke-secondary-foreground" strokeWidth="2" />
        <text x="440" y="145" fontSize="12" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">4</text>
        <text x="440" y="160" fontSize="9" className="fill-primary-foreground" textAnchor="middle">Evaluar</text>
        <text x="440" y="210" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">Pruebas + Tests</text>
        <path d="M 475 150 L 515 150" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_adk)" />

        {/* Step 5 */}
        <circle cx="560" cy="150" r="35" fill="#ec4899" className="stroke-secondary-foreground" strokeWidth="2" />
        <text x="560" y="145" fontSize="12" fontWeight="bold" className="fill-foreground" textAnchor="middle">5</text>
        <text x="560" y="160" fontSize="9" className="fill-foreground" textAnchor="middle">Monitorear</text>
        <text x="560" y="210" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">En producción</text>

        {/* Loop back */}
        <path d="M 560 185 Q 560 260 80 260 Q 80 185 80 185" className="stroke-secondary-foreground" strokeWidth="2" fill="none" markerEnd="url(#arrow_adk)" strokeDasharray="3,3" />
        <text x="320" y="280" fontSize="9" className="fill-muted-foreground" textAnchor="middle" fontStyle="italic">
          Iteración continua → Mejora
        </text>
      </g>
    </svg>
  );
}
