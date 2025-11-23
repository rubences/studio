export function ArchitectureTemplateDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arrow_arch"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" className="fill-secondary-foreground" />
        </marker>
      </defs>

      <g>
        {/* Input */}
        <rect x="20" y="100" width="90" height="60" rx="4" className="fill-primary stroke-secondary-foreground" strokeWidth="2" />
        <text x="65" y="130" fontSize="10" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">Entrada</text>
        <text x="65" y="148" fontSize="8" className="fill-primary-foreground" textAnchor="middle">Texto/voz/datos</text>
        <path d="M 110 130 L 140 130" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_arch)" />

        {/* LLM */}
        <rect x="140" y="80" width="100" height="100" rx="4" className="fill-accent stroke-secondary-foreground" strokeWidth="2" />
        <text x="190" y="110" fontSize="10" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">LLM</text>
        <text x="190" y="125" fontSize="8" className="fill-secondary-foreground" textAnchor="middle">Gemini 1.5</text>
        <text x="190" y="155" fontSize="8" className="fill-secondary-foreground" textAnchor="middle">Razonar</text>
        <text x="190" y="168" fontSize="8" className="fill-secondary-foreground" textAnchor="middle">Planificar</text>
        <path d="M 240 130 L 270 130" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_arch)" />

        {/* Tool Selector */}
        <rect x="270" y="100" width="80" height="60" rx="4" fill="#10b981" className="stroke-secondary-foreground" strokeWidth="1" />
        <text x="310" y="125" fontSize="9" fontWeight="bold" className="fill-foreground" textAnchor="middle">Selector</text>
        <text x="310" y="138" fontSize="8" className="fill-foreground" textAnchor="middle">Herramientas</text>
        <path d="M 310 160 L 310 190" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_arch)" />

        {/* Tools */}
        <g className="text-primary-foreground font-bold" fontSize="9">
          <circle cx="160" cy="230" r="30" fill="#f59e0b" className="stroke-secondary-foreground" strokeWidth="1" />
          <text x="160" y="235" textAnchor="middle">API</text>
          <circle cx="240" cy="230" r="30" fill="#f59e0b" className="stroke-secondary-foreground" strokeWidth="1" />
          <text x="240" y="235" textAnchor="middle">DB</text>
          <circle cx="320" cy="230" r="30" fill="#f59e0b" className="stroke-secondary-foreground" strokeWidth="1" />
          <text x="320" y="235" textAnchor="middle">RAG</text>
          <circle cx="400" cy="230" r="30" fill="#f59e0b" className="stroke-secondary-foreground" strokeWidth="1" />
          <text x="400" y="235" textAnchor="middle">Python</text>
        </g>
        
        {/* Lines from selector to tools */}
        <line x1="290" y1="180" x2="180" y2="210" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="310" y1="180" x2="250" y2="210" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="330" y1="180" x2="310" y2="210" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="350" y1="180" x2="380" y2="210" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />

        {/* Results Path */}
        <path d="M 430 230 C 480 230, 480 130, 500 130" stroke="hsl(var(--secondary-foreground))" strokeWidth="2" fill="none" markerEnd="url(#arrow_arch)" />

        {/* Post-processing */}
        <rect x="500" y="100" width="100" height="60" rx="4" fill="#ec4899" className="stroke-secondary-foreground" strokeWidth="2" />
        <text x="550" y="125" fontSize="10" fontWeight="bold" className="fill-foreground" textAnchor="middle">Validar</text>
        <text x="550" y="138" fontSize="8" className="fill-foreground" textAnchor="middle">Formatear</text>
        <path d="M 600 130 L 630 130" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_arch)" />

        {/* Output */}
        <rect x="630" y="100" width="90" height="60" rx="4" fill="#10b981" className="stroke-secondary-foreground" strokeWidth="2" />
        <text x="675" y="130" fontSize="10" fontWeight="bold" className="fill-foreground" textAnchor="middle">Salida</text>
        <text x="675" y="148" fontSize="8" className="fill-foreground" textAnchor="middle">Respuesta</text>

        {/* Legend */}
        <text x="20" y="285" fontSize="9" className="fill-secondary-foreground" fontWeight="bold">Personalización:</text>
        <text x="20" y="300" fontSize="8" className="fill-muted-foreground">• Elige herramientas según caso • Entrena con datos propios • Integra APIs de tu negocio</text>
      </g>
    </svg>
  );
}
