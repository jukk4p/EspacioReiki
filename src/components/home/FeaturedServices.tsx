"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Reiki Usui Tradicional",
    description: "Equilibra tus centros energéticos y libera el estrés acumulado con imposición de manos.",
    price: "Desde 50€",
    color: "bg-primary/20",
    href: "/terapias",
  },
  {
    title: "Armonización de Chakras",
    description: "Enfocado en desbloquear puntos específicos para devolver la fluidez a tu energía vital.",
    price: "Desde 45€",
    color: "bg-secondary/20",
    href: "/terapias",
  },
  {
    title: "1er Nivel: El Despertar",
    description: "Iníciate en el arte milenario del Reiki para sanarte a ti mismo y a tus seres queridos.",
    price: "150€ (Finde)",
    color: "bg-accent/20",
    href: "/talleres",
  },
];

export function FeaturedServices() {
  return (
    <section className="py-24 bg-surface-dark text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-medium text-primary mb-6"
            >
              Servicios y Formación
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-background/80 text-lg leading-relaxed"
            >
              Explora nuestras terapias individuales de sanación o da el paso para convertirte en canalizador de luz con nuestros talleres intensivos.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link href="/terapias">
              <Button variant="outline" className="text-background border-background/20 hover:bg-background/10">
                Ver todo el catálogo
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group bg-background/5 border border-background/10 rounded-2xl p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:bg-background/10"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} mb-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}></div>
              <h3 className="font-heading text-2xl font-medium text-background mb-4">{service.title}</h3>
              <p className="text-background/70 mb-8 flex-1 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-medium text-primary">{service.price}</span>
                <Link href={service.href} className="text-sm font-medium border-b border-primary text-primary hover:text-white hover:border-white transition-colors pb-1">
                  Descubrir &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
