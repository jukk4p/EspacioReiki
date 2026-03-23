"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Espacio Reiki Atmosphere"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      {/* Decorative background element */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
        >
          Reiki y Sanación en Dos Hermanas, Sevilla
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-text-main leading-[1.1] mb-6"
        >
          Reconecta con <br className="hidden md:block"/>
          <span className="text-secondary italic">tu paz interior</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed"
        >
          Un santuario dedicado a la armonización de tus chakras y el crecimiento espiritual a través del Reiki. Encuentra el equilibrio que necesitas para vivir con plenitud.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link href="/contacto" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Reserva tu sesión
            </Button>
          </Link>
          <Link href="/terapias" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full">
              Descubre las terapias
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
