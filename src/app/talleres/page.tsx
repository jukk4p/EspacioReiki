import { Metadata } from "next";
import { Sun, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos y Talleres",
  description: "Fórmate en Reiki Usui con Carmen Rocío. Niveles 1, 2, 3 y Maestría.",
};

export default function TalleresPage() {
  return (
    <div className="w-full bg-background pt-32 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-text-main mb-6">
            Cursos y <span className="text-accent italic">Talleres</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Iníciate en el sendero del Reiki y aprende a canalizar energía para tu propia sanación y la de los demás. Grupos reducidos para una enseñanza personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Nivel 1 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/10 shadow-sm flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Sun className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Iniciación</span>
            </div>
            
            <h2 className="font-heading text-3xl font-medium text-text-main mb-4">Nivel 1: Shoden</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              El despertar. En este nivel se abre tu canal energético para que puedas transmitir Reiki a nivel físico. Aprenderás el autotratamiento y el tratamiento a otras personas, animales y plantas.
            </p>
            <div className="bg-background/50 rounded-2xl p-6 mb-8 mt-auto">
              <h3 className="font-medium text-text-main mb-4">Qué incluye:</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Manual interactivo
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Prácticas del autotratamiento
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Diploma acreditativo oficial
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 1 mes soporte online
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-medium text-text-main">150€</span>
              <Link href="/contacto">
                <Button className="bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/20">
                  Inscribirse
                </Button>
              </Link>
            </div>
          </div>

          {/* Nivel 2 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/10 shadow-sm flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Flame className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Profundización</span>
            </div>
            
            <h2 className="font-heading text-3xl font-medium text-text-main mb-4">Nivel 2: Okuden</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              La transformación. Trabajarás a nivel mental y emocional. Aprenderás los símbolos sagrados del Reiki y la técnica para enviar energía a distancia en el espacio y en el tiempo.
            </p>
            <div className="bg-background/50 rounded-2xl p-6 mb-8 mt-auto">
              <h3 className="font-medium text-text-main mb-4">Qué incluye:</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Los 3 símbolos de poder
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Limpieza de espacios físicos
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Diploma nivel II
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Tratamiento de sanación a distancia
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-medium text-text-main">200€</span>
              <Link href="/contacto">
                <Button className="bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20">
                  Inscribirse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
