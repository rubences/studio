export function HealthAppointmentDiagram({ className }: { className?: string }) {
  const boxStyle = "fill-card stroke-border stroke-1.5";

  const steps = [
    { title: "1. Petición del Paciente", description: "'Necesito cita con Dr. García por la tarde'", icon: "MessageSquare", color: "hsl(var(--primary))", y: 20 },
    { title: "2. Búsqueda y Propuesta", description: "Agente consulta Calendar API, encuentra 3 huecos y los ofrece por WhatsApp.", icon: "CalendarDays", color: "hsl(var(--accent))", y: 120 },
    { title: "3. Confirmación", description: "Paciente elige. Agente bloquea cita, y agenda recordatorio 24h antes.", icon: "Sparkles", color: "hsl(var(--chart-4))", y: 220 }
  ];

  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_health" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground/60" />
        </marker>
        <filter id="shadow_health" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.07" />
        </filter>
      </defs>
      
      {/* Center Line */}
      <path d="M 400 60 V 280" className="stroke-muted-foreground/50" strokeWidth="2" strokeDasharray="4 4" marker-end="url(#arrow_health)" />

      {steps.map((step, i) => (
         <g key={i} transform={`translate(${i % 2 === 0 ? 100 : 450}, ${step.y})`} filter="url(#shadow_health)">
            <rect x="0" y="0" width="250" height="80" rx="12" className={boxStyle} />
            <foreignObject x="10" y="10" width="230" height="70">
                 <div xmlns="http://www.w3.org/1999/xhtml" className="flex items-center gap-4">
                     <div className="flex-shrink-0 p-3 rounded-lg" style={{ backgroundColor: `${step.color}1A`, color: step.color }}>
                        { step.icon === 'MessageSquare' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> }
                        { step.icon === 'CalendarDays' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg> }
                        { step.icon === 'Sparkles' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 4.2-4.1.6 3 2.9-.7 4.1 3.7-1.9 3.7 1.9-.7-4.1 3-2.9-4.1-.6L12 3Z"/><path d="M5 11.5a7 7 0 0 1 14 0"/><path d="M5 21a7 7 0 0 1 14 0"/></svg> }
                     </div>
                     <div>
                        <h3 className="font-semibold" style={{ color: step.color }}>{step.title}</h3>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                     </div>
                 </div>
            </foreignObject>
        </g>
      ))}

    </svg>
  );
}
