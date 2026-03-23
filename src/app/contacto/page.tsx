import { Metadata } from "next";
import { ContactoForm } from "@/components/contacto/ContactoForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto y Reservas",
  description: "Ponte en contacto con Espacio Reiki para reservar tu sesión de sanación energética o informarte sobre nuestros próximos talleres.",
};

export default function ContactoPage() {
  return (
    <div className="w-full relative bg-background pt-32 pb-24 flex-1">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-primary/5 -skew-y-2 origin-top-left z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4 inline-block">
            Hablemos
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-text-main mb-6">
            Ponte en <span className="text-primary italic">contacto</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            ¿Tienes alguna duda sobre qué terapia es mejor para ti? ¿Quieres reservar tu plaza para el próximo taller? Escríbeme y estaré encantada de guiarte.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-medium text-text-main mb-8">Información</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-main mb-1.5">Dónde estamos</h3>
                    <p className="text-text-muted text-sm leading-relaxed">Avenida de España, 41<br/>41701 Dos Hermanas, Sevilla</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-main mb-1.5">Email</h3>
                    <p className="text-text-muted text-sm leading-relaxed">hola@espacioreiki.es<br/>carmenrocio@espacioreiki.es</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-main mb-1.5">Horario de atención</h3>
                    <p className="text-text-muted text-sm leading-relaxed">Lunes a Viernes: 10:00 - 14:00 y 16:00 - 20:00<br/>Sábados (Talleres): 10:00 - 19:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-surface-dark rounded-3xl text-background relative overflow-hidden shadow-xl shadow-surface-dark/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              <h3 className="font-heading text-2xl font-medium mb-3 relative z-10 text-white">¿Preguntas Frecuentes?</h3>
              <p className="text-background/80 text-sm leading-relaxed mb-6 relative z-10">
                La mayoría de las dudas sobre qué llevar a la primera sesión o cómo prepararse para un taller están respondidas en nuestra sección de ayuda.
              </p>
              <a href="#" className="inline-block text-primary hover:text-white transition-colors text-sm font-medium border-b border-primary hover:border-white pb-0.5 relative z-10">
                Leer Preguntas Frecuentes
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <ContactoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
