import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sobre Carmen Rocío",
  description: "Conoce a Carmen Rocío, Terapeuta Holística y Maestra de Reiki Usui.",
};

export default function SobreMiPage() {
  return (
    <div className="w-full bg-background flex-1">
      {/* Hero Intersecting Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-dark rounded-bl-[100px] z-0 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-6 inline-block">
              Mi Historia
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-text-main mb-8 leading-[1.1]">
              El viaje hacia <br className="hidden md:block"/>
              <span className="text-primary italic">la luz interior</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Hace más de una década, el estrés, la hiperactividad del día a día y la desconexión conmigo misma me llevaron a una crisis personal profunda. Buscaba respuestas fuera hasta que el Reiki me enseñó a mirar hacia adentro.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Tras mi primera iniciación, mi vida dio un vuelco. Entendí que la sanación no significa que el daño nunca existió, sino que aquello ya no controla tu vida de manera inconsciente. 
            </p>
            <p className="text-text-main text-lg leading-relaxed font-medium">
              Hoy, mi única misión es compartir esa herramienta de liberación contigo.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="aspect-[3/4] rounded-t-full rounded-b-[40px] relative overflow-hidden bg-primary/20 border-8 border-background shadow-2xl mx-auto max-w-md">
              <Image
                src="/images/carmen.png"
                alt="Carmen Rocío en la naturaleza"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent mix-blend-multiply z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / CTA Section */}
      <section className="py-24 bg-white border-t border-border/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-text-main mb-8">
            Mi <span className="text-secondary italic">Filosofía</span>
          </h2>
          <p className="text-text-muted text-xl leading-relaxed mb-12 italic">
            "Todo el mundo tiene la capacidad innata de sanarse a sí mismo. Mi labor como terapeuta no es curarte mágicamente, sino encender de nuevo tu chispa y proporcionarte el canal de energía pura para que tu propio cuerpo recuerde cómo volver a su equilibrio natural."
          </p>
          
          <Link href="/contacto">
            <Button size="lg" className="px-10 h-14 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Inicia tu proceso de sanación
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
