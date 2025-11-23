export function AdkCycleDiagram({ className }: { className?: string }) {
  const steps = [
    { name: "Bootstrap", detail: "Starter Pack", color: "hsl(var(--chart-1))" },
    { name: "Desarrollar", detail: "Escribir código", color: "hsl(var(--chart-2))" },
    { name: "Automatizar", detail: "CI/CD", color: "hsl(var(--chart-3))" },
    { name: "Evaluar", detail: "Pruebas + Tests", color: "hsl(var(--chart-4))" },
    { name: "Monitorear", detail: "Producción", color: "hsl(var(--chart-5))" },
  ];

  return (
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className={className}>
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
      </defs>
      
      <g className="font-body">
        {steps.map((step, i) => (
          <g key={i}>
            {/* Circle */}
            <circle cx={100 + i * 150} cy="150" r="45" fill={step.color} />
            <circle cx={100 + i * 150} cy="150" r="45" fill="black" opacity="0" className="transition-all duration-300 hover:opacity-10" />

            {/* Texts */}
            <text x={100 + i * 150} y="145" fontSize="16" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle" pointerEvents="none">{i + 1}</text>
            <text x={100 + i * 150} y="165" fontSize="12" className="fill-primary-foreground" textAnchor="middle" pointerEvents="none">{step.name}</text>
            <text x={100 + i * 150} y="215" fontSize="11" className="fill-secondary-foreground" textAnchor="middle" fontWeight="500" pointerEvents="none">{step.detail}</text>

            {/* Arrow */}
            {i < steps.length - 1 && (
              <path d={`M ${145 + i * 150} 150 L ${100 + (i+1) * 150 - 45} 150`} className="stroke-muted-foreground" strokeWidth="2" markerEnd="url(#arrow_adk)" />
            )}
          </g>
        ))}
        
        {/* Loop back */}
        <path d="M 700 195 A 300 100 0 0 1 100 195" className="stroke-muted-foreground" strokeWidth="2" fill="none" markerEnd="url(#arrow_adk)" strokeDasharray="5 5" />
        <text x="400" y="275" fontSize="12" className="fill-muted-foreground" textAnchor="middle" fontStyle="italic">
          Iteración y Mejora Continua
        </text>
      </g>
    </svg>
  );
}
