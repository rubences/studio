export function ArchitectureTemplateDiagram({ className }: { className?: string }) {
  const boxStyle = "fill-card stroke-border stroke-1.5";
  const textTitleStyle = "font-bold text-sm fill-foreground";
  const textDescStyle = "text-xs fill-muted-foreground";
  const arrowStyle = "stroke-muted-foreground/80 stroke-2";

  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_arch" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground/80" />
        </marker>
        <filter id="shadow_arch" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="hsl(var(--foreground))" floodOpacity="0.08" />
        </filter>
      </defs>

      <g className="font-body" filter="url(#shadow_arch)">
        {/* Input */}
        <rect x="20" y="150" width="120" height="70" rx="12" className={boxStyle} />
        <text x="80" y="180" className={textTitleStyle} textAnchor="middle">Entrada</text>
        <text x="80" y="200" className={textDescStyle} textAnchor="middle">Texto, voz, datos</text>
        <path d="M 140 185 L 180 185" className={arrowStyle} markerEnd="url(#arrow_arch)" />

        {/* LLM */}
        <rect x="180" y="130" width="140" height="110" rx="12" className={boxStyle} style={{stroke: 'hsl(var(--chart-1))', strokeWidth: '2px'}}/>
        <text x="250" y="175" className={textTitleStyle} textAnchor="middle" fill="hsl(var(--chart-1))">LLM: Gemini 1.5</text>
        <text x="250" y="195" className={textDescStyle} textAnchor="middle">Razonar, Planificar</text>
        <path d="M 320 185 L 360 185" className={arrowStyle} markerEnd="url(#arrow_arch)" />
        <path d="M 250 240 V 280" className={arrowStyle} markerEnd="url(#arrow_arch)" />

        {/* Tool Selector */}
        <rect x="360" y="150" width="120" height="70" rx="12" className={boxStyle} style={{stroke: 'hsl(var(--chart-2))', strokeWidth: '2px'}} />
        <text x="420" y="180" className={textTitleStyle} textAnchor="middle" fill="hsl(var(--chart-2))">Selector</text>
        <text x="420" y="200" className={textDescStyle} textAnchor="middle">Herramientas</text>
        <path d="M 420 220 V 280" className={arrowStyle} markerEnd="url(#arrow_arch)" />

        {/* Tools */}
        <g textAnchor="middle">
          <rect x="100" y="280" width="600" height="100" rx="12" className="fill-secondary/50 stroke-border stroke-dashed" />
          <text x="400" y="300" className="text-xs font-semibold fill-muted-foreground" letterSpacing="0.5">CAJA DE HERRAMIENTAS</text>
          
          <rect x="120" y="320" width="100" height="50" rx="8" className={boxStyle} />
          <text x="170" y="348" className={textDescStyle}>API Externa</text>
          
          <rect x="240" y="320" width="100" height="50" rx="8" className={boxStyle} />
          <text x="290" y="348" className={textDescStyle}>Base de Datos</text>
          
          <rect x="360" y="320" width="100" height="50" rx="8" className={boxStyle} />
          <text x="410" y="348" className={textDescStyle}>RAG (Docs)</text>

          <rect x="480" y="320" width="100" height="50" rx="8" className={boxStyle} />
          <text x="530" y="348" className={textDescStyle}>Código Python</text>

          <rect x="600" y="320" width="100" height="50" rx="8" className={boxStyle} />
          <text x="650" y="348" className={textDescStyle}>Otro Agente</text>
        </g>
        
        {/* Results Path */}
        <path d="M 480 280 C 480 250, 520 250, 520 220 L 520 220" className={arrowStyle} fill="none" markerEnd="url(#arrow_arch)" />

        {/* Post-processing */}
        <rect x="520" y="150" width="120" height="70" rx="12" className={boxStyle} style={{stroke: 'hsl(var(--chart-3))', strokeWidth: '2px'}} />
        <text x="580" y="180" className={textTitleStyle} textAnchor="middle" fill="hsl(var(--chart-3))">Post-Proceso</text>
        <text x="580" y="200" className={textDescStyle} textAnchor="middle">Validar, Formatear</text>
        <path d="M 640 185 L 680 185" className={arrowStyle} markerEnd="url(#arrow_arch)" />

        {/* Output */}
        <rect x="680" y="150" width="100" height="70" rx="12" className={boxStyle} style={{stroke: 'hsl(var(--chart-4))', strokeWidth: '2px'}}/>
        <text x="730" y="180" className={textTitleStyle} textAnchor="middle" fill="hsl(var(--chart-4))">Salida</text>
        <text x="730" y="200" className={textDescStyle} textAnchor="middle">Respuesta final</text>
      </g>
      
      {/* Legend */}
      <text x="400" y="440" fontSize="11" className="fill-muted-foreground" textAnchor="middle">Personalización: Elige herramientas, entrena con datos propios e integra APIs de tu negocio.</text>
    </svg>
  );
}