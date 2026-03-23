"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutSnippet() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 relative aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden bg-primary/10 border border-border pb-10 shadow-xl"
        >
          <Image
            src="/images/carmen.png"
            alt="Carmen Rocío - Reiki Master"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
        </motion.div>
        
        <div className="w-full lg:w-7/12 flex flex-col items-start text-left pl-0 lg:pl-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-widest uppercase text-xs mb-6"
          >
            Sobre mí
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-text-main mb-8 leading-[1.1]"
          >
            Hola, soy <span className="text-secondary italic">Carmen Rocío</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg leading-relaxed mb-6"
          >
            Maestra de Reiki Usui Tibetano y terapeuta holística con más de 10 años de experiencia acompañando a almas en su proceso de despertar interno y sanación.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-lg leading-relaxed mb-10"
          >
            Mi propósito es ofrecerte un refugio donde puedas soltar las cargas que no te pertenecen, reconectar con tu esencia más pura y recordar que <span className="text-text-main font-medium">tienes el poder de tu propia sanación.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/sobre-mi">
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5">
                Conoce mi historia
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
