
"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type Slide = {
  title: string;
  component: React.ReactNode;
};

export type SlideDeck = Slide[];

interface SlideNavigatorProps {
  deck: SlideDeck;
  api: CarouselApi | undefined;
}

export function SlideNavigator({ deck, api }: SlideNavigatorProps) {
  const [open, setOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial value

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between text-muted-foreground"
        >
          <span className="truncate">{deck[currentSlide]?.title || "Seleccionar diapositiva..."}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Buscar diapositiva..." />
          <CommandList>
            <CommandEmpty>No se encontró la diapositiva.</CommandEmpty>
            <CommandGroup>
              {deck.map((slide, index) => (
                <CommandItem
                  key={slide.title}
                  value={slide.title}
                  onSelect={() => handleSelect(index)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="truncate">{index + 1}. {slide.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

    