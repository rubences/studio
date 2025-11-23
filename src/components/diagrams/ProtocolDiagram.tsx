export function ProtocolDiagram({ className }: { className?: string }) {
  const agents = [
    { name: "Agente ADK", platform: "Google Cloud", color: "hsl(var(--chart-1))", x: 150 },
    { name: "Agente LangChain", platform: "OpenAI", color: "hsl(var(--chart-2))", x: 400 },
    { name: "Agente CrewAI", platform: "Claude", color: "hsl(var(--chart-3))", x: 650 },
  ];

  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_protocol" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
        <filter id="shadow_protocol" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.1" />
        </filter>
      </defs>

      <g className="font-body">
        {/* Agents */}
        {agents.map((agent, i) => (
          <g key={i} filter="url(#shadow_protocol)">
            <rect x={agent.x - 75} y="50" width="150" height="80" rx="12" className="fill-card stroke-border" />
            <rect x={agent.x - 75} y="50" width="150" height="8" rx="0" fill={agent.color} style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} />
            <text x={agent.x} y="90" fontSize="14" fontWeight="bold" className="fill-foreground" textAnchor="middle">{agent.name}</text>
            <text x={agent.x} y="110" fontSize="12" className="fill-muted-foreground" textAnchor="middle">{agent.platform}</text>
          </g>
        ))}

        {/* Connections */}
        {agents.map((agent, i) => (
           <path key={i} d={`M ${agent.x} 130 V 220`} stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow_protocol)" />
        ))}
        
        {/* A2A Protocol */}
        <g filter="url(#shadow_protocol)">
            <rect x="100" y="220" width="600" height="70" rx="12" className="fill-card stroke-primary stroke-2" />
            <text x="400" y="255" fontSize="18" fontWeight="bold" className="fill-primary" textAnchor="middle">Protocolo de Interoperabilidad (A2A / MCP)</text>
            <text x="400" y="275" fontSize="12" className="fill-muted-foreground" textAnchor="middle">Permite a los agentes descubrirse, comunicarse y colaborar entre sí, sin importar su framework.</text>
        </g>

      </g>
    </svg>
  );
}
