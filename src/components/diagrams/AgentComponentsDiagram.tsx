export function AgentComponentsDiagram({ className }: { className?: string }) {
  const components = [
    { id: 'llm', x: 400, y: 80, title: 'LLM (Cerebro)', subtitle: 'Gemini 1.5 Pro', color: 'hsl(var(--chart-1))' },
    { id: 'tools', x: 150, y: 200, title: 'Herramientas', subtitle: 'APIs, Funciones', color: 'hsl(var(--chart-2))' },
    { id: 'data', x: 650, y: 200, title: 'Arquitectura Datos', subtitle: 'Memoria, Auditoría', color: 'hsl(var(--chart-3))' },
    { id: 'ui', x: 400, y: 320, title: 'Interfaz de Usuario', subtitle: 'Input / Output', color: 'hsl(var(--chart-4))' },
  ];

  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_agent" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary" />
        </marker>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Center: Orchestrator */}
      <g filter="url(#shadow)">
        <circle cx="400" cy="200" r="80" className="fill-primary" />
        <text x="400" y="195" fontSize="18" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
          ORQUESTACIÓN
        </text>
        <text x="400" y="220" fontSize="14" className="fill-primary-foreground" textAnchor="middle" opacity="0.8">
          (Coordinador)
        </text>
      </g>
      
      {/* Lines connecting components to center */}
      <path d="M 400 120 V 135" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow_agent)" />
      <path d="M 400 280 V 265" stroke="hsl(var(--primary))" strokeWidth="2.5" markerStart="url(#arrow_agent)" />
      <path d="M 230 200 H 320" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow_agent)" />
      <path d="M 570 200 H 480" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow_agent)" />

      {/* Components */}
      {components.map(comp => (
        <g key={comp.id} className="font-body">
          <rect 
            x={comp.x - 110} 
            y={comp.y - 40} 
            width="220" 
            height="80" 
            rx="12" 
            className="fill-card stroke-border" 
            strokeWidth="1.5" 
            filter="url(#shadow)"
          />
          <text x={comp.x} y={comp.y - 5} fontSize="16" fontWeight="bold" fill={comp.color} textAnchor="middle">
            {comp.title}
          </text>
          <text x={comp.x} y={comp.y + 20} fontSize="12" className="fill-secondary-foreground" textAnchor="middle">
            {comp.subtitle}
          </text>
        </g>
      ))}
    </svg>
  );
}
