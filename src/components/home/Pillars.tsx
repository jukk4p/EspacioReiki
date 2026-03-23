"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Leaf, Heart } from "lucide-react";

export function Pillars() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-background border-y border-text-muted/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl md:text-5xl font-medium text-text-main mb-16"
        >
          El camino hacia <span className="text-secondary italic">tu bienestar</span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-background group-hover:scale-110">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-medium text-text-main mb-3">Energía Vital</h3>
            <p className="text-text-muted text-center leading-relaxed max-w-sm">
              Canalizamos energía curativa para liberar bloqueos físicos y emocionales, restaurando tu flujo natural de vida.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-secondary group-hover:text-background group-hover:scale-110">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-medium text-text-main mb-3">Armonización</h3>
            <p className="text-text-muted text-center leading-relaxed max-w-sm">
              Alineamos tus chakras para devolverte la serenidad mental y la claridad ante situaciones de alto estrés o ansiedad.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:scale-110">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-medium text-text-main mb-3">Acompañamiento</h3>
            <p className="text-text-muted text-center leading-relaxed max-w-sm">
              Creamos un espacio seguro, humano, sin juicios y lleno de amor donde podrás sanar a tu propio ritmo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
