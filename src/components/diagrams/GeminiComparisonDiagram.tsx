export function GeminiComparisonDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Headers */}
            <text x="50" y="25" fontSize="11" fontWeight="bold" className="fill-secondary-foreground">Modelo</text>
            <text x="220" y="25" fontSize="11" fontWeight="bold" className="fill-secondary-foreground">Caso de Uso</text>
            <text x="480" y="25" fontSize="11" fontWeight="bold" className="fill-secondary-foreground">Costo-Beneficio</text>
            
            {/* Row 1: Flash-Lite */}
            <rect x="10" y="35" width="780" height="45" rx="3" className="fill-card"/>
            <text x="50" y="60" fontSize="10" fontWeight="bold" className="fill-primary">Flash-Lite</text>
            <text x="220" y="60" fontSize="10" className="fill-secondary-foreground">Tareas rutinarias, bajo costo</text>
            <rect x="480" y="42" width="100" height="30" rx="2" className="fill-muted"/>
            <text x="530" y="62" fontSize="9" className="fill-muted-foreground" textAnchor="middle" fontWeight="bold">Muy bajo costo</text>
            
            {/* Row 2: Flash */}
            <rect x="10" y="85" width="780" height="45" rx="3" className="fill-card"/>
            <text x="50" y="110" fontSize="10" fontWeight="bold" className="fill-primary">Flash</text>
            <text x="220" y="110" fontSize="10" className="fill-secondary-foreground">Producción. Equilibrio óptimo</text>
            <rect x="480" y="92" width="100" height="30" rx="2" fill="#10b981"/>
            <text x="530" y="112" fontSize="9" className="fill-foreground" textAnchor="middle" fontWeight="bold">👍 Recomendado</text>
            
            {/* Row 3: Pro */}
            <rect x="10" y="135" width="780" height="45" rx="3" className="fill-card"/>
            <text x="50" y="160" fontSize="10" fontWeight="bold" className="fill-primary">Pro</text>
            <text x="220" y="160" fontSize="10" className="fill-secondary-foreground">Razonamiento complejo, código</text>
            <rect x="480" y="142" width="100" height="30" rx="2" fill="#f59e0b"/>
            <text x="530" y="162" fontSize="9" className="fill-primary-foreground" textAnchor="middle" fontWeight="bold">Costo premium</text>
        </svg>
    );
}
