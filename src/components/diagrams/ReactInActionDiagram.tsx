export function ReactInActionDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <marker id="arrow_react_action" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" className="fill-muted-foreground" />
        </marker>
        <style>
          {`
            .flow-box { fill: hsl(var(--card)); stroke: hsl(var(--border)); stroke-width: 1.5; transition: all 0.2s ease-in-out; }
            .flow-box:hover { transform: translateY(-3px); }
            .flow-text-title { font-size: 14px; font-weight: 600; fill: hsl(var(--primary)); }
            .flow-text-desc { font-size: 12px; fill: hsl(var(--secondary-foreground)); }
            .user-input-box { fill: hsl(var(--secondary)); stroke: hsl(var(--border)); }
            .agent-output-box { fill: hsl(var(--card)); stroke: hsl(var(--chart-4)); stroke-width: 2; }
          `}
        </style>
      </defs>

      {/* Top flow */}
      <g>
        <path d="M 80 75 L 720 75" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Step 1: User */}
        <g className="flow-box">
          <rect x="20" y="50" width="120" height="50" rx="8" />
          <text x="80" y="70" className="flow-text-title" textAnchor="middle">Usuario</text>
          <text x="80" y="88" className="flow-text-desc" textAnchor="middle">"Error 404"</text>
        </g>
        
        {/* Step 2: Razonar */}
        <g className="flow-box">
          <rect x="190" y="50" width="120" height="50" rx="8" />
          <text x="250" y="70" className="flow-text-title" textAnchor="middle">1. Razonar</text>
          <text x="250" y="88" className="flow-text-desc" textAnchor="middle">Buscar en KB</text>
        </g>
        
        {/* Step 3: Actuar */}
        <g className="flow-box">
          <rect x="360" y="50" width="120" height="50" rx="8" />
          <text x="420" y="70" className="flow-text-title" textAnchor="middle">2. Actuar</text>
          <text x="420" y="88" className="flow-text-desc" textAnchor="middle">SearchKB()</text>
        </g>

        {/* Step 4: Observar */}
        <g className="flow-box">
          <rect x="530" y="50" width="120" height="50" rx="8" />
          <text x="590" y="70" className="flow-text-title" textAnchor="middle">3. Observar</text>
          <text x="590" y="88" className="flow-text-desc" textAnchor="middle">3 soluciones</text>
        </g>

        {/* Step 5: Respuesta */}
        <g className="flow-box">
          <rect x="700" y="50" width="120" height="50" rx="8" />
          <text x="760" y="70" className="flow-text-title" textAnchor="middle">Respuesta</text>
          <text x="760" y="88" className="flow-text-desc" textAnchor="middle">Estructurada</text>
        </g>
      </g>

      {/* Bottom: Data flow */}
      <g>
        <text x="20" y="150" fontSize="12" fontWeight="600" className="fill-secondary-foreground">Entrada del usuario:</text>
        <rect x="20" y="165" width="760" height="35" rx="8" className="user-input-box" />
        <text x="30" y="187" fontSize="13" className="fill-secondary-foreground" fontFamily="var(--font-inter)">
          "Cuando intento acceder a mi dashboard, aparece error 404. ¿Qué hago?"
        </text>

        <text x="20" y="225" fontSize="12" fontWeight="600" className="fill-secondary-foreground">Salida del agente:</text>
        <rect x="20" y="240" width="760" height="95" rx="8" className="agent-output-box" />
        <text x="35" y="260" fontSize="13" className="fill-green-600" fontWeight="bold">
          ✓ El error 404 significa que el recurso no existe. Aquí tienes 3 posibles soluciones:
        </text>
        <text x="45" y="280" fontSize="13" className="fill-secondary-foreground">
          1. Verifica que tu sesión esté activa (logout/login).
        </text>
        <text x="45" y="298" fontSize="13" className="fill-secondary-foreground">
          2. Limpia el caché del navegador (Ctrl+Shift+Del).
        </text>
        <text x="45" y="316" fontSize="13" className="fill-secondary-foreground">
          3. Usa un navegador en modo privado para descartar extensiones.
        </text>
        <text x="770" y="325" fontSize="10" className="fill-muted-foreground" fontStyle="italic" textAnchor="end">
          Fuentes: FAQ #42, Manual v3.2 | Confianza: 94%
        </text>
      </g>
    </svg>
  );
}

    