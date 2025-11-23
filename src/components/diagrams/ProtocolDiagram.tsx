export function ProtocolDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 270" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        {/* Agent 1 */}
        <rect x="50" y="80" width="120" height="70" rx="4" className="fill-primary stroke-secondary-foreground" strokeWidth="1" />
        <text x="110" y="110" fontSize="11" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">Agente ADK</text>
        <text x="110" y="128" fontSize="9" className="fill-primary-foreground" textAnchor="middle">Google Cloud</text>

        {/* MCP Protocol */}
        <rect x="220" y="60" width="130" height="30" rx="2" className="fill-card stroke-primary stroke-2" strokeDasharray="3,3" />
        <text x="285" y="80" fontSize="10" fontWeight="bold" className="fill-primary" textAnchor="middle">MCP Protocol</text>

        <line x1="170" y1="115" x2="220" y2="75" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="350" y1="75" x2="420" y2="115" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />

        {/* Agent 2 */}
        <rect x="420" y="80" width="120" height="70" rx="4" className="fill-accent stroke-secondary-foreground" strokeWidth="1" />
        <text x="480" y="110" fontSize="11" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">Agente LangChain</text>
        <text x="480" y="128" fontSize="9" className="fill-accent-foreground" textAnchor="middle">OpenAI</text>

        {/* Agent 3 */}
        <rect x="635" y="80" width="120" height="70" rx="4" fill="#10b981" className="stroke-secondary-foreground" strokeWidth="1" />
        <text x="695" y="110" fontSize="11" fontWeight="bold" className="fill-foreground" textAnchor="middle">Agente CrewAI</text>
        <text x="695" y="128" fontSize="9" className="fill-foreground" textAnchor="middle">Claude</text>

        {/* A2A Protocol Central */}
        <circle cx="400" cy="190" r="35" fill="#f59e0b" className="stroke-secondary-foreground" strokeWidth="2" />
        <text x="400" y="190" fontSize="11" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">A2A</text>
        <text x="400" y="205" fontSize="9" className="fill-primary-foreground" textAnchor="middle">Agent-to-Agent</text>

        {/* Lines from agents to A2A */}
        <line x1="110" y1="150" x2="370" y2="170" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="480" y1="150" x2="420" y2="170" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="695" y1="150" x2="430" y2="170" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />

        {/* Legend */}
        <text x="50" y="240" fontSize="9" className="fill-muted-foreground">🔗 MCP = Herramientas estandarizadas</text>
        <text x="50" y="255" fontSize="9" className="fill-muted-foreground">🔗 A2A = Agentes colaboran entre sí</text>
      </g>
    </svg>
  );
}
