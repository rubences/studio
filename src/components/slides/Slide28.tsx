import { FileCheck2, TestTube2, ShieldCheck, Settings, DatabaseZap, Scaling, AlertTriangle, Undo2 } from "lucide-react";

export function Slide28() {
  const checklistItems = [
    { icon: DatabaseZap, title: "Arquitectura de Datos", description: "Definida la estrategia para memoria a corto plazo (conversación) y largo plazo (RAG)." },
    { icon: TestTube2, title: "Validación de Herramientas", description: "Cada `tool` tiene pruebas unitarias y de integración que cubren casos de éxito y error." },
    { icon: FileCheck2, title: "Pruebas de Trayectoria", description: "Verificado que el ciclo ReAct (Razón-Acción-Observación) sigue la secuencia lógica esperada." },
    { icon: Scaling, title: "Métricas de Evaluación", description: "Definidos los KPIs para las 4 capas de AgentOps (componente, trayectoria, resultado, sistema)." },
    { icon: AlertTriangle, title: "Monitoreo y Alertas", description: "Configurado el seguimiento de latencia, tasa de error y coste por ejecución en Cloud Monitoring." },
    { icon: ShieldCheck, title: "Seguridad y Compliance", description: "Implementada la validación de inputs (prompt injection) y auditoría de acciones (logs inmutables)." },
    { icon: Undo2, title: "Plan de Rollback", description: "Existe un procedimiento claro y automatizado para revertir a una versión anterior en caso de fallo crítico." },
    { icon: Settings, title: "Configuración de Entorno", description: "Variables de entorno, secrets y permisos (IAM) están gestionados de forma segura para producción." },
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-8 text-primary">
        Checklist de Despliegue a Producción
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {checklistItems.map((item, index) => (
          <div key={index} className="bg-card p-4 rounded-lg border flex items-start gap-4 transition-all hover:border-primary">
            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
              <item.icon className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
