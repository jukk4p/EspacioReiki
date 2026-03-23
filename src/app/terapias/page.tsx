import { Metadata } from "next";
import { Sparkles, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapias de Sanación",
  description: "Descubre nuestras terapias de Reiki, Armonización de Chakras y Sanación Pránica.",
};

export default function TerapiasPage() {
  return (
    <div className="w-full bg-background pt-32 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-text-main mb-6">
            Terapias de <span className="text-primary italic">Sanación</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Cada sesión está diseñada para devolverte al centro, equilibrando tu cuerpo físico, mental y espiritual mediante la imposición de manos y el flujo de energía vital.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {/* Terapia 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-white p-8 lg:p-12 rounded-3xl border border-border/10 shadow-sm">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h2 className="font-heading text-3xl font-medium text-text-main">Reiki Usui Tradicional</h2>
              <p className="text-text-muted leading-relaxed text-lg">
                La técnica por excelencia de canalización energética. Durante 60 minutos, trabajaré sobre tus centros energéticos para disolver nudos emocionales y liberar el estrés de tu sistema nervioso.
              </p>
              <ul className="space-y-3 py-4 text-text-muted">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Reducción drástica de ansiedad</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Mejora en la calidad del sueño</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Claridad mental y paz interior</li>
              </ul>
              <div className="flex items-center gap-6 pt-4">
                <span className="text-2xl font-medium text-primary">50€</span>
                <span className="text-text-muted">/ sesión (60 min)</span>
              </div>
              <Link href="/contacto">
                <Button className="mt-4 shadow-lg shadow-primary/20">Reservar Sesión</Button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] bg-primary/5 rounded-2xl flex items-center justify-center overflow-hidden relative border border-primary/10">
               <Image
                 src="/images/therapy.png"
                 alt="Sesión Reiki Usui"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply rounded-2xl z-10"></div>
            </div>
          </div>

          {/* Terapia 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 bg-white p-8 lg:p-12 rounded-3xl border border-border/10 shadow-sm">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <Activity className="w-7 h-7" />
              </div>
              <h2 className="font-heading text-3xl font-medium text-text-main">Armonización de Chakras</h2>
              <p className="text-text-muted leading-relaxed text-lg">
                Una técnica específica para diagnosticar y equilibrar los 7 vórtices principales de energía. Utilizando péndulo y cristales, restauramos la frecuencia vibratoria correcta de cada chakra.
              </p>
              <ul className="space-y-3 py-4 text-text-muted">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Mayor vitalidad física</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Eliminación de bloqueos creativos</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Estabilidad emocional profunda</li>
              </ul>
              <div className="flex items-center gap-6 pt-4">
                <span className="text-2xl font-medium text-secondary">45€</span>
                <span className="text-text-muted">/ sesión (45 min)</span>
              </div>
              <Link href="/contacto">
                <Button variant="outline" className="mt-4 text-secondary border-secondary/30 hover:bg-secondary/10">
                  Reservar Sesión
                </Button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] bg-secondary/5 rounded-2xl flex items-center justify-center overflow-hidden relative border border-secondary/10">
               <Image
                 src="/images/therapy.png"
                 alt="Armonización de Chakras"
                 fill
                 className="object-cover rotate-180 opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent mix-blend-multiply rounded-2xl z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
