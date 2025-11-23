export function RagDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="ar_rag"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" className="fill-secondary-foreground" />
        </marker>
      </defs>
      {/* User Input */}
      <rect x="30" y="20" width="120" height="60" rx="4" className="fill-primary stroke-secondary-foreground" strokeWidth="2" />
      <text x="90" y="35" fontSize="11" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
        Usuario
      </text>
      <text x="90" y="55" fontSize="10" className="fill-primary-foreground" textAnchor="middle">
        "¿Cómo instalo?"
      </text>
      <line x1="150" y1="50" x2="190" y2="50" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#ar_rag)" />

      {/* LLM Query Processing */}
      <rect x="190" y="20" width="120" height="60" rx="4" className="fill-accent stroke-secondary-foreground" strokeWidth="2" />
      <text x="250" y="35" fontSize="11" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">
        LLM
      </text>
      <text x="250" y="55" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        Procesa query
      </text>
      <line x1="310" y1="50" x2="350" y2="50" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#ar_rag)" />

      {/* Retrieval from Knowledge Base */}
      <rect x="350" y="20" width="140" height="60" fill="#10b981" rx="4" className="stroke-secondary-foreground" strokeWidth="2" />
      <text x="420" y="35" fontSize="11" fontWeight="bold" className="fill-foreground" textAnchor="middle">
        Base de Conocimiento
      </text>
      <text x="420" y="55" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        Documentos vectoriales
      </text>

      {/* Knowledge base details below */}
      <rect x="350" y="100" width="140" height="80" rx="4" className="fill-card stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />
      <text x="420" y="120" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">
        • FAQs
      </text>
      <text x="420" y="135" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">
        • Manuales
      </text>
      <text x="420" y="150" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">
        • Docs técnicas
      </text>
      <text x="420" y="165" fontSize="9" className="fill-secondary-foreground" textAnchor="middle">
        • Casos pasados
      </text>

      <line x1="420" y1="80" x2="420" y2="100" className="stroke-secondary-foreground" strokeWidth="1" strokeDasharray="2,2" />

      {/* Arrow back to LLM */}
      <path d="M 420 80 Q 420 180 250 180 Q 250 100 250 80" stroke="hsl(var(--secondary-foreground))" strokeWidth="2" fill="none" markerEnd="url(#ar_rag)" />
      <text x="330" y="195" fontSize="9" className="fill-muted-foreground" textAnchor="middle">
        Contexto relevante
      </text>

      {/* LLM Generate Response */}
      <rect x="190" y="200" width="120" height="60" rx="4" className="fill-accent stroke-secondary-foreground" strokeWidth="2" />
      <text x="250" y="215" fontSize="11" fontWeight="bold" className="fill-accent-foreground" textAnchor="middle">
        LLM
      </text>
      <text x="250" y="235" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        Genera respuesta
      </text>
      <line x1="190" y1="230" x2="150" y2="230" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#ar_rag)" />

      {/* Response */}
      <rect x="30" y="200" width="120" height="60" rx="4" fill="#10b981" className="stroke-secondary-foreground" strokeWidth="2" />
      <text x="90" y="215" fontSize="11" fontWeight="bold" className="fill-foreground" textAnchor="middle">
        Respuesta
      </text>
      <text x="90" y="235" fontSize="10" className="fill-secondary-foreground" textAnchor="middle">
        Verificada + Referencias
      </text>

      {/* Legend */}
      <text x="600" y="35" fontSize="11" className="fill-secondary-foreground" fontWeight="bold">
        Ventajas RAG:
      </text>
      <text x="600" y="55" fontSize="10" className="fill-muted-foreground">
        ✓ Sin alucinaciones
      </text>
      <text x="600" y="70" fontSize="10" className="fill-muted-foreground">
        ✓ Fuentes verificadas
      </text>
      <text x="600" y="85" fontSize="10" className="fill-muted-foreground">
        ✓ Actualización fácil
      </text>
      <text x="600" y="100" fontSize="10" className="fill-muted-foreground">
        ✓ Trazabilidad
      </text>
    </svg>
  );
}
