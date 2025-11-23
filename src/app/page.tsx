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


export default function Home() {
  const slides = [
    <Slide01 />, <Slide02 />, <Slide03 />, <Slide04 />, <Slide05 />, 
    <Slide06 />, <Slide07 />, <Slide08 />, <Slide09 />, <Slide10 />, 
    <Slide11 />, <AgentInteractionSlide />, <Slide12 />, <Slide12b />, <Slide13 />, 
    <Slide14 />, <Slide15 />, <Slide16 />, <Slide17 />, <Slide18 />, 
    <Slide19 />, <Slide20 />, <Slide21 />, <Slide22 />, <Slide23 />, 
    <Slide24 />, <Slide25 />, 
    <Slide26 />, <Slide26b />, <Slide26c />, <Slide26d />, 
    <Slide37 />, <Slide38 />, <Slide39 />, <Slide40 />,
    <Slide27 />, <Slide28 />, <Slide29 />, <Slide30 />,
    <Slide31 />, <Slide32 />, <Slide33 />, <Slide34 />, <Slide35 />, 
    <Slide36 />
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-8">
      <div className="absolute top-8 left-8 text-lg font-headline font-bold text-foreground">AgentFlow</div>
      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video bg-card rounded-2xl border shadow-sm overflow-hidden">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary hover:bg-primary/10 hover:text-primary -left-16" />
        <CarouselNext className="text-primary hover:bg-primary/10 hover:text-primary -right-16" />
      </Carousel>
      <div className="absolute bottom-8 text-sm text-muted-foreground">Usa las flechas para navegar</div>
    </main>
  );
}
