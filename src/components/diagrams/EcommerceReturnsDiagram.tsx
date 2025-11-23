export function EcommerceReturnsDiagram({ className }: { className?: string }) {
  const boxStyle = "fill-card stroke-border stroke-1.5";
  
  const steps = [
    { title: "1. Solicitud Cliente", description: "Cliente inicia devolución desde su área personal para el pedido #12345.", icon: "ShoppingCart", color: "primary" },
    { title: "2. Validación y Logística", description: "Agente verifica política, genera etiqueta de envío con API de mensajería y la envía por email.", icon: "PackageSearch", color: "accent" },
    { title: "3. Seguimiento y Reembolso", description: "Monitorea el envío. Al llegar a almacén, procesa el reembolso y notifica al cliente.", icon: "Truck", color: "green-500" }
  ];

  return (
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_ecomm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground/60" />
        </marker>
        <filter id="shadow_ecomm" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.07" />
        </filter>
      </defs>

      {/* Connecting Line */}
      <path d="M 120 150 H 680" className="stroke-muted-foreground/50" strokeWidth="2" strokeDasharray="5 5" />

      {steps.map((step, i) => (
        <g key={i} transform={`translate(${50 + i * 250}, 50)`} filter="url(#shadow_ecomm)">
          <circle cx="100" cy="100" r="80" className={boxStyle} />
          <foreignObject x="20" y="30" width="160" height="140">
            <div xmlns="http://www.w3.org/1999/xhtml" className="flex flex-col items-center text-center h-full">
              <div className={`p-3 rounded-full bg-${step.color}/10 text-${step.color}`}>
                  { step.icon === 'ShoppingCart' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> }
                  { step.icon === 'PackageSearch' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4"/><path d="m22 16-3.1-3.1"/><circle cx="16.5" cy="16.5" r="2.5"/><path d="M12 18h4"/><path d="M16 11.5a4.5 4.5 0 0 0-4.5 4.5 4.5 4.5 0 0 0 4.5 4.5 4.5 4.5 0 0 0 4.5-4.5V6.5"/></svg> }
                  { step.icon === 'Truck' && <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg> }
              </div>
              <h3 className={`font-semibold text-base mt-2 text-${step.color}`}>{step.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
            </div>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
}