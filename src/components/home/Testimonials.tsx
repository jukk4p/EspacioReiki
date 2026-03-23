"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura G.",
    role: "Sesión de Reiki Usui",
    content: "Llegué a Espacio Reiki con mucha ansiedad y estrés acumulado. La sesión con Carmen Rocío fue un antes y un después. Salí sintiéndome ligera, en paz y con una claridad mental asombrosa.",
  },
  {
    name: "Miguel A.",
    role: "Taller Nivel 1",
    content: "Hacer el nivel 1 de Reiki aquí ha sido una de las mejores decisiones de mi vida. El espacio es pura luz y la manera de enseñar de Carmen Rocío es cercana, amorosa y muy profunda.",
  },
  {
    name: "Elena M.",
    role: "Armonización de Chakras",
    content: "Un santuario en medio de la ciudad. Desde que entras notas la alta vibración. Las sesiones regulares me están ayudando enormemente a gestionar mis emociones y mi paz espiritual.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top hidden md:block" />

      <div className="max-w-7xl relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-medium text-text-main mb-4"
          >
            Voces de <span className="text-primary italic">Luz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg relative z-10"
          >
            Experiencias reales de almas que han pasado por nuestro santuario.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-border/10 shadow-sm relative transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-default"
            >
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-text-muted mb-8 italic leading-relaxed text-[15px]">
                "{testimonial.content}"
              </p>
              <div className="mt-auto">
                <p className="font-medium text-text-main">{testimonial.name}</p>
                <p className="text-sm text-text-muted/70">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
