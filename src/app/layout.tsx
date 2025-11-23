import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontManrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "AgentFlow",
  description: "Paradigma de Automatización Empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="">
      <body
        className={cn(
          "font-body antialiased",
          fontInter.variable,
          fontManrope.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
