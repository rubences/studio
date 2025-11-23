export function GeminiComparisonDiagram({ className }: { className?: string }) {
    const models = [
        {
            name: "Flash",
            useCase: "Tareas de alta frecuencia y bajo costo, ideal para escalar.",
            benefit: "⚡️ Muy Rápido y Económico",
            color: "hsl(var(--chart-1))",
        },
        {
            name: "Flash-Lite",
            useCase: "Equilibrio ideal para la mayoría de las aplicaciones en producción.",
            benefit: "👍 Balance Perfecto (Recomendado)",
            color: "hsl(var(--chart-2))",
            highlight: true,
        },
        {
            name: "Pro",
            useCase: "Razonamiento complejo, multimodalidad y generación de código avanzada.",
            benefit: "🧠 Máxima Potencia",
            color: "hsl(var(--chart-3))",
        },
    ];

    return (
        <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className={className}>
            <style>
              {`
                .model-card { transition: all 0.2s ease-in-out; }
                .model-card:hover { transform: translateY(-5px); }
                .header-text { font-size: 14px; font-weight: 600; fill: hsl(var(--muted-foreground)); text-transform: uppercase; letter-spacing: 0.8px; font-family: var(--font-manrope); }
                .model-name { font-size: 22px; font-weight: 700; font-family: var(--font-headline); }
                .model-desc { font-size: 14px; fill: hsl(var(--secondary-foreground)); }
                .model-benefit { font-size: 16px; font-weight: 600; fill: hsl(var(--foreground)); }
              `}
            </style>
            
            {/* Headers */}
            <text x="40" y="35" className="header-text">Modelo</text>
            <text x="270" y="35" className="header-text">Caso de Uso Principal</text>
            <text x="620" y="35" className="header-text">Costo-Beneficio</text>
            
            {models.map((model, index) => (
                <g key={model.name} className="model-card">
                    <rect 
                        x="20" 
                        y={60 + index * 80} 
                        width="760" 
                        height="70" 
                        rx="12" 
                        fill="hsl(var(--card))" 
                        stroke={model.highlight ? model.color : "hsl(var(--border))"}
                        strokeWidth={model.highlight ? "2.5" : "1.5"}
                    />
                    {model.highlight && <rect x="20" y={60 + index * 80} width="6" height="70" rx="0" fill={model.color} style={{borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}} />}

                    <text x="50" y={100 + index * 80} className="model-name" fill={model.color}>Gemini {model.name}</text>
                    <text x="270" y={92 + index * 80} className="model-desc">{model.useCase.split(',')[0]}</text>
                    {model.useCase.split(',')[1] && <text x="270" y={108 + index * 80} className="model-desc">{model.useCase.split(',')[1].trim()}</text>}
                    <text x="620" y={100 + index * 80} className="model-benefit">{model.benefit}</text>
                </g>
            ))}
        </svg>
    );
}
