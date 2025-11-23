import { ShoppingCart, PackageSearch, Truck, ArrowRight } from 'lucide-react';

function Step({ icon: Icon, title, description, color }: any) {
  return (
    <div className="relative pl-12 pb-8">
      <div className={`absolute left-0 top-1 p-3 rounded-full bg-${color}/10 text-${color}`}>
        <Icon className="size-6" />
      </div>
      <div className="absolute left-4 top-14 bottom-0 w-0.5 bg-border"></div>
      <h3 className={`font-semibold text-base text-${color}`}>{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function Slide39() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center p-8 md:p-16 bg-background text-foreground">
      <div className="w-full max-w-4xl">
        <h2 className="font-headline text-3xl md:text-4xl mb-2 text-primary">Caso Práctico: Gestor de Devoluciones (E-commerce)</h2>
        <p className="text-secondary-foreground mb-12">Automatiza todo el ciclo de una devolución para mejorar la experiencia del cliente y reducir la carga operativa.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Step
              icon={ShoppingCart}
              title="1. Solicitud"
              description="Cliente inicia la devolución desde su área personal: 'Quiero devolver la camiseta del pedido #12345'."
              color="primary"
            />
          </div>
          <div>
            <Step
              icon={PackageSearch}
              title="2. Validación y Logística"
              description="Agente verifica la política de devolución (plazo, estado), genera una etiqueta de envío con la API de la mensajería y la envía al cliente por email."
              color="accent"
            />
          </div>
          <div>
            <div className="relative pl-12">
                <div className={`absolute left-0 top-1 p-3 rounded-full bg-green-500/10 text-green-500`}>
                    <Truck className="size-6" />
                </div>
                <h3 className={`font-semibold text-base text-green-500`}>3. Seguimiento y Reembolso</h3>
                <p className="text-sm text-muted-foreground">El agente monitorea el estado del envío. Una vez recibido en el almacén, procesa automáticamente el reembolso y notifica al cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    