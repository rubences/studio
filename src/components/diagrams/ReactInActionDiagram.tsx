export function ReactInActionDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker
          id="arrow_react_action"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" className="fill-secondary-foreground" />
        </marker>
      </defs>
      {/* Top flow */}
      <g>
        <rect x="20" y="15" width="110" height="50" rx="4" className="fill-primary" />
        <text x="75" y="32" fontSize="10" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
          Usuario
        </text>
        <text x="75" y="48" fontSize="9" className="fill-primary-foreground" textAnchor="middle">
          "Error 404"
        </text>
        <path d="M 130 40 L 165 40" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_react_action)" />

        <rect x="165" y="15" width="100" height="50" rx="4" className="fill-primary" />
        <text x="215" y="32" fontSize="10" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
          1. Razonar
        </text>
        <text x="215" y="48" fontSize="8" className="fill-primary-foreground" textAnchor="middle">
          Buscar en KB
        </text>
        <path d="M 265 40 L 300 40" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_react_action)" />

        <rect x="300" y="15" width="100" height="50" rx="4" fill="#10b981" />
        <text x="350" y="32" fontSize="10" fontWeight="bold" className="fill-foreground" textAnchor="middle">
          2. Actuar
        </text>
        <text x="350" y="48" fontSize="8" className="fill-foreground" textAnchor="middle">
          SearchKB()
        </text>
        <path d="M 400 40 L 435 40" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_react_action)" />

        <rect x="435" y="15" width="100" height="50" rx="4" fill="#f59e0b" />
        <text x="485" y="32" fontSize="10" fontWeight="bold" className="fill-primary-foreground" textAnchor="middle">
          3. Observar
        </text>
        <text x="485" y="48" fontSize="8" className="fill-primary-foreground" textAnchor="middle">
          3 soluciones
        </text>
        <path d="M 535 40 L 570 40" className="stroke-secondary-foreground" strokeWidth="2" markerEnd="url(#arrow_react_action)" />

        <rect x="570" y="15" width="110" height="50" rx="4" fill="#10b981" />
        <text x="625" y="32" fontSize="10" fontWeight="bold" className="fill-foreground" textAnchor="middle">
          Respuesta
        </text>
        <text x="625" y="48" fontSize="8" className="fill-foreground" textAnchor="middle">
          Estructurada
        </text>
      </g>

      {/* Bottom: Data flow */}
      <g>
        <text x="20" y="100" fontSize="10" fontWeight="bold" className="fill-secondary-foreground">
          Entrada del usuario:
        </text>
        <rect x="20" y="110" width="760" height="35" rx="3" className="fill-card stroke-secondary-foreground" strokeWidth="1" />
        <text x="30" y="130" fontSize="9" className="fill-secondary-foreground">
          "Cuando intento acceder a mi dashboard, aparece error 404. ¿Qué hago?"
        </text>

        <text x="20" y="160" fontSize="10" fontWeight="bold" className="fill-secondary-foreground">
          Salida del agente:
        </text>
        <rect x="20" y="170" width="760" height="95" rx="3" className="fill-card stroke-green-500" strokeWidth="1" />
        <text x="30" y="190" fontSize="9" className="fill-green-500" fontWeight="bold">
          ✓ El error 404 significa que el recurso no existe.
        </text>
        <text x="30" y="207" fontSize="9" fontWeight="bold" className="fill-secondary-foreground">
          Soluciones:
        </text>
        <text x="40" y="221" fontSize="9" className="fill-secondary-foreground">
          1. Verifica que tu sesión esté activa (logout/login)
        </text>
        <text x="40" y="235" fontSize="9" className="fill-secondary-foreground">
          2. Limpia el caché del navegador (Ctrl+Shift+Del)
        </text>
        <text x="40" y="249" fontSize="9" className="fill-secondary-foreground">
          3. Usa navegador privado para descartar extensiones
        </text>
        <text x="30" y="263" fontSize="8" className="fill-muted-foreground" fontStyle="italic">
          Fuentes: FAQ #42, Manual usuario v3.2 | Confianza: 94%
        </text>
      </g>
    </svg>
  );
}
