
"use client";

import { useState } from 'react';
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Slide01 } from "@/components/slides/Slide01";
import { Slide02 } from "@/components/slides/Slide02";
import { Slide03 } from "@/components/slides/Slide03";
import { Slide04 } from "@/components/slides/Slide04";
import { Slide05 } from "@/components/slides/Slide05";
import { Slide06 } from "@/components/slides/Slide06";
import { Slide07 } from "@/components/slides/Slide07";
import { Slide08 } from "@/components/slides/Slide08";
import { Slide09 } from "@/components/slides/Slide09";
import { Slide10 } from "@/components/slides/Slide10";
import { Slide11 } from "@/components/slides/Slide11";
import { AgentInteractionSlide } from "@/components/slides/AgentInteractionSlide";
import { Slide12 } from "@/components/slides/Slide12";
import { Slide12b } from "@/components/slides/Slide12b";
import { Slide13 } from "@/components/slides/Slide13";
import { Slide14 } from "@/components/slides/Slide14";
import { Slide15 } from "@/components/slides/Slide15";
import { Slide16 } from "@/components/slides/Slide16";
import { Slide17 } from "@/components/slides/Slide17";
import { Slide18 } from "@/components/slides/Slide18";
import { Slide19 } from "@/components/slides/Slide19";
import { Slide20 } from "@/components/slides/Slide20";
import { Slide21 } from "@/components/slides/Slide21";
import { Slide22 } from "@/components/slides/Slide22";
import { Slide23 } from "@/components/slides/Slide23";
import { Slide24 } from "@/components/slides/Slide24";
import { Slide25 } from "@/components/slides/Slide25";
import { Slide26 } from "@/components/slides/Slide26";
import { Slide26b } from "@/components/slides/Slide26b";
import { Slide26c } from "@/components/slides/Slide26c";
import { Slide26d } from "@/components/slides/Slide26d";
import { Slide27 } from "@/components/slides/Slide27";
import { Slide28 } from "@/components/slides/Slide28";
import { Slide29 } from "@/components/slides/Slide29";
import { Slide30 } from "@/components/slides/Slide30";
import { Slide31 } from "@/components/slides/Slide31";
import { Slide32 } from "@/components/slides/Slide32";
import { Slide33 } from "@/components/slides/Slide33";
import { Slide34 } from "@/components/slides/Slide34";
import { Slide35 } from "@/components/slides/Slide35";
import { Slide36 } from "@/components/slides/Slide36";
import { Slide37 } from "@/components/slides/Slide37";
import { Slide38 } from "@/components/slides/Slide38";
import { Slide39 } from "@/components/slides/Slide39";
import { Slide40 } from "@/components/slides/Slide40";
import { SlideNavigator, SlideDeck } from '@/components/slides/SlideNavigator';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const slideDeck: SlideDeck = [
  { title: "Introducción: Agentes de IA", component: <Slide01 /> },
  { title: "¿Qué es un Agente de IA?", component: <Slide02 /> },
  { title: "Impacto Estratégico", component: <Slide03 /> },
  { title: "Anatomía de un Agente", component: <Slide04 /> },
  { title: "El Cerebro: Modelos Gemini", component: <Slide05 /> },
  { title: "Las Manos: Herramientas", component: <Slide06 /> },
  { title: "La Memoria: 4 Capas", component: <Slide07 /> },
  { title: "Profundizando: RAG", component: <Slide08 /> },
  { title: "Caminos de Construcción", component: <Slide09 /> },
  { title: "Framework: ADK", component: <Slide10 /> },
  { title: "Arquitecturas de Agentes", component: <Slide11 /> },
  { title: "Motor: Ciclo ReAct", component: <Slide12 /> },
  { title: "ReAct en Acción", component: <Slide12b /> },
  { title: "Opciones de Despliegue", component: <Slide13 /> },
  { title: "Evaluación (AgentOps)", component: <Slide14 /> },
  { title: "Ecosistema: Protocolos Abiertos", component: <Slide15 /> },
  { title: "Protocolos en Práctica", component: <Slide27 /> },
  { title: "Roadmap por Etapa de Startup", component: <Slide26d /> },
  { title: "Demo: Asistente Interactivo", component: <AgentInteractionSlide /> },
  { title: "Caso Práctico: Ventas", component: <Slide26 /> },
  { title: "Caso Práctico: Soporte", component: <Slide26b /> },
  { title: "Caso Práctico: DevOps", component: <Slide26c /> },
  { title: "Caso Práctico: Onboarding Fintech", component: <Slide37 /> },
  { title: "Caso Práctico: Citas de Salud", component: <Slide38 /> },
  { title: "Caso Práctico: Devoluciones E-commerce", component: <Slide39 /> },
  { title: "Caso Práctico: Análisis Legaltech", component: <Slide40 /> },
  { title: "Checklist Pre-Producción", component: <Slide28 /> },
  { title: "Desafíos y Limitaciones", component: <Slide29 /> },
  { title: "Midiendo el ROI", component: <Slide30 /> },
  { title: "El Futuro (2025-2026)", component: <Slide31 /> },
  { title: "Resumen: 5 Puntos Clave", component: <Slide35 /> },
  { title: "Recursos y Siguientes Pasos", component: <Slide32 /> },
  { title: "¿Preguntas?", component: <Slide33 /> },
  { title: "Gracias", component: <Slide36 /> },
];

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <main className="flex flex-col h-screen bg-background p-4 sm:p-8 font-sans">
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-lg text-foreground">AgentFlow</h1>
          <Link href="https://cloud.google.com/vertex-ai?hl=es" target="_blank" className="flex items-center gap-1.5 text-sm text-primary hover:underline">
            Vertex AI <ExternalLink className="size-3" />
          </Link>
        </div>
        <SlideNavigator deck={slideDeck} api={api} />
      </header>

      <div className="flex-1 flex items-center justify-center w-full">
        <Carousel setApi={setApi} className="w-full max-w-6xl">
          <CarouselContent>
            {slideDeck.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video bg-card rounded-2xl border shadow-lg overflow-hidden">
                  {slide.component}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:bg-primary/10 hover:text-primary -left-12 size-10" />
          <CarouselNext className="text-primary hover:bg-primary/10 hover:text-primary -right-12 size-10" />
        </Carousel>
      </div>

      <footer className="w-full text-center text-sm text-muted-foreground mt-4">
        Usa las flechas para navegar o selecciona una diapositiva en el menú superior derecho
      </footer>
    </main>
  );
}
