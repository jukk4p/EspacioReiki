"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaFinal() {
  return (
    <section className="py-24 bg-surface-dark text-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl relative z-10 mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight text-white"
        >
          Es el momento de priorizar <br className="hidden md:block"/>
          <span className="text-primary italic">tu paz interior y espiritual</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-background/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          No esperes a estar agotado para empezar a cuidarte. Ven a conocernos y descubre lo que el Reiki puede hacer por tu bienestar emocional y vital.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/contacto">
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-lg bg-primary text-text-main hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20">
              Reserva tu cita hoy
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
