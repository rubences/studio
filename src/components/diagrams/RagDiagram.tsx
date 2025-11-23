export function RagDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="ar_rag" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
        </marker>
      </defs>
      <g className="font-body">
        {/* ROW 1: Prompt Flow */}
        <g className="text-center">
          {/* 1. User Input */}
          <rect x="30" y="50" width="160" height="80" rx="12" className="fill-card stroke-border" />
          <text x="110" y="80" fontSize="14" fontWeight="600" className="fill-primary" textAnchor="middle">1. Pregunta</text>
          <text x="110" y="105" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">"¿Cómo instalo X?"</text>
          
          <path d="M 190 90 H 240" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ar_rag)" />

          {/* 2. Retrieval */}
          <rect x="240" y="50" width="160" height="80" rx="12" className="fill-card stroke-border" />
          <text x="320" y="80" fontSize="14" fontWeight="600" className="fill-primary" textAnchor="middle">2. Búsqueda</text>
          <text x="320" y="105" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">Vector Search</text>

          <path d="M 320 130 V 170" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ar_rag)" strokeDasharray="3 3" />
          
          <path d="M 400 90 H 450" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ar_rag)" />

          {/* 3. Augmentation */}
          <rect x="450" y="50" width="160" height="80" rx="12" className="fill-card stroke-border" />
          <text x="530" y="80" fontSize="14" fontWeight="600" className="fill-primary" textAnchor="middle">3. Aumentar</text>
          <text x="530" y="105" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">Inyectar Contexto</text>

          <path d="M 530 130 V 200" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ar_rag)" />
          <path d="M 610 90 H 660" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ar_rag)" />
        </g>

        {/* ROW 2: Knowledge Base */}
        <g className="text-center">
            <rect x="200" y="170" width="240" height="120" rx="12" className="fill-secondary/50 stroke-border" strokeDasharray="4 4" />
            <text x="320" y="195" fontSize="14" fontWeight="600" className="fill-primary" textAnchor="middle">Base de Conocimiento</text>
            <text x="320" y="215" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">• Docs técnicas</text>
            <text x="320" y="235" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">• Manuales</text>
            <text x="320" y="255" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">• FAQs</text>
        </g>
        
        {/* ROW 3: Generation Flow */}
        <g className="text-center">
          {/* 4. Generation */}
          <rect x="450" y="200" width="160" height="80" rx="12" className="fill-card stroke-border" />
          <text x="530" y="230" fontSize="14" fontWeight="600" className="fill-primary" textAnchor="middle">4. Generar</text>
          <text x="530" y="255" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">LLM con Contexto</text>

          <path d="M 450 240 H 210" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ar_rag)" />
          
          {/* 5. Response */}
          <rect x="50" y="200" width="160" height="80" rx="12" className="fill-card stroke-green-500 stroke-2" />
          <text x="130" y="230" fontSize="14" fontWeight="600" className="fill-green-600" textAnchor="middle">5. Respuesta</text>
          <text x="130" y="255" fontSize="12" className="fill-secondary-foreground" textAnchor="middle">Verificada y Relevante</text>
        </g>

        {/* Legend */}
        <g className="font-body text-left">
          <text x="630" y="215" fontSize="12" className="fill-secondary-foreground" fontWeight="600">Ventajas Clave:</text>
          <text x="630" y="235" fontSize="12" className="fill-secondary-foreground">✓ Evita alucinaciones</text>
          <text x="630" y="255" fontSize="12" className="fill-secondary-foreground">✓ Fuentes verificables</text>
          <text x="630" y="275" fontSize="12" className="fill-secondary-foreground">✓ Contenido actualizado</text>
        </g>
      </g>
    </svg>
  );
}