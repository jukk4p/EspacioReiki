import Link from "next/link";
import { TransparentImage } from "@/components/ui/TransparentImage";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-background py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="md:col-span-1 space-y-6 flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-14 h-14 overflow-hidden shrink-0 flex items-center justify-center -translate-y-1.5">
               <TransparentImage 
                  src="/images/logo.png" 
                  alt="Espacio Reiki Logo" 
                  className="w-full h-full object-contain"
               />
            </div>
            <span className="font-heading text-2xl font-semibold tracking-wide text-primary">
              Espacio Reiki
            </span>
          </Link>
          <p className="text-sm text-background/80 leading-relaxed max-w-xs md:max-w-none">
            Un santuario de luz y energía para reconectar con tu esencia, sanar desde el interior y elevar tu vibración a través del Reiki.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-medium mb-4 text-primary">Enlaces</h3>
          <ul className="space-y-3">
            <li><Link href="/terapias" className="text-sm text-background/80 hover:text-primary transition-colors">Terapias de Sanación</Link></li>
            <li><Link href="/talleres" className="text-sm text-background/80 hover:text-primary transition-colors">Talleres y Cursos</Link></li>
            <li><Link href="/sobre-mi" className="text-sm text-background/80 hover:text-primary transition-colors">Sobre Carmen Rocío</Link></li>
            <li><Link href="/contacto" className="text-sm text-background/80 hover:text-primary transition-colors">Contacto y Reservas</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-heading text-xl font-medium mb-4 text-primary text-center">Contacto</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start gap-3 text-sm text-background/80">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>hola@espacioreiki.es</span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3 text-sm text-background/80">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Avenida de España, 41,<br/>41701 Dos Hermanas, Sevilla</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xl font-medium mb-4 text-primary">Síguenos</h3>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-background hover:bg-primary hover:text-surface-dark transition-all hover:scale-110">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center text-background hover:bg-primary hover:text-surface-dark transition-all hover:scale-110">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-xs text-background/60">
          © {new Date().getFullYear()} Espacio Reiki con Carmen Rocío. <br className="md:hidden" /> Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center gap-6">
          <Link href="/legal" className="text-xs text-background/60 hover:text-primary transition-colors">Aviso Legal</Link>
          <Link href="/privacidad" className="text-xs text-background/60 hover:text-primary transition-colors">Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
