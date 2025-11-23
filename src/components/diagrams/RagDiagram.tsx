export function RagDiagram({ className }: { className?: string }) {
  const stepStyle = "fill-card stroke-border stroke-1.5";
  const textTitle = "font-headline text-base font-semibold fill-primary text-center";
  const textDesc = "text-xs fill-secondary-foreground text-center";
  const arrowStyle = "stroke-muted-foreground stroke-2";

  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="ar_rag" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
        <filter id="shadow_rag" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="hsl(var(--foreground))" floodOpacity="0.08" />
        </filter>
      </defs>
      <g className="font-body" filter="url(#shadow_rag)">
        {/* 1. User Input */}
        <rect x="30" y="50" width="160" height="90" rx="12" className={stepStyle} />
        <text x="110" y="80" className={textTitle} dominantBaseline="middle" textAnchor="middle">1. Pregunta</text>
        <text x="110" y="105" className={textDesc} dominantBaseline="middle" textAnchor="middle" >"¿Cómo instalo X?"</text>
        
        <path d="M 190 95 H 230" className={arrowStyle} markerEnd="url(#ar_rag)" />

        {/* 2. Retrieval */}
        <g>
          <rect x="230" y="50" width="160" height="90" rx="12" className={stepStyle} />
          <text x="310" y="80" className={textTitle} dominantBaseline="middle" textAnchor="middle">2. Búsqueda</text>
          <text x="310" y="105" className={textDesc} dominantBaseline="middle" textAnchor="middle">Vertex AI Search</text>
          <path d="M 310 140 V 180" className={arrowStyle} markerEnd="url(#ar_rag)" strokeDasharray="3 3" />
          <path d="M 390 95 H 430" className={arrowStyle} markerEnd="url(#ar_rag)" />
        </g>
        
        {/* 3. Augmentation */}
        <g>
            <rect x="430" y="50" width="160" height="90" rx="12" className={stepStyle} />
            <text x="510" y="80" className={textTitle} dominantBaseline="middle" textAnchor="middle">3. Aumentar</text>
            <text x="510" y="105" className={textDesc} dominantBaseline="middle" textAnchor="middle">Inyectar Contexto</text>
            <path d="M 590 95 H 630" className={arrowStyle} markerEnd="url(#ar_rag)" />
        </g>
        
        {/* 4. Generation */}
        <g>
            <rect x="630" y="50" width="160" height="90" rx="12" className={stepStyle} />
            <text x="710" y="80" className={textTitle} dominantBaseline="middle" textAnchor="middle">4. Generar</text>
            <text x="710" y="105" className={textDesc} dominantBaseline="middle" textAnchor="middle">LLM con Contexto</text>
        </g>

        {/* Knowledge Base */}
        <g>
            <rect x="180" y="180" width="260" height="150" rx="12" className="fill-secondary/30 stroke-border" strokeDasharray="4 4" />
            <text x="310" y="205" fontSize="14" fontWeight="600" className="fill-primary" textAnchor="middle">Base de Conocimiento</text>
            <text x="310" y="235" className={textDesc} textAnchor="middle">• Docs técnicas</text>
            <text x="310" y="255" className={textDesc} textAnchor="middle">• Manuales de producto</text>
            <text x="310" y="275" className={textDesc} textAnchor="middle">• Historial de tickets</text>
            <text x="310" y="295" className={textDesc} textAnchor="middle">• APIs internas</text>
        </g>

        {/* Final Response */}
        <g>
            <path d="M 710 140 V 280 H 510" className={arrowStyle} fill="none" markerEnd="url(#ar_rag)" />
            <rect x="480" y="280" width="290" height="90" rx="12" className="fill-card stroke-green-500 stroke-2" />
            <text x="625" y="310" className="font-headline text-base font-semibold fill-green-600" textAnchor="middle">5. Respuesta Relevante</text>
            <text x="625" y="335" className={textDesc} textAnchor="middle">"Para instalar X, sigue estos 3 pasos..."</text>
            <text x="625" y="350" className="text-xs fill-muted-foreground" textAnchor="middle">(Fuente: Guía de Instalación v2.1)</text>
        </g>
      </g>
    </svg>
  );
}
