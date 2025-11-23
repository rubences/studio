import Link from "next/link";

export function Slide32() {
  return (
    <section className="h-full w-full flex flex-col justify-center p-16 bg-background text-foreground">
      <h2 className="font-headline text-4xl mb-6 text-primary">
        Recursos Oficiales - Enlaces Rápidos
      </h2>
      <div className="space-y-2 mt-4 text-sm w-full">
        <div className="bg-card p-3">
          <p className="font-bold text-primary">📖 Documentación Oficial</p>
          <Link href="https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/quickstart?hl=es" target="_blank" className="text-primary hover:underline">
            Guía rápida: Vertex AI Agent Engine →
          </Link>
        </div>
        <div className="bg-card p-3">
          <p className="font-bold text-primary">⚡ ADK Open Source</p>
          <Link href="https://github.com/google-cloud/agents" target="_blank" className="text-primary hover:underline">
            Repositorio GitHub - Código abierto →
          </Link>
        </div>
        <div className="bg-card p-3">
          <p className="font-bold text-primary">🚀 Codelab Interactivo</p>
          <Link href="https://codelabs.developers.google.com/devsite/codelabs/building-ai-agents-vertexai?hl=es-419" target="_blank" className="text-primary hover:underline">
            Aprende paso a paso →
          </Link>
        </div>
        <div className="bg-card p-3">
          <p className="font-bold text-primary">💰 Prueba Gratuita</p>
          <Link href="https://cloud.google.com/free/docs/free-cloud-features?hl=es-419" target="_blank" className="text-primary hover:underline">
            Obtén $300 crédito gratis por 90 días →
          </Link>
        </div>
        <div className="bg-card p-3">
          <p className="font-bold text-primary">🎓 Manual AI Agents</p>
          <Link href="https://cloud.google.com/resources/content/intl/es-419/the-ai-agent-handbook?hl=es-419" target="_blank" className="text-primary hover:underline">
            10 ejemplos prácticos de agentes →
          </Link>
        </div>
      </div>
    </section>
  );
}
