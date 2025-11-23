export function AgentComponentsDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arr_agent"
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
      <g className="font-body">
        {/* Center: Orchestrator */}
        <g>
          <circle cx="400" cy="200" r="70" className="fill-primary" />
          <text x="400" y="195" fontSize="16" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
            ORQUESTACIÓN
          </text>
          <text x="400" y="215" fontSize="12" className="fill-primary-foreground" textAnchor="middle">
            (Coordinador)
          </text>
        </g>
        
        {/* Connectors from center */}
        <path d="M 400 130 V 105" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arr_agent)" />
        <path d="M 400 270 V 295" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arr_agent)" />
        <path d="M 330 200 H 205" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arr_agent)" />
        <path d="M 470 200 H 595" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#arr_agent)" />

        {/* Top: LLM */}
        <g>
          <rect x="300" y="30" width="200" height="75" rx="12" className="fill-card stroke-border" strokeWidth="1" />
          <text x="400" y="60" fontSize="16" fontWeight="bold" className="fill-primary" textAnchor="middle">
            LLM (Cerebro)
          </text>
          <text x="400" y="80" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            Gemini 1.5 Pro
          </text>
        </g>

        {/* Left: Tools */}
        <g>
          <rect x="40" y="150" width="165" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1" />
          <text x="122.5" y="180" fontSize="16" fontWeight="bold" className="fill-primary" textAnchor="middle">
            Herramientas
          </text>
          <text x="122.5" y="205" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            • APIs externas
          </text>
          <text x="122.5" y="225" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            • Funciones internas
          </text>
        </g>

        {/* Right: Data */}
        <g>
          <rect x="595" y="150" width="165" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1" />
          <text x="677.5" y="180" fontSize="16" fontWeight="bold" className="fill-primary" textAnchor="middle">
            Arquitectura Datos
          </text>
          <text x="677.5" y="205" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            • Memoria
          </text>
          <text x="677.5" y="225" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            • Auditoría
          </text>
        </g>

        {/* Bottom: User */}
        <g>
          <rect x="300" y="295" width="200" height="75" rx="12" className="fill-card stroke-border" strokeWidth="1" />
          <text x="400" y="325" fontSize="16" fontWeight="bold" className="fill-primary" textAnchor="middle">
            Interfaz de Usuario
          </text>
          <text x="400" y="345" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            Input → Output
          </text>
        </g>
      </g>
    </svg>
  );
}