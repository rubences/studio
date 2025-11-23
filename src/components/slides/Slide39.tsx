import { ShoppingCart, PackageSearch, Truck, ArrowRight } from 'lucide-react';

function Step({ icon: Icon, title, description, color, isFirst = false, isLast = false }: any) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className={`p-3 rounded-full bg-${color}/20 text-${color}`}>
          <Icon className="size-6" />
        </div>
        {!isLast && <div className="w-0.5 h-16 bg-border mt-2"></div>}
      </div>
      <div className="bg-card border rounded-lg p-4 flex-1">
        <h3 className={`font-semibold text-${color}`}>{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function Slide39() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-8 md:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Gestor de Devoluciones (E-commerce)</h2>
      <p className="text-secondary-foreground mb-8 max-w-3xl">Automatiza el proceso de devoluciones para mejorar la experiencia del cliente.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Step
          icon={ShoppingCart}
          title="1. Solicitud de Devolución"
          description="Cliente inicia la devolución desde su área personal: 'Quiero devolver la camiseta del pedido #12345'."
          color="primary"
          isFirst={true}
        />
        <Step
          icon={PackageSearch}
          title="2. Validación y Logística"
          description="Agente verifica la política de devolución (plazo, estado), genera una etiqueta de envío con la API de la mensajería y la envía al cliente."
          color="accent"
        />
        <Step
          icon={Truck}
          title="3. Seguimiento y Reembolso"
          description="El agente monitorea el estado del envío. Una vez recibido en el almacén, procesa automáticamente el reembolso y notifica al cliente."
          color="green-500"
          isLast={true}
        />
      </div>
    </section>
  );
}
