export function GeminiComparisonDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg" className={className}>
            <style>
              {`
                .row-bg { fill: hsl(var(--card)); }
                .row-bg:hover { fill: hsl(var(--secondary)); }
                .title-text { font-size: 14px; font-weight: 600; fill: hsl(var(--primary)); font-family: var(--font-manrope); }
                .desc-text { font-size: 12px; fill: hsl(var(--secondary-foreground)); }
                .header-text { font-size: 12px; font-weight: 600; fill: hsl(var(--muted-foreground)); text-transform: uppercase; letter-spacing: 0.5px; }
              `}
            </style>
            
            {/* Headers */}
            <text x="50" y="35" className="header-text">Modelo</text>
            <text x="250" y="35" className="header-text">Caso de Uso Principal</text>
            <text x="550" y="35" className="header-text">Costo-Beneficio</text>
            
            <g>
              {/* Row 1: Flash-Lite */}
              <rect x="10" y="50" width="780" height="55" rx="8" className="row-bg transition-all duration-200" />
              <text x="50" y="80" className="title-text">Flash-Lite</text>
              <text x="250" y="80" className="desc-text">Tareas de alta frecuencia y bajo costo</text>
              <text x="550" y="80" className="desc-text" fontWeight="500">⚡️ Muy Rápido y Económico</text>
            </g>
            
            <g>
              {/* Row 2: Flash */}
              <rect x="10" y="115" width="780" height="55" rx="8" className="row-bg transition-all duration-200" />
              <rect x="10" y="115" width="4" height="55" rx="2" fill="hsl(var(--primary))" />
              <text x="50" y="145" className="title-text">Flash</text>
              <text x="250" y="145" className="desc-text">Equilibrio ideal para producción general</text>
              <text x="550" y="145" className="desc-text" fontWeight="500">👍 Balance Perfecto (Recomendado)</text>
            </g>

            <g>
              {/* Row 3: Pro */}
              <rect x="10" y="180" width="780" height="55" rx="8" className="row-bg transition-all duration-200" />
              <text x="50" y="210" className="title-text">Pro</text>
              <text x="250" y="210" className="desc-text">Razonamiento complejo, multimodalidad y código</text>
              <text x="550" y="210" className="desc-text" fontWeight="500">🧠 Máxima Potencia</text>
            </g>
        </svg>
    );
}
