export function AgentComponentsDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arr_agent"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" className="fill-secondary-foreground" />
        </marker>
      </defs>
      {/* Center: Orchestrator */}
      <circle cx="400" cy="175" r="50" className="fill-primary stroke-secondary-foreground" strokeWidth="2" />
      <text x="400" y="170" fontSize="11" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
        ORQUESTACIÓN
      </text>
      <text x="400" y="185" fontSize="10" className="fill-primary-foreground" textAnchor="middle">
        Coordinador
      </text>

      {/* Top: LLM */}
      <rect x="320" y="20" width="160" height="80" rx="6" className="fill-accent stroke-secondary-foreground" strokeWidth="2" />
      <text x="400" y="50" fontSize="14" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">
        LLM (Cerebro)
      </text>
      <text x="400" y="70" fontSize="11" className="fill-secondary-foreground" textAnchor="middle">
        Gemini 1.5 Pro
      </text>
      <line x1="400" y1="100" x2="400" y2="125" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arr_agent)" />

      {/* Left: Tools */}
      <rect x="40" y="130" width="140" height="90" fill="#10b981" rx="6" className="stroke-secondary-foreground" strokeWidth="2" />
      <text x="110" y="160" fontSize="12" fontWeight="bold" className="fill-foreground" textAnchor="middle">
        Herramientas
      </text>
      <text x="110" y="180" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        • APIs externas
      </text>
      <text x="110" y="195" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        • Funciones internas
      </text>
      <line x1="180" y1="175" x2="350" y2="175" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arr_agent)" />

      {/* Right: Data */}
      <rect x="620" y="130" width="140" height="90" fill="#f59e0b" rx="6" className="stroke-secondary-foreground" strokeWidth="2" />
      <text x="690" y="160" fontSize="12" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
        Arquitectura Datos
      </text>
      <text x="690" y="180" fontSize="10" className="fill-primary-foreground" textAnchor="middle">
        • Memoria corto/largo
      </text>
      <text x="690" y="195" fontSize="10" className="fill-primary-foreground" textAnchor="middle">
        • Auditoría
      </text>
      <line x1="620" y1="175" x2="450" y2="175" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arr_agent)" />

      {/* Bottom: User */}
      <rect x="320" y="260" width="160" height="60" fill="#64748b" rx="6" className="stroke-secondary-foreground" strokeWidth="2" />
      <text x="400" y="285" fontSize="12" fontWeight="bold" className="fill-foreground" textAnchor="middle">
        Interfaz Usuario
      </text>
      <text x="400" y="305" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        Input → Output
      </text>
      <line x1="400" y1="225" x2="400" y2="260" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arr_agent)" />
    </svg>
  );
}
